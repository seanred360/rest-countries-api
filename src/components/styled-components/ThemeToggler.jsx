import React from "react";
import { func, string } from "prop-types";
import { IoMoonOutline } from "react-icons/io5";
// import styled from "styled-components";

// const Button = styled.button`
//   //mobile
//   @include font-size(12);
//   @include line-height(16);
//   font-weight: 600;
//   border: none;
//   background: none;

//   //desktop
//   @include respond-above(lg) {
//     @include font-size(16);
//     @include line-height(22);
//     font-weight: 600;
//   }
// `;

const ThemeToggler = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="theme-toggler foreground-color hover-color flex flex-jc-c flex-ai-c"
    >
      <IoMoonOutline className="io-moon-outline" />
      Dark Mode
    </button>
  );
};
ThemeToggler.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default ThemeToggler;
