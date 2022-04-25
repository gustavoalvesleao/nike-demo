import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { faker } from "@faker-js/faker";
import { build, perBuild } from "@jackfranklin/test-data-bot";

import { base } from "theme/index";

function AllTheProviders({ children }: { children: React.ReactElement }) {
  return <ThemeProvider theme={{ ...base }}>{children}</ThemeProvider>;
}

function setup(jsx: React.ReactElement) {
  return {
    user: userEvent.setup(),
    ...render(jsx, { wrapper: AllTheProviders }),
  };
}

const buildSearchQuery = build("Search", {
  fields: {
    query: perBuild(() => faker.random.word()),
  },
});

export { setup, buildSearchQuery };
