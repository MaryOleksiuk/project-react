import React from 'react';
import './styles.scss';
import { Article } from '../Article';

export const News = (props) => {
  const { source } = props;

  const articles = source.map((obj, index) => (
    <Article
      key={ index }
      title={ obj.title }
      description={ obj.description }
      published={ obj.published }
      likes={ obj.likes }
      comments={ obj.comments }
      image={ obj.image }
      tags={ obj.tags }
    />
  ));
  return (
    <section className='news'>
      { articles }
    </section>
  )
};
