import React from 'react';
import './styles/landingpage.css';
import { Link } from 'react-router-dom';

interface Content {
  title: string;
  body: string;
  url?: string;
  imageName?: string;
  externalUrl?: boolean;
  extraStyling?: {
    width: string;
    height: string;
  };
}

interface Props {
  content: Array<Content>;
  sectionTitle: string;
}

const CardPageSection: React.FunctionComponent<Props> = props => {
  const { content, sectionTitle } = props;

  return (
    <React.Fragment>
      <div className='card-section'>
        <h2 style={{ padding: '1em 0em' }}>{sectionTitle}</h2>
        <div className='card-container'>
          {content.map(card => {
            return (
              <div key={card.title} className='card'>
                {card.imageName === undefined ? null : (
                  <img
                    style={{ color: '#fff' }}
                    src={require(`../../images/${card.imageName}`)}
                  />
                )}
                <h3>{card.title}</h3>
                {card.url === undefined ? (
                  <p>{card.body}</p>
                ) : card.externalUrl === true ? (
                  <a href={card.url} target='_blank'>
                    {card.body}
                  </a>
                ) : (
                  <Link to={card.url}>{card.body}</Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CardPageSection;
