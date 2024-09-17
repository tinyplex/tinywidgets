import {createTheme, fallbackVar, style} from '@vanilla-extract/css';

export const [dimensionsClass, dimensions] = createTheme({
  logo: fallbackVar('var(--tinyWidgets-logo)', '2rem'),
  avatar: fallbackVar('var(--tinyWidgets-avatar)', '2rem'),
  icon: fallbackVar('var(--tinyWidgets-icon)', '1rem'),
  padding: fallbackVar('var(--tinyWidgets-padding)', '1rem'),
  radius: fallbackVar('var(--tinyWidgets-radius)', '0.5rem'),
});

export const iconSize = style({
  height: dimensions.icon,
  width: dimensions.icon,
});
