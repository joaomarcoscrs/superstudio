import { tags as t } from '@lezer/highlight';
import { createTheme } from '@uiw/codemirror-themes';

export const roboLight = createTheme({
  theme: 'light',
  settings: {
    background: '#ffffff',
    backgroundImage: '',
    foreground: '#000000',
    caret: '#AEAFAD',
    selection: '#FF000080', // Red with 50% opacity
    selectionMatch: '#FF000080', // Red with 50% opacity
    gutterBackground: '#f3f4f6',
    gutterForeground: '#4b0496',
    gutterBorder: '#c7c7c7',
    gutterActiveForeground: '#8112f6',
    lineHighlight: '#f2e6fe',
  },
  styles: [
    { tag: t.comment, color: '#787b80' },
    { tag: t.name, color: '#6706ce' },
    { tag: t.definition(t.typeName), color: '#194a7b' },
    { tag: t.typeName, color: '#194a7b' },
    { tag: t.standard(t.typeName), color: '#194a7b' },
    { tag: t.tagName, color: '#4d049a' },
    { tag: t.variableName, color: '#8315f9' },
    { tag: t.propertyName, color: '#6706ce' },
    { tag: t.string, color: '#280c4b' },
    { tag: t.special(t.string), color: '#280d4b' },
    { tag: t.character, color: '#280d4b' },
    { tag: t.number, color: '#078332' },
    { tag: t.integer, color: '#058331' },
    { tag: t.float, color: '#058331' },
    { tag: t.bool, color: '#3051ab' },
    { tag: t.url, color: '#0c61cf' },
    { tag: t.null, color: '#9e9e9e' },
    { tag: t.bracket, color: '#787878' },
    { tag: t.brace, color: '#787878' },
  ],
});

export const roboDark = createTheme({
  theme: 'dark',
  settings: {
    background: '#1a202c', // Slightly lighter than Tailwind gray-900
    backgroundImage: '',
    foreground: '#e2e8f0', // Tailwind gray-200
    caret: '#8315F9', // purboflow-400
    selection: '#FF000080', // Red with 50% opacity
    selectionMatch: 'transparent',
    gutterBackground: '#1f2937', // Tailwind gray-800
    gutterForeground: '#A351FB', // purboflow-300
    gutterBorder: '#374151', // Tailwind gray-700
    gutterActiveForeground: '#C28DFC', // purboflow-200
    lineHighlight: '#4D049A26', // purboflow-700 with 15% opacity
  },
  styles: [
    { tag: t.comment, color: '#6b7280' }, // Tailwind gray-500
    { tag: t.name, color: '#C28DFC' }, // purboflow-200
    { tag: t.definition(t.typeName), color: '#93c5fd' }, // Tailwind blue-300
    { tag: t.typeName, color: '#93c5fd' }, // Tailwind blue-300
    { tag: t.standard(t.typeName), color: '#93c5fd' }, // Tailwind blue-300
    { tag: t.tagName, color: '#A351FB' }, // purboflow-300
    { tag: t.variableName, color: '#E2C8FE' }, // purboflow-100
    { tag: t.propertyName, color: '#C28DFC' }, // purboflow-300
    { tag: t.string, color: '#F2E6FE' }, // purboflow-50
    { tag: t.special(t.string), color: '#F2E6FE' }, // purboflow-50
    { tag: t.character, color: '#F2E6FE' }, // purboflow-50
    { tag: t.number, color: '#34d399' }, // Tailwind emerald-400
    { tag: t.integer, color: '#34d399' }, // Tailwind emerald-400
    { tag: t.float, color: '#34d399' }, // Tailwind emerald-400
    { tag: t.bool, color: '#60a5fa' }, // Tailwind blue-400
    { tag: t.url, color: '#38bdf8' }, // Tailwind sky-400
    { tag: t.null, color: '#9ca3af' }, // Tailwind gray-400
    { tag: t.bracket, color: '#9ca3af' }, // Tailwind gray-400
    { tag: t.brace, color: '#9ca3af' }, // Tailwind gray-400
  ],
});
