import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import CalendarCell from "./CalendarCell";

interface CalendarGridProps {
  currentDate: Date;
  onDateClick: (date: Date) => void;
}

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CalendarGrid: React.FC<CalendarGridProps> = ({
  currentDate,
  onDateClick,
}) => {
  const startOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const endOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );
  const startDay = startOfMonth.getDay();
  const totalDays = endOfMonth.getDate();

  const days = [];
  for (let i = 1; i <= totalDays; i++) {
    days.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), i));
  }

  return (
    <Box sx={{ marginTop: 2 }}>
      <Grid container spacing={1}>
        {dayNames.map((day) => (
          <Grid item xs={1} key={day}>
            <Typography
              variant="body2"
              align="center"
              sx={{ fontWeight: "bold" }}
            >
              {day}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={1}>
        {Array.from(Array(startDay).keys()).map((_, index) => (
          <Grid item xs={1} key={`empty-${index}`} />
        ))}
        {days.map((date) => (
          <CalendarCell
            key={date.toDateString()}
            date={date}
            onClick={onDateClick}
          />
        ))}
      </Grid>
    </Box>
  );
};
export default CalendarGrid;
