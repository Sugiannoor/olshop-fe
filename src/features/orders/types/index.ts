interface PaymentFee {
  paymentMethod: string;
  paymentName: string;
  paymentImage: string;
  totalFee: string;
}

export type PaymentMethod = {
  paymentFee: PaymentFee[];
  responseCode: string;
  responseMessage: string;
};

export type CheckoutResponse = {
  status: string;
  message: string;
  paymentUrl: string;
  orderId: number;
  merchand_order_id: string;
};
