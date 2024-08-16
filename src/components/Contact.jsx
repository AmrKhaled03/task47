import React, { useContext, useRef } from "react";
import "../App.css";
import "sweetalert2/dist/sweetalert2.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { TheContext } from "../context/MyContext";
const Contact = () => {
  const form = useRef();
const{dark}=useContext(TheContext);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ib9q8mf",
      "template_7hn7tqe",
      form.current,
      "Go-F8wtSOy7rYOqzq"
    );
    Swal.fire(
      "Your message is sent successfully!",
      "You clicked the button!",
      "success"
    ).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <div className="contact mb-5" id="contact">
      <div className="container fadeInRight">
        <div className="row">
          <div className="col-12">
            <h1 className={dark ? 'text-light' : 'text-primary'}>Contact Me</h1>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="row">
            <div className="col-12 m-2">
              <input
                type="text"
                id="name"
                name="name"
                className="form-control "
                placeholder="Name"
              />
            </div>


          <div className="col-12 m-2">
            <input
              type="text"
              id="email"
              name="email"
              className="form-control"
              placeholder="Email"
            />
          </div>

          <div className="col-12 m-2">
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Phone"
              className="form-control"
            />
          </div>

          <div className="col-12 m-2">
            <textarea
              type="text"
              id="message"
              name="message"
              rows="2"
              className="form-control md-textarea"
              placeholder="Message"
            ></textarea>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-lg btn-success w-100">
              Send
            </button>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
