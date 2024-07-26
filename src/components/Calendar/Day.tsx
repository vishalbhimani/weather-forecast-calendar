import React from "react";
import { Box } from "@mui/material";

interface DayProps {
  day: number;
  isSelected: boolean;
  onSelect: (day: number) => void;
}

const Day: React.FC<DayProps> = ({ day, isSelected, onSelect }) => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: isSelected ? "lightblue" : "white",
        cursor: "pointer",
      }}
      onClick={() => onSelect(day)}
    >
      {day}
    </Box>
  );
};

export default Day;
