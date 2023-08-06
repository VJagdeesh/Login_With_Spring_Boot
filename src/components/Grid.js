import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Login from "./Login-UI/Login";
import Register from "./Register-UI/Register";

export default function Grid() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Login" value="1" />
            <Tab label="Register" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Login />
        </TabPanel>
        <TabPanel value="2">
          <Register />
        </TabPanel>
      </TabContext>
    </Box>
  );
}