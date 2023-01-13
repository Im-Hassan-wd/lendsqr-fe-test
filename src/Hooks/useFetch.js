import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortCont = new AbortController()
    fetchData(url, { signal: abortCont.signal })

    return () => abortCont.abort()
    }, [url]);
    
  const fetchData = async (url) => {
    try {
      const res = await fetch(url)
      if(!res.ok) {
        throw Error("could not fetch the data for that resource")
      }
      const data = await res.json();
      setIsPending(false)
    
      setData(data);
    }
      catch(err) {
      if(err.name === "AbortError") {
        console.log("fetch aborted")
      } else {
        setError(err.message);
        setIsPending(true)
      }
    }
  }

  return { data, isPending, error}
}
 
export default useFetch;