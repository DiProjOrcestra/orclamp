import React from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiLogOut } from "react-icons/fi";

import "./styles.css";

import Logo from "../../assets/LogoRegister.png";

export default function Header() {
  return (
    <header id="main-page">
      <div className="logo-group">
        <img src={Logo} alt="Orclamp" />
        <h1>Orclamp</h1>
      </div>

      <div className="welcome-guide">
        <h1>Bem vindo(a), Fellipe!</h1>

        <Link className="create-project" to="/project/new">
          <FiPlus size={36} color="#fff" />
        </Link>

        <Link className="logout" to="/">
          <FiLogOut size={36} color="#fff" />
        </Link>
      </div>
    </header>
  );
}
