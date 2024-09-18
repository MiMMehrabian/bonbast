import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Flag from "react-world-flags";

import { Currency } from "@/types";

type Props = {
  openTo: boolean;
  handleClose: () => void;
  currencies: Currency[];
  setCurrencyTo: (currencyCode: string) => void;
  currencyTo: string;
};

const ToModal: React.FC<Props> = ({
  handleClose,
  openTo,
  currencies,
  setCurrencyTo,
}) => {
  return (
    <Dialog scroll="paper" onClose={handleClose} open={openTo}>
      <DialogTitle>Select Target Currency</DialogTitle>
      <DialogContent style={{ maxHeight: "400px" }}>
        <List sx={{ pt: 0 }}>
          {currencies.map((currency) => (
            <ListItem
              onClick={() => {
                setCurrencyTo(currency.code);
                handleClose();
              }}
              disableGutters
              key={currency.code}
            >
              <ListItemButton className="gap-x-10">
                <ListItemAvatar>
                  <Flag code={currency.countryCode} width={15} height={15} />
                </ListItemAvatar>
                <ListItemText primary={currency.name} />
                <ListItemText className="text-right" primary={currency.price} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default ToModal;
