import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/talhaabdullah.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Talha Obaid</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
           Talha Obaid is a passionate full-stack developer who embarked on his coding journey to overcome the challenges he faced while building real-world projects.
            With a keen interest in problem-solving and creating impactful digital products,
             he is now developing a replica of Zerodha to sharpen his skills and push the boundaries of his learning.
          </p>
          <p>
            He continuously explores new technologies, from MERN stack to modern tools in cloud and DevOps, 
            with the vision of building scalable and user-friendly applications.
          </p>
          <p>Making donuts is his zen.😃🍩</p>
          <p>
            Connect on <a href="" style={{ textDecoration: "none" }}>Homepage</a> / <a href="" style={{ textDecoration: "none" }}>TradingQnA</a> /{" "}
            <a href="" style={{ textDecoration: "none" }}>Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;