import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
	font-family: 'Work Sans';
	src: url('/fonts/WorkSans-Regular.ttf') format('truetype');
	font-weight: 400;
	font-style: normal;
	font-display: swap;
  }

  @font-face {
    font-family: 'Work Sans';
    src: url('/fonts/WorkSans-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Work Sans';
    src: url('/fonts/WorkSans-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: '437';
    src: url('/fonts/PerfectDOSVGA437Win.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* Box sizing rules */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core root defaults */
  html {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    //min-height: 100vh;
    text-rendering: optimizeSpeed;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  :root {
    --amber-01: hsl(41, 100%, 50%);
    --amber-02: hsl(41, 100%, 40%);
  }

  body {
    font-family: 'Work Sans', 'Inter', 'Open Sans', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    color: {({theme}) => theme.colors.black};
    position: relative;
    background: linear-gradient(to bottom right, hsl(260, 6%, 35%) 0%, hsl(260, 6%, 15%) 100%);
  }

  .sr-only {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  .hidden {
    display: none;
  }
`;
