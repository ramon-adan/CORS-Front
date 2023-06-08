"use client";
import React, { useEffect, useState } from "react";

function FetchComponent() {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:3000/data");
        const data = await res.json();
        setResponse(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Respuesta del servidor:</h1>
      {response ? (
        <pre>{JSON.stringify(response, null, 2)}</pre>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default FetchComponent;
