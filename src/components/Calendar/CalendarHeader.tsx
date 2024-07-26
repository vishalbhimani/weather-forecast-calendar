import React from "react";
import { Box, IconButton, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TodayIcon from "@mui/icons-material/Today";

interface CalendarHeaderProps {
  currentDate: Date;
  setCurrentDate: (date: Date) => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentDate,
  setCurrentDate,
}) => {
  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton onClick={handlePrevMonth}>
          <ArrowBackIcon />
        </IconButton>
        <IconButton onClick={handleNextMonth}>
          <ArrowForwardIcon />
        </IconButton>
        <Button
          variant="outlined"
          onClick={handleToday}
          startIcon={<TodayIcon />}
        >
          Today
        </Button>
      </Box>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        {currentDate.toLocaleString("default", {
          month: "long",
          year: "numeric",
        })}
      </Typography>
    </Box>
  );
};

export default CalendarHeader;
