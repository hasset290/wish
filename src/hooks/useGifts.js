import { useEffect, useState } from "react";
import { fetchCatalogGifts } from "../firebase/giftService";

export default function useGifts() {
  const [gifts, setGifts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCatalogGifts()
      .then(setGifts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { gifts, loading, error };
}
