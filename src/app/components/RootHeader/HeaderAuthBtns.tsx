import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { logout } from "@/lib/redux/slices/authSlice";
import { useRouter } from "next/navigation";
import api from "@/lib/utils/axiosInstance";
import Link from "next/link";
import styles from "./styles.module.scss";

interface IHeaderAuthBtnsProps {
  handleCloseSidebar: () => void;
}

function HeaderAuthBtns({ handleCloseSidebar = () => {} }: IHeaderAuthBtnsProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = async () => {
    await api.post("/auth/logout");
    dispatch(logout());
    router.push("/");
  };
  return user ? (
    <button
      className={styles.signOutBtn}
      onClick={() => {
        handleLogout();
        handleCloseSidebar();
      }}
    >
      Logout
    </button>
  ) : (
    <>
      <Link href="/sign-in">
        <button
          onClick={() => {
            handleCloseSidebar();
          }}
          className={styles.signInBtn}
        >
          Sign In
        </button>
      </Link>
      <Link href="/sign-up">
        <button
          onClick={() => {
            handleCloseSidebar();
          }}
          className={styles.signUpBtn}
        >
          Sign Up
        </button>
      </Link>
    </>
  );
}

export default HeaderAuthBtns;
