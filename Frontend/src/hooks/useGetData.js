import { useEffect, useState } from "react";
import axios from "axios";

const useGetData = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [dataTrigger, setDataTrigger] = useState(false); // Agregar el estado de dataTrigger
  
    useEffect(() => {
      let abortController = new AbortController();
  
      const fetchData = async () => {
        setLoading(true);
        setError(null);
  
        try {
          const response = await axios.get(url, { signal: abortController.signal });
          setData(response.data);
          setLoading(false);
        } catch (err) {
          if (err.name === "AbortError") {
            console.log("Request canceled");
          } else {
            setError(err);
            setLoading(false);
          }
        }
      };
  
      fetchData();
  
      return () => {
        abortController.abort();
      };
    }, [url, dataTrigger]); // Agregar dataTrigger a las dependencias
  
    return { data, error, loading, setDataTrigger }; // Devolver setDataTrigger en el resultado
  };
  
  export default useGetData;