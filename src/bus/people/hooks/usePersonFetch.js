import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { peopleActions } from "../actions";

export const usePersonFetch = (id) => {
  const { person, isFetching, error } = useSelector((state) => state.people);
  const { data } = useSelector((state) => state.people);
  const currentPerson = data[id-1];

  console.log('current', currentPerson);

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentPerson) {
      dispatch(peopleActions.fillPerson(currentPerson));
    } else {
      dispatch(peopleActions.fetchAsyncPerson(id));
    }
  }, [dispatch, currentPerson, id]);

  return {
    person,
    isFetching,
    error
  }
};