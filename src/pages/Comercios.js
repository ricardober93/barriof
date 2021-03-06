import React, { useEffect, useState } from "react";
import CardItem from 'components/CardItem'
import { ComercioData } from 'data/ComercioData.js'
import FormHome from "components/FormHome";
export default function Comercios({ params }) {

  const [loading, setloading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setloading(true);
    }, 500);
  }, []);


  // const deleteSpaceString = string => {
  //   return string.replace(/ /g, "")
  // }

  return (
    <div>
      <FormHome title={params.title} />
      <section className="comercios">
        {loading ? (
          <section className="list_grid">
            {ComercioData.map((comercio) => (
              <CardItem
                href={"/comercio/" + decodeURI(comercio.name)}
                image={comercio.image}
                title={comercio.name}
                categoria={comercio.categoria}
                distancia={comercio.distancia}
                calificacion={comercio.calificacion}
                key={comercio.id}
              />
            ))}
          </section>
        ) : (
            "esperando ..."
          )}
      </section>
    </div>
  );
}
