import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Login from "./Login";

export default function ModalLogin() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <a onClick={handleOpen} className="green-text cursor">
        Iniciar sesión
      </a>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
      >
        <Box sx={{ width: 800 }}>
          <div className="modal">
            <h2 id="parent-modal-title" className="center green-text">
              Iniciar sesión
            </h2>
            <div>
              <Login />
              <span>
                ¿Aún no tienes cuenta? <a href="">Crea una aquí</a>.
              </span>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
