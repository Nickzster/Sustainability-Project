import React from "react";
import "./styles/landingpage.css";

interface Content {
  title: string;
  body: string;
  url?: string;
}

interface Props {
  content: Array<Content>;
  sectionTitle: string;
}

const CardPageSection: React.FunctionComponent<Props> = props => {
  const { content, sectionTitle } = props;
  return (
    <React.Fragment>
      <div className="card-container">
        <h2 style={{ marginBottom: "2em" }}>{sectionTitle}</h2>
        {content.map(card => {
          return (
            <div key={card.title} className="card">
              <h3>{card.title}</h3>
              {card.url === undefined ? (
                <p>{card.body}</p>
              ) : (
                <a href={card.url}>{card.body}</a>
              )}
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default CardPageSection;
