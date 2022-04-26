import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled from "styled-components/macro";

import { Button, MinusIcon, PlusIcon } from "components/Lib";

import {
  AccordionItemContainer,
  AccordionContentContainer,
  AccordionContainer,
} from "./styles";

interface Content {
  id: string;
  title: React.ReactElement;
  content: React.ReactElement;
}

interface Props {
  contents: Array<Content>;
}

function AccordionItem({ item }: { item: Content }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const contentEl = React.useRef<HTMLDivElement>(null);

  const { title, content } = item;

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <AccordionItemContainer>
      <Button onClick={handleToggle}>
        {title}
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </Button>
      <AccordionContentContainer
        role="contentinfo"
        ref={contentEl}
        aria-hidden={!isOpen}
        css={
          isOpen ? { height: contentEl.current?.scrollHeight } : { height: "0" }
        }
      >
        {content}
      </AccordionContentContainer>
    </AccordionItemContainer>
  );
}

function Accordion({ contents }: Props) {
  return (
    <AccordionContainer>
      {contents.map((content) => (
        <AccordionItem key={content.id} item={content} />
      ))}
    </AccordionContainer>
  );
}

export default Accordion;
