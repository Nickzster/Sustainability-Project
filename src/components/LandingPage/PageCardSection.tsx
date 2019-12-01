import React from 'react';
import './styles/landingpage.css';

interface Content {
  title: string;
  body: string;
  url?: string;
  imageName?: string;
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
                ) : (
                  <a href={card.url}>{card.body}</a>
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
