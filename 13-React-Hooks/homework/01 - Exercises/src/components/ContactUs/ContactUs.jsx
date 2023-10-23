import React from "react";

const ContactUs = () => {
  const [form, setForm] = React.useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <form className="contactBg">
        <label htmlFor="nombre">Nombre: </label>
        <input name="nombre" value={form.name} onChange={handleInput} />
        <label htmlFor="email">Email: </label>
        <input name="email" value={form.email} onChange={handleInput} />
        <label htmlFor="asunto">Asunto: </label>
        <input name="asunto" value={form.asunto} onChange={handleInput} />
        <label htmlFor="mensaje">Mensaje: </label>
        <input name="mensaje" value={form.mensaje} onChange={handleInput} />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default ContactUs;
