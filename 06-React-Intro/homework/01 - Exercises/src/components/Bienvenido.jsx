import React from "react";
import Botones from "./Botones";

const studentName = "Lisandro Oviedo";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
  return (
    <div>
      <h1>SoyHenry</h1>
      <br />
      <h3>{studentName}</h3>
      <br />
      <ul>
        {techSkills.map(function (elemento) {
          return <li>{elemento}</li>;
        })}
      </ul>
      <br />
      <Botones alerts={alerts} />
    </div>
  );
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
