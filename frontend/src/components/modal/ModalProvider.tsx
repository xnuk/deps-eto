import { type ReactNode, useCallback, useMemo, useState } from 'react';

import styles from './Modal.module.scss';
import { ModalContext } from './ModalContext';

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState<ReactNode | null>(null);

  const open = useCallback((node: ReactNode) => setContent(node), []);
  const close = useCallback(() => setContent(null), []);

  const value = useMemo(() => ({ open, close }), [open, close]);

  return (
    <ModalContext.Provider value={value}>
      {children}
      {content && (
        <div className={styles.overlay} onClick={close}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation}>
            {content}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export { ModalProvider };
