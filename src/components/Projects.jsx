import React from "react";
import "../App.css";
import img1 from "../Images/1.png";
import img2 from "../Images/2.png";
import img3 from "../Images/3.png";
import img4 from "../Images/4.png";
import img5 from "../Images/5.png";
import img6 from "../Images/6.png";

const Projects = () => {
  const projects = [
    {
      id: 0,
      vercel: "https://task30-n-escq.vercel.app",
      git: "https://github.com/AmrKhaled03/task30_N",
      img: img1,
    },
    {
      id: 1,
      vercel: "https://task36-tka8.vercel.app",
      git: "https://github.com/AmrKhaled03/task36",
      img: img2,
    },
    {
      id: 2,
      vercel: "https://task37-wdep.vercel.app",
      git: "https://github.com/AmrKhaled03/task37",
      img: img3,
    },
    {
      id: 3,
      vercel: "https://task27-n.vercel.app",
      git: "https://github.com/AmrKhaled03/task27_N",
      img: img4,
    },
    {
      id: 4,
      vercel: "https://task26-n.vercel.app",
      git: "https://github.com/AmrKhaled03/task26_N",
      img: img5,
    },
    {
      id: 5,
      vercel: "https://task19-n.vercel.app",
      git: "https://github.com/AmrKhaled03/task19_N",
      img: img6,
    },
  ];
  return (
    <div className="projects" id="projects">
      <div className="container">
        {projects.length === 0 ? (
          <>
            {" "}
            <h1>No Projects Found</h1>
          </>
        ) : (
          projects.map((project) => {
            return (
              <div className="project" key={project.id}>
                <img
                  src={project.img}
                  loading="lazy"
                  className="img-fluid"
                  alt={project.id}
                />
                <div className="hidden d-flex flex-column justify-content-center align-items-center">
                  <button
                    onClick={() => (window.location.href = `${project.vercel}`)}
                    className="btn btn-success mb-2 w-100"
                  >
                    Preview{" "}
                  </button>
                  <button
                    onClick={() => (window.location.href = `${project.git}`)}
                    className="btn btn-warning w-100"
                  >
                    Code
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <button
            onClick={() =>
              (window.location.href =
                "https://github.com/AmrKhaled03?tab=repositories")
            }
            className="btn btn-success btn-lg "
          >
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
