import { Religions, Ethnicities } from '../PageHelper/RegisterAsResidentData';
import { calculatedAge } from '../PageHelper/InformationFormatter';
import { useEffect, useState } from 'react';

export function PersonalInformationTwo({data, setData }) {
    const [age, setAge] = useState("");

    useEffect(() => {
        if (data.birth_date !== "") {
            setAge(calculatedAge(data.birth_date))
        }
    }, [data]);

    return (
      <> 
        <h2 className="text-2xl font-bold mb-4 text-center">Personal Information</h2>


            <label className="block mb-2">Birth Date</label>
            <input
                type="date"
                name="birthDate"
                value={data.birth_date}
                onChange={(e) => {
                setData("birth_date", e.target.value);
                setAge(calculatedAge(e.target.value));}}
                className="w-full p-2 border rounded mb-4"
                required
                max={new Date().toISOString().split('T')[0]}
            />

            <label className="block mb-2">Age</label>
            <input
                type="number"
                name="age"
                value={age}
                className="w-full p-2 border rounded mb-4 bg-gray-100 cursor-not-allowed"
                min="0"
                readOnly
            />

            <label className="block mb-2">Religion</label>
            <select
                name="Religion"
                value={data.religion} 
                onChange={(e) => {setData('religion', e.target.value)}} 
                className="w-full p-2 border rounded mb-4"
                required
            >

                <option value="" disabled>-- Please Select --</option>
                {Religions.map((religion, index) => (
                    <option key={index} value={religion}>
                        {religion}
                    </option>
                ))}
            </select>

            <label className="block mb-2">Ethnicity</label>
            <select
                name="Ethnicity"
                value={data.ethnicity} 
                onChange={(e) => {setData('ethnicity', e.target.value)}} 
                className="w-full p-2 border rounded mb-4"
                required
            >

                <option value="" disabled>-- Please Select --</option>
                {Ethnicities.map((Ethnicity, index) => (
                    <option key={index} value={Ethnicity}>
                        {Ethnicity}
                    </option>
                ))}     
            </select>

            <label className="block mb-2">BloodType</label>
            <select
                name="BloodType"
                value={data.blood_type} 
                onChange={(e) => {setData('blood_type', e.target.value)}} 
                className="w-full p-2 border rounded mb-4"
                required
            >

                <option value="" disabled>-- Please Select --</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
            </select>

        </>
    );
  }


   