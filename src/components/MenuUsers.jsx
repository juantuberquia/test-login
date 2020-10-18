import React, { useState, useRef, useEffect } from "react";
import menu from "../images/menu-hambu.JPG";
import userInfo from "../images/user-info.JPG";
import Form from "./Form";

const MenuUsers = () => {
  const [formu, stateFormu] = useState(false);
  const [id, setId] = useState();

  let dato = useRef([]);

  useEffect(() => {
    dato.current = [JSON.parse(localStorage.getItem(id))];
    stateFormu(false);
  }, [id]);

  return (
    <div className="body">
      {formu ? (
        <Form setId={setId} />
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
              {dato.current.map((user) => (
                <div key={user.id} ref={dato}>
                  <span> {user.name}</span>
                  <span> {user.lastName}</span>
                  <span> {user.id}</span>
                  <span> {user.job}</span>
                  <span> {user.state}</span>
                  <span> {user.number}</span>
                  <span> {user.email}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuUsers;
