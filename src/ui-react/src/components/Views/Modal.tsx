import { makeStyles } from '@mui/styles';

import ReactModal from 'react-modal';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {
  open: boolean;
  onClose: () => void;
  children: any;
};

const useStyles = makeStyles({
  search: {
    position: 'absolute',
    top: '25%',
    left: '25%',
    width: 300,
    height: 300,
    zIndex: 1500,
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

const Modal = ({ open, children, onClose }: Props) => {
  const classes = useStyles();
  return (
    <ReactModal
      isOpen={open}
      onRequestClose={onClose}
      // ariaHideApp={false}
      className={classes.search}
      overlayClassName={classes.overlay}>
      {children}
    </ReactModal>
  );
};

export default Modal;

export const MotionModal = (props: Props) => {
  return (
    <motion.div drag>
      <Modal {...props} />
    </motion.div>
  );
};
