import { useRef } from 'react';
import { Link } from 'react-router';

import Button from '../../../components/button/Button';
import TextInput from '../../../components/textinput/TextInput';
import { prepareSignUp } from '../../../lib/signup';
import styles from './SignUpForm.module.scss';

const API_URL = import.meta.env.VITE_API_URL!;

const SignUpForm = () => {
  const handleRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);

  const handleClick = async () => {
    const handle = handleRef.current?.value;
    const password = passwordRef.current?.value;
    const passwordConfirm = passwordConfirmRef.current?.value;

    if (!handle || !password || !passwordConfirm) return;
    if (password !== passwordConfirm) return;
    if (password.length < 8 || password.length > 128) return;

    const signUpPayload = await prepareSignUp({ handle, password });
    const res = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(signUpPayload),
    });

    console.log(res);
  };

  return (
    <div className={styles.signUpForm}>
      <label className={styles.col}>
        <span className={styles.caption}>핸들네임</span>
        <label className={styles.handle}>
          <span>@</span>{' '}
          <TextInput type='text' name='handle' placeholder='핸들네임' ref={handleRef} required autoFocus />{' '}
          <span>::eto.example.org</span>
        </label>
      </label>
      <label className={styles.col}>
        <span className={styles.caption}>비밀번호</span>
        <TextInput type='password' name='password' placeholder='비밀번호' ref={passwordRef} required />
        <TextInput
          type='password'
          name='passwordConfirm'
          placeholder='비밀번호 확인'
          ref={passwordConfirmRef}
          required
        />
        <span className={styles.caption}>비밀번호는 8자 이상 128자 미만이어야 합니다.</span>
      </label>
      <fieldset className={styles.keyOptions}>
        <Button color='transparent'>기존 아이덴티티 불러오기</Button>
        <Button color='primary' onClick={handleClick}>
          새 아이덴티티 생성
        </Button>
      </fieldset>
      <div className={styles.buttons}>
        <Link to='/'>
          <Button color='transparent' className={styles.iconButton}>
            ←
          </Button>
        </Link>
        <Button color='transparent' disabled className={styles.iconButton}>
          →
        </Button>
      </div>
    </div>
  );
};

export default SignUpForm;
