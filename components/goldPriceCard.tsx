import { Coins } from "@/types";
import React from "react";
type Props = {
  coin: Coins;
};
const GoldPriceCard: React.FC<Props> = ({ coin }) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md shadow-gray-200 flex flex-col items-center">
      <h3 className="text-lg font-semibold">{coin.coinName}</h3>
      <p className="text-lg font-medium text-gray-800">
        {Intl.NumberFormat().format(
          parseFloat(parseFloat(coin.price.toString()).toFixed(0))
        )}{" "}
        Rial
      </p>
    </div>
  );
};

export default GoldPriceCard;
