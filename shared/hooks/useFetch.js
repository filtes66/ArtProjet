import { useState, useEffect } from 'react';
import fetchData from './fetchData';

function useFetch(url) {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetchData(url, setData);
  }, []);

  return data;
}

export default useFetch;
