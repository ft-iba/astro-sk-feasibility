import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import { execSync } from 'child_process';

import path from 'node:path';

const commitHash =
  execSync('git rev-parse --short HEAD').toString().trim() || 'commitHash';

const dropOptions =
  process.env.NODE_ENV === 'development' ? [] : ['console', 'debugger'];

// https://astro.build/config
const { PUBLIC_BASE = '', PUBLIC_DOMAIN } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  '',
);

export default defineConfig({
  site: PUBLIC_DOMAIN,
  base: PUBLIC_BASE,
  outDir: `./dist${PUBLIC_BASE}/`,
  trailingSlash: 'always',

  vite: {
    define: {
      'import.meta.env.COMMIT_HASH': JSON.stringify(commitHash),
    },
    esbuild: {
      drop: dropOptions,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            $base: '${PUBLIC_BASE}';
            $commitHash: '${commitHash}';
            @use './src/styles/variables' as *;
          `,
        },
      },
    },
    resolve: {
      alias: {
        '@assets': path.resolve('./src/assets'),
      },
    },
  },
});
