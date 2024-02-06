import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);

  // Prev Article
  function prevArticle() {
    setCounter((counter - 1 + data.length) % data.length);
    // setCounter(counter - 1);
    // if (counter <= 0) setCounter((counter = 3));
  }

  // Next Article
  function nextArticle() {
    setCounter((counter + 1) % data.length);
    // setCounter(counter + 1);
    // if (counter >= 3) setCounter((counter = 0));
  }

  // activeSlide , lastSlide , nextSlide

  console.log(counter);
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>slider
        </h2>
      </div>
      <div className="section-center">
        {data.map((person, personIndex) => {
          //  check to see if the current index is equal to the counter state
          let position = "nextSlide";
          if (personIndex === counter) {
            position = "activeSlide";
          }
          if (
            personIndex === counter - 1 ||
            (counter === 0 && personIndex === data.length - 1)
          ) {
            position = "lastSlide";
          }

          // Return the slide element with the assigned class
          return (
            <article key={person.id} className={position}>
              <img
                src={person.image}
                alt={person.name}
                className="person-img"
              />
              <h4>{person.name}</h4>
              <p className="title">{person.title}</p>
              <p className="text">{person.quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" aria-label="prev" onClick={prevArticle}>
          <FiChevronLeft />
        </button>
        <button className="next" aria-label="next" onClick={nextArticle}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
