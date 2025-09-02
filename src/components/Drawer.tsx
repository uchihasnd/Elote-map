import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import { IconButton } from "@mui/material";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 350 }}>
      <div className="drawer-container font">
        <div>
          <h3>Nombre Negocio</h3>
        </div>
        <div className="margin-top-16">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto ad
            sint suscipit magni officia iure impedit, nostrum ullam quam minima
            similique asperiores ut odit odio vero consequatur excepturi eius
            officiis.
          </p>
        </div>
        <div className="comments-section margin-top-16">
          <div className="comment margin-top-16">
            <span className="green-text">Username</span>
            <span>Review</span>
            <p className="margin-top-16">
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

  return (
    <div className="font">
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon color="action" />
      </Button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        hideBackdrop={true}
        slotProps={{
          paper: {
            sx: {
              height: "calc(100% - 64px)",
              top: 68,
            },
          },
        }}
      >
        <IconButton onClick={toggleDrawer(false)} className="close-btn">
          <ChevronLeftIcon />
        </IconButton>
        <Divider />
        {DrawerList}
      </Drawer>
    </div>
  );
}
