'use client';

import React from "react";
import { UseFormRegister, FieldError } from "react-hook-form";
import styles from './styles.module.scss'


interface ValidatedInputProps {
  label: string;
  name: string;
  type?: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  required?: boolean;
}

const ValidatedInput: React.FC<ValidatedInputProps> = ({ label, name, type = "text", register, error, required = false }) => {
  return (
    <div className={styles.validatedInput} >
      <label>{label}<span className={styles.required} >{required? "*" : ""}</span></label>
      <input type={type} {...register(name)} />
      {error && <p className={styles.error}>{error.message}</p>}
    </div>
  );
};

export default ValidatedInput;