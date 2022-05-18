import React from "react";

export default function ExperienceForm({ handleChange }) {
  return (
    <section>
      <h2 className="form-title">Experience</h2>
      <form>
        <input
          type="text"
          name="employerName"
          placeholder="Employer name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="jobTitle"
          placeholder="Job title"
          onChange={handleChange}
        />
        <input
          type="text"
          name="workCity"
          placeholder="City"
          onChange={handleChange}
        />
        <input
          type="text"
          name="workState"
          placeholder="State"
          onChange={handleChange}
        />
        <input
          type="text"
          name="startDate"
          placeholder="Start date"
          onChange={handleChange}
        />
        <input
          type="text"
          name="endDate"
          placeholder="End date"
          onChange={handleChange}
        />
      </form>
    </section>
  );
}
