import React, { useState } from "react";
import {
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import EventModal from "./EventModal";
import EventSidebar from "./EventSidebar";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#2b2b2b",
      paper: "#424242",
    },
    text: {
      primary: "#fff",
      secondary: "#b0bec5",
    },
  },
});

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    // setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedDate(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ display: "flex", height: "100vh" }}>
        <EventSidebar />
        <Box sx={{ flexGrow: 1, padding: 2 }}>
          <CalendarHeader
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
          />
          <CalendarGrid
            currentDate={currentDate}
            onDateClick={handleDateClick}
          />
        </Box>
      </Container>
      <EventModal open={modalOpen} onClose={closeModal} date={selectedDate} />
    </ThemeProvider>
  );
};

export default Calendar;
