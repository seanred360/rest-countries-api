import React from "react";
import { func, string } from "prop-types";
import { IoMoonOutline } from "react-icons/io5";
//import styled from "styled-components";

// const Button = styled.button`
//   background: ${({ theme }) => theme.background};
//   border: 2px solid ${({ theme }) => theme.toggleBorder};
//   color: ${({ theme }) => theme.text};
//   border-radius: 30px;
//   cursor: pointer;
//   font-size:0.8rem;
//   padding: 0.6rem;
//   }
// `;

const ThemeToggler = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="theme-toggler flex flex-jc-c flex-ai-c"
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
