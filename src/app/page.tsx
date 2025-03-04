"use client";
// import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
// import { increment, decrement, incrementByAmount  } from "@/lib/redux/slices/counterSlice";
import ProductList from "./components/Products";

export default function Home() {
  // const dispatch = useAppDispatch();
  // const counter = useAppSelector((state) => state.counter.value);
  return (
    <div className="authContainer">
      <div className="container">
        {/* <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button> */}
        <ProductList />
      </div>
    </div>
  );
}
