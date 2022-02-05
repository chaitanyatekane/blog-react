import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [ispending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Could Not Fetch Data For That Resource");
          }
          return res.json();
        })
        .then((data) => {
          // note: this data and useState data are different
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 200); // don't use this in real world projects, here i have just used to just show loading message
  }, [url]);

  return { data, ispending, error }; // here we can also return in form of array
};

export default useFetch;
