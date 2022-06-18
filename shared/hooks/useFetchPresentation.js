import { useState, useEffect } from 'react';
import fetchData from './fetchData';

function useFetchPresentation(url, initData, windowInitialData) {
  let [data, setData] = useState(initData);

  useEffect(() => {
    if (window.__INITIAL_DATA__) {
      console.log('windowdata');
      delete window.__INITIAL_DATA__;
    } else {
      fetchData(url, setData);
      console.log('usfetchpresentation fetchdata: ');
    }
  }, [url]);
  return data;
}

export default useFetchPresentation;
