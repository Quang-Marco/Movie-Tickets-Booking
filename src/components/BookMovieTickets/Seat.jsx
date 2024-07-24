import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deselectSeat, selectSeat } from "../../redux/seatSlice";

const Seat = ({ id, status }) => {
  const dispatch = useDispatch();
  const { selectedSeats } = useSelector((state) => state.seatSlice);
  const isSelected = selectedSeats.includes(id);

  const handleClick = () => {
    if (isSelected) {
      dispatch(deselectSeat(id));
    } else {
      dispatch(selectSeat(id));
    }
  };

  return (
    <div
      className={`seat ${status} ${isSelected ? "selected" : ""}`}
      onClick={handleClick}
    >
      {id}
    </div>
  );
};

export default Seat;
