import { Box, Button, Grid, Rating } from "@mui/material";
import Business from "./Business";

export default function ModalComments() {
  return (
    <>
      <h2 className="green-text center margin-top-50">Mis comentarios</h2>
      <div className="center margin-top-50 width-600 padding-60">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container rowSpacing={3}>
            <Grid size={6}>
              <Business />
            </Grid>
            <Grid size={6}>
              <Rating defaultValue={2} />
            </Grid>
            <Grid size={12}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit autem cupiditate consequatur quaerat architecto,
                voluptatum magnam? Natus sapiente, dolorum nostrum quas minus
                dolore, maiores voluptas consectetur, dignissimos nulla dolorem
                assumenda!
              </p>
            </Grid>
            <Grid size={6}>
              <Button variant="contained" className="green-background">
                Editar
              </Button>
            </Grid>
            <Grid size={6}>
              <Button variant="contained" color="error">
                Eliminar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
