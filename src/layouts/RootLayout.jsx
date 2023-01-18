import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <Grid templateColumns="minmax(200px, 300px) 2fr">
      <GridItem bg="blackAlpha.900" minHeight="100vh">
        <span>Sidebar</span>
      </GridItem>
      <GridItem>
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}
