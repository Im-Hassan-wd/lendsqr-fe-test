import { useEffect, useState } from "react";

const usefetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchData(url)
    }, [url]);
    
  const fetchData = async () => {
    try {
      const res = await fetch()
      const data = await res.json();
      setIsPending(false)
    
      setData(data);
    }
      catch(err) {
      setError("Something went wrong but don't fret,");
      setIsPending(true)
    }
  }

  return { data, isPending, error}
}
 
export default usefetch;