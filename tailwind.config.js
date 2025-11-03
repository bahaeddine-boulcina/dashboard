import { heroui } from '@heroui/react';

export const content = [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
];
export const theme = {
  extend: {
    // Retain your custom colors, fonts, etc here
  },
};
export const darkMode = "class";
export const plugins = [heroui()];