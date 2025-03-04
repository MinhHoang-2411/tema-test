"use client";
import withAuth from "@/lib/utils/withAuth";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { logout } from "@/lib/redux/slices/authSlice";
import { useRouter } from "next/navigation";
import api from "@/lib/utils/axiosInstance";

function CartPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = async () => {
    await api.post("/auth/logout");
    dispatch(logout());
    router.push("/login");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user?.name} ({user?.email})</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default withAuth(<CartPage/>);