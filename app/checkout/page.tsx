import QRCode from "react-qr-code";
import { encodeURL } from "@solana/pay";
import { PublicKey } from "@solana/web3.js";
import BigNumber from "bignumber.js";

export default function Checkout() {
  const recipient = new PublicKey(process.env.NEXT_PUBLIC_MERCHANT_WALLET!);
  const amount = new BigNumber(0.1);

  const url = encodeURL({
    recipient,
    amount,
    label: "Crypto Coffee Shop",
    message: "Payment for coffee order",
  });

  return (
    <div>
      <h1>Checkout</h1>
      <QRCode value={url.toString()} size={256} />
      <p>Scan to pay {amount.toString()} Sol</p>
    </div>
  );
}
