import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Day from "./Day";

interface MonthProps {
  year: number;
  month: number;
}

const Month: React.FC<MonthProps> = ({ year, month }) => {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = new Date(year, month, 1).getDay();

  const handleDaySelect = (day: number) => {
    setSelectedDay(day);
  };

  const days = [];
  for (let i = 0; i < startDay; i++) {
    days.push(
      <Box
        key={`empty-${i}`}
        sx={{ height: "100%", border: "1px solid #ccc" }}
      />
    );
  }
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(
      <Day
        key={day}
        day={day}
        isSelected={day === selectedDay}
        onSelect={handleDaySelect}
      />
    );
  }

  return (
    <Box className="month-container">
      <Typography variant="h4" align="center">
        {new Date(year, month).toLocaleString("default", { month: "long" })}{" "}
        {year}
      </Typography>
      <Grid container className="month-grid">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
          <Grid item xs key={index}>
            <Typography variant="subtitle1" align="center">
              {day}
            </Typography>
          </Grid>
        ))}
        {days.map((day, index) => (
          <Grid item xs key={index} className="day-cell">
            {day}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Month;
