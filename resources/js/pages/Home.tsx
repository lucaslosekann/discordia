import React from "react";
import axios from "axios";

const Home = (props) => (
  <div>
    <h1>Bem vindo {props?.user?.username ?? "Convidado"}</h1>
  </div>
);

export default Home;
