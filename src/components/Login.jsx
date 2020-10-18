import React, { useState } from "react";
import imgUser from "../images/user.jpg";
import Error from "./Error.jsx";

let users = [
  {
    nombre: "Juan Andres",
    apellido: "Tuberquia",
    id: "474838291",
    Rol: "coordinador",
    estado: "activo",
    telefono: "3868737627",
    correo: "juan@hotmail.com",
    contraseña: "juan12345",
  },
  {
    nombre: "David",
    apellido: "Tuberquia",
    id: "99462962",
    Rol: "administrador",
    estado: "activo",
    telefono: "318648293",
    correo: "david@hotmail.com",
    contraseña: "david12345",
  },
  {
    nombre: "gloria",
    apellido: "Delgado",
    id: "9373729",
    Rol: "operativo",
    estado: "inactivo",
    telefono: "316421820",
    correo: "gloria@hotmail.com",
    contraseña: "gloria12345",
  },
];

const Login = ({ setShowUsers, setSpinner }) => {
  const [ErrorData, setErrorData] = useState(false);
  const [errorUser, setErrorUser] = useState(false);
  const [getData, setGetData] = useState({
    user: "",
    pass: "",
  });

  const handleChange = (e) => {
    setGetData({
      ...getData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (getData.user.trim() === "" || getData.pass.trim() === "") {
      setErrorData(true);
    } else if (
      users.find((user) => user.nombre === getData.user) &&
      users.find((user) => user.contraseña === getData.pass)
    ) {
      setSpinner(true);
      setTimeout(() => {
        setSpinner(false);
        setShowUsers(true);
      }, 1500);
    } else {
      setErrorUser(true);
    }
  };

  return (
    <div>
      <form className="contentForm" onSubmit={handleSubmit}>
        {errorUser ? <Error message="usuario no registrado" /> : null}
        {ErrorData ? <Error message="Favor llenar los campos" /> : null}
        <h3 className="titleLogin">Inicio de Sesion</h3>
        <label>
          <input
            name="user"
            type="text"
            placeholder="Usuario"
            onChange={handleChange}
          />
          {/* <input type="image" src={imgUser} /> */}
        </label>
        <label>
          <input
            name="pass"
            type="password"
            placeholder="Contraseña"
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit" className="contentButton">
          Iniciar sesion
        </button>
      </form>
    </div>
  );
};

export default Login;
