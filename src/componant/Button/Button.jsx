import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button className={props.isOutline ? styles.outline_btn : styles.primary_btn}>
      {props.icon && <span className={styles.icon}>{props.icon}</span>}
      {props.text && <span className={styles.text}>{props.text}</span>}
    </button>
  );
};

export default Button;
