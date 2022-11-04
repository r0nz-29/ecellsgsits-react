import "./index.css";
import {departments, OC, storeHeads} from "./data";
import React from "react";

export default function Team() {
  return (
    <>
      <br/><br/><br/>
      <div className="outer-box">
        <div className="heading">
          <h2 className="text-center">
            <span className="typewriter"><span>Team E-Cell</span></span>
          </h2>
          <hr/>
        </div>
        <OverallCoordinators/>
        <DeptHeads/>
        <StoreHeads/>
      </div>
    </>
  );
}

function StoreHeads() {
  return (
    <>
      <div className="sub-heading year head text-center">
        STOR-E HEADS
      </div>
      {
        storeHeads.map((cxx, i) => (
          <React.Fragment key={i}>
            <div className="sub-heading text-center">
              {cxx.title}
            </div>
            <div className="third-year">
              <ProfileCard person={cxx} key={i}/>
            </div>
          </React.Fragment>
        ))
      }
    </>
  );
}

function DeptHeads() {
  return (
    <>
      <div className="sub-heading year head text-center">
        DEPARTMENT HEADS
      </div>
      {departments.map((dept, i) => (
        <React.Fragment key={i}>
          <div className="sub-heading text-center">
            {dept.department}
          </div>
          <div className="third-year">
            {dept.heads.map((head, i) => (
              <ProfileCard person={head} key={i}/>
            ))
            }
          </div>
        </React.Fragment>
      ))
      }
    </>
  );
}

function OverallCoordinators() {
  return (
    <>
      <div className="sub-heading year head text-center">
        OVERALL COORDINATORS
      </div>
      <div className="fourth-year">
        {OC.map((oc, i) => (
          <ProfileCard person={oc} key={i}/>
        ))
        }
      </div>
    </>
  );
}

function ProfileCard({person}) {
  return (
    <div className="member">
      <img className="member-photo" src={person.img} alt={person.name}/>
      <div className="member-info text-center">
        <h4>{person.name}</h4>
        <p>{person.post}</p>
      </div>
      <div className="social-link">
        <a href={person.linkedin} target="_blank" className="icon-button linkedin"><i
          className="icon-linkedin fab fa-linkedin-in"></i><span></span></a>
      </div>
    </div>
  );
}