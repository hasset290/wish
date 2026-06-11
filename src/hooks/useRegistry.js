import { useEffect, useState } from "react";
import { fetchCoupleRegistry } from "../firebase/registryService";

export default function useRegistry(coupleId) {
  const [registry, setRegistry] = useState([]);
  const [loading, setLoading] = useState(true);

  async function reload() {
    setLoading(true);
    try {
      const data = await fetchCoupleRegistry(coupleId);
      setRegistry(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (coupleId) reload();
  }, [coupleId]);

  return { registry, loading, reload };
}
