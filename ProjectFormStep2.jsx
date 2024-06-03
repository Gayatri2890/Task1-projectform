import React, { useState } from 'eact';

function ProjectFormStep2({ saveFormData }) {
  const [projectType, setProjectType] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      projectType,
      hourlyRate
    };
    saveFormData(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="projectType">Project Type:</label>
        <select
          id="projectType"
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
        >
          <option value="">Select</option>
          <option value="Time & Materials">Time & Materials</option>
          <option value="Fixed Fee">Fixed Fee</option>
          <option value="Non-Billable">Non-Billable</option>
        </select>
      </div>
      <div>
        <label htmlFor="hourlyRate">Hourly Rate:</label>
        <input
          type="number"
          id="hourlyRate"
          value={hourlyRate}
          onChange={(e) => setHourlyRate(e.target.value)}
        />
      </div>
      <button type="submit">Next</button>
    </form>
  );
}

export default ProjectFormStep2;
