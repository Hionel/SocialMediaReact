import React, { FC } from 'react';
import styles from './signUp.module.scss';

interface SignUpProps {}

const SignUp: FC<SignUpProps> = () => (
  <div className={styles.SignUp}>
    SignUp Component
  </div>
);

export default SignUp;
