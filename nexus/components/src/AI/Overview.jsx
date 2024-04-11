const Wrapper = styled.div`
  --section-gap: 20px;
  --text-hero: 500 56px/1 "FK Grotesk", "Mona Sans", sans-serif;
  gap: var(--section-gap);
  display: flex;
  flex-direction: column;
  max-width: 960px;
`;

const Text = styled.p`
  font: var(--${(p) => p.$size ?? "text-base"});
  font-weight: ${(p) => p.$fontWeight} !important;
  color: var(--${(p) => p.$color ?? "sand12"});
  margin: 0;
  letter-spacing: ${(p) => p.$letterSpacing};

  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: ${(p) => p.$overflowLines ?? "2"};
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  word-break: break-word;

  @media (max-width: 900px) {
    font: var(--${(p) => p.$mobileSize ?? p.$size ?? "text-base"});
  }

  ${(p) =>
    p.$loading &&
    `
      border-radius: 2px;
      background: linear-gradient(to right, var(--sand10) 33%, var(--sand9) 66%, var(--sand10) 99%);
      animation: waveAnimation 5s linear infinite;
      min-width: 25%;
      min-height: 10px;
    `}

  @keyframes waveAnimation {
    0% {
      background-position: 0px 0;
    }
    100% {
      background-position: 100em 0;
    }
  }
`;

const Flex = styled.div`
  display: flex;
  gap: ${(p) => p.$gap};
  align-items: ${(p) => p.$alignItems};
  justify-content: ${(p) => p.$justifyContent};
  flex-direction: ${(p) => p.$direction ?? "row"};
  flex-wrap: ${(p) => p.$wrap ?? "nowrap"};

  ${(p) =>
    p.$mobileStack &&
    `
    @media (max-width: 900px) {
      flex-direction: column;
    }
  `}

  @media (max-width: 900px) {
    gap: ${(p) => p.$mobileGap ?? p.$gap};
    align-items: ${(p) => p.$mobileAlignItems ?? p.$alignItems};
  }
`;

const Grid = styled.div`
  display: grid;
  gap: ${(p) => p.$gap};
  grid-template-columns: ${(p) => p.$columns};
  align-items: ${(p) => p.$alignItems};
  row-gap: ${(p) => p.$rowGap};

  @media (max-width: 900px) {
    grid-template-columns: ${(p) => p.$mobileColumns ?? "1fr"};
    gap: ${(p) => p.$mobileGap ?? p.$gap};
    row-gap: ${(p) => p.$mobileRowGap ?? p.$rowGap};
  }
`;

const Section = styled.div`
  position: relative;

  @media (max-width: 900px) {
    padding: 0 14px;
  }
`;

const Container = styled.div`
  display: flex;
  max-width: 1224px;
  margin: 0 auto;
  gap: ${(p) => p.$gap ?? "var(--section-gap)"};
  flex-direction: column;
  align-items: ${(p) => (p.$center ? "center" : undefined)};
  justify-content: ${(p) => (p.$center ? "center" : undefined)};
  text-align: ${(p) => (p.$center ? "center" : undefined)};
`;

const Pattern = styled.div`
  display: flex;
  width: 100%;
  background: ${(p) => p.$background};
  border-radius: ${(p) => p.$borderRadius ?? "24px"};
  box-shadow: ${(p) => p.$shadow};
  border: ${(p) => p.$border};
`;

const PatternContent = styled.div`
  padding: ${(p) => p.$padding};
  width: 100%;

  @media (max-width: 900px) {
    padding: ${(p) => p.$mobilePadding ?? p.$padding};
  }
`;

const ButtonMenuWrapper = styled.button`
  all: unset;

  display: flex;
  gap: ${(p) => p.$gap};
  align-items: ${(p) => p.$alignItems};
  padding: ${(p) => p.$padding};
  border: 1px solid transparent;
  border-radius: 6px;
  transition: all 200ms;
  pointer-events: ${(p) => p.$pointerEvents};

  @media (max-width: 900px) {
    padding: 0;
  }

  &:hover {
    cursor: pointer;
    text-decoration: none;

    @media (min-width: 901px) {
      background: ${(p) => !p.$noHover && "var(--violet3)"};
      border-color: ${(p) => !p.$noHover && "var(--violet6)"};
    }

    & p {
      color: ${(p) => !p.$noHover && "var(--violet12)"};
    }
  }

  &:focus-within {
    background: ${(p) => !p.$noHover && "var(--violet3)"};
    border-color: ${(p) => !p.$noHover && "var(--violet6)"};
    box-shadow: ${(p) => !p.$noHover && "0 0 0 4px var(--violet4)"};

    & p {
      color: ${(p) => !p.$noHover && "var(--violet12)"};
    }
  }
`;

const ButtonLinkWrapper = styled("Link")`
  all: unset;

  display: flex;
  gap: ${(p) => p.$gap};
  align-items: ${(p) => p.$alignItems};
  padding: ${(p) => p.$padding};
  border: 1px solid transparent;
  border-radius: 6px;
  transition: all 200ms;
  pointer-events: ${(p) => p.$pointerEvents};

  @media (max-width: 900px) {
    padding: 0;
  }

  &:hover {
    cursor: pointer;
    text-decoration: ${(p) => (!p.$noHover ? "none" : "underline")};

    @media (min-width: 901px) {
      background: ${(p) => !p.$noHover && "var(--violet3)"};
      border-color: ${(p) => !p.$noHover && "var(--violet6)"};
    }

    & p {
      color: ${(p) => !p.$noHover && "var(--violet12)"};
    }

    .trending-round-icon {
      filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.06))
        drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.06));
    }
  }

  &:focus-within {
    background: ${(p) => !p.$noHover && "var(--violet3)"};
    border-color: ${(p) => !p.$noHover && "var(--violet6)"};
    box-shadow: ${(p) => !p.$noHover && "0 0 0 4px var(--violet4)"};
    text-decoration: ${(p) => (!p.$noHover ? "none" : "underline")};

    & p {
      color: ${(p) => !p.$noHover && "var(--violet12)"};
    }

    .trending-round-icon {
      filter: drop-shadow(0px 4px 8px var(--violet6))
        drop-shadow(0px 0px 0px var(--violet6));
    }
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: ${(p) => p.$size};
  height: ${(p) => p.$size};
  background: ${(p) => p.$background};
  border-radius: ${(p) => p.$borderRadius};
  border: ${(p) => p.$border};
  padding: ${(p) => p.$padding};
  filter: ${(p) => p.$filter};
  transition: all 200ms;

  ${(p) =>
    p.$loading &&
    `
    background: linear-gradient(to right, var(--sand10) 33%, var(--sand9) 66%, var(--sand10) 99%);
    background-position: center;
    animation: waveAnimation 5s linear infinite;
  `}

  @keyframes waveAnimation {
    0% {
      background-position: 0px 0;
    }
    100% {
      background-position: 100em 0;
    }
  }

  ${ButtonLinkWrapper}:hover & {
    border-color: var(--violet6);

    & > i {
      color: var(--violet10);
    }
  }

  ${ButtonLinkWrapper}:focus-within & {
    border-color: var(--violet6);

    & > i {
      color: var(--violet10);
    }
  }
`;

const IconCover = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(p) => p.$url});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: inherit;
`;

const { href } = VM.require("${REPL_DEVHUB}/widget/core.lib.url");
if (!href) {
  return <p>Loading modules...</p>;
}
const { handleMenuClick } = props;

const TRENDING_APPS_LIMIT = 6;
const dummyData = {
  name: "",
  display_name: "",
  component: "",
  logo_url: "",
};
const prefillData = Array(TRENDING_APPS_LIMIT).fill(dummyData);
const namespace = "near";
const entityType = "agent";
const collection = "dataplatform_near_entities_entities";
const buildQueries = () => {
  return `
query ListQuery($offset: Int, $limit: Int) {
  ${collection}(
      where: {namespace: {_eq: "${namespace}"}, entity_type: {_eq: "${entityType}"}}
      order_by: [{ stars: desc }, { id: desc }], 
      offset: $offset, limit: $limit) {
      entity_type
      namespace
      id
      account_id
      name
      display_name
      logo_url
      attributes
      stars
      created_at
      updated_at
  }
  ${collection}_aggregate (
      where: {namespace: {_eq: "${namespace}"}, entity_type: {_eq: "${entityType}"}}
    ){
    aggregate {
      count
    }
  }
}
`;
};
const queryName = "ListQuery";
const loadItemsQueryApi = VM.require(
  "${REPL_ACCOUNT}/widget/Entities.QueryApi.Client",
)?.loadItems;
if (!loadItemsQueryApi) {
  return <p>Loading modules...</p>;
}

const [topRatingApps, setTopRatingApps] = useState(prefillData);
const [loading, setLoading] = useState(true);

const onLoad = (newItems, totalItems) => {
  const items = newItems ? newItems.slice(0, TRENDING_APPS_LIMIT) : [];
  setTopRatingApps(items);
  setLoading(false);
};

loadItemsQueryApi(buildQueries(), queryName, 0, collection, onLoad);

const buildAgentUrl = (agentComponent, accountId, name) =>
  href({
    widgetSrc: agentComponent,
    params: { src: `${accountId}/agent/${name}` },
  });

const Icon = ({ className, fontSize, ...forwardedProps }) => (
  <IconWrapper {...forwardedProps}>
    <i className={className} style={{ fontSize, flexShrink: 0 }} />
  </IconWrapper>
);

const RoundIcon = ({ url, ...forwardedProps }) => (
  <IconWrapper {...forwardedProps}>
    <IconCover $url={url} />
  </IconWrapper>
);

const ButtonLink = ({ href, value, target, icon, title, text }) => (
  <ButtonMenuWrapper
    onClick={() => handleMenuClick(value)}
    target={target}
    $gap="24px"
    $padding="24px"
  >
    <Icon
      className={icon}
      $size="40px"
      $background="var(--sand1)"
      $border="1px solid var(--sand6)"
      $borderRadius="4px"
      $fontSize="18px"
    />
    <Flex $direction="column" $gap="16px">
      <Flex $gap="8px" $alignItems="center">
        <Text $fontWeight="600" $letterSpacing="0.28px">
          {title}
        </Text>
        <Icon className="ph ph-caret-right" $fontSize="16px" />
      </Flex>
      <Text $size="text-s" $letterSpacing="0.28px">
        {text}
      </Text>
    </Flex>
  </ButtonMenuWrapper>
);

const Card = ({ title, text, children }) => (
  <Pattern
    $background="var(--violet1)"
    $borderRadius="24px"
    $border="1px solid var(--violet2)"
    $shadow="0px 0px 0px 1px rgba(0, 0, 0, 0.02), 0px 4px 8px 0px rgba(0, 0, 0, 0.06)"
  >
    <PatternContent $padding="24px">
      <Flex $direction="column" $gap="36px" $mobileGap="24px">
        <Flex $direction="column" $gap="24px">
          <Text $size="text-xl" $fontWeight="500">
            {title}
          </Text>
          <Text $color="sand11" $letterSpacing="0.32px">
            {text}
          </Text>
        </Flex>
        {children}
      </Flex>
    </PatternContent>
  </Pattern>
);

const TrendingApp = ({ href, url, name, loading }) => (
  <ButtonLinkWrapper
    href={href}
    target="_blank"
    $gap="12px"
    $alignItems="center"
    $noHover
    aria-disabled={loading}
    $pointerEvents={loading ? "none" : "auto"}
  >
    <RoundIcon
      url={url}
      $noHover
      $size="60px"
      $padding="5px"
      $borderRadius="50%"
      $background="var(--white)"
      $filter="drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.06)) drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.06))"
      $loading={loading}
    />
    <Text
      $size="text-s"
      $fontWeight="600"
      $overflowLines="2"
      $letterSpacing="0.28px"
      $loading={loading}
    >
      {name}
    </Text>
  </ButtonLinkWrapper>
);
return (
  <Wrapper>
    <Section>
      <Container>
        <Pattern
          $background="linear-gradient(264deg, #CFCCF5 0%, #A39CEC 99.35%)"
          $borderRadius="16px"
        >
          <PatternContent
            $padding="55px 24px 55px 48px"
            $mobilePadding="48px 20px"
          >
            <Grid $gap="24px" $columns="1fr 1fr">
              <Flex $direction="column" $gap="32px">
                <div style={{ width: "250px" }}>
                  <Widget
                    src="${REPL_ACCOUNT}/widget/HeaderText"
                    props={{ text: "NEAR AI", color: "#01080c" }}
                  />
                </div>
                <Text
                  $size="text-xl"
                  $mobileSize="text-l"
                  style={{ maxWidth: "385px" }}
                >
                  Take control - Use or contribute to Open Source AI.
                </Text>
              </Flex>
              <Flex $direction="column" $gap="16px" $mobileGap="48px">
                <ButtonLink
                  value="agents"
                  icon="ph-bold ph-binoculars"
                  title="Find an Agent"
                  text="Put AI Agents to work for you"
                />
                <ButtonLink
                  value="agents"
                  icon="ph-bold ph-git-fork"
                  title="Build an Agent"
                  text="Create an Agent or other community resources."
                />
              </Flex>
            </Grid>
          </PatternContent>
        </Pattern>
      </Container>
    </Section>

    <Section>
      <Container>
        <Grid $gap="24px" $mobileGap="20px" $columns="1fr 1fr">
          <Card
            title="Trending Agents"
            text={<>Explore agents built by the NEAR community.</>}
          >
            <Grid
              $gap="20px"
              $rowGap="24px"
              $columns="1fr 1fr"
              $mobileColumns="1fr 1fr"
            >
              {topRatingApps.map((app) => (
                <TrendingApp
                  key={app.name}
                  href={buildAgentUrl(
                    app.attributes.component,
                    app.account_id,
                    app.name,
                  )}
                  url={app.logo_url}
                  name={app.display_name}
                  loading={loading}
                />
              ))}
            </Grid>
          </Card>
          <Card
            title="Find Resources"
            text="From archived Datasets to full Model weights."
          >
            <Flex $direction="column" $gap="16px" $mobileGap="48px">
              <ButtonLink
                value="datasets"
                icon="ph-bold ph-file-text"
                title="Datasets"
                text="Stored in IPFS."
              />
              <ButtonLink
                value="models"
                icon="ph-bold ph-graph"
                title="Models"
                text="Model providers, and full Model weights."
              />
            </Flex>
          </Card>
        </Grid>
      </Container>
    </Section>
    <Section>
      <Card
        title="Contribute to the NEAR AI Nexus"
        text={<>This directory is all on-chain.</>}
      >
        <Grid $gap="20px" $columns="1fr 1fr">
          <TrendingApp
            href="https://github.com/near/ai-platform/tree/develop/nexus/components/src/Schema"
            url="https://near.org/_next/static/media/near-icon.2e682d59.svg"
            name="ai-platform"
            loading={false}
          />
          <TrendingApp
            href="https://github.com/near/near-discovery-components/tree/develop/src/Entities/Template"
            url="https://near.org/_next/static/media/near-icon.2e682d59.svg"
            name="entity-components"
            loading={false}
          />
        </Grid>
        <Text style={{ overflow: "visible" }}>
          <p>You can add or fork any of the existing resource types.</p>
          <p>
            If you need more, this UI is composed of React-on-Chain components
            as is the schema for each type of resource. You can add new fields
            to resources and add whole new types of resources.
          </p>
        </Text>
      </Card>
    </Section>
  </Wrapper>
);
