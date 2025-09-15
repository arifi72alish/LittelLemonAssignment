import React, { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Booking from "./Booking";
import ConfirmedBooking from "./ConfirmedBooking";
import Header from "./Header";
import food1 from "../images/food1.webp"
import food2 from "../images/food2.webp"
import food3 from "../images/food3.webp"



const Main = () => {
  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };

  const submitAPI = function (formData) {
    return true;
  };

  const initialState = { availableTimes: fetchAPI(new Date()) };
  const [state, dispatch] = useReducer(updateTimes, initialState);

  function updateTimes(state, date) {
    return { availableTimes: fetchAPI(new Date(date)) };
  }

  const navigate = useNavigate();
  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  }

  const FoodSection = () => (
    <section style={{ padding: "50px 10%", backgroundColor: "#368858ff" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Our Special Dishes</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        <div style={{ background: "white", padding: "20px", borderRadius: "12px", textAlign: "center" }}>
          <img src={food2} alt="Greek Salad" style={{ width: "100%", borderRadius: "12px" }} />
          <h3>Greek Salad</h3>
          <p>Fresh vegetables, feta cheese, and olives.</p>
        </div>
        <div style={{ background: "white", padding: "20px", borderRadius: "12px", textAlign: "center" }}>
          <img src={food1} alt="Bruschetta" style={{ width: "100%", borderRadius: "12px" }} />
          <h3>Bruschetta</h3>
          <p>Grilled bread with tomatoes, garlic, and basil.</p>
        </div>
        <div style={{ background: "white", padding: "20px", borderRadius: "12px", textAlign: "center" }}>
          <img src={food3} alt="Lemon Dessert" style={{ width: "100%", borderRadius: "12px" }} />
          <h3>Lemon Dessert</h3>
          <p>A refreshing lemony treat to end your meal.</p>
        </div>
      </div>
    </section>
  );

  return (
    <main>
      <Routes>
        <Route path="/" element={<><Header /><FoodSection /></>} />
        <Route
          path="/booking"
          element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm} />}
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};

export default Main;
