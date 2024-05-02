const Navigation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--sand4);

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Title = styled.h2`
  font: var(--text-2xl);
  font-weight: 600;
  margin: 0;
  margin-right: auto;
  white-space: nowrap;

  @media (max-width: 600px) {
    font: var(--text-xl);
    font-weight: 600;
  }
`;

const MenuButton = styled.button`
  all: unset;
  padding: 0.5rem 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: ${(p) => (p.$primary ? "var(--violet7)" : "var(--sand3)")};
  color: ${(p) => (p.$primary ? "#fff" : "var(--sand12)")};
  font-weight: 600;
  border-radius: 4px;
  box-shadow: 0 0 0 0px var(--violet4);
  transition: all 200ms;

  i {
    transition: all 200ms;
  }

  i:first-child {
    color: ${(p) => (p.$primary ? "var(--violet11)" : "var(--violet7)")};
  }
  i:last-child {
    color: ${(p) => (p.$primary ? "var(--violet10)" : "var(--sand9)")};
  }

  &:hover {
    i:first-child {
      color: ${(p) => (p.$primary ? "var(--violet12)" : "var(--violet8)")};
    }
    i:last-child {
      color: ${(p) => (p.$primary ? "var(--violet11)" : "var(--sand12)")};
    }
  }

  &:focus {
    background: var(--sand2);
    box-shadow: 0 0 0 4px var(--violet4);
  }

  @media (max-width: 500px) {
    font: var(--text-s);
    font-weight: 600;
  }
`;

const PopoverContent = styled("Popover.Content")`
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.15);
  z-index: 10000;
  padding: 1rem;
  max-width: 90vw;
  width: 350px;
  outline: none;

  ul {
    list-style: none;
    display: block;
    margin: 0;
    padding: 0;
  }

  li {
    display: block;
  }

  a {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    padding: 0.5rem;
    font: var(--text-base);
    color: var(--sand12);
    outline: none;
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  i {
    color: var(--violet8);
  }
`;

const menuItems = props.items || [];
const activeItem = menuItems.find((item) => item.value === props.activeTab);

return (
  <Navigation>
    <Title>{props.title || ""}</Title>

    <Actions>
      <Popover.Root>
        <Popover.Trigger asChild>
          <MenuButton>
            <i className="ph-bold ph-tag" />
            <span>Tags</span>
          </MenuButton>
        </Popover.Trigger>

        <PopoverContent sideOffset={5}>
          {props.additionalContent}
          <Popover.Arrow style={{ fill: "#fff" }} />
        </PopoverContent>
      </Popover.Root>

      <Widget
        src="${REPL_ACCOUNT}/widget/DIG.DropdownMenu"
        props={{
          trigger: (
            <MenuButton $primary>
              <i className={`${activeItem.icon} ph-bold`} />
              {activeItem.name}
              <i className="ph-bold ph-list" />
            </MenuButton>
          ),
          items: menuItems.map((item) => ({
            name: item.name,
            iconLeft: `${item.icon} ph-bold `,
            onSelect: () => item.onSelect(item.value),
          })),
        }}
      />
    </Actions>
  </Navigation>
);
