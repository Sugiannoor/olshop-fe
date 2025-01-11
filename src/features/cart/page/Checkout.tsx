import { useState } from "react";
import {
  Card,
  Group,
  Text,
  Button,
  Input,
  Select,
  Divider,
} from "@mantine/core";

const mockCart = [
  { id: 1, name: "Produk A", price: 50000, quantity: 2 },
  { id: 2, name: "Produk B", price: 75000, quantity: 1 },
];

export const Checkout = () => {
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const totalPrice = mockCart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleSave = () => {
    if (!address || !paymentMethod) {
      alert("Silakan lengkapi semua informasi!");
      return;
    }
    alert("Pesanan berhasil disimpan!");
    // Implementasikan logika penyimpanan ke server/API
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-50 rounded shadow-md">
      <p className="mb-4 font-bold">Checkout</p>

      {/* List Barang */}
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Text w={500} size="lg" className="mb-4">
          Detail Pesanan
        </Text>
        {mockCart.map((item) => (
          <Group key={item.id} className="mb-2">
            <div>
              <Text>{item.name}</Text>
              <Text size="sm" color="dimmed">
                {item.quantity} x Rp {item.price.toLocaleString()}
              </Text>
            </div>
            <Text w={500}>
              Rp {(item.price * item.quantity).toLocaleString()}
            </Text>
          </Group>
        ))}
        <Divider className="my-2" />
        <Group>
          <Text w={700}>Total</Text>
          <Text w={700}>Rp {totalPrice.toLocaleString()}</Text>
        </Group>
      </Card>

      {/* Form Alamat */}
      <Card shadow="sm" p="lg" radius="md" withBorder className="mt-6">
        <Text w={500} size="lg" className="mb-4">
          Informasi Pengiriman
        </Text>
        <Input.Wrapper label="Alamat" required>
          <Input
            placeholder="Masukkan alamat lengkap"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Input.Wrapper>
        <Select
          className="mt-4"
          label="Metode Pembayaran"
          placeholder="Pilih metode pembayaran"
          data={[
            { value: "credit_card", label: "Kartu Kredit" },
            { value: "bank_transfer", label: "Transfer Bank" },
            { value: "cash_on_delivery", label: "Bayar di Tempat" },
          ]}
          value={paymentMethod}
          onChange={() => setPaymentMethod}
          required
        />
      </Card>

      {/* Tombol Simpan */}
      <Button
        fullWidth
        className="mt-6"
        onClick={handleSave}
        variant="filled"
        color="green"
      >
        Simpan Pesanan
      </Button>
    </div>
  );
};
