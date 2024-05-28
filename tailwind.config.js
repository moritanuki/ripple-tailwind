/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,vue}','./node_modules/tw-elements/js/**/*.js'],
  theme: {
    extend: {},
  },
  plugins: [require('tw-elements/plugin.cjs')],
}

