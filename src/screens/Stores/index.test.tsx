import * as React from "react";
import {
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { setupServer } from "msw/node";
import { rest } from "msw";

import { setup } from "test/test-utils";

import { geoLocationURL, handlers } from "./handlers";
import StoresScreen from "./index";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test("When a user enters a valid coordinate the results are displayed in the screen", async () => {
  const { user } = setup(<StoresScreen />);

  await user.type(
    screen.getByRole("textbox", {
      name: /busque por endereço ou cep\. ex\.: -14, -53/i,
    }),
    "-14, -53"
  );
  await user.click(screen.getByRole("button", { name: /search-store/i }));

  await waitForElementToBeRemoved(() => screen.queryByLabelText(/loading/i));
  await waitFor(() => {
    expect(
      screen.getByRole("heading", { name: /Loja 1/i })
    ).toBeInTheDocument();
  });

  expect(screen.getByRole("heading", { name: /Loja 1/i })).toBeInTheDocument();
});

test("When a user clicks in 'ver no mapa' the map is displayed", async () => {
  const { user } = setup(<StoresScreen />);

  await user.type(
    screen.getByRole("textbox", {
      name: /busque por endereço ou cep\. ex\.: -14, -53/i,
    }),
    "-14, -53"
  );
  await user.click(screen.getByRole("button", { name: /search-store/i }));

  await waitForElementToBeRemoved(() => screen.queryByLabelText(/loading/i));
  await waitFor(() => {
    expect(
      screen.getByRole("heading", { name: /Loja 1/i })
    ).toBeInTheDocument();
  });

  const [openMapButton] = screen.queryAllByText(/ver no mapa/i);
  expect(openMapButton).toBeInTheDocument();

  await user.click(openMapButton);
  expect(screen.getByRole("button", { name: /zoom in/i })).toBeInTheDocument();
});

test("When a user is seeing the map in clicks in the 'close button', the map is closed", async () => {
  const { user } = setup(<StoresScreen />);

  await user.type(
    screen.getByRole("textbox", {
      name: /busque por endereço ou cep\. ex\.: -14, -53/i,
    }),
    "-14, -53"
  );
  await user.click(screen.getByRole("button", { name: /search-store/i }));

  await waitForElementToBeRemoved(() => screen.queryByLabelText(/loading/i));
  await waitFor(() => {
    expect(
      screen.getByRole("heading", { name: /Loja 1/i })
    ).toBeInTheDocument();
  });

  const [openMapButton] = screen.queryAllByText(/ver no mapa/i);
  expect(openMapButton).toBeInTheDocument();

  await user.click(openMapButton);
  expect(screen.getByRole("button", { name: /zoom in/i })).toBeInTheDocument();

  await user.click(screen.getByRole("button", { name: /close-icon/i }));
  expect(
    screen.queryByRole("button", { name: /zoom in/i })
  ).not.toBeInTheDocument();
});

test("When a user enters a invalid coordinate an error is displayed in the screen", async () => {
  const { user } = setup(<StoresScreen />);

  await user.type(
    screen.getByRole("textbox", {
      name: /busque por endereço ou cep\. ex\.: -14, -53/i,
    }),
    "1"
  );
  await user.click(screen.getByRole("button", { name: /search-store/i }));

  expect(
    screen.getByText(/Por favor insira uma coordenada válida/i)
  ).toBeInTheDocument();
});

test("When an error occurs in the server a error message is displayed", async () => {
  const { user } = setup(<StoresScreen />);

  const testErrorMessage = "Oh no, something bad happened";

  server.use(
    rest.get(geoLocationURL, async (_req, res, ctx) =>
      res(ctx.status(500), ctx.json({ message: testErrorMessage }))
    )
  );

  await user.type(
    screen.getByRole("textbox", {
      name: /busque por endereço ou cep\. ex\.: -14, -53/i,
    }),
    "-15, -14"
  );
  await user.click(screen.getByRole("button", { name: /search-store/i }));
  await waitForElementToBeRemoved(() => screen.queryByLabelText(/loading/i));

  expect(screen.getByRole("alert")).toHaveTextContent(testErrorMessage);
});

test("In a desktop, When a user enters a valid coordinate the results and map are displayed in the screen", async () => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation(() => ({
      matches: false,
    })),
  });

  const { user } = setup(<StoresScreen />);

  await user.type(
    screen.getByRole("textbox", {
      name: /busque por endereço ou cep\. ex\.: -14, -53/i,
    }),
    "-14, -53"
  );

  const [, searchButton] = screen.queryAllByRole("button", {
    name: /search-store/i,
  });
  await user.click(searchButton);
  await waitForElementToBeRemoved(() => screen.queryByLabelText(/loading/i));
  await waitFor(() => {
    expect(
      screen.getByRole("heading", { name: /Loja 1/i })
    ).toBeInTheDocument();
  });

  expect(screen.getByRole("button", { name: /zoom in/i })).toBeInTheDocument();
});
