import React from 'react';
import { useParams } from 'react-router-dom';
import { Title } from '../../components/title';
import { usePersonFetch } from './hooks/usePersonFetch';
import { Loader } from '../../Assets/Loader';

export const Person = () => {
  const { id } = useParams();
  const { person, isFetching, error } = usePersonFetch(id);

  const errorMessage = error.status === 404 && (
    <p>404 - Not found!</p>
  );

  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld
  } = person;

  const personInfo = isFetching || (
    <section>
      <li>Name: { name }</li>
      <li>Height: { height }</li>
      <li>Mass: { mass }</li>
      <li>Hair color: { hair_color }</li>
      <li>Skin color: { skin_color }</li>
      <li>Eye color: { eye_color }</li>
      <li>Birth year: { birth_year }</li>
      <li>Gender: { gender }</li>
      <li>Homeworld: { homeworld }</li>
    </section>
  );

  return(
    <>
      <Title>Person component</Title>
      { isFetching && <Loader/> }
      { errorMessage }
      { personInfo }
    </>
  )
};