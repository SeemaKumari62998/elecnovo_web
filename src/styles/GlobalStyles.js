import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
 

 /* Grey */
 &, &.light-mode{
 --color-grey-0: #fff;
 --color-grey-50: #f9fafb;
 --color-grey-100: #f3f4f6;
 --color-grey-200: #e5e7eb;
 --color-grey-300: #d1d5db;
 --color-grey-400: #9ca3af;
 --color-grey-500: #6b7280;
 --color-grey-600: #4b5563;
 --color-grey-700: #374151;
 --color-grey-800: #1f2937;
 --color-grey-900: #111827;

 --color-green-0: #f0fff4;
  --color-green-50: #dcffe4;
  --color-green-100: #bef5cb;
  --color-green-200: #85e89d;
  --color-green-300: #34d399;
  --color-green-400: #10b981;
  --color-green-500: #059669;
  --color-green-600: #047857;
  --color-green-700: #065f46;
  --color-green-800: #064e3b;
  --color-green-900: #053e32;

  --color-yellow-0: #fffdf0;
--color-yellow-50: #fff6cc;
--color-yellow-100: #ffe699;
--color-yellow-200: #ffd966;
--color-yellow-300: #ffcc00;
--color-yellow-400: #ffb300;
--color-yellow-500: #ffa500;
--color-yellow-600: #e69500;
--color-yellow-700: #cc8500;
--color-yellow-800: #b37400;
--color-yellow-900: #996300;

--color-cream-0: #fffaf0;
--color-cream-50: #fff3e0;
--color-cream-100: #ffe6bf;
--color-cream-200: #ffcc8c;
--color-cream-300: #ffb366;
--color-cream-400: #ff9f40;
--color-cream-500: #ff9933;
--color-cream-600: #e68a31;
--color-cream-700: #cc7a2e;
--color-cream-800: #b3702c;
--color-cream-900: #996327;

 --color-blue-100: #e0f2fe;
 --color-blue-700: #0369a1;
 --color-green-100: #dcfce7;
 --color-green-700: #15803d;
 --color-yellow-100: #fef9c3;
 --color-yellow-700: #a16207;
 --color-silver-100: #e5e7eb;
 --color-silver-700: #374151;
 --color-indigo-100: #e0e7ff;
 --color-indigo-700: #4338ca;

 --color-red-100: #fee2e2;
 --color-red-700: #b91c1c;
 --color-red-800: #991b1b;

 --backdrop-color: rgba(255, 255, 255, 0.1);

 --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
 --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
 --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --image-grayscale: 0;
 --image-opacity: 100%;
}

&.dark-mode{
--color-grey-0:
 #18212f;
--color-grey-50: #111827;
--color-grey-100: #1f2937;
--color-grey-200: #374151;
--color-grey-300: #4b5563;
--color-grey-400: #6b7280;
--color-grey-500: #9ca3af;
--color-grey-600: #d1d5db;
--color-grey-700: #e5e7eb;
--color-grey-800: #f3f4f6;
--color-grey-900: #f9fafb;

--color-blue-100: #075985;
--color-blue-700: #e0f2fe;

--color-green-100: #166534;
--color-green-700: #dcfce7;
--color-yellow-100: #854d0e;
--color-yellow-700: #fef9c3;
--color-silver-100: #374151;
--color-silver-700: #f3f4f6;
--color-indigo-100: #3730a3;
--color-indigo-700: #e0e7ff;

--color-red-100: #fee2e2;
--color-red-700: #b91c1c;
--color-red-800: #991b1b;

--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;
}

/* Indigo */
--color-brand-50: #eef2ff;
 --color-brand-100: #e0e7ff;
 --color-brand-200: #c7d2fe;
 --color-brand-500: #6366f1;
 --color-brand-600: #4f46e5;
 --color-brand-700: #4338ca;
 --color-brand-800: #3730a3;
 --color-brand-900: #312e81;
 --border-radius-tiny: 3px;
 --border-radius-sm: 5px;
 --border-radius-md: 7px;
 --border-radius-lg: 9px;


}

*,
*::before,
*::after {
 box-sizing: border-box;
 padding: 0;
 margin: 0;

 /* Creating animations for dark mode */
 transition: background-color 0.3s, border 0.3s;
}

html {
 font-size: 62.5%;
}

body {
 font-family: "Poppins", sans-serif;
 color: var(--color-grey-700);

 transition: color 0.3s, background-color 0.3s;
 min-height: 100vh;
 line-height: 1.5;
 font-size: 1.6rem;
}

input,
button,
textarea,
select {
 font: inherit;
 color: inherit;
}

button {
 cursor: pointer;
}

*:disabled {
 cursor: not-allowed;
}

select:disabled,
input:disabled {
 background-color: var(--color-grey-200);
 color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
 outline: 2px solid var(--color-brand-600);
 outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
 line-height: 0;
}

a {
 color: inherit;
 text-decoration: none;
}

ul {
 list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
 overflow-wrap: break-word;
 hyphens: auto;
}

img {
 max-width: 100%;

 /* For dark mode */
 filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}



`;
export default GlobalStyles;
