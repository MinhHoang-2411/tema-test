'use client';

import React, { useEffect } from 'react'
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ValidatedCheckbox from '@/app/components/form-controls/ValidatedCheckbox'
import ValidatedInput from '@/app/components/form-controls/ValidatedInput';
import ValidatedSelect from '@/app/components/form-controls/ValidatedSelect';
import ValidatedUploadFile from '@/app/components/form-controls/ValidatedUploadFile';
import styles from '../styles.module.scss'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/lib/redux/hooks';
import { RootState } from '@/lib/redux/store';


const schema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  gender: yup
    .string()
    .oneOf(["male", "female", "other"], "Invalid gender selection")
    .required("Gender is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: yup
  .string()
  .oneOf([yup.ref("password")], "Passwords must match")
  .required("Confirm Password is required"),
  avatar: yup.string().required("Avatar is required"), // save url instead file data
  agree: yup
  .boolean()
  .oneOf([true], "You must agree to continue") // must true
  .required("You must agree to continue"),
});

type FormData = yup.InferType<typeof schema>;
 
const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  const router = useRouter();
  const token = useAppSelector((state: RootState) => state.auth.token);

  useEffect(()=>{
    if (token) router.push("/");
  },[router, token])

  return (
    token ? null : <div className={styles.wrapper} >
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
        <h1 className={styles.title} >Sign Up</h1>
        <ValidatedInput label="First Name" name="firstName" register={register} error={errors.firstName} required />
        <ValidatedInput label="Last Name" name="lastName" register={register} error={errors.lastName} required />
        <ValidatedSelect
          label="Gender"
          name="gender"
          options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
            { value: "other", label: "Other" },
          ]}
          type="radio"
          register={register}
          error={errors.gender}
          required
        />
        <ValidatedInput label="Email" name="email" type="email" register={register} error={errors.email} required />
        <ValidatedInput label="Password" name="password" type="password" register={register} error={errors.password} required />
        <ValidatedInput label="Confirm Password" name="confirmPassword" type="password" register={register} error={errors.confirmPassword} required />
        <ValidatedUploadFile label="Avatar" name="avatar" setValue={setValue} error={errors.avatar} required />
        <ValidatedCheckbox label="I agree to the terms" name="agree" register={register} error={errors.agree} required />
        <button type="submit">Submit</button>
        <Link href='/sign-in'><p className={styles.signInLink} >Already have an account? Log in now </p></Link>
      </form>
    </div>

  );
}
 
export default SignUpPage;