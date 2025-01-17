import React, { useState } from "react";
import { Card, Group, Text, Stack, Divider, Button } from "@mantine/core";
import { PaymentMethod } from "../components/PaymentMethod";
import { notifications } from "@mantine/notifications";
import { IconX } from "@tabler/icons-react";

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

const mockCartItems: CartItem[] = [
  { id: 1, name: "Produk A", quantity: 2, price: 50000 },
  { id: 2, name: "Produk B", quantity: 1, price: 75000 },
];

const mockPaymentFee = [
  {
    paymentMethod: "qris",
    paymentName: "QRIS",
    paymentImage:
      "https://dretail.id/asset/img/image/features/payment/qris.png",
    totalFee: "5000",
  },
  {
    paymentMethod: "Link Aja",
    paymentName: "Link Aja",
    paymentImage:
      "https://dretail.id/asset/img/image/features/payment/link-aja-ori.png",
    totalFee: "3000",
  },
  {
    paymentMethod: "gopay",
    paymentName: "GoPay",
    paymentImage:
      "https://dretail.id/asset/img/image/features/payment/gopay.png",
    totalFee: "2000",
  },
];

export const Checkout: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const totalCartPrice = mockCartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePaymentSelect = (method: string) => {
    setPaymentMethod(method);
  };

  const handleConfirmCheckout = () => {
    if (!paymentMethod) {
      notifications.show({
        title: "Error",
        message: "Pilih metode pembayaran terlebih dahulu",
        color: "red",
        icon: <IconX />,
      });
    }
    alert(`Checkout berhasil dengan metode pembayaran: ${paymentMethod}`);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <Text size="xl" w={500} mb="lg">
        Checkout
      </Text>

      {/* List Barang */}
      <Card shadow="sm" radius="md" withBorder>
        <Text size="lg" w={500} mb="md">
          Daftar Barang
        </Text>
        <Stack>
          {mockCartItems.map((item) => (
            <Group key={item.id}>
              <div>
                <Text size="sm">{item.name}</Text>
                <Text size="xs" color="dimmed">
                  {item.quantity} x Rp {item.price.toLocaleString()}
                </Text>
              </div>
              <Text size="sm" w={500}>
                Rp {(item.quantity * item.price).toLocaleString()}
              </Text>
            </Group>
          ))}
        </Stack>
        <Divider my="sm" />
        <Group>
          <Text size="md" w={500}>
            Total Harga
          </Text>
          <Text size="md" w={700}>
            Rp {totalCartPrice.toLocaleString()}
          </Text>
        </Group>
      </Card>

      {/* Pilih Metode Pembayaran */}
      <Card shadow="sm" radius="md" withBorder mt="lg">
        <PaymentMethod
          paymentFee={mockPaymentFee}
          paymentMethod={paymentMethod}
          onSelect={handlePaymentSelect}
        />
      </Card>

      <Button
        mt="lg"
        fullWidth
        variant="gradient"
        gradient={{ from: "teal", to: "blue" }}
        onClick={handleConfirmCheckout}
      >
        Konfirmasi Pembayaran
      </Button>
    </div>
  );
};
