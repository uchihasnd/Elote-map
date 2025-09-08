import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

export default function FormNewAccount() {
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1 } }}
      noValidate
      autoComplete="off"
      className="login"
    >
      <TextField required id="email" label="Correo" variant="outlined" />
      <TextField required id="user" label="Usuario" variant="outlined" />
      <TextField required id="password" label="Contraseña" variant="outlined" />
      <FormLabel id="user-type">Tipo de usuario</FormLabel>
      <RadioGroup
        aria-labelledby="-radio-buttons-group-label"
        defaultValue="cliente"
        name="radio-buttons-group"
      >
        <FormControlLabel value="cliente" control={<Radio />} label="Cliente" />
        <FormControlLabel
          value="propietario"
          control={<Radio />}
          label="Propietario"
        />
      </RadioGroup>
      <Button type="submit" className="green-button" id="green-button">
        Crear
      </Button>
    </Box>
  );
}
