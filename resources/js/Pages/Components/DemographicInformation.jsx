
import { Civil_Status, Status_Of_Employment } from  '../PageHelper/RegisterAsResidentData';
import { formatToCurrency } from '../PageHelper/InformationFormatter';

export function DemographicInformation({data, setData }) {

    return (
        <> 
            <h2 className="text-2xl font-bold mb-4 text-center">Demographic Information</h2>
            <label className="block mb-2">Civil Status</label>
            <select
                name="Civil status"
                value={data.civil_status} 
                onChange={(e) => {setData('civil_status', e.target.value)}} 
                className="w-full p-2 border rounded mb-4"
                required
            >

                <option value="" disabled>-- Please Select --</option>
                {Civil_Status.map((value, index) => (
                    <option key={index} value={value}>
                        {value}
                    </option>
                ))}
            </select>

            <label className="block mb-2">Year Started Staying in the Barangay</label>
            <input
                type="number"
                name="yearStarted"
                value={data.year_started_staying} 
                onChange={(e) => {
                    setData('year_started_staying', String(e.target.value)) 
                }} 
               
                onBlur={(e) => {
                    const currentYear = new Date().getFullYear();
                    let value = parseInt(e.target.value, 10);

                    value >= 1900 && value <= currentYear
                        ? setData('year_started_staying', String(value))
                        : setData('year_started_staying', String(currentYear));

                }}
                className="w-full p-2 border rounded mb-4"
                min={1900}
                max={new Date().getFullYear()} 
                required
            />


            <label className="block mb-2">Status of Employment</label>
            <select
                name="Status of Employment"
                value={data.status_of_employment} 
                onChange={(e) => {setData('status_of_employment', e.target.value)}} 
                className="w-full p-2 border rounded mb-4"
                required
            >

                <option value="" disabled>-- Please Select --</option>
                {Status_Of_Employment.map((value, index) => (
                    <option key={index} value={value}>
                        {value}
                    </option>
                ))}
            </select>

            <label className="block mb-2">Pension</label>
            <input
                type="text"
                name="Pension"
                value={`₱${data.pension}`}
                onChange={(e) => {
                    const formattedValue = formatToCurrency(e.target.value)
                    setData("pension", formattedValue);
                }}
                className="w-full p-2 border rounded mb-4"
                required
            />



            
            
        </>
    );
  }


   