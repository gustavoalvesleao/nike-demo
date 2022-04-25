import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled from "styled-components/macro";
import { CSSObject } from "styled-components";

import { ErrorIcon, SearchIcon, Spinner } from "components/Lib";

import { SearchFormElements } from "./types";

import { Input } from "./styles";

interface Props {
  onSearchSubmit: (query: string) => void;
  isLoading?: boolean;
  isError?: boolean;
  placeholder?: string;
  cssProperties?: CSSObject;
}

function InputSearch({
  onSearchSubmit,
  isLoading = false,
  isError = false,
  placeholder = "Buscar...",
  cssProperties,
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
        placeholder={placeholder}
        id="search"
        css={{ width: "100%", paddingLeft: "44px", ...cssProperties }}
      />
    </form>
  );
}

export default InputSearch;
