'use client';

import React, { useEffect } from 'react'
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ValidatedInput from '@/app/components/form-controls/ValidatedInput';
import styles from '../styles.module.scss'
import Link from 'next/link';
import { useAppDispatch } from '@/lib/redux/hooks';
import { loginSuccess } from '@/lib/redux/slices/authSlice';
import api from '@/lib/utils/axiosInstance';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store';

const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

type FormData = yup.InferType<typeof schema>;
 
const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const dispatch = useAppDispatch();
  const router = useRouter();
  const token = useSelector((state: RootState) => state.auth.token);


  const onSubmit = async (data: FormData) => {
    console.log("Form Data:", data);
    const {email, password} = data;
    try {
      const res = await api.post("/auth/login", { email, password });
      dispatch(loginSuccess(res.data));
      router.push("/cart");
    } catch {
      alert("Login failed");
    }
  };

  useEffect(()=>{
    if (token) router.push("/");
  },[router, token])

  return (
    token ? null : <div className={styles.wrapper} >
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
        <h1 className={styles.title} >Sign In</h1>
        <ValidatedInput label="Email" name="email" type="email" register={register} error={errors.email} required />
        <ValidatedInput label="Password" name="password" type="password" register={register} error={errors.password} required />
        <button type="submit">Submit</button>
        <Link href='/sign-up'><p className={styles.signUpLink} >{`Don't have an account? Sign up now`}</p></Link>
      </form>
    </div>

  );
}
 
export default SignInPage;