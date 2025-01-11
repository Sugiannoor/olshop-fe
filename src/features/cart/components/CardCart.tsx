import React from "react";
import { Card, Group, Text, ActionIcon } from "@mantine/core";
import { IconPlus, IconMinus } from "@tabler/icons-react";
import { modals } from "@mantine/modals";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

interface Props {
  item: CartItem;
  onRemove: () => void;
  onUpdateQuantity: (newQuantity: number) => void;
}

export const CardCart: React.FC<Props> = ({
  item,
  onRemove,
  onUpdateQuantity,
}) => {
  const { name, price, quantity } = item;

  const handleDecrease = () => {
    if (quantity > 1) {
      onUpdateQuantity(quantity - 1);
    } else {
      modals.openConfirmModal({
        title: "Remove Item",
        centered: true,
        children: (
          <Text size="sm">
            Are you sure you want to remove this item from the cart?
          </Text>
        ),
        labels: { confirm: "Remove", cancel: "Cancel" },
        confirmProps: { color: "red" },
        onConfirm: onRemove,
      });
    }
  };

  const handleIncrease = () => {
    onUpdateQuantity(quantity + 1);
  };

  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <div className="flex justify-between">
        {/* Item Info */}
        <div>
          <p>{name}</p>
          <p>
            {quantity} x Rp {price.toLocaleString()}
          </p>
          <p className="mt-1">
            Subtotal: Rp {(price * quantity).toLocaleString()}
          </p>
        </div>
        {/* Action Buttons */}
        <div className="flex gap-5 items-center">
          <ActionIcon color="red" variant="light" onClick={handleDecrease}>
            <IconMinus size={20} />
          </ActionIcon>
          <Text>{quantity}</Text>
          <ActionIcon color="blue" variant="light" onClick={handleIncrease}>
            <IconPlus size={20} />
          </ActionIcon>
        </div>
      </div>
    </Card>
  );
};
