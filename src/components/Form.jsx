import React from "react";

const Form = () => {
  return (
    <div>
      <h2>Agregar nuevo usuario</h2>
      <form>
        <fieldset className="contenForm">
          <legend>Informacion Personal</legend>
          <div className="columForm">
            <label> Nombre: </label>
            <input
              type="text"
              placeholder="Tu Nombre"
              required
              class="style-form"
            />
            <label> Apellido: </label>
            <input
              type="text"
              placeholder="Tu Apellido"
              required
              class="style-form"
            />
            <label> Cedula: </label>
            <input
              type="number"
              placeholder="Tu identificacion"
              required
              class="style-form"
            />
            <label> Rol: </label>
            <input
              type="text"
              placeholder="Tu Rol"
              required
              class="style-form"
            />
          </div>
          <div className="columForm">
            <label> Estado: </label>
            <input
              type="text"
              placeholder="Estado"
              required
              class="style-form"
            />
            <label> Contraseña: </label>
            <input
              type="password"
              placeholder="contraseña"
              required
              class="style-form"
            />
            <label for="telefono"> Telefono: </label>
            <input
              type="tel"
              id="telefono"
              placeholder="Tu Telefono"
              required
              class="style-form"
            />
            <label for="correo"> E-mail: </label>
            <input
              type="email"
              id="correo"
              placeholder="Tu email"
              required
              class="style-form"
            />
          </div>
        </fieldset>
        <div className="buttons">
          <button className="aceptarForm"> Aceptar</button>
          <button className="cancelarForm"> Cancelar </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
