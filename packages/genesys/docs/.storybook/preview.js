import './main.css';
import { addParameters } from '@storybook/react';
import Theme from './Theme';

addParameters({
  docs: {
    theme: Theme,
  },
  previewTabs: {
    docs: {
      hidden: false,
    },
    canvas: {
      hidden: true,
    },
  },
});
