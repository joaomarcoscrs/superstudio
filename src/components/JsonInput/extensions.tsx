/* eslint-disable no-param-reassign */
import React from 'react';
import { syntaxTree } from '@codemirror/language';
import { StateEffect, StateField } from '@codemirror/state';
import { Decoration, DecorationSet, EditorView, WidgetType } from '@codemirror/view';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import Image from '../Image/Image';

interface ImageState {
  from: number;
  to: number;
  base64Image: string;
  alt: string;
  addComma: boolean;
}

class ImageWidget extends WidgetType {
  constructor(
    private readonly base64Image: string,
    private readonly alt: string,
    private readonly addComma: boolean
  ) {
    super();
  }

  eq(other: ImageWidget) {
    return this.base64Image === other.base64Image;
  }

  toDOM() {
    const element = document.createElement('span');
    element.style.display = 'inline-block';
    element.style.verticalAlign = 'top';
    element.style.margin = '3px 0';

    // Render the React component
    createRoot(element).render(
      <MantineProvider>
        <span className="flex overflow-hidden items-center">
          <Image
            src={`data:image/png;base64,${this.base64Image}`}
            alt={this.alt}
            className="h-20"
          />
          {this.addComma && ','}
        </span>
      </MantineProvider>
    );

    return element;
  }

  ignoreEvent() {
    return true;
  }
}

const addImageEffect = StateEffect.define<ImageState>();

const imageField = StateField.define<DecorationSet>({
  create() {
    return Decoration.none;
  },
  update(decorations, transaction) {
    let updatedDecorations = decorations;
    updatedDecorations = updatedDecorations.map(transaction.changes);
    for (const effect of transaction.effects) {
      if (effect.is(addImageEffect)) {
        const widget = Decoration.replace({
          widget: new ImageWidget(
            effect.value.base64Image,
            effect.value.alt,
            effect.value.addComma
          ),
          side: 1,
        });
        updatedDecorations = updatedDecorations.update({
          add: [widget.range(effect.value.from, effect.value.to)],
        });
      }
    }
    return updatedDecorations;
  },
  provide: (f) => EditorView.decorations.from(f),
});

function findBase64Images(view: EditorView): StateEffect<ImageState>[] {
  const effects: StateEffect<ImageState>[] = [];

  syntaxTree(view.state).iterate({
    enter: () => {},
    leave: ({ type, from, to }) => {
      const callExp: string = view.state.doc.sliceString(from, to);

      if (type.name === 'Object') {
        let addComma = false;
        let braceCount = 0;

        let o;
        try {
          o = JSON.parse(callExp);
        } catch (e) {
          return;
        }

        if (o.type === 'base64' && o.value) {
          let nextClosingBrace = to;
          const str = view.state.doc.toString();

          for (let i = to; i < str.length; i++) {
            if (str[i] === '{') {
              braceCount++;
            } else if (str[i] === '}') {
              braceCount--;
            }

            if (braceCount === 0) {
              nextClosingBrace = i;
              break;
            }
          }

          if (str[nextClosingBrace + 1] === ',') {
            to = nextClosingBrace + 2;
            addComma = true;
          } else if (str[nextClosingBrace] === ',') {
            to = nextClosingBrace + 1;
            addComma = true;
          } else {
            to = nextClosingBrace + 1;
          }

          effects.push(
            addImageEffect.of({
              from,
              to,
              base64Image: o.value,
              alt: 'Base 64 Image',
              addComma,
            })
          );
        }
      }
    },
  });

  return effects;
}

const imagePlugin = EditorView.updateListener.of((update) => {
  if (update.docChanged || update.viewportChanged) {
    const effects = findBase64Images(update.view);
    if (effects.length) {
      update.view.dispatch({ effects });
    }
  }
});

export const image = () => [imageField, imagePlugin];
