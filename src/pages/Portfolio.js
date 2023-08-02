//6 project cards inside.
import React from "react";
import { MDBBadge } from "mdb-react-ui-kit";
import "./pages.css";

import noteapp from "../assets/noteapp.png";
import sunsComeOutScreenshot from "../assets/sunsComeOutScreenshotMedium.png";
import scheduleMyLifeScreenshot from "../assets/scheduleMyLifeScreenshot.png";
import passwordGeneratorScreenshot from "../assets/passwordGeneratorScreenshot.png";
import textEdScreenshot from "../assets/textEdScreenshot.png";

//JSX 6 cards.
export default function Portfolio() {
  return (
    <div class="row row-cols-1 row-cols-sm-3 g-4">
      <div className="col">
        <div className="card w-60 h-40 m-5">
          <img
            className="imgScreenshot"
            src={noteapp}
            class="card-img-top"
            alt="Palm Springs Road"
          />
          <div className="card-body">
            <h5 className="card-title">Express note taker Application</h5>
            <p className="card-text">
              Node JS and express backend application that allows you to input
              your notes, save, edit and delete them using express server
            </p>
            <div className="d-flex justify-content-evenly">
              <a href="https://herokuapp.com/" className="btn btn-primary">
                App
              </a>
              <a href="https://github.com/" className="btn btn-primary">
                Github
              </a>
            </div>
            <div className="maifrigoTechnologies">
              <MDBBadge pill className="mx-2" color="info" light>
                Node JS
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Javascript
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Express JS
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                API - Server Side
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                HTML
              </MDBBadge>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card w-60 h-40 m-5">
          <img
            className="imgScreenshot"
            src={sunsComeOutScreenshot}
            class="card-img-top"
            alt="Hollywood Sign on The Hill"
          />
          <div className="card-body">
            <h5 className="card-title">Sun's Come Out App</h5>
            <p className="card-text">
              Built using a third-party server-side Weather API, search for your
              your 5 day weather conditions of your favourite cities
            </p>
            <div className="d-flex justify-content-evenly">
              {/* links to github and deployed app */}
              <a
                href="https://lanreabu.github.io/Sun-s-come-out-app/"
                className="btn btn-primary"
              >
                App
              </a>
              <a
                href="https://github.com/lanreabu/Sun-s-come-out-app"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
            <MDBBadge
              pill
              className="mx-2"
              color="info"
              light
              style={{ margin: "23px" }}
            >
              HTML5
            </MDBBadge>
            <MDBBadge
              pill
              className="mx-2"
              color="info"
              light
              style={{ margin: "23px" }}
            >
              CSS
            </MDBBadge>
            <MDBBadge
              pill
              className="mx-2"
              color="info"
              light
              style={{ margin: "23px" }}
            >
              JavaScript
            </MDBBadge>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card w-60 h-40 m-5">
          <img
            className="imgScreenshot"
            src={textEdScreenshot}
            class="card-img-top"
            alt="Palm Springs Road"
          />
          <div className="card-body">
            <h5 className="card-title">TextEd Text Editor App</h5>
            <p className="card-text">
              A note-taking app, created using webpack, manifest, indexedDB json
              and a service worker to allow you to write up and save notes
              offline.
            </p>
            <div className="d-flex justify-content-evenly">
              <a href="https://herokuapp.com/" className="btn btn-primary">
                App
              </a>
              <a
                href="https://github.com/lanreabu/TextEd"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
            <div className="textEdTechnologies">
              <MDBBadge pill className="mx-2" color="info" light>
                JavaScript
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Heroku
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Manifest JSON
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                PWA
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Service Worker
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                IndexedDB
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Webpack
              </MDBBadge>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card w-60 h-40 m-5">
          <img
            className="imgScreenshot"
            src="https://images.unsplash.com/photo-1517490232338-06b912a786b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
            class="card-img-top"
            alt="Palm Springs Road"
          />
          <div className="card-body">
            <h5 className="card-title">Organise My ShopStock App</h5>
            <p className="card-text">
              An app built using Node JS and MySQL.This is the backend for an
              e-commerce site. The app allows the user to view and format their
              databases in an accessible manner. These include adding, viewing
              and deleting, usernames, emails, passwords and viewing products.
            </p>
            <div className="d-flex justify-content-evenly">
              <a
                href="https://watch.screencastify.com/"
                className="btn btn-primary"
              >
                Video
              </a>
              <a
                href="https://github.com/lanreabu/Organise-my-ShopStock"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
            <div className="organiseMyShopStockTechnologies">
              <MDBBadge pill className="mx-2" color="info" light>
                Node JS
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                JavaScript
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                MySQL
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                API- Client Side
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Express JS
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Sequelize
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Insomnia
              </MDBBadge>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card w-60 h-40 m-5">
          <img
            className="imgScreenshot"
            src={scheduleMyLifeScreenshot}
            class="card-img-top"
            alt="Los Angeles Skyscrapers"
          />
          <div className="card-body">
            <h5 className="card-title">Schedule My Life App</h5>
            <p className="card-text">
              An app built with JavaScript, using a client-side API,this is a
              colour-coded schedule app, allowing you to save events in a
              calender.
            </p>
            <div className="d-flex justify-content-evenly">
              <a
                href="https://lanreabu.github.io/Schedule-my-life/"
                className="btn btn-primary"
              >
                App
              </a>
              <a
                href="https://github.com/lanreabu/Schedule-my-life"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
            <div className="scheduleMyLifeTechnologies">
              <MDBBadge pill className="mx-2" color="info" light>
                HTML5
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                CSS
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                JavaScript
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                JQuery
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Moment JS
              </MDBBadge>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card w-60 h-40 m-5">
          <img
            className="imgScreenshot"
            src={passwordGeneratorScreenshot}
            class="card-img-top"
            alt="Skyscrapers"
          />
          <div className="card-body">
            <h5 className="card-title">Generate My Password App</h5>
            <p className="card-text">
              This app was created with JavaScript, it allows the user to
              generate a random password for websites.
            </p>
            <div className="d-flex justify-content-evenly">
              <a
                href="https://lanreabu.github.io/GenerateMyPassword/"
                className="btn btn-primary"
              >
                App
              </a>
              <a
                href="https://github.com/lanreabu/GenerateMyPassword"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
            <div className="generateMyPasswordTechnologies">
              <MDBBadge pill className="mx-2" color="info" light>
                HTML5
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                CSS
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                JavaScript
              </MDBBadge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
