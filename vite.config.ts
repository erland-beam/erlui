import { defineConfig } from 'vite';

import SolidJS from 'vite-plugin-solid';

import UnoCSS from '@unocss/vite';
import presetWind, { Theme } from '@unocss/preset-wind';
import presetIcons from '@unocss/preset-icons';
import transformerDirectives from '@unocss/transformer-directives';

export default defineConfig({
  base: '/erlui', // TODO: Set this only on PROD mode. Also check src/App.tsx
  build: {
    target: 'esnext',
  },
  plugins: [
    SolidJS(),
    UnoCSS({
      presets: [
        presetWind({ dark: 'media' }),
        presetIcons({
          extraProperties: {
            display: 'inline-block',
          },
        }),
      ],
      transformers: [transformerDirectives()],
      theme: {
        colors: {
          erlui: '#ff417c',
        },
      },
      extendTheme: (theme: Theme) => {
        if (!theme?.['fontFamily']) theme['fontFamily'] = {};

        const fonts = { sans: ['Rubik'], mono: ['Fira Code'] };
        for (const key of Object.keys(fonts) as (keyof typeof fonts)[]) {
          theme['fontFamily'][key] =
            fonts[key].map((f) => `${f},`) + theme['fontFamily'][key];
        }
      },
    }),
  ],
});
