import React from "react";
import "../pages";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";

// profile picture and about me
import ProfilePic from "../assets/devImg.png";

export default function AboutMe() {
  return (
    <div>
      <div>
        <div className="aboutMe aboutMeContainer">
          <img
            src={ProfilePic}
            className="profile-picture"
            alt="profile"
            style={{
              paddingTop: "35px",
            }}
          />
          <p
            className="aboutMe text"
            style={{
              paddingTop: "35px",
              fontSize: "20px",
            }}
          >
            Hi there, I'm Lanre, and I am a Technical project manager.
            {/* <br />
        I am excited to solve real-world problems with my applications.
        <br />
        I have recently completed a full-stack web development course at the
        University of Birmingham.
        <br />
        This is where I gained invaluable experience in React JS, Javascript{" "}
        <br />
        TypeScript, APIs as well as HTML and CSS. */}
            <br />
            You are welcome to look around.
            <br />
            Email me at lanreabu@gmail.com
            <br />
            <span>
              <a href="https://github.com/lanreabu77">GitHub {"   "} </a>
            </span>
            <span>
              <a href="https://www.linkedin.com/feed/">
                LinkedIn {"   "}
              </a>
            </span>
            <span>
              <a href="https://docs.google.com/document/d/1d2NADIcZRXNf5C_eXy5HrzlacuPP57A8uwIMq94Toqk/edit">
                CV{"   "}
              </a>
            </span>
            {/* <p
          style={{
            fontSize: "15px",
          }}
        >
          Competencies: JavaScript ES6+, CSS3, HTML5, SQL, NoSQL
          <br /> MySQL, MongoDB, GitHub, Express, React.js <br /> Node.js,
          Handlebars, JQuery, Bootstrap MUI- Material Design <br /> CSS
          Framework, Client-Side and 3rd Party APIs.
        </p> */}
            <br />
          </p>
        </div>
        <MDBCard
          alignment="center"
          className="myBackgroundcard w-auto p-3 text-start"
        >
          <MDBCardHeader>Let's work together</MDBCardHeader>
          <MDBCardBody style={{ backgroundColor: "#F2FCFA" }}>
            <MDBCardTitle>My Background</MDBCardTitle>
            <MDBCardText className="myBackgroundText">
            Lanre Abu was born in Stuttgart, Germany but grew up in Lagos, Nigeria where he went to high school at King’s College Lagos. He is a UK trained Economics/International Relations graduate from the University of the West of England Bristol with a Post Graduate degree in Marketing from the Bristol Business School.
He currently works as a Technical Project Manager in one of the leading Finanacial Services companies in the US, leading vast projects to advance the growth of the organization as well as maximizing ROI.
He has been married to his beautiful wife, Bukky since 2009 and are both blessed with two wonderful boys. In His spare time, He enjoys cooking and hosting close friends and loves to travel and experience different cultures across the world with his Wife/Travel Buddy.
            </MDBCardText>
            <MDBBtn href="./porfolio.html">My PORFOLIO</MDBBtn>
          </MDBCardBody>
          <MDBCardFooter className="text-muted"></MDBCardFooter>
        </MDBCard>
      </div>
    </div>
  );
}
