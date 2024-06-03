import React, { useState } from 'eact';
import ProjectFormStep1 from './ProjectFormStep1';
import ProjectFormStep2 from './ProjectFormStep2';
import ProjectFormStep3 from './ProjectFormStep3';
import ProjectFormStep4 from './ProjectFormStep4';
import { saveToLocalStorage, loadFromLocalStorage } from './localStorageUtils';

function ProjectForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(loadFromLocalStorage() || {});

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const saveFormData = (data) => {
    setFormData({...formData,...data });
    saveToLocalStorage(formData);
  };

  const renderStepComponent = () => {
    switch (currentStep) {
      case 1:
        return <ProjectFormStep1 saveFormData={saveFormData} />;
      case 2:
        return <ProjectFormStep2 saveFormData={saveFormData} />;
      case 3:
        return <ProjectFormStep3 saveFormData={saveFormData} />;
      case 4:
        return <ProjectFormStep4 saveFormData={saveFormData} />;
      default:
        return <p>Form Completed!</p>;
    }
  };

  return (
    <div>
      <h2>Project Form</h2>
      {renderStepComponent()}
      <button onClick={handlePreviousStep} disabled={currentStep === 1}>
        Previous
      </button>
      <button onClick={handleNextStep}>Next</button>
    </div>
  );
}

export default ProjectForm;
