import styled from "styled-components";

const ModalContainer = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 50rem;
  width: 50rem;
`;

export const DesktopModalContainer = styled(ModalContainer)`
  border-radius: 0.5rem;
  border: #353fae solid 2px;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.8);
  background-color: #fff;
  padding: 2.5rem;
  font-size: 1.5rem;
  color: #000;
  position: relative;
  top: 0;
  left: 0;
  z-index: 99;
`;

export const Header = styled.h3`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`;

export const CloseSign = styled.div`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  color: #323232;

  &:before,
  &:after {
    position: absolute;
    content: " ";
    left: 1.1rem;
    top: 0.4rem;
    height: 1.25rem;
    width: 2px;
    background-color: #333;
  }

  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

const CLOSE_BUTTON_SIZE = 2;

const CloseButton = styled.div`
  position: absolute;
  width: ${CLOSE_BUTTON_SIZE}rem;
  height: ${CLOSE_BUTTON_SIZE}rem;
  background-color: #c8c8c8;
  border-radius: 50%;
  cursor: pointer;

  & > * {
    opacity: 1;
  }

  &:hover {
    opacity: 0.5;
  }
`;

export const DesktopCloseButton = styled(CloseButton)`
  top: -${CLOSE_BUTTON_SIZE / 2}rem;
  left: calc(100% - ${CLOSE_BUTTON_SIZE - 0.8}rem);
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ModalFormSelect = styled.select`
  width: 20rem;
  height: 3.5rem;
  font-size: 1.5rem;
  padding: 0.3rem;
  color: #000;
  outline-color: #353fae;
  transition: all 0.2s;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

export const ModalFormTextArea = styled.textarea`
  font-size: 1.5rem;
  padding: 0.5rem;
  color: #000;
  outline-color: #353fae;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
export const ModalFormRadio = styled.div`
  flex-direction: row;
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1rem;

  & > * {
    align-items: center;
    justify-items: center;
    position: relative;
    left: -2.5rem;

    &:nth-child(1),
    &:nth-child(3) {
      margin-right: 0.5rem;
      margin-left: 3rem;
      outline-color: #353fae;
      width: 1.3rem;
      height: 1.3rem;
    }

    &:nth-child(2) {
      margin-right: 3rem;
    }
  }
`