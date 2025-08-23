import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/currencies.json")
      .then((res) => res.json())
      .then((res) => {
        // Always store the WHOLE rates object
        setData(res.rates);
      })
      .catch((err) => console.error("Error fetching currency data:", err));
  }, [baseCurrency]);

  return data; // {AED: 3.67, AFN: 70.25, ...}
}

export default useCurrencyInfo;
