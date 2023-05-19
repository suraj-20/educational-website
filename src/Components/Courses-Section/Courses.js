import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./Courses.css";
import courseImg1 from "../../Assets/course 1.jpg";
import courseImg2 from "../../Assets/course 2.png";
import courseImg3 from "../../Assets/course 3.jpg";

import CourseCard from "./CourseCard";

const courseData = [
  {
    id: "01",
    title: "Web Design BootCamp-2022 for Beginners",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg1,
  },
  {
    id: "02",
    title: "Professional Graphics Design, PhotoShop, Adobe XD, Fignma",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },
  {
    id: "03",
    title: "UI/UX BootCamp for Beginners",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Libero, autem. Lorem, ipsum 
                  dolor sit amet consectetur adipisicing elit. Libero, autem.
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>

          {courseData.map((item) => {
            return (
              <Col lg="4" md="6">
                <CourseCard key={item.id} item={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
