import axios from "axios";
import { useEffect, useState } from "react";

export default function useImageSearch(query, page) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages([]);
  }, [query]);
  useEffect(() => {
    setIsLoading(true);
    setError(false);
    let cancel;
    const getNewImageData = async () => {
      try {
        const { data } = await axios({
          method: "GET",
          url: query
            ? `https://images-api.nasa.gov/search${query + page}`
            : `https://images-api.nasa.gov/search?q=galaxy&page=1`,
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        });

        setImages((prevImages) => {
          return [...prevImages, ...data.collection.items];
        });
        setIsLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) return;
        setError(true);
      }
      return () => cancel();
    };
    getNewImageData();
  }, [query, page]);
  return { isLoading, error, images };
}
