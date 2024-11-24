import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { fileURLToPath } from 'url';

export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: './src/main.ts',
      name: 'component-lib',
      fileName: 'component-lib',
      // formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        exports: "named",
      },
    },
  },
  plugins: [
    dts({
      outDir: 'dist',
      insertTypesEntry: true,
      // include: ['src/components/**/*.vue', 'src/main.ts'],
      // exclude: [],
      tsconfigPath: './tsconfig.app.json',
      // rollupTypes: true,
      cleanVueFileName: true,
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url))
    }
  },
});
