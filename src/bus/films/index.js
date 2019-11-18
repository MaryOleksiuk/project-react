import React from 'react';
import { Title } from '../../components/title';
import { useFilmsFetch } from './hooks/useFilmsFetch';
import { NavLink } from 'react-router-dom';
import { Loader } from '../../Assets/Loader';
import styles from './styles.module.scss';

export const Films = () => {
  const { data, isFetching, error } = useFilmsFetch();

  const errorMessage = error && (
    <p>404 - Not found!</p>
  );

  const list = isFetching || data.map(({ title, opening_crawl, director, release_date }, index) => {
    return (
      <li key={{index}}>
        <NavLink to={`/films/${index + 1}`}>
         { title }
        </NavLink>
        <p className={styles.release}><strong>Release date: {release_date}</strong></p>
        <p>{opening_crawl}</p>
      </li>
    )
  });

  return (
    <>
      <Title>List of films</Title>
      { isFetching && <Loader/> }
      { errorMessage }
      { list }
    </>
  )
};