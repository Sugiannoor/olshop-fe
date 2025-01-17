import { Card, Image, Group, Radio, Stack, Text } from "@mantine/core";

interface PaymentFee {
  paymentMethod: string;
  paymentName: string;
  paymentImage: string;
  totalFee: string;
}

type PaymentMethodProps = {
  paymentFee: PaymentFee[];
  paymentMethod: string;
  onSelect: (paymentMethod: string) => void;
};

export const PaymentMethod: React.FC<PaymentMethodProps> = ({
  paymentFee,
  paymentMethod,
  onSelect,
}) => {
  return (
    <div>
      <Text size="lg" w={500} mb="md">
        Pilih Metode Pembayaran
      </Text>
      <Radio.Group value={paymentMethod} onChange={onSelect}>
        <Stack>
          {paymentFee.map((method) => (
            <Card key={method.paymentMethod} shadow="sm" radius="md" withBorder>
              <Group>
                <Group>
                  <Image
                    src={method.paymentImage}
                    alt={method.paymentName}
                    width={50}
                    height={50}
                    fit="contain"
                  />
                  <div>
                    <Text size="sm" w={500}>
                      {method.paymentName}
                    </Text>
                    <Text size="xs" color="dimmed">
                      Biaya: Rp {parseInt(method.totalFee).toLocaleString()}
                    </Text>
                  </div>
                </Group>
                <Radio value={method.paymentMethod} />
              </Group>
            </Card>
          ))}
        </Stack>
      </Radio.Group>
    </div>
  );
};
