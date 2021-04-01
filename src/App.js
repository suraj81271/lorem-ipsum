import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount > 8) {
      amount = 8;
    }
    if (amount <= 0) {
      amount = 1;
    }
    setText(data.slice(0, amount));
  };
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum? let's generate here</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount"> paragraphs:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, id) => {
          return <p key={id}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
