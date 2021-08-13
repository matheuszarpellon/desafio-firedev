import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BaseModalWrapper } from "./baseWrapper";
import styled from "styled-components";
import { ButtonServicos } from "../Map";
import { ListaServicosData } from "../../contexts/listaServicos";


interface ModalProps {
  onBackdropClick: () => void;
}

interface Modal1Props {
  servico: ListaServicosData
}

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal: React.FC<ModalProps> = ({ onBackdropClick, children }) => {
  return ReactDOM.createPortal(
    <Overlay onClick={onBackdropClick}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </Overlay>,
    document.getElementById("modal-root")!
  );
};

export const Modal1: React.FC<Modal1Props> = ({servico}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };

  return (
    <>
      <ButtonServicos titulo={servico.nome} toggleModal={toggleModal} />
      <BaseModalWrapper
        subservico={servico.sub_servicos}
        isModalVisible={isModalVisible}
        onBackdropClick={toggleModal}
        header="O que você precisa?"
      />
    </>
  );
};
