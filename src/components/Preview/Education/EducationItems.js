import React from "react";

export default function EducationItems({ educationItem }) {
  const { university, schoolCity, schoolState, degree, major, graduationDate } =
    educationItem;
  return (
    <>
      <div className="section-top">
        <p className="section-top-title">{university}</p>
        <p className="section-top-date">{graduationDate}</p>
      </div>
      <div className="section-bottom">
        <p className="section-bottom-title">
          {degree}, {major}
        </p>
        <p className="section-bottom-location">
          {schoolCity}, {schoolState}
        </p>
      </div>
    </>
  );
}