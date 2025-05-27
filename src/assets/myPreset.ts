import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';
import { config } from 'rxjs';

export const MyBrandPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#eaf7fc',
      100: '#d0effb',
      200: '#a6def7',
      300: '#7dcef2',
      400: '#55bdea',
      500: '#009fe3',
      600: '#008fcc',
      700: '#007bb2',
      800: '#006699',
      900: '#004d73'
    },
    secondary: {
      50: '#fdeaf0',
      100: '#fbcfdc',
      200: '#f69db8',
      300: '#f06895',
      400: '#e73875',
      500: '#d60b52',
      600: '#b10945',
      700: '#8b0738',
      800: '#66052b',
      900: '#41031e'
    },
    accent: {
      50: '#fce6e7',
      100: '#f8bfc0',
      200: '#f39798',
      300: '#ef6f70',
      400: '#eb494b',
      500: '#d0181f',
      600: '#b3151a',
      700: '#971214',
      800: '#7a0e0f',
      900: '#5f0a0b'
    },
    highlight: {
      50:  '#fdf4e5',
      100: '#fbdeb2',
      200: '#f9c87f',
      300: '#f7b24c',
      400: '#f49c19',
      500: '#f39200',
      600: '#d07d00',
      700: '#ad6800',
      800: '#8a5300',
      900: '#683e00',
    },
    colorScheme: {
      light: {
        surface: '#FFFFFF',
        surfaceBorder: '#e4e4e4',
        textColor: '#000000',
        primary: {
          color: '#009fe3',
          inverseColor: '#ffffff',
          hoverColor: '#008fcc',
          activeColor: '#007bb2'
        },
        secondary: {
          color: '#d60b52',
          inverseColor: '#ffffff',
          hoverColor: '#b10945',
          activeColor: '#8b0738'
        },
        accent: {
          color: '#d0181f',
          inverseColor: '#ffffff',
          hoverColor: '#b0161c',
          activeColor: '#900f14'
        },
        highlight: {
          color: '#f39200',
          inverseColor: '#ffffff',
          hoverColor: '#d07d00',
          activeColor: '#ad6800'
        },
      },
      dark: {
        surface: '#20232a',
        surfaceBorder: '#3a3a3a',
        textColor: '#EAEAEA',
        primary: {
          color: '#FACE06',
          inverseColor: '#1A1A1A',
          hoverColor: '#f0c800',
          activeColor: '#e6b800'
        },
        secondary: {
          color: '#2B3F8C',
          inverseColor: '#ffffff',
          hoverColor: '#3f5ab5',
          activeColor: '#1a2f7c'
        },
        accent: {
          color: '#D0181F',
          inverseColor: '#ffffff',
          hoverColor: '#b0161c',
          activeColor: '#900f14'
        },
        highlight: {
          color: '#F88D27',
          inverseColor: '#ffffff',
          hoverColor: '#db7e22',
          activeColor: '#bd6f1d'
        },
      }
    }
  }
});

export default MyBrandPreset;
