import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Grid, TextareaAutosize } from "@mui/material";
import BusinessList from "./BusinessList";

export default function BusinessInfo() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid size={4}>
          <BusinessList />
        </Grid>
        <Grid size={6}>
          <div className="flex-center">
            <div className="width-400 center">
              <h2 className="green-text center margin-top-50">Información</h2>
              <Box
                component="form"
                sx={{ flexGrow: 1 }}
                noValidate
                autoComplete="off"
                className="login margin-top-50"
              >
                <Grid container rowSpacing={2}>
                  <Grid size={12}>
                    <TextField
                      id="business_name"
                      label="Nombre"
                      variant="outlined"
                      slotProps={{
                        input: {
                          readOnly: true,
                        },
                      }}
                      className="width-100"
                    />
                  </Grid>
                  <Grid size={12}>
                    <TextareaAutosize
                      minRows={3}
                      placeholder="Descripción"
                      className="width-100 font padding-8"
                      readOnly
                    />
                  </Grid>
                  <Grid size={12}>
                    <TextField
                      id="address"
                      label="Dirección"
                      variant="outlined"
                      slotProps={{
                        input: {
                          readOnly: true,
                        },
                      }}
                      className="width-100"
                    />
                  </Grid>
                  <Grid size={6}>
                    <Button type="submit" className="green-button center">
                      Editar
                    </Button>
                  </Grid>
                  <Grid size={6}>
                    <Button type="submit" color="error" className="center">
                      Eliminar
                    </Button>
                  </Grid>
                  <Grid size={12}>
                    <Button type="submit" className="center">
                      Ver comentarios
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
