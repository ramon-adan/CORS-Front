"use client";
import React, { useEffect, useState } from "react";
import jsonp from "jsonp";

function JsonpComponent() {
  const [response, setResponse] = useState(null);
  useEffect(() => {
    jsonp("http://localhost:3000/jsonp", null, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log(data);
        setResponse(data);
      }
    });
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

export default JsonpComponent;
