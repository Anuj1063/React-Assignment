// import logo from "./logo.svg";
// import { useState } from "react";
// import { renderIntoDocument } from "react-dom/test-utils";
import "./App.css";
// import Functional from "./functional";
// import FirstPage from "./FirstPage";

function App() {
  return (
    <>
      <header class="logo">
        <div class="edyoda-logo">
          <div>
            <h1>EDYODA</h1>
            <p id="store">
              <em> Stories</em>
            </p>
          </div>
          <div class="explore">
            Explore Categories
            <i class="fa fa-angle-down"></i>
          </div>
        </div>

        <div class="heading-para">
          <p>
            EdYoda is a learning and knowledge <br /> sharing platform for
            techies
          </p>
        </div>

        <div class="button-go-to-web">
          <a href="#">Go To Main Website</a>
        </div>
      </header>
      <div class="main">
        <div class="trending-post">
          <h2>Trending Posts</h2>
          <div class="container">
            <div class="left-img">
              <img src="https://edyoda.s3.amazonaws.com/media/blog-images/ace-soft-skills-small.jpg" />
            </div>
            <div class="right-img">
              <img
                src="https://edyoda.s3.amazonaws.com/media/blog-images/aptitude-small.jpg"
                id="First-img"
              />
              <img
                src="https://edyoda.s3.amazonaws.com/media/blog-images/learn_cloud_computing.jpeg"
                id="Second-img"
              />
            </div>
          </div>
        </div>

        <div class="latest-post">
          <h3 id="latest">Latest Posts</h3>
        </div>
        <div className="filter-icon">
          <i class="fa fa-filter"></i>
        </div>
        <p id="filter">Filter by Categories </p>

        <div class="categories">
          <ul class="categoties-menu">
            <li class="active-this">
              <a href="#" id="active">
                All
              </a>
            </li>
            <li>
              <a href="#">Artificial Intelligence</a>
            </li>
            <li>
              <a href="#">Cloud Computing</a>
            </li>
            <li>
              <a href="#">DevOps</a>
            </li>
            <li>
              <a href="#">Programming Language</a>
            </li>
            <li>
              <a href="#">Mobile Application Development</a>
            </li>
            <li>
              <a href="#">Technology and Tools</a>
            </li>
            <li>
              <a href="#">Get a job in a Tech Company</a>
            </li>
            <li>
              <a href="#">Others</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="cards">
        <div className="item">
          <div className="image">
            <img
              src="https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png"
              alt="image"
            />
          </div>
          <div className="title">
            <h2>Introduction To A Machine Learning Online Course</h2>
          </div>
          <p className="author">
            <span>EDYODA </span> | 23 Aug 2019
          </p>

          <div className="dec">
            <p>
              We have had an insight into Artificial Intelligence Well.One of
              its subfields is machine learning and this introduction will help
              you get a fair idea of what this machine learning...
            </p>
          </div>
        </div>

        <div className="item">
          <div className="image">
            <img
              src="https://edyoda.s3.amazonaws.com/media/blog-images/6.png"
              alt=""
            />
          </div>
          <div className="title">
            <h2>LAMP Stack Vs MERN stac...</h2>
          </div>
          <p className="author">
            <span> EDYODA</span> |23 Aug 2019
          </p>
          <div className="dec">
            <p>
              In today's dynamic world developing a rapid application with a
              smooth user interface that can adapt to specific feature is the
              main business requirement Many organizations.
            </p>
          </div>
        </div>

        <div className="item">
          <div className="image">
            <img
              src="https://edyoda.s3.amazonaws.com/media/blog-images/4.png"
              alt="image"
            />
          </div>
          <div className="title">
            <h2>Impact of Cloud Computing in various industries</h2>
          </div>
          <p className="author">
            <span>EDYODA</span> | 23 Aug 2019
          </p>

          <div className="dec">
            <p>
              Cloud Computing has been rapidly gainning pace in the worls of
              information technology it has been observed that over 90% of
              global enterprises are using Cloud..
            </p>
          </div>
        </div>

        <div className="item">
          <div className="image">
            <img
              src="https://edyoda.s3.amazonaws.com/media/blog-images/3.png"
              alt="image"
            />
          </div>
          <div className="title">
            <h2>Big Data Analytics</h2>
          </div>
          <p className="author">
            <span> EDYODA</span> | 23 Aug 2019
          </p>
          <div className="dec">
            <p>
              Big data refers to data sets that are too large or complex to be
              dealt with by traditional data-processing application software.
              Data with many fields offer greater statistical power, while data
              with...
            </p>
          </div>
        </div>

        <div className="item">
          <div className="image">
            <img
              src="https://edyoda.s3.amazonaws.com/media/blog-images/5.png"
              alt="image"
            />
          </div>
          <div className="title">
            <h2>Cyber Security</h2>
          </div>
          <p className="author">
            <span> EDYODA</span> | 23 Aug 2019
          </p>
          <div className="dec">
            <p>
              Computer security, cybersecurity, or information technology
              security is the protection of computer systems and networks from
              attack by malicious actors that may result in unauthorized
              information ...
            </p>
          </div>
        </div>
        <div className="item">
          <div className="image">
            <img
              src="https://edyoda.s3.amazonaws.com/media/blog-images/7.png"
              alt="image"
            />
          </div>
          <div className="title">
            <h2>Data Backup & Recovery</h2>
          </div>
          <p className="author">
            <span> EDYODA</span> | 23 Aug 2019
          </p>
          <div className="dec">
            <p>
              Backup and Restore is the primary backup component of Windows
              Vista and Windows 7. It can create file and folder backups, as
              well as system images backups, to be used for recovery...
            </p>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-details">
          <div className="Footer-set">
            <div className="Heading">
              <h2>EDYODA</h2>
            </div>
            <div className="Footer-address">
              <br />
              <br />
              <a>
                "1st Floor,"
                <br />
                "Gopalan Millennnium Tower,"
                <br />
                "ITPL Main Rd,Brookenfield, "
                <br />
                "Bengaluru,Karnataka-560037"
                <br />
                "India"
              </a>
            </div>
          </div>
          <div className="second-set">
            <div className="col-1">
              <div>
                <h3>EDYODA</h3>
              </div>
              <div>
                <a>About Us</a>
                <br />
                <a>Careers</a>
                <br />
                <a>Contact US</a>
                <br />
                <a>Terms of USe</a>
                <br />
                <a>Privacy Policy</a>
              </div>
            </div>

            <div className="col-2">
              <div>
                <h3>RESOURCES</h3>
              </div>
              <div>
                <a>Learning Paths</a>
                <br />
                <a>Courses</a>
                <br />
                <a>Learning Videos</a>
                <br />
                <a>Educators</a>
                <br />
                <a>EdYoda Stories</a>
                <br />
                <a>University</a>
              </div>
            </div>

            <div className="col-3">
              <div>
                <div>
                  <h3>FOR ENTERPRISES</h3>
                </div>
                <a>Train Your Employees</a>
                <br />
              </div>
              <div>
                <h3>QUICK LINKS</h3>
              </div>
              <div>
                <a>Learn and Earn</a>
                <br />
                <a>Become a Learning-Enabler</a>
                <br />
                <a>Tips for Learning-Enabler</a>
                <br />
                <a>Request New Topic</a>
                <br />
                <a>Certification</a>
                <br />
                <a>Artificial Program</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default App;
