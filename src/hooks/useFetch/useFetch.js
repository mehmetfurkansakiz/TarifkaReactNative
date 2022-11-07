import axios from 'axios';
import {useState, useEffect} from 'react';

const useFetch = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const fetchData = async () => {
    try {
      console.log(url);
      // const {data: responseData} = await axios.get(url).;
      await axios
        .get(url)
        .then(res => {
          setData(res.data);
        })
        .catch(err => console.log(err));
      // const resp = await fetch(url);
      // setData(await resp.json());
      // setData(responseData);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {error, data, loading};
};

export default useFetch;
