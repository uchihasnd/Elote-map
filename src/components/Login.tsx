import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Login() {
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1 } }}
      noValidate
      autoComplete="off"
      className="login"
    >
      <TextField required id="user" label="Usuario" variant="outlined" />
      <TextField required id="password" label="Contraseña" variant="outlined" />
      <Button type="submit" className="green-button" id="green-button">
        Enviar
      </Button>
    </Box>
  );
}
