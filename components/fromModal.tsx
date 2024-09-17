import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Currency } from "@/types";
import { ListItem, Radio } from "@mui/material";

type Props = {
  open: boolean;
  handleClose: () => void;
  currencies: Currency[];
  setCurrencyFrom: (currencyCode: string) => void;
  currencyFrom: string;
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const FromModal: React.FC<Props> = ({
  handleClose,
  open,
  currencies,
  setCurrencyFrom,
  currencyFrom,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrencyFrom(event.target.value); // Update the currency in parent component
    handleClose(); // Close the modal after selection
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          {currencies.map((currency) => {
            return (
              <ListItem key={currency.code} disablePadding>
                <div className="flex justify-between place-items-center w-full">
                  <Radio
                    value={currency.code}
                    onChange={handleChange}
                    name="radio-buttons"
                    checked={currency.code === currencyFrom}
                  />
                  <div className="text-left"> {currency.name}</div>
                  <div>{currency.price}</div>
                </div>
              </ListItem>
            );
          })}
        </Box>
      </Fade>
    </Modal>
  );
};

export default FromModal;
