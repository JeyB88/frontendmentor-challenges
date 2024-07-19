/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "main-background-t1": "#3a4764",
        "main-background-t2": "#e6e6e6",
        "main-background-t3": "#160628",
        "toggle-background-t1": "#232c43",
        "screen-background-t1": "#182034",
        "screen-background-t2": "#ededed",
        "screen-background-t3": "#1d0934",
        "key-default-background-t1": "#eae3dc",
        "key-default-shadow-t1": "#b4a597",
        "key-command-background-t1": "#637097",
        "key-command-shadow-t1": "#404e72",
        "key-equal-background-t1": "#d03f2f",
        "key-equal-shadow-t1": "#93261a",
        "text-key-default-t1": "#444b5a",
        "text-default-t1": "#ffffff",
      },
    },
  },
  plugins: [],
};
