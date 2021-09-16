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
    color: ${({ theme }) => theme.text};
  }

  .hover-color{
    &:hover {
      box-shadow: 0px 0px 0.4375rem 0.125rem ${({ theme }) => theme.hover};
    }
  }

  .dropdown {
    .dropdown-menu {
      .dropdown-item {
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

    &:focus-within {
      background: ${({ theme }) => theme.foregroundColor};
    }
  }

  .pagination-btns-container {
    .btn {
      &.active {
        background: ${({ theme }) => theme.paginationBtnActive};
        color: ${({ theme }) => theme.paginationActiveText};
      }
    }
  }
}
  `;
