#!/usr/bin/env bash
echo Enter project name:

read projname

echo Project name is: $projname

# Install Vite and basic structure
pnpm create vite@latest $projname --- --template react-ts

# Go into new project folder
cd $projname

# Setup tailwind
pnpm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

echo '/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}' > tailwind.config.js

echo "@tailwind base; 
@tailwind components; 
@tailwind utilities;" > src/index.css

# Prettier sorting for tailwind classes
pnpm install -D prettier prettier-plugin-tailwindcss

echo '{
  "plugins": ["prettier-plugin-tailwindcss"]
}' > .prettierrc


# Cleanup boilerplate
rm public/vite.svg src/assets/react.svg

mkdir src/components src/models

echo "" > src/App.css

echo 'import "./App.css";

function App() {
  return <>Hello world!</>;
}

export default App;' > src/App.tsx


# Replace readme
echo $projname > README.md