import React from "react";
import { Button, Card, Image, Text, Group, Badge } from "@mantine/core";
import { IconShoppingCart, IconCheck } from "@tabler/icons-react";

interface Product {
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
}

interface Props {
  product: Product;
  onAddToCart: () => void;
  onCheckout: () => void;
}

export const CardProduct: React.FC<Props> = ({
  product,
  onAddToCart,
  onCheckout,
}) => {
  const { name, description, price, stock, image } = product;

  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      {/* Product Image */}
      <Card.Section>
        <Image src={image} alt={name} height={160} fit="cover" />
      </Card.Section>

      {/* Product Info */}
      <Group className="mt-4">
        <p className="font-medium">{name}</p>
        {stock > 0 ? (
          <Badge color="green" variant="light">
            In Stock
          </Badge>
        ) : (
          <Badge color="red" variant="light">
            Out of Stock
          </Badge>
        )}
      </Group>

      <p className="mt-2 text-sm">{description}</p>

      <p className="mt-2 text-lg font-bold">Rp {price.toLocaleString()}</p>

      {/* Action Buttons */}
      <Group className="mt-4">
        <Button
          leftSection={<IconShoppingCart />}
          onClick={onAddToCart}
          disabled={stock <= 0}
          variant="light"
          color="blue"
          size="xs"
        >
          Keranjang
        </Button>
        <Button
          leftSection={<IconCheck />}
          onClick={onCheckout}
          disabled={stock <= 0}
          variant="filled"
          color="green"
          size="xs"
        >
          Checkout
        </Button>
      </Group>
    </Card>
  );
};
