import { useState } from "react";
import styles from "./styles.module.scss";

interface QuantitySelectorProps {
  onSubmit: (quantity: number) => void;
  buttonText?: string;
}

export default function QuantitySelector({
  onSubmit,
  buttonText = "Add to Cart",
}: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(isNaN(value) || value < 1 ? 1 : value);
  };

  return (
    <div className={styles.qtySelectorContainer}>
      <button onClick={decreaseQuantity} className={styles.qtyBtn}>
        -
      </button>
      <input value={quantity} onChange={handleInputChange} className={styles.qtyInput} />
      <button onClick={increaseQuantity} className={styles.qtyBtn}>
        +
      </button>
      <button onClick={() => onSubmit(quantity)} className={styles.submitBtn}>
        {buttonText}
      </button>
    </div>
  );
}
