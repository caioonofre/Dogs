import React from 'react';
import style from './Input.module.css';

const Input = ({ label, type, name }) => {
  return (
    <div className={style.wrapper}>
      <label htmlFor={name} className={style.label}>
        {label}
      </label>
      <input id={name} name={name} className={style.input} type={type} />
      <p className={style.error}>error</p>
    </div>
  );
};

export default Input;
