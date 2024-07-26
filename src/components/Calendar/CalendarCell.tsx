import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

interface CalendarCellProps {
  date: Date;
  onClick: (date: Date) => void;
}

const CalendarCell: React.FC<CalendarCellProps> = ({ date, onClick }) => {
  console.log("Hi");

  return (
    <Grid item xs={1}>
      <Paper
        onClick={() => onClick(date)}
        sx={{
          cursor: "pointer",
          padding: 1,
          textAlign: "center",
          height: "100px",
          backgroundColor:
            date.getDay() === 0 || date.getDay() === 6 ? "#3b3b3b" : "#2b2b2b",
          color:
            date.getDay() === 0 || date.getDay() === 6 ? "#ff8a65" : "inherit",
        }}
      >
        <Typography variant="body2">{date.getDate()}</Typography>
      </Paper>
    </Grid>
  );
};

export default CalendarCell;
