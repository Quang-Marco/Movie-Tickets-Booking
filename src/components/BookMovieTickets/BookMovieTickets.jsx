import React, { useState } from "react";
import "./bookMovieTickets.css";
import Seat from "./Seat";
import { useDispatch, useSelector } from "react-redux";
import { resetSeats } from "../../redux/seatSlice";

const BookMovieTickets = () => {
  const { seats, selectedSeats } = useSelector((state) => state.seatSlice);
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const selectedSeatDetails = seats.filter((seat) =>
    selectedSeats.includes(seat.id)
  );
  const totalPrice = selectedSeatDetails.reduce(
    (total, seat) => total + seat.price,
    0
  );

  const handleBuyTicket = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      dispatch(resetSeats());
    }, 2000);
  };

  const renderRow = (rowLabel) => {
    return (
      <div className="seat-row">
        {seats
          .filter((seat) => seat.id.startsWith(rowLabel))
          .map((seat) => (
            <Seat key={seat.id} id={seat.id} status={seat.status} />
          ))}
      </div>
    );
  };

  return (
    <div className="seat-layout py-8 text-white">
      <div className="screen">SCREEN</div>
      {renderRow("A")}
      {renderRow("B")}
      {renderRow("C")}
      {renderRow("D")}
      {renderRow("E")}
      {renderRow("F")}
      {renderRow("G")}
      {renderRow("H")}
      <div className="legend">
        <div className="legend-item reserved">Reserved Seat</div>
        <div className="legend-item selected">Selected Seat</div>
        <div className="legend-item regular">Regular Seat</div>
        <div className="legend-item vip">VIP Seat</div>
        <div className="legend-item sweetbox">Sweetbox Seat</div>
      </div>
      <div className="selected-seats space-y-3 mt-5 font-bold text-lg">
        <h3 className="text-center">Selected Seat:</h3>
        <div className="selected-seats-row flex items-center justify-center">
          {selectedSeatDetails.map((seat) => (
            <div
              key={seat.id}
              className="selected-seat rounded-md bg-gray-400 text-black mx-2 px-3 py-1"
            >
              {seat.id} - {seat.price}₫
            </div>
          ))}
        </div>
        <div className="total-price text-center space-y-3">
          <h3 className="">Total price: {totalPrice}₫</h3>
          <button onClick={handleBuyTicket} className="buy-ticket">
            Buy Ticket
          </button>
          {showPopup && (
            <div className="popup">
              <p>✅Buy tickets successfully!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookMovieTickets;
