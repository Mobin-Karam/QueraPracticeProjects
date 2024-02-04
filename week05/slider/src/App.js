import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);

  setTimeout(() => {
    document.querySelector("article").classList.remove("article");
    document.querySelector("article").classList.add("activeSlide");
  }, 1);

  // Prev Article
  function prevArticle(event) {
    document.querySelector("article").classList.add("nextSlide");
    console.log("Prev");
    setTimeout(() => {
      setCounter(counter - 1);
      if (counter <= 0) setCounter((counter = 3));
    }, 300);
    setInterval(() => {
      document.querySelector("article").classList.remove("article");
      document.querySelector("article").classList.add("activeSlide");
    }, 300);
  }

  // Next Article
  function nextArticle(event) {
    console.log("Next");
    document.querySelector("article").classList.add("lastSlide");
    setTimeout(() => {
      setCounter(counter + 1);
      if (counter >= 3) setCounter((counter = 0));
    }, 300);
    setInterval(() => {
      document.querySelector("article").classList.remove("article");
      document.querySelector("article").classList.add("activeSlide");
    }, 300);
  }

  console.log(counter);
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>slider
        </h2>
      </div>
      <div className="section-center">
        {counter === 0 ? (
          <article key={data[0].id} className="article">
            <img
              className="person-img"
              src={data[0].image}
              alt={data[0].name}
            />
            <h4>{data[0].name}</h4>
            <p className="title">{data[0].title}</p>
            <p className="text">{data[0].quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        ) : (
          <article key={data[counter].id} className="article">
            <img
              className="person-img"
              src={data[counter].image}
              alt={data[counter].name}
            />
            <h4>{data[counter].name}</h4>
            <p className="title">{data[counter].title}</p>
            <p className="text">{data[counter].quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        )}
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
