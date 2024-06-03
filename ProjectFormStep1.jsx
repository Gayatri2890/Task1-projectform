import React, { useState } from 'eact';
import DatePicker from 'eact-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function ProjectFormStep1({ saveFormData }) {
  const [projectName, setProjectName] = useState('');
  const [client, setClient] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      projectName,
      client,
      startDate,
      endDate
    };
    saveFormData(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="projectName">Project Name:</label>
        <input
          type="text"
          id="projectName"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="client">Client:</label>
        <input
          type="text"
          id="client"
          value={client}
          onChange={(e) => setClient(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="startDate">Start Date:</label>
        <DatePicker selected={startDate} onChange={setStartDate} />
      </div>
      <div>
        <label htmlFor="endDate">End Date:</label>
        <DatePicker selected={endDate} onChange={setEndDate} />
      </div>
      <button type="submit">Next</button>
    </form>
  );
}

export default ProjectFormStep1;
