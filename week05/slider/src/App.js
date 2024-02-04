import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>slider
        </h2>
      </div>
      <div className="section-center">
        <article className="activeSlide">
          <img className="person-img" />
          <h4>ali</h4>
          <p className="title">ali</p>
          <p className="text">ali</p>
          <FaQuoteRight className="icon" />
        </article>
        <button className="prev" aria-label="prev">
          <FiChevronLeft />
        </button>
        <button className="next" aria-label="next">
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
