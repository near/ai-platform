const { href } = VM.require("devhub.near/widget/core.lib.url");
if (!href) {
    return <></>;
}

const { entityType, title } = props;

const { schema } = VM.require(`${REPL_AGIGUILD}/widget/Schema.Generic`);
if (!schema ) {
    return <></>;
}

const Row = styled.div`
    vertical-align: middle;
    padding-bottom: 1em;
    img.logo {
        width: 30%;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        object-fit: cover;
    }
`;
    const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

const convertSnakeToPascal = (item) => {
    const newItems = {};
    Object.keys(item).forEach((key) => {
        const pascalKey = key.replace(/(_\w)/g, (m) => m[1].toUpperCase());
        newItems[pascalKey] = item[key];
    });
    return newItems;
};
const convertPascalToSnake = (item) => {
    const newItems = {};
    Object.keys(item).forEach((key) => {
        const snakeKey = key.replace(/([A-Z])/g, (m) => "_" + m.toLowerCase());
        newItems[snakeKey] = item[key];
    });
    return newItems;
}

const renderItem = (item, editFunction) => {
    const { accountId, name, displayName, logoUrl } = item;
    const itemComponent = item.component ? item.component : `${REPL_AGIGUILD}/widget/Agent.AgentChat`;
    const imageUrl =
        logoUrl ?? "https://ipfs.near.social/ipfs/bafkreibysr2mkwhb4j36h2t7mqwhynqdy4vzjfygfkfg65kuspd2bawauu";
    const actionLink = href({
        widgetSrc: itemComponent,
        params: { src: `${accountId}/agent/${name}` },
    });
    const detailsLink = href({
        widgetSrc: `${REPL_AGIGUILD}/widget/Agent.AgentDetails`,
        params: { src: `${accountId}/agent/${name}` },
    });

    const actionUrl = `https://${REPL_NEAR_URL}/${itemComponent}?src=${accountId}/agent/${item.name}`;
    const editType = accountId === context.accountId ? "edit" : "fork";
    const editLabel = editType === "edit" ? "Edit" : "Fork";
    const editIcon = editType === "edit" ? "ph-bold ph-pencil-simple" : "ph-bold ph-git-fork";

    return (
        <Row className="row">
            <div className="col-2">
                <img className="logo" src={imageUrl} alt="logo"/>
            </div>
            <div className="col-4">
                {displayName}
            </div>
            <div className="col-2">
                {accountId}
            </div>
            <div className="col-2">
                <Actions>
                    <Widget
                        src="near/widget/DIG.Tooltip"
                        props={{
                            content: editLabel,
                            trigger: (
                                <Widget
                                    src="near/widget/DIG.Button"
                                    props={{
                                        onClick: () => editFunction(item),
                                        iconLeft: editIcon,
                                        variant: "secondary",
                                        fill: "ghost",
                                        size: "small",
                                    }}
                                />
                            ),
                        }}
                    />
                    <Widget
                        src="near/widget/CopyUrlButton"
                        props={{
                            url: actionUrl,
                        }}
                    />
                    <Widget
                        src="near/widget/ShareButton"
                        props={{
                            postType: "Placeholder",
                            url: actionUrl,
                        }}
                    />
                    <Widget
                        src="near/widget/DIG.Tooltip"
                        props={{
                            content: "View Details",
                            trigger: (
                                <Link to={detailsLink} style={{ all: "unset" }}>
                                    <Widget
                                        src="near/widget/DIG.Button"
                                        props={{
                                            iconLeft: "ph-bold ph-eye",
                                            variant: "secondary",
                                            fill: "ghost",
                                            size: "small",
                                        }}
                                    />
                                </Link>
                            ),
                        }}
                    />
                    <Widget
                        src="near/widget/DIG.Tooltip"
                        props={{
                            content: "Use " + entityType,
                            trigger: (
                                <Link to={actionLink} style={{ all: "unset" }}>
                                    <Widget
                                        src="near/widget/DIG.Button"
                                        props={{
                                            iconLeft: "ph-bold ph-chat-teardrop-text",
                                            variant: "secondary",
                                            fill: "ghost",
                                            size: "small",
                                        }}
                                    />
                                </Link>
                            ),
                        }}
                    />
                </Actions>                
            </div>
        </Row>
    );
};

const createWidget = "near/widget/Entities.Template.EntityCreate";

const loadItems = (queries, queryName, offset, collection, onLoad) => {
    console.log('loadItems');
    const placeholderData = { data: [
        {name: 'test1', displayName: 'Alpha Alpaca Aardvark Alumnus', accountId: 'agiguild.near', logoUrl: 'https://ipfs.near.social/ipfs/bafkreibysr2mkwhb4j36h2t7mqwhynqdy4vzjfygfkfg65kuspd2bawauu'},
        {name: 'test2', displayName: 'Beta Barracuda Baleen Boilermaker', accountId: 'agiguild.near', logoUrl: 'https://ipfs.near.social/ipfs/bafkreibysr2mkwhb4j36h2t7mqwhynqdy4vzjfygfkfg65kuspd2bawauu'},
        {name: 'test3', displayName: 'Gamma Guppy Gorilla Grapher', accountId: 'agiguild.near', logoUrl: 'https://ipfs.near.social/ipfs/bafkreibysr2mkwhb4j36h2t7mqwhynqdy4vzjfygfkfg65kuspd2bawauu'},
    ]};
    return Promise.resolve().then(() => onLoad(placeholderData.data, placeholderData.data.length));
};
const buildQueries = (params) => null;
const queryName = "unused";

return (
    <div>
        <h4>{title}</h4>
        <Widget
            src="near/widget/Entities.Template.EntityList"
            props={{ table: true, entityType, loadItems, buildQueries, queryName, collection: 'data', renderItem, createWidget, schema }}
        />
    </div>
);
