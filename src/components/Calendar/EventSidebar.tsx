import React from "react";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const events = [
  { title: "humidity - 70", date: "Apr 29, 2023" },
  { title: "humidity - 97", date: "Apr 29, 2023" },
];

const EventSidebar: React.FC = () => {
  return (
    <Box
      sx={{
        width: 250,
        padding: 2,
        backgroundColor: "#2b2b2b",
        height: "100vh",
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        City Drop down, and search Btn
      </Typography>
      <List>
        {events.map((event, index) => (
          <ListItem
            key={index}
            component={Paper}
            sx={{ marginBottom: 1, backgroundColor: "#43a047" }}
          >
            <ListItemText primary={event.title} secondary={event.date} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default EventSidebar;
