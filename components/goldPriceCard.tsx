import { Coins } from "@/types";
import { CardContent, Typography } from "@mui/material";
import React from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
type Props = {
  coin: Coins;
};
const GoldPriceCard: React.FC<Props> = ({ coin }) => {
  return (
    <CardContent className="flex flex-col justify-center place-items-center shadow-lg rounded-lg">
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        <h3 className="text-sm md:text-lg font-semibold">{coin.coinName}</h3>
      </Typography>
      <Typography variant="h5" component="div"></Typography>
      <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
        <span className="text-xs">{coin.type && `(${coin.type})`}</span>
      </Typography>
      <Typography variant="body2">
        <div className="flex place-items-center">
          {coin.isBull ? (
            <FaCaretUp size={20} color={"#58dd68"} />
          ) : (
            <FaCaretDown size={20} color={"red"} />
          )}
          <p className="text-lg font-medium text-gray-800 flex gap-2 justify-center place-items-center">
            {Intl.NumberFormat().format(
              parseFloat(parseFloat(coin.price.toString()).toFixed(0))
            )}
            <span className="text-xs">{coin.unit}</span>
          </p>
        </div>
      </Typography>
    </CardContent>
  );
};

export default GoldPriceCard;
