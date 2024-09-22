import {createTheme, fallbackVar} from '@vanilla-extract/css';

export const [layoutClass, layout] = createTheme({
  sideNavWidth: fallbackVar('var(--tinyWidgets-sideNavWidth)', '20rem'),
  topNavHeight: fallbackVar('var(--tinyWidgets-topNavHeight)', '4rem'),
});
