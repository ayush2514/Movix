import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

//Created a custom hook `useFetch` to fetch data from an API and
//handle the loading and error states.
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  //Whenever the url changes,the useEffect hook is used for perform API calls.
  //It also updates the state variables accordingly.

  useEffect(() => {
    setLoading("loading...");
    setData(null);
    setError(null);

    fetchDataFromApi(url)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError("Something went wrong!");
      });
  }, [url]);

  return { data, loading, error };

  // The useFetch hook returns an object containing data, loading, and error states.
  //These states can be accessed and used in the component where the hook is used.
};

export default useFetch;
