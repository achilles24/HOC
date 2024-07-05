import React, { useState, useEffect } from 'react';

const withDataFetching = (url) => (WrappedComponent) => {
  const WithDataFetching = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setData(data);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };

      fetchData();
    }, [url]);

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error.message}</p>;
    }

    return <WrappedComponent {...props} data={data} />;
  };

  return WithDataFetching;
};

export default withDataFetching;
