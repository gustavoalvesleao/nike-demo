import * as React from "react";
import { screen } from "@testing-library/react";

import { buildSearchQuery, setup } from "test/test-utils";

import InputSearch from "./index";

test("submitting the query input with a click calls onSubmit with the typed query", async () => {
  const handleSubmit = jest.fn();
  const { user } = setup(<InputSearch onSearchSubmit={handleSubmit} />);

  const { query } = buildSearchQuery();

  await user.type(screen.getByRole("textbox", { name: /buscar/i }), query);
  await user.click(screen.getByRole("button", { name: /buscar/i }));
  expect(handleSubmit).toHaveBeenCalledWith(query);
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});

test("submitting the query input with a Enter key calls onSubmit with the typed query", async () => {
  const handleSubmit = jest.fn();
  const { user } = setup(<InputSearch onSearchSubmit={handleSubmit} />);

  const { query } = buildSearchQuery();

  await user.type(screen.getByRole("textbox", { name: /buscar/i }), query);
  await user.type(screen.getByRole("textbox", { name: /buscar/i }), "{enter}");
  expect(handleSubmit).toHaveBeenCalledWith(query);
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});

test("a loading state renders a loading icon", async () => {
  const handleSubmit = jest.fn();
  setup(<InputSearch onSearchSubmit={handleSubmit} isLoading={true} />);
  expect(screen.queryByLabelText(/loading/i)).toBeInTheDocument();
});

test("an error state renders an error icon", async () => {
  const handleSubmit = jest.fn();
  setup(<InputSearch onSearchSubmit={handleSubmit} isError={true} />);
  expect(screen.queryByLabelText(/error/i)).toBeInTheDocument();
});
