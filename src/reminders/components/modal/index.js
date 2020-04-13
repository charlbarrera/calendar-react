import React from 'react';
import Modal from '@material-ui/core/Modal';
import { ModalLayoutStyles } from './style';

export const ModalComponent = ({ children, open, onClose, borderColor }) => {


    return <Modal
            open={open}
            onClose={onClose}
           >
             <ModalLayoutStyles borderColor={borderColor}>
                {children}
             </ModalLayoutStyles>
        </Modal>
}