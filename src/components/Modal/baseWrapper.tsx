import React from "react";
import { Modal } from "./index";
import {
  DesktopModalContainer,
  Header,
  DesktopCloseButton,
  CloseSign,
  ModalForm,
  ModalFormSelect,
  ModalFormTextArea,
  ModalFormRadio,
} from "./modal.styles";

interface IServico {
  id: number;
  nome: string;
  descricao: string | null;
  servico_id: number | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

interface BaseWrapperProps {
  subservico: Array<IServico>;
  isModalVisible: boolean;
  onBackdropClick: () => void;
  header: string;
}

export const BaseModalWrapper: React.FC<BaseWrapperProps> = ({
  subservico,
  onBackdropClick,
  isModalVisible,
  header,
}) => {
  if (!isModalVisible) {
    return null;
  }
  return (
    <Modal onBackdropClick={onBackdropClick}>
      <DesktopModalContainer>
        <DesktopCloseButton onClick={onBackdropClick}>
          <CloseSign />
        </DesktopCloseButton>
        <div className="header">
          <Header>{header}</Header>
        </div>
        <ModalForm>
          <label htmlFor="subservicos">Escolha o tipo de serviço</label>
          <ModalFormSelect id="subservicos">
            {subservico.map((servico) => {
              console.log(servico);
              return (
                <option key={servico.id} value="Serviço 2">
                  {servico.nome}
                </option>
              );
            })}
          </ModalFormSelect>
          <ModalFormTextArea placeholder="Digite o que você procura..." cols={40} rows={7} maxLength={500} required />
          <ModalFormRadio>
          <input type="radio" name="opt" value="Presencial" />
          <label htmlFor="opt">Presencial</label>
          <input type="radio" name="opt" value="Online" />
          <label htmlFor="opt">Online</label>
          </ModalFormRadio>
        </ModalForm>
      </DesktopModalContainer>
    </Modal>
  );
};
