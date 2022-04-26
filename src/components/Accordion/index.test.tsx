import * as React from "react";
import { screen } from "@testing-library/react";
import faker from "@faker-js/faker";

import { setup } from "test/test-utils";

import { TextHeader, TextParagraph } from "components/Lib";

import Accordion from "./index";

const title = faker.random.word();
const content = faker.random.words();
const queryName = new RegExp(title, "i");

const accordionContent = [
  {
    id: "test",
    title: <TextHeader>{title}</TextHeader>,
    content: <TextParagraph>{content}</TextParagraph>,
  },
];

test("Opening an accordion display it's content", async () => {
  const { user } = setup(<Accordion contents={accordionContent} />);
  await user.click(screen.getByRole("button", { name: queryName }));
  expect(screen.getByText(content));
});

test("A closed accordion doesn't display it's content", async () => {
  setup(<Accordion contents={accordionContent} />);
  expect(screen.getByRole("contentinfo", { hidden: true })).toHaveAttribute(
    "aria-hidden",
    "true"
  );
});
