import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
// import Button from "@mui/material/Button";
import FormNewAccount from "./FormNewAccount";

export default function ModalNewAccount() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <a onClick={handleOpen} className="cursor blue-link">
        Crea una aquí
      </a>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ width: 600 }}>
          <div className="modal">
            <h2 id="child-modal-title" className="center green-text">
              Crear tu cuenta
            </h2>
            {/* <h2 id="child-modal-title" className="center green-text">
              Crear tu cuenta
            </h2>
            <p id="child-modal-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <Button onClick={handleClose}>Close Child Modal</Button> */}
            <FormNewAccount />
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
