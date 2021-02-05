# repro-vite-plugin-vue-i18n

```bash
pnpm i && npm run build
```

## Error Log

```
[vite]: Rollup failed to resolve import "@intlify/shared" from "node_modules/vue-i18n/dist/vue-i18n.runtime.esm-bundler.js".
This is most likely unintended because it can break your application at runtime.
If you do want to externalize this module explicitly add it to
`build.rollupOptions.external`
error during build:
Error: [vite]: Rollup failed to resolve import "@intlify/shared" from "node_modules/vue-i18n/dist/vue-i18n.runtime.esm-bundler.js".
This is most likely unintended because it can break your application at runtime.
If you do want to externalize this module explicitly add it to
`build.rollupOptions.external`
    at onRollupWarning (/Users/antfu/Github/repro-vite-plugin-vue-i18n-1/node_modules/.pnpm/vite@2.0.0-beta.64/node_modules/vite/dist/node/chunks/dep-18e0b415.js:41263:19)
    at Object.onwarn (/Users/antfu/Github/repro-vite-plugin-vue-i18n-1/node_modules/.pnpm/vite@2.0.0-beta.64/node_modules/vite/dist/node/chunks/dep-18e0b415.js:41113:17)
    at Object.onwarn (/Users/antfu/Github/repro-vite-plugin-vue-i18n-1/node_modules/.pnpm/rollup@2.38.4/node_modules/rollup/dist/shared/rollup.js:19576:20)
    at ModuleLoader.handleResolveId (/Users/antfu/Github/repro-vite-plugin-vue-i18n-1/node_modules/.pnpm/rollup@2.38.4/node_modules/rollup/dist/shared/rollup.js:18640:26)
    at /Users/antfu/Github/repro-vite-plugin-vue-i18n-1/node_modules/.pnpm/rollup@2.38.4/node_modules/rollup/dist/shared/rollup.js:18607:22
    at async Promise.all (index 0)
    at async ModuleLoader.fetchStaticDependencies (/Users/antfu/Github/repro-vite-plugin-vue-i18n-1/node_modules/.pnpm/rollup@2.38.4/node_modules/rollup/dist/shared/rollup.js:18605:34)
    at async Promise.all (index 0)
    at async ModuleLoader.fetchModule (/Users/antfu/Github/repro-vite-plugin-vue-i18n-1/node_modules/.pnpm/rollup@2.38.4/node_modules/rollup/dist/shared/rollup.js:18582:9)
    at async Promise.all (index 2)
 ERROR  Command failed with exit code 1.
```
