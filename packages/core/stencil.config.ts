import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'dsfr-core',
  plugins: [sass()],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: 'global/assets', dest: '' },
      ],
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      copy: [
        { src: 'global/assets', dest: 'build' },
      ],
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    testPathIgnorePatterns: ["cypress/"]
  }
};
