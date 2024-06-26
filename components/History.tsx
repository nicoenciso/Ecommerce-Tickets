import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import PurchaseItem from "./PurchaseItem";
import { CartProduct } from "@/context/CartContext";

export type Purchase = {
  userId: string;
  products: CartProduct[];
  prices: [];
  totalPrice: number;
  date: string;
};

export default function History() {
  const [purchaseArray, setPurchaseArray] = useState<Purchase[]>([]);
  const { data: session }: any = useSession();

  useEffect(() => {
    axios
      .get(`/api/purchase?userId=${session?.user.id}`)
      .then((res) => setPurchaseArray(res.data.purchase));
  }, [session]);

  return (
    <div>
      <h1 className="bg-black text-white w-max p-3 border-b-4 border-r-4 border-green-400 text-3xl sl:text-center m-6">
        Purchase History
      </h1>
      {purchaseArray.map((p: Purchase, index) => {
        return (
          <div
            key={index}
            className="justify-between mb-6 bg-transparent p-6 sm:flex sm:justify-center"
          >
            <PurchaseItem purchase={p} prices={p.prices} />
            <p className="max-w-max h-min p-3 m-auto text-xl font-bold shadow shadow-black text-pink-200 bg-pink-800 sm:m-0">
              TOTAL ${p.totalPrice}
            </p>
          </div>
        );
      })}
    </div>
  );
}
