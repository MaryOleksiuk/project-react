import React from 'react';
import { Title } from '../../components/title';
import { usePeopleFetch } from "./hooks/usePeopleFetch";
import { Loader } from '../../Assets/Loader';
import { NavLink } from 'react-router-dom';

export const People = () => {
  const { data, isFetching, error } = usePeopleFetch();

  const errorMessage = error && (
    <p>404 - Not found!</p>
  );

  const list = isFetching || data.map(({name}, index) => {
    return (
      <li key={index}>
        <NavLink to={`/people/${index + 1}`}>
          <strong>Name:</strong> {name}</NavLink>
      </li>
    );
  });

  return(
    <>
    <Title>People</Title>
      { isFetching && <Loader/> }
      { errorMessage }
      { list }
  </>
  )
};