import React from "react";
import { Link } from "react-router-dom";

const Nosotros = () => {
  const [equipo, setEquipo] = React.useState([]);

  React.useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch(
      "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations"
    );
    const users = await data.json();
    setEquipo(users.civilizations);
  };
  return (
    <div>
      <h1>Nosotros</h1>
      <p>
        Somos una compañía mexicana-holandesa con 6 años de trayectoria, comprometida a ofrecerte un snack
        para tí y tu familia, con un toque mexicano-europeo de papas fritas.
      </p>
      <ul>
        {equipo.map((item) => (
          <li key={item.id}>
            <Link to={` /nosotros/${item.id}`}>
              {item.name} - {item.expansion}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nosotros;
