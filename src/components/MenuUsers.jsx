import React, { useState } from "react";
import menu from "../images/menu-hambu.JPG";
import userInfo from "../images/user-info.JPG";
import Form from "./Form";

const MenuUsers = () => {
  const [formu, stateFormu] = useState(false);

  return (
    <div className="body">
      {formu ? (
        <Form />
      ) : (
        <div className="containerUsers">
          <header className="header">
            <div className="titleHeader">
              <div className="imgHambuger">
                <img src={menu} alt="menu"></img>
              </div>
              <span>Prueba Front-End</span>
            </div>
            <div>
              <img src={userInfo} alt="userInfo"></img>
            </div>
          </header>
          {/* contenedor listado de usuario */}
          <div className="listUsers">
            <div className="contentList">
              <div className="textUsers">
                <div className="imgUsers">
                  <img src={menu} alt="menu"></img>
                </div>
                <span> Usuarios existentes </span>
              </div>
              <button className="buttonCrear" onClick={() => stateFormu(true)}>
                Crear
              </button>
            </div>
            <div className="InfoUser">
              <span> Nombre</span>
              <span> apellido</span>
              <span> identificacion</span>
              <span> rol asociado</span>
              <span> estado</span>
              <span> telefono</span>
              <span> e-mail</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuUsers;
