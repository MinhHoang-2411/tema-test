'use client';

import React from "react";
import { UseFormRegister, FieldError } from "react-hook-form";
import styles from './styles.module.scss'

interface ValidatedCheckboxProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  required?: boolean;
}

const ValidatedCheckbox: React.FC<ValidatedCheckboxProps> = ({ label, name, register, error, required = false }) => {
  return (
    <div className={styles.validatedCheckbox} >
      <label>
        <input type="checkbox" {...register(name)} /> 
        <span>{label}</span><span className={styles.required} >{required ? '*' : ''}</span>
      </label>
      {error && <p className={styles.error}>{error.message}</p>}
    </div>
  );
};

export default ValidatedCheckbox;