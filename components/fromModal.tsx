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
  open: boolean;
  handleClose: () => void;
  currencies: Currency[];
  setCurrencyFrom: (currencyCode: string) => void;
  currencyFrom: string;
};

const FromModal: React.FC<Props> = ({
  handleClose,
  open,
  currencies,
  setCurrencyFrom,
}) => {
  return (
    <Dialog scroll="paper" onClose={handleClose} open={open}>
      <DialogTitle>Select Base Currency</DialogTitle>
      <DialogContent style={{ maxHeight: "400px" }}>
        <List sx={{ pt: 0 }}>
          {currencies.map((currency) => (
            <ListItem
              onClick={() => {
                setCurrencyFrom(currency.code);
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

export default FromModal;
