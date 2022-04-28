import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { faker } from "@faker-js/faker";
import { build, perBuild } from "@jackfranklin/test-data-bot";

import { base } from "theme/index";
import { Store } from "utils/calculateDistance";

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

const buildStore = build<Store>("Store", {
  fields: {
    name: perBuild(() => faker.company.companyName()),
    number: perBuild(() => faker.datatype.number()),
    latitude: perBuild(() => faker.address.latitude()),
    longitude: perBuild(() => faker.address.longitude()),
    adress: perBuild(() => faker.address.streetAddress()),
  },
});

export { setup, buildSearchQuery, buildStore };
