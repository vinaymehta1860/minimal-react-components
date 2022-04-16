import React from 'react';
import PropTypes from 'prop-types';

import { AiOutlineClose } from 'react-icons/ai';

import {
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Title
} from './styles';

const Modal = (props) => {
  const {
    children,
    showCloseIcon,
    title,
    styles,
    onClose,
    footerContents
  } = props;

  return (
    <ModalContainer id="myModal" className="modal">
      <ModalContent className="modal-content" style={styles}>
        <ModalHeader className="modal-header">
          <Title>{title}</Title>
          {showCloseIcon && (
            <AiOutlineClose
              size={20}
              style={{ cursor: 'pointer' }}
              onClick={() => onClose()}
            />
          )}
        </ModalHeader>
        <ModalBody className="modal-body">
          {children}
        </ModalBody>
        <ModalFooter className="modal-footer">
          {footerContents}
        </ModalFooter>
      </ModalContent>
    </ModalContainer>
  )
};

Modal.defaultProps = {
  title: '',
  showCloseIcon: false,
  styles: {},
  footerContents: null,
  onClose: () => {},
}

Modal.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  showCloseIcon: PropTypes.bool,
  styles: PropTypes.instanceOf(Object),
  footerContents: PropTypes.element,
  onClose: PropTypes.func,
}

export default Modal;
