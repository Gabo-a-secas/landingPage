import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div className="container">
        <div className="row d-flex justify-content-center gap-3">
          <Card
            title="Card 1"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa, ipsam,
                    eligendi, in quo sunt possimus non incidunt odit vero aliquid
                    similique quaerat nam nobis illo aspernatur vitae fugiat numquam
                    repellat."
            image="https://www.gnrgindustrial.com/images/blog/1.jpg"
            linkUrl="#"
            linkLabel="Saber más"
          />
          <Card
            title="Card 2"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa, ipsam,
                    eligendi, in quo sunt possimus non incidunt odit vero aliquid
                    similique quaerat nam nobis illo aspernatur vitae fugiat numquam
                    repellat."
            image="https://www.gnrgindustrial.com/images/blog/1.jpg"
            linkUrl="#"
            linkLabel="Detalles"
          />
          <Card
            title="Card 3"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa, ipsam,
                    eligendi, in quo sunt possimus non incidunt odit vero aliquid
                    similique quaerat nam nobis illo aspernatur vitae fugiat numquam
                    repellat."
            image="https://www.gnrgindustrial.com/images/blog/1.jpg"
            linkUrl="#"
            linkLabel="Ver más"
          />
          <Card
            title="Card 4"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa, ipsam,
                    eligendi, in quo sunt possimus non incidunt odit vero aliquid
                    similique quaerat nam nobis illo aspernatur vitae fugiat numquam
                    repellat."
            image="https://www.gnrgindustrial.com/images/blog/1.jpg"
            linkUrl="#"
            linkLabel="Ir"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;