import React, { useEffect, useState } from "react";
import CardItem from 'components/CardItem'
import { ComercioData } from 'data/ComercioData.js'
export default function Comercios({ params }) {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setloading(true);
    }, 1000);
  }, []);
  return (
    <section>
      <div className="title"> {decodeURI(params.title)}</div>
      <section>
        {loading ? (
          <section className="list_grid">
            {ComercioData.map((comercio) => (
              <CardItem
                href={"/comercio/" + comercio.name}
                image={comercio.image}
                title={comercio.name}
                categoria={comercio.categoria}
                distancia={comercio.distancia}
                valoracion={comercio.valoracion}
                key={comercio.id}
              />
            ))}
          </section>
        ) : (
            "esperando ..."
          )}
      </section>
    </section>
  );
}
