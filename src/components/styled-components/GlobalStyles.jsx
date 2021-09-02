import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }

  .foreground-color {
    background: ${({ theme }) => theme.foregroundColor};
  }

  .theme-toggler {
    color: ${({ theme }) => theme.text};
  }

  .dropdown {
    .dropdown-toggle {
      background: ${({ theme }) => theme.foregroundColor};
      color: ${({ theme }) => theme.text};
    }

    .dropdown-menu {
      background: ${({ theme }) => theme.foregroundColor};

      .dropdown-item {
        background: ${({ theme }) => theme.foregroundColor};
        color: ${({ theme }) => theme.text};

        &:hover {
          background: ${({ theme }) => theme.backgroundColor};
        }
      }
    }
  }

  .search {
    background: none;

    .search-btn {
      background: ${({ theme }) => theme.foregroundColor};
      color: ${({ theme }) => theme.searchBarText};
    }

    &.active .input {
      background: ${({ theme }) => theme.foregroundColor};
      color: ${({ theme }) => theme.searchBarText};

      &::placeholder {
        color: ${({ theme }) => theme.searchBarText};
      }
    }
  }
  `;
