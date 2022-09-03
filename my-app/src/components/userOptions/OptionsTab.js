import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import History from "./History";
import Favorites from "./Favorites";
import WordList from "./WordList";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function UserOptions({ setSelectedWord }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [page, setPage] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);

  return (
    <Box sx={{ width: "100%" }}>
      <div
        onClick={() => {
          setSelectedWord("hello");
        }}
      >
        Click from hello
      </div>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Word List" {...a11yProps(0)} />
          <Tab label="History" {...a11yProps(1)} />
          <Tab label="Favorites" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <WordList
          page={page}
          setPage={setPage}
          numberOfPages={numberOfPages}
          setNumberOfPages={setNumberOfPages}
          setSelectedWord={setSelectedWord}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <History
          page={page}
          setPage={setPage}
          numberOfPages={numberOfPages}
          setNumberOfPages={setNumberOfPages}
          setSelectedWord={setSelectedWord}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Favorites
          page={page}
          setPage={setPage}
          numberOfPages={numberOfPages}
          setNumberOfPages={setNumberOfPages}
          setSelectedWord={setSelectedWord}
        />
      </TabPanel>
    </Box>
  );
}
