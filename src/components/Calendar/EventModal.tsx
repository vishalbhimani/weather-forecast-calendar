import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

interface EventModalProps {
  open: boolean;
  onClose: () => void;
  date: Date | null;
}

const EventModal: React.FC<EventModalProps> = ({ open, onClose, date }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Event on {date?.toLocaleDateString()}</DialogTitle>
      <DialogContent>
        <Typography>Event details go here.</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EventModal;
