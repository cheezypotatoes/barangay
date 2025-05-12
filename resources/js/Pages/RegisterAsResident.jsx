
import { useState, useMemo } from "react";
import { useForm } from '@inertiajs/react';

import { 
  PersonalInformation, PersonalInformationTwo, DemographicInformation
} from "./PageHelper/InformationComponentBarrel";


export default function RegisterAsResident() {
  const [buttonText, setButtonText] = useState("Next");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  const { data, setData, post, processing, errors } = useForm({
          first_name: '',
          last_name: '',
          middle_name: '',
          name_extension: '',
          gender: '',

          birth_date: '',
          religion: '',
          ethnicity: '',
          blood_type: '',

          civil_status: '',
          year_started_staying: '',
          status_of_employment: '',
          pension: '',

    });

   
    const formSteps = [
      PersonalInformation,
      PersonalInformationTwo,
      DemographicInformation
    ];
    
    const [formIndex, setFormIndex] = useState(0);

    const PostData = () => {
      const isAnyFieldEmpty = Object.values(data).some(value => !value);

      if (isAnyFieldEmpty) {
          console.log(data)
          setErrorMessage("Please fill out all fields before submitting!");
          return;
      }

      setErrorMessage("");
      post("/registerAsResident");
    }
    
    const currentForm = useMemo(() => {
      const FormComponent = formSteps[formIndex];
      return <FormComponent setData={setData} data={data} />;
    }, [formIndex, setData, data]);
    
    const changeFormIndex = (number) => {
      number === formSteps.length ? PostData() : null;
      if (number >= formSteps.length || number < 0) return;
      number === formSteps.length - 1 ? setButtonText("Submit") : setButtonText("Next");
      setFormIndex(number);
    };

  return (
    <div className="flex justify-center items-center min-h-screen flex-col bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-96" onSubmit={handleSubmit}>
        {currentForm}

        {errorMessage && (
          <h1 className="text-red-500 font-bold text-center mt-4">{errorMessage}</h1>
        )}
      </form>
      
    
      <div className="grid grid-cols-2 rid-row-1 justify-items-center gap-5 mt-4">
        <button className="flex w-40 items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          onClick={() => changeFormIndex(formIndex - 1)}>
          Back
        </button>

        <button className="flex w-40 items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          onClick={() => {changeFormIndex(formIndex + 1)}}>
          {buttonText}
        </button>

      </div>


    </div>
    
      );
}