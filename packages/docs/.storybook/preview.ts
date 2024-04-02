import type { Preview } from "@storybook/react";
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      autodocs: true,
    },
  },
};

export default preview;
