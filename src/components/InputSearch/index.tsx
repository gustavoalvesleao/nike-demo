import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled from "styled-components/macro";
import { CSSObject } from "styled-components";

import { Button, ErrorIcon, SearchIcon, Spinner } from "components/Lib";

import { SearchFormElements } from "./types";

import { Input } from "./styles";

interface Props {
  onSearchSubmit: (query: string) => void;
  isLoading?: boolean;
  isError?: boolean;
  placeholder?: string;
  cssProperties?: CSSObject;
  renderSearchButton?: boolean;
  ariaLabel?: string;
}

function InputSearch({
  onSearchSubmit,
  isLoading = false,
  isError = false,
  placeholder = "Buscar...",
  cssProperties,
  renderSearchButton = false,
  ariaLabel,
}: Props) {
  const handleSearchSubmit = (e: React.FormEvent<SearchFormElements>) => {
    e.preventDefault();
    const { search } = e.currentTarget.elements;
    onSearchSubmit(search.value);
  };

  return (
    <form
      onSubmit={handleSearchSubmit}
      css={{ display: "flex", alignItems: "center" }}
    >
      <label htmlFor="search" css={{ marginRight: "-35px" }}>
        <button
          aria-label={ariaLabel}
          type="submit"
          css={{
            border: "0",
            position: "relative",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          {isLoading ? (
            <Spinner />
          ) : isError ? (
            <ErrorIcon />
          ) : (
            <SearchIcon title={placeholder} />
          )}
        </button>
      </label>
      <Input
        aria-label={placeholder}
        placeholder={placeholder}
        id="search"
        css={{ width: "100%", paddingLeft: "44px", ...cssProperties }}
      />
      {renderSearchButton && (
        <Button
          aria-label={ariaLabel}
          type="submit"
          role="button"
          css={{ marginLeft: "24px" }}
        >
          Buscar
        </Button>
      )}
    </form>
  );
}

export default InputSearch;
