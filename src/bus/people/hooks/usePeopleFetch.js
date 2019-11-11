import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { peopleActions } from "../actions";

export const usePeopleFetch = () => {
  const { data, isFetching, error } = useSelector((state) => state.people);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(peopleActions.fetchAsync());
  }, [dispatch]);

  return {
    data,
    isFetching,
    error
  }
};