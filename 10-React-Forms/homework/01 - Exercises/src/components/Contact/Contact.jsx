import React, { useState } from "react";
import "./Contact.modules.css";

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(inputs) {
  const errors = {};

  if (!inputs.name) {
    errors.name = "Se requiere un nombre";
  }

  if (!regexEmail.test(inputs.email)) {
    errors.email = "Debe ser un correo electrónico";
  }

  if (!inputs.message) {
    errors.message = "Se requiere un mensaje";
  }

  return errors;
}

export default function Contact() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });

    setErrors(
      validate({
        ...inputs,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    if (Object.values(errors).length === 0) {
      alert("Datos completos");
      setInputs({
        name: "",
        email: "",
        message: "",
      });

      setErrors({
        name: "",
        email: "",
        message: "",
      });
    } else {
      event.preventDefault();
      alert("Debe llenar todos los campos");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          name="name"
          placeholder="Escribe tu nombre..."
          type="text"
          value={inputs.name}
          onChange={handleChange}
          className={errors.name && "warning"}
        />
        <p className="danger">{errors.name}</p>
        <label>Correo Electrónico:</label>
        <input
          name="email"
          placeholder="Escribe tu email..."
          type="text"
          value={inputs.email}
          onChange={handleChange}
          className={errors.email && "warning"}
        />
        <p className="danger">{errors.email}</p>
        <label>Mensaje:</label>
        <textarea
          name="message"
          placeholder="Escribe tu mensaje..."
          type="text"
          value={inputs.message}
          onChange={handleChange}
          className={errors.message && "warning"}
        />
        <p className="danger">{errors.message}</p>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
