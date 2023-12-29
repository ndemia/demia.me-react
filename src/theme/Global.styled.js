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
    src: url('/fonts/WorkSans-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: bold;
    font-display: swap;
  }

  @font-face {
    font-family: 'Bitter';
    src: url('/fonts/Bitter-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Bitter';
    src: url('/fonts/Bitter-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: bold;
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
    outline: none;
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
    min-height: 100vh;
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

  body {
    position: relative;
    font-size: ${({ theme }) => theme.fontSizes.base};
    line-height: ${({ theme }) => theme.lineHeight.base};
    letter-spacing: ${({ theme }) => theme.letterSpacing.base};
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.background};
    scrollbar-color: ${({ theme }) => theme.colors.beige01} ${({ theme }) => theme.colors.grey04};

    &::-webkit-scrollbar {
      width: .5rem;
    }

    &::-webkit-scrollbar,::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.grey04}
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.beige01};
    }
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

  a:visited {
    color: ${({ theme }) => theme.colors.beige01}
  }
`;
