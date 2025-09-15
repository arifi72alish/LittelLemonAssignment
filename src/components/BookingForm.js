import React, { useState } from "react";

const BookingForm = ({ submitForm, dispatch, availableTimes }) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(e);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    if (id === "book-date") dispatch(value);
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="book-date">Choose Date</label>
              <input
                id="book-date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="book-time">Choose Time</label>
              <select
                id="book-time"
                value={formData.time}
                onChange={handleChange}
                required
              >
                <option value="">Select a Time</option>
                {availableTimes.availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="book-guests">Number of Guests</label>
              <input
                id="book-guests"
                type="number"
                min="1"
                max="10"
                placeholder="0"
                value={formData.guests}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="book-occasion">Occasion</label>
              <select
                id="book-occasion"
                value={formData.occasion}
                onChange={handleChange}
                required
              >
                <option value="">Select an Option</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </select>
            </div>

            <div>
              <input
                type="submit"
                value="Make Your Reservation"
                aria-label="Make Your Reservation"
              />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
