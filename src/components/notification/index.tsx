import React from 'react';
import { StyledCloseButton, StyledContainer } from './styled';

interface NotificationProps {
  message: string;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, onClose }) => {
  return (
    <StyledContainer>
      <StyledCloseButton onClick={onClose}>X</StyledCloseButton>
      <p>{message}</p>
    </StyledContainer>
  );
};

export default Notification;
