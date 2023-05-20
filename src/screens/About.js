import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      <Nav />
      <div className="card container about">
        <div
          className="row g-0"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="col-md-4">
            <img
              src="https://ak7.picdn.net/shutterstock/videos/26959207/thumb/4.jpg?ip=x480"
              style={{ height: "18rem" }}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title" style={{ textAlign: "center" }}>
                About
              </h3>
              <p className="card-text">
                Hey, My name is Priyanka Parekh. <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                voluptas sequi atque expedita quidem excepturi ea laudantium
                blanditiis saepe soluta, eos deserunt quibusdam, doloremque
                quisquam unde reiciendis. Molestias explicabo iure deserunt
                corrupti accusantium? Asperiores, commodi vitae non accusamus
                explicabo nisi iure eos autem. Autem reprehenderit nesciunt unde
                eos vero repellendus, dignissimos ratione exercitationem, a
                totam nam veritatis consequatur porro molestiae accusantium
                facilis ad omnis! Debitis dolore earum vitae commodi nemo
                maiores perspiciatis laborum ullam, dolorum neque, perferendis
                placeat distinctio soluta quisquam iste iusto repellendus natus
                ab saepe facere? Dolor, rem incidunt aliquid atque debitis
                pariatur excepturi! Voluptates perferendis quidem repellat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
