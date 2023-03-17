import React, { useEffect, useState } from "react";

const url = "https://dog.ceo/api/breed/labrador/images/random/6"

export default function useHooks() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function getData() {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    }

    getData();
  }, []);

  return data

}