import React from 'react';
import styles from './button.css';

export default ({ disabled = false, type = 'normal', value, disabledValue, onClick, title = '' }) => {
  if (disabled) {
    return (
      <input className={`${styles.button} ${styles.disabled}`} type="button" value={disabledValue || value} title={title} />
    );
  } else if (type === 'submit') {
    return (
      <input className={`${styles.button} ${styles.submit}`} type="button" value={value} onClick={() => onClick()} title={title} />
    );
  }
  return (
    <input className={`${styles.button} ${styles.normal}`} type="button" value={value} onClick={() => onClick()} title={title} />
  );
};
