'use client';

import React from "react";
import { UseFormRegister, FieldError } from "react-hook-form";
import styles from './styles.module.scss'

interface ValidatedSelectProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  type?: "dropdown" | "radio";
  register: UseFormRegister<any>;
  error?: FieldError;
  required?: boolean;
}

const ValidatedSelect: React.FC<ValidatedSelectProps> = ({ label, name, options, type="dropdown" , register, error, required = false }) => {
  return (
    <div className={styles.validatedSelect} >
      <label>{label}<span className={styles.required}>{required ? "*" : ""}</span></label>
      {type === "dropdown" ? (
        <select {...register(name)}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <div className={styles.radioGroup}>
          {options.map((option) => (
            <label key={option.value}>
              <input type="radio" value={option.value} {...register(name)} />
              {option.label}
            </label>
          ))}
        </div>
      )}
      {error && <p className={styles.error}>{error.message}</p>}
    </div>
  );
};

export default ValidatedSelect;