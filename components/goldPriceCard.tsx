import { Coins } from "@/types";
import React from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
type Props = {
  coin: Coins;
};
const GoldPriceCard: React.FC<Props> = ({ coin }) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md shadow-gray-200 flex flex-col items-center">
      <div className="flex place-items-center gap-2">
        <h3 className="text-sm md:text-lg font-semibold">{coin.coinName}</h3>
        <span className="text-xs">{coin.type && `(${coin.type})`}</span>
      </div>
      <div className="flex place-items-center">
        {coin.isBull ? (
          <FaCaretUp size={20} color={"#58dd68"} />
        ) : (
          <FaCaretDown size={20} color={"red"} />
        )}
        <p className="text-lg font-medium text-gray-800">
          {Intl.NumberFormat().format(
            parseFloat(parseFloat(coin.price.toString()).toFixed(0))
          )}
        </p>
      </div>
    </div>
  );
};

export default GoldPriceCard;
