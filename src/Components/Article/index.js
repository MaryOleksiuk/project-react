import React from 'react';
import './styles.scss';
import { Tag } from '../../Assets/Tag';
import { CommentsCounter } from '../../Assets/CommentsCounter';
import { LikesCounter } from '../../Assets/LikesCounter';
import { Share } from '../../Assets/Share';

export const Article = () => {
  return (
    <section className='article'>
      <div className='article__image'>
        <div className='article__tags'>
          <Tag />
          <Tag />
        </div>
      </div>
      <div className='article__content'>
        <h3 className='article__title'>What is Lorem Ipsum?</h3>
        <p className='article__description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
      </div>
      <div className='article__footer'>
        <span>15.07.2019</span>

        <div>
          <CommentsCounter />
          <LikesCounter />
          <Share />
        </div>
      </div>
    </section>
  )
};
