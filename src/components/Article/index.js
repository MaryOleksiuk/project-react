import React from 'react';
import './styles.scss';
import { Tag } from '../../Assets/Tag';
import { CommentsCounter } from '../../Assets/CommentsCounter';
import { LikesCounter } from '../../Assets/LikesCounter';
import { Share } from '../../Assets/Share';
import moment from 'moment';
import { useHistory, useLocation } from 'react-router-dom';

export const Article = (props) => {

  const tagsSplitted = props.tags.split(', ');

  const tags = tagsSplitted.map((tag, index) => (
    <Tag key={ index } source={ tag } />
  ));

  const history = useHistory();
  const location = useLocation();

  const openArticle = () => {
    history.push(`${location.pathname}/${props.objectId}`);
  };

  return (
    <section className='article' onClick={openArticle}>
      <div className='article__image'>
        <img src={ props.poster } alt='' />
        <div className='article__tags'>
          { tags }
        </div>
      </div>
      <div className='article__content'>
        <h3 className='article__title'>{ props.title }</h3>
        <p className='article__description'>{ props.description }</p>
      </div>
      <div className='article__footer'>
        <span>{ moment(props.date).format('DD.MM.YYYY') }</span>

        <div>
          <CommentsCounter counts={ props.comments } />
          <LikesCounter counts={ props.likes } />
          <Share />
        </div>
      </div>
    </section>
  )
};
