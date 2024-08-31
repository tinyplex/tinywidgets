import {
  createTheme,
  createThemeContract,
  globalStyle,
} from '@vanilla-extract/css';

export const padding = '1rem';

export const squareButton = {
  width: '1rem',
  minWidth: '1rem',
  height: '1rem',
  minHeight: '1rem',
  userSelect: 'none',
  cursor: 'pointer',
} as const;

export const dimensions = {
  sideNavWidth: '20rem',
  topNavHeight: '3rem',
  articleWidth: '60rem',
};

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  transition: 'background-color 0.2s',
});

globalStyle('html', {
  textRendering: 'optimizeLegibility',
  fontWeight: 400,
  overflow: 'hidden',
});

export const theme = createThemeContract({
  background: null,
  foreground: null,
  card: null,
  'card-foreground': null,
  popover: null,
  'popover-foreground': null,
  primary: null,
  'primary-foreground': null,
  secondary: null,
  'secondary-foreground': null,
  muted: null,
  'muted-foreground': null,
  accent: null,
  'accent-foreground': null,
  destructive: null,
  'destructive-foreground': null,
  border: null,
  input: null,
  ring: null,
  'chart-1': null,
  'chart-2': null,
  'chart-3': null,
  'chart-4': null,
  'chart-5': null,
});

export const themeLight = createTheme(theme, {
  background: 'hsl(0 0% 100%)',
  foreground: 'hsl(224 71.4% 4.1%)',
  card: 'hsl(0 0% 100%)',
  'card-foreground': 'hsl(224 71.4% 4.1%)',
  popover: 'hsl(0 0% 100%)',
  'popover-foreground': 'hsl(224 71.4% 4.1%)',
  primary: 'hsl(262.1 83.3% 57.8%)',
  'primary-foreground': 'hsl(210 20% 98%)',
  secondary: 'hsl(220 14.3% 95.9%)',
  'secondary-foreground': 'hsl(220.9 39.3% 11%)',
  muted: 'hsl(220 14.3% 95.9%)',
  'muted-foreground': 'hsl(220 8.9% 46.1%)',
  accent: 'hsl(220 14.3% 95.9%)',
  'accent-foreground': 'hsl(220.9 39.3% 11%)',
  destructive: 'hsl(0 84.2% 60.2%)',
  'destructive-foreground': 'hsl(210 20% 98%)',
  border: 'hsl(220 13% 91%)',
  input: 'hsl(220 13% 91%)',
  ring: 'hsl(262.1 83.3% 57.8%)',
  'chart-1': 'hsl(12 76% 61%)',
  'chart-2': 'hsl(173 58% 39%)',
  'chart-3': 'hsl(197 37% 24%)',
  'chart-4': 'hsl(43 74% 66%)',
  'chart-5': 'hsl(27 87% 67%)',
});

export const themeDark = createTheme(theme, {
  background: 'hsl(224 71.4% 4.1%)',
  foreground: 'hsl(210 20% 98%)',
  card: 'hsl(224 71.4% 4.1%)',
  'card-foreground': 'hsl(210 20% 98%)',
  popover: 'hsl(224 71.4% 4.1%)',
  'popover-foreground': 'hsl(210 20% 98%)',
  primary: 'hsl(263.4 70% 50.4%)',
  'primary-foreground': 'hsl(210 20% 98%)',
  secondary: 'hsl(215 27.9% 16.9%)',
  'secondary-foreground': 'hsl(210 20% 98%)',
  muted: 'hsl(215 27.9% 16.9%)',
  'muted-foreground': 'hsl(217.9 10.6% 64.9%)',
  accent: 'hsl(215 27.9% 16.9%)',
  'accent-foreground': 'hsl(210 20% 98%)',
  destructive: 'hsl(0 62.8% 30.6%)',
  'destructive-foreground': 'hsl(210 20% 98%)',
  border: 'hsl(215 27.9% 16.9%)',
  input: 'hsl(215 27.9% 16.9%)',
  ring: 'hsl(263.4 70% 50.4%)',
  'chart-1': 'hsl(220 70% 50%)',
  'chart-2': 'hsl(160 60% 45%)',
  'chart-3': 'hsl(30 80% 55%)',
  'chart-4': 'hsl(280 65% 60%)',
  'chart-5': 'hsl(340 75% 55%)',
});
