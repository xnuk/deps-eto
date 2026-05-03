import { createContext, type ReactNode } from 'react';

type ModalState = {
  open: (content: ReactNode) => void;
  close: () => void;
};

const ModalContext = createContext<ModalState | null>(null);

export type { ModalState };
export { ModalContext };
