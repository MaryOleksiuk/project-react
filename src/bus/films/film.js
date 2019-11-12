import React from 'react';
import { Title } from '../../components/title';
import { useFilmFetch } from './hooks/useFilmFetch';
import { useParams } from 'react-router-dom';
import { Loader } from '../../Assets/Loader';

export const Film = () => {
  const { id } = useParams();
  const { film, isFetching, error } = useFilmFetch(id);

  const errorMessage = error.status === 404 && (
    <p>404 - Not found!</p>
  );

  const {
    title,
    opening_crawl,
    director,
    producer,
    release_date,
  } = film;

  const filmInfo = isFetching || (
    <section>
      <p>{opening_crawl}</p>
      <p>Director: {director}</p>
      <p>Producer: {producer}</p>
      <p>Release date: {release_date}</p>
    </section>
  );

  return (
    <>
      <Title>{title}</Title>
      { isFetching && <Loader/> }
      { errorMessage }
      { filmInfo }
    </>
  )
};