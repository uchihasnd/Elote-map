import { createContext } from "react";

type DrawerProps = {
  open: boolean;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
};

export const DrawerContext = createContext<DrawerProps | null>(null);
