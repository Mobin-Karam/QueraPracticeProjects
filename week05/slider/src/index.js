import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// {data.map((p, index) => {
//     if (counter === index) {
//       return (
//         <article key={p.id} className="article activeSlide">
//           <img className="person-img" src={p.image} alt={p.name} />
//           <h4>{p.name}</h4>
//           <p className="title">{p.title}</p>
//           <p className="text">{p.quote}</p>
//           <FaQuoteRight className="icon" />
//         </article>
//       );
//     } else {
//       return (
//         <article
//           key={p.id}
//           className={true ? "article nextSlide" : "article lastSlide"}
//         >
//           <img className="person-img" src={p.image} alt={p.name} />
//           <h4>{p.name}</h4>
//           <p className="title">{p.title}</p>
//           <p className="text">{p.quote}</p>
//           <FaQuoteRight className="icon" />
//         </article>
//       );
//     }
//   })}