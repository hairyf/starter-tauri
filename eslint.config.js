import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  react: true,
  ignores: [
    'dist/**',
    'node_modules/**',
    'tauri/**',
  ],
  rules: {
    'react/no-array-index-key': 'off',
  },
})
