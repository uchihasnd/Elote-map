import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Rating from "@mui/material/Rating";
import Business from "./Business";
import Client from "./Client";
import { Typography } from "@mui/material";
import { DrawerContext } from "../utils/Context";
import { useContext } from "react";

const drawerWidth = 350;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const DrawerList = (
  <Box sx={{ width: 350 }}>
    <div className="drawer-container font">
      <div>
        <Business />
      </div>
      <div className="margin-top-16">
        <p className="line-height">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto ad
          sint suscipit magni officia iure impedit, nostrum ullam quam minima
          similique asperiores ut odit odio vero consequatur excepturi eius
          officiis.
        </p>
      </div>
      <div className="margin-top-50 margin-top-16">
        <div className="comment margin-top-16">
          <Client />
          <Typography>Calificación</Typography>
          <Rating name="size-medium" defaultValue={2} />
          <p className="margin-top-16 line-height">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            aspernatur, amet repudiandae velit impedit officia totam facilis
            odio repellat debitis placeat dolore, tenetur omnis iusto odit
            dolores. Exercitationem, odio nam!
          </p>
        </div>
      </div>
    </div>
  </Box>
);

export default function PersistentDrawerLeft() {
  const theme = useTheme();

  const drawerContext = useContext(DrawerContext);

  if (!drawerContext) {
    throw new Error("DrawerContext is not provided");
  }

  const { open, handleDrawerClose } = drawerContext;

  return (
    <Box>
      <Drawer
        slotProps={{
          paper: {
            sx: {
              height: "calc(100% - 64px)",
              top: 74,
            },
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {DrawerList}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
