import React, { useContext } from "react";
import { useTypewriter } from "react-simple-typewriter";
import cvImage from "../Images/resume.png";
import Badge from "../Images/logo.jpeg";
import "../App.css";
import { TheContext } from "../context/MyContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const { dark, handleDark } = useContext(TheContext);
  const [text] = useTypewriter({
    words: [
      "Software Engineer",
      "Frontend Developer",
      "Mobile App Developer",
      "Designer",
    ],
    loop: 3,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvImage;
    link.download = "your-cv-image.png"; // Change the file name and extension as needed
    link.click();
  };

  return (
    <div className="header p-5 my-5" id="header">
      <div className="container">
        <div className="row ">
          <div className="col-lg-7 col-md-7 col-sm-12  my-5">
            <h1 className={dark ? "p-2 text-light" : "p-2 "}>
              Hello i'm{" "}
              <strong className="text-primary">Amr Khaled Marey</strong>
            </h1>
            <h2 className={dark ? "p-2 mt-2 text-light" : "p-2 mt-2"}>
              I'm a <strong className="text-primary">{text}</strong>
            </h2>

            <button
              onClick={handleDownload}
              className="btn btn-success  mt-2 p-2 ms-2 text-center btn-lg"
            >
              Download My Cv{" "}
            </button>
            <button
              onClick={handleDark}
              className={
                dark
                  ? "btn btn-light  mt-2 p-2 ms-2 text-center btn-lg"
                  : "btn btn-dark  mt-2 p-2 ms-2 text-center btn-lg"
              }
            >
              {dark ? "Light Mode" : "Dark Mode"}{" "}
            </button>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12  my-5 ">
            <img src={Badge} alt={Badge} className="img-fluid" loading="lazy" />
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 my-5 ">
            <ul className="icons">
              <li>
                <a href="https://www.linkedin.com/in/amr-khaled-marey-16b817228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="icon text-primary"
                  />
                </a>
              </li>
              <li>
                <a href="https://github.com/AmrKhaled03">
                  <FontAwesomeIcon icon={faGithub} className="icon text-dark" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/amr.khaled.marey?igsh=MThlaW1yamM4eXhyOA%3D%3D&utm_source=qr">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="icon text-warning"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
