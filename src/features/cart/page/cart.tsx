import { useState } from "react";
import { Text, Button, Group } from "@mantine/core";
import { CardCart } from "../components/CardCart";

const initialCart = [
  { name: "Produk A", price: 50000, quantity: 2 },
  { name: "Produk B", price: 75000, quantity: 1 },
];

export const CartList = () => {
  const [cart, setCart] = useState(initialCart);

  const handleRemoveItem = (itemName: string) => {
    setCart(cart.filter((item) => item.name !== itemName));
  };

  const handleUpdateQuantity = (itemName: string, newQuantity: number) => {
    setCart(
      cart.map((item) =>
        item.name === itemName ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="space-y-4">
      {cart.map((item) => (
        <CardCart
          key={item.name}
          item={item}
          onRemove={() => handleRemoveItem(item.name)}
          onUpdateQuantity={(newQuantity) =>
            handleUpdateQuantity(item.name, newQuantity)
          }
        />
      ))}

      <Group className="mt-4">
        <Text w={700} size="lg">
          Total: Rp {totalPrice.toLocaleString()}
        </Text>
        <Button
          onClick={() => alert("Checkout successful!")}
          disabled={cart.length === 0}
          variant="filled"
          color="green"
        >
          Checkout
        </Button>
      </Group>
    </div>
  );
};
