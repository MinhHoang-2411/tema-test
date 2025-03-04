import { create } from "zustand";
import api from "@/lib/utils/axiosInstance";

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  imgUrl: string;
}

interface ProductState {
  products: Product[];
  fetchProducts: () => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  fetchProducts: async () => {
    try {
      const { data } = await api.get("/products");
      set({ products: data });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },
}));
