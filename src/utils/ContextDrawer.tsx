import * as React from "react";
import { DrawerContext } from "./Context";

export const DrawerClick = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <DrawerContext.Provider
      value={{ open, handleDrawerOpen, handleDrawerClose }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
