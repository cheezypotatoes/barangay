
import { useState, useMemo, useEffect } from "react";
import { useForm, usePage } from '@inertiajs/react';

import { 
  PersonalInformation, PersonalInformationTwo, DemographicInformation
} from "./PageHelper/InformationComponentBarrel";


export default function EditProfile() {
    const { UserData } = usePage().props;

    const [buttonText, setButtonText] = useState("Next");
   

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
        const emptyFields = new Set(
            Object.entries(data)
                .filter(([key, value]) => !value)
                .map(([key]) => key)
            );
        
        for (const key of emptyFields) {
            setData(key, UserData[0][key]);
        }

       
        
       
      
        post("/editProfile");
    }
    
    const currentForm = useMemo(() => {
      const FormComponent = formSteps[formIndex];
      return <FormComponent setData={setData} data={data} />;
    }, [formIndex, setData, data]);
    
    const changeFormIndex = (number) => {
      number === formSteps.length ? PostData() : null;
      if (number >= formSteps.length || number < 0) return;
      number === formSteps.length - 1 ? setButtonText("Apply Edit") : setButtonText("Next");
      setFormIndex(number);
    };

    useEffect(() => {
        const data = UserData[0]
        delete data.id;
        delete data.user_id;
        delete data.created_at;
        delete data.updated_at;
        for (const key in data) {
            setData(key, String(data[key]));
        }
        console.log(data)
    }, [])

    return (
        <div className="flex justify-center items-center min-h-screen flex-col bg-gray-100">
            <form className="bg-white p-6 rounded-lg shadow-md w-96" onSubmit={handleSubmit}>
                {currentForm}
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