import React from "react";

interface ButtonServicosProps {
  toggleModal: () => void;
  titulo: string;
}
const images = [
    "det.svg",
    'event.svg',
    'build.svg' 
];

export const ButtonServicos: React.FC<ButtonServicosProps> = ({
  toggleModal,
  titulo,
}) => {
  return (
    <button className="card" onClick={toggleModal}>
      <div className="img-wrapper">
        <img src="det.svg" alt="Design e Tecnologia" />
      </div>
      <h3 className="title">{titulo}</h3>
    </button>
  );
};
