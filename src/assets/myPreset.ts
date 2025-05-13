import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

export const MyBrandPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#fff9db',
      100: '#fff2b3',
      200: '#ffe97d',
      300: '#ffe044',
      400: '#fdd91d',
      500: '#face06',
      600: '#e0b702',
      700: '#b79500',
      800: '#8f7400',
      900: '#725d00'
    },
    secondary: {
      50: '#e7e9f6',
      100: '#c2c7e6',
      200: '#9ca5d5',
      300: '#7582c4',
      400: '#5161b4',
      500: '#2b3f8c',
      600: '#233677',
      700: '#1b2d61',
      800: '#14234b',
      900: '#0d1a36'
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
      50:  '#fff5e9',
      100: '#ffe3c0',
      200: '#ffcb8f',
      300: '#ffb25c',
      400: '#ffa03e',
      500: '#f88d27',
      600: '#d6761f',
      700: '#b55f18',
      800: '#944911',
      900: '#73330a',
    },
    oratorioPrimary: {
      50:  '#fdeaf0',
      100: '#fbcfdc',
      200: '#f69db8',
      300: '#f06895',
      400: '#e73875',
      500: '#d60b52',
      600: '#b10945',
      700: '#8b0738',
      800: '#66052B',
      900: '#41031e'
    },
    oratorioSecondary:{
      50:  '#eaf7fc',
      100: '#d0effb',
      200: '#a6def7',
      300: '#7dcef2',
      400: '#55bdea',
      500: '#009FE3',
      600: '#008fcc',
      700: '#007bb2',
      800: '#006699',
      900: '#004d73'
    },
    colorScheme: {
      light: {
        surface: '#FFFFFF',
        surfaceBorder: '#e4e4e4',
        textColor: '#ffffff',
        primary: {
          color: '#FACE06',
          inverseColor: '#47191f',
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
          inverseColor: '#47191f',
          hoverColor: '#db7e22',
          activeColor: '#bd6f1d'
        },
        highlightVariant: {
          color: '#D60B52',
          inverseColor: '#ffffff',
          hoverColor: '#b10945',
          activeColor: '#900f14'
        }
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
        highlightVariant: {
          color: '#D60B52',
          inverseColor: '#ffffff',
          hoverColor: '#b10945',
          activeColor: '#900f14'
        }
      }
    }
  }
});

export default MyBrandPreset;
