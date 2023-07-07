import React from "react";
import EmailForm from "./EmailForm";
import "./App.css";

function App() {
  return (
    <>
      <EmailForm />
      <article style={{ marginBlock: "1rem" }}>
        Tripadvisor, Inc. is an American company that operates online travel
        agencies, comparison shopping websites, and mobile apps with
        user-generated content. Its namesake brand, Tripadvisor.com, operates in
        40 countries and 20 languages, and features approximately 1 billion
        reviews and opinions on roughly 8 million establishments. The company's
        other brands include Bokun.io, Cruise Critic, FlipKey, TheFork, Holiday
        Lettings, Housetrip, Jetsetter, Niumba, SeatGuru, and Viator. The
        company is headquartered in Needham, Massachusetts. In 2022, Tripadvisor
        earned 35% of its revenues from Expedia Group and Booking Holdings and
        their subsidiaries, primarily for pay-per-click advertising.
      </article>
      <EmailForm />
    </>
  );
}

export default App;
