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

    &.active .input {
      background: ${({ theme }) => theme.foregroundColor};
      color: ${({ theme }) => theme.searchBarText};

      &::placeholder {
        color: ${({ theme }) => theme.searchBarText};
      }
    }
  }

  a.border-country-btn {
    display: inline-block;
    text-align: center;
    min-width: 96px;
    min-height: 26px;
    border: none;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
    border-radius: 2px;
    @include line-height(16);
    font-weight: 300;
    margin-bottom: 10px;

    &:not(:last-child) {
      margin-right: 10px;
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
