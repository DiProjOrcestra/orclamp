import React, { useState, useMemo } from "react";
import { useHistory } from "react-router-dom";

import { FiUpload } from "react-icons/fi";

import Button from "../../components/Button";
import InputGroup from "../InputGroup";

import "./styles.css";

export default function NewPtojectForm() {
  const [image, setImage] = useState(null);
  const [project, setProject] = useState("");
  const [techs, setTechs] = useState("");
  const [description, setDescription] = useState("");

  const preview = useMemo(() => {
    return image ? URL.createObjectURL(image) : null;
  }, [image]);

  const history = useHistory();

  function handleNext(e) {
    e.preventDefault();

    localStorage.setItem("project", project);
    localStorage.setItem("techs", techs);
    localStorage.setItem("description", description);
    localStorage.setItem("image", URL.createObjectURL(image));

    history.push("/project/new/confirm");
  }

  return (
    <div className="new-project-form">
      <h1>Criar Projeto</h1>

      <form onSubmit={handleNext}>
        <InputGroup
          title="Nome do Projeto"
          value={project}
          onChange={(e) => setProject(e.target.value)}
        />

        <InputGroup
          title="Tecnologias"
          value={techs}
          onChange={(e) => setTechs(e.target.value)}
        />

        <div className="description-image">
          <div className="textarea-group">
            <h2>Descrição</h2>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <label
            id="upload"
            style={{ backgroundImage: `url(${preview})` }}
            className={image ? "has-image" : ""}
          >
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
            {image ? "" : <FiUpload size={30} color="#384F7D" />}
            {image ? "" : "Imagem"}
          </label>
        </div>

        <Button text="PRÓXIMO" />
      </form>
    </div>
  );
}
