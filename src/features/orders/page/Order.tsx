import { Card, Group, Badge, Divider } from "@mantine/core";

interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

interface OrderData {
  id: number;
  address: string;
  payment_method: string;
  total_price: number;
  status: string;
  created_at: string;
  items: OrderItem[];
}

export const Order = () => {
  // Data dummy untuk beberapa pesanan
  const orders: OrderData[] = [
    {
      id: 1,
      address: "Jl. Kebon Jeruk No. 10, Jakarta",
      payment_method: "Bank Transfer",
      total_price: 250000,
      status: "completed",
      created_at: "2025-01-11T10:30:00",
      items: [
        { id: 1, name: "Produk A", quantity: 2, price: 50000 },
        { id: 2, name: "Produk B", quantity: 1, price: 75000 },
      ],
    },
    {
      id: 2,
      address: "Jl. Melati No. 20, Bandung",
      payment_method: "Credit Card",
      total_price: 150000,
      status: "pending",
      created_at: "2025-01-10T14:15:00",
      items: [
        { id: 1, name: "Produk C", quantity: 1, price: 100000 },
        { id: 2, name: "Produk D", quantity: 2, price: 25000 },
      ],
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 rounded shadow-md space-y-8">
      {orders.map((order, index) => (
        <div key={order.id}>
          <p className="mb-4 font-bold">Pesanan Ke {index + 1}</p>

          {/* Order Info */}
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Group>
              <p className="text-sm">Order Date</p>
              <p>{order.created_at}</p>
            </Group>
            <Group className="mt-2">
              <p className="text-sm">Status</p>
              <Badge color={order.status === "completed" ? "green" : "orange"}>
                {order.status}
              </Badge>
            </Group>
            <Divider className="my-2" />
            <Group>
              <p className="font-medium">Total Price</p>
              <p className="font-medium">
                Rp {order.total_price.toLocaleString()}
              </p>
            </Group>
          </Card>

          {/* Shipping Info */}
          <Card shadow="sm" p="lg" radius="md" withBorder className="mt-6">
            <p className="mb-4">Shipping Information</p>
            <p>
              <strong>Address:</strong> {order.address}
            </p>
            <p>
              <strong>Payment Method:</strong> {order.payment_method}
            </p>
          </Card>

          {/* Items List */}
          <Card shadow="sm" p="lg" radius="md" withBorder className="mt-6">
            <p className="mb-4">Items Purchased</p>
            {order.items.map((item) => (
              <Group key={item.id} className="mb-2">
                <div>
                  <p>{item.name}</p>
                  <p className="text-sm">
                    {item.quantity} x Rp {item.price.toLocaleString()}
                  </p>
                </div>
                <p>Rp {(item.quantity * item.price).toLocaleString()}</p>
              </Group>
            ))}
          </Card>
        </div>
      ))}
    </div>
  );
};
