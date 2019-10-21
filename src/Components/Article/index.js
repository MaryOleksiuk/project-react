import React from 'react';
import './styles.scss';
import { Tag } from '../../Assets/Tag';
import { CommentsCounter } from '../../Assets/CommentsCounter';
import { LikesCounter } from '../../Assets/LikesCounter';
import { Share } from '../../Assets/Share';

export const Article = (props) => {
  const date = new Date(props.published).toLocaleDateString();

  const tags = props.tags.map((tag, index) => (
    <Tag key={ index } source={ tag } />
  ));

  return (
    <section className='article'>
      <div className='article__image'>
        <img src={ props.image }></img>
        <div className='article__tags'>
          { tags }
        </div>
      </div>
      <div className='article__content'>
        <h3 className='article__title'>{ props.title }</h3>
        <p className='article__description'>{ props.description }</p>
      </div>
      <div className='article__footer'>
        <span>{ date }</span>

        <div>
          <CommentsCounter counts={ props.comments } />
          <LikesCounter counts={ props.likes } />
          <Share />
        </div>
      </div>
    </section>
  )
};
