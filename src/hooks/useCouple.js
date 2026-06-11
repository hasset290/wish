import { useEffect, useState } from "react";
import { fetchCoupleById } from "../firebase/coupleService";

export default function useCouple(coupleId = "demo-couple") {
  const [couple, setCouple] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCoupleById(coupleId)
      .then(setCouple)
      .finally(() => setLoading(false));
  }, [coupleId]);

  return { couple, loading };
}
