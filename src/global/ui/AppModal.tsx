import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import React from 'react';

interface Props {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  title?: string;
  children?: React.ReactNode;
  positiveText?: string;
  negativeText?: string;
}

function AppModal({
  isOpen,
  onOpenChange,
  title,
  children,
  positiveText = 'Да',
  negativeText = 'Отмена',
}: Props) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onClick={onClose}>
                {negativeText}
              </Button>
              <Button color="primary" onClick={onClose}>
                {positiveText}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default AppModal;
