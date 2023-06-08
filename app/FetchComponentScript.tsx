"use client";
import React, { useState, useEffect } from "react";

const JSONPRequest = () => {
  const [response, setResponse] = useState(null);
  useEffect(() => {
    // Crea un script dinámicamente
    const script = document.createElement("script");

    // Establece la URL del servicio JSONP
    const url = "http://localhost:3000/jsonp?callback=jsonpCallback";

    // Define una función de devolución de llamada global
    window.jsonpCallback = (data) => {
      // Aquí puedes manipular los datos obtenidos del JSONP
      console.log(data);
      setResponse(data);
    };

    // Establece la URL del script y agrega el script al DOM
    script.src = url;
    document.body.appendChild(script);

    // Limpia el script al desmontar el componente
    return () => {
      document.body.removeChild(script);
    };
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
};

export default JSONPRequest;
