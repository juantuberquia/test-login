import React, { useState } from "react";

const Form = ({ setId }) => {
  const [datos, setDatos] = useState({
    name: "",
    lastName: "",
    id: "",
    job: "",
    state: "",
    password: "",
    number: "",
    email: "",
  });

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnclick = (e) => {
    e.preventDefault();
    localStorage.setItem(datos.id, JSON.stringify(datos));
    setId(datos.id);
  };

  return (
    <div>
      <h2>Agregar nuevo usuario</h2>
      <form>
        <fieldset className="contenForm">
          <legend>Informacion Personal</legend>
          <div className="columForm">
            <label> Nombre: </label>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Tu Nombre"
              required
              className="style-form"
            />
            <label> Apellido: </label>
            <input
              onChange={handleChange}
              name="lastName"
              type="text"
              placeholder="Tu Apellido"
              required
              className="style-form"
            />
            <label> Cedula: </label>
            <input
              onChange={handleChange}
              name="id"
              type="number"
              placeholder="Tu identificacion"
              required
              className="style-form"
            />
            <label> Rol: </label>
            <input
              onChange={handleChange}
              name="job"
              type="text"
              placeholder="Tu Rol"
              required
              className="style-form"
            />
          </div>
          <div className="columForm">
            <label> Estado: </label>
            <input
              onChange={handleChange}
              name="state"
              type="text"
              placeholder="Estado"
              required
              className="style-form"
            />
            <label> Contraseña: </label>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="contraseña"
              required
              className="style-form"
            />
            <label for="telefono"> Telefono: </label>
            <input
              onChange={handleChange}
              name="number"
              type="tel"
              placeholder="Tu Telefono"
              required
              className="style-form"
            />
            <label for="correo"> E-mail: </label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Tu email"
              required
              className="style-form"
            />
          </div>
        </fieldset>
        <div className="buttons">
          <button className="aceptarForm" onClick={handleOnclick}>
            Aceptar
          </button>
          <button className="cancelarForm"> Cancelar </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
