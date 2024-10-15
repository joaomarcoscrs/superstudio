import { json } from '@codemirror/lang-json';
import { highlightSelectionMatches } from '@codemirror/search';
import { EditorView } from '@codemirror/view';
import ReactCodeMirror from '@uiw/react-codemirror';
import { useMantineColorScheme } from '@mantine/core';
import { image } from './extensions';
import { roboDark, roboLight } from './themes';

export interface JsonInputProps {
  value: object;
  onChange: (value: object) => void;
  editable?: boolean;
}

const JsonInput: React.FC<JsonInputProps> = ({ value, onChange, editable = false }) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <ReactCodeMirror
      className="flex-grow h-full w-full overflow-y-auto"
      value={JSON.stringify(value, null, 2)}
      onChange={(value) => onChange(JSON.parse(value))}
      extensions={[
        json(),
        EditorView.lineWrapping,
        highlightSelectionMatches({ highlightWordAroundCursor: true, minSelectionLength: 1 }),
        image(),
      ]}
      theme={colorScheme === 'dark' ? roboDark : roboLight}
      editable={editable}
      basicSetup={{
        lineNumbers: true,
        foldGutter: true,
        highlightActiveLine: true,
        highlightSelectionMatches: false,
      }}
    />
  );
};

export default JsonInput;
