export const useLocalStorage = () => {
  const dataFromLocalStorage = !(localStorage.getItem('student') === null) ? JSON.parse(localStorage.getItem('student')) : false;

  const addToLocalStorage = (data) => {
    localStorage.setItem('student', JSON.stringify(data));
  };

  return {
    dataFromLocalStorage,
    addToLocalStorage
  }
};