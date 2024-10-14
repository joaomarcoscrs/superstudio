import { generateColors } from '@mantine/colors-generator';
import { createTheme } from '@mantine/core';

export const theme = createTheme({
  colors: {
    purboflow: generateColors('#6706CE'),
    aquavision: generateColors('#00FFCE'),
  },
  primaryColor: 'purboflow',
});
