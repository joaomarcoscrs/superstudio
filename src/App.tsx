import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import config from '../examples/workflow-widget/data.json';
import Renderer from './components/Renderer/Renderer';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Renderer config={config} />
    </MantineProvider>
  );
}
