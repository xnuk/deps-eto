import Button from '../../../../components/button/Button';
import TextInput from '../../../../components/textinput/TextInput';
import styles from './MigrationModalContent.module.scss';

const MigrationModalContent = ({ onClose, onSubmit }: { onClose: () => void; onSubmit: () => void }) => {
  return (
    <div className={styles.content}>
      <header>
        <h2>기존 아이덴티티 불러오기 </h2>
      </header>
      <form onSubmit={onSubmit}>
        <label className={styles.col}>
          <small className={styles.caption}>아이덴티티 JSON</small>
          <textarea className={styles.identityJson} placeholder='{...}' required rows={6}></textarea>
        </label>
        <label className={styles.col}>
          <small className={styles.caption}>비밀키</small>
          <TextInput placeholder='아이덴티티 비밀키' />
        </label>
        <div className={styles.buttons}>
          <Button color='transparent' type='button' onClick={onClose}>
            취소
          </Button>
          <Button color='primary' type='submit'>
            불러오기
          </Button>
        </div>
      </form>
    </div>
  );
};

export default MigrationModalContent;
