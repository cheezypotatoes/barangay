export function PersonalInformation({data, setData }) {

    return (
      <> 
        <h2 className="text-2xl font-bold mb-4 text-center">Personal Information</h2>
            <label className="block mb-2">Last Name</label>
            <input
                type="text"
                name="Last Name"
                value={data.last_name} 
                onChange={(e) => {setData('last_name', e.target.value)}} 
                className="w-full p-2 border rounded mb-4"
                required
            />

            <label className="block mb-2">First Name</label>
            <input
                type="text"
                name="First Name"
                value={data.first_name} 
                onChange={(e) => {setData('first_name', e.target.value)}} 
                className="w-full p-2 border rounded mb-4"
                required
            />

            <label className="block mb-2">Middle Name</label>
            <input
                type="text"
                name="Middle name"
                value={data.middle_name} 
                onChange={(e) => {setData('middle_name', e.target.value)}} 
                className="w-full p-2 border rounded mb-4"
                required
            />

            <label className="block mb-2">Name Extension</label>
            <input
                type="text"
                name="Name extension"
                value={data.name_extension} 
                onChange={(e) => {setData('name_extension', e.target.value)}}
                className="w-full p-2 border rounded mb-4"
            />

            <label className="block mb-2">Gender</label>
            <select
                name="gender"
                value={data.gender} 
                onChange={(e) => {setData('gender', e.target.value)}} 
                className="w-full p-2 border rounded mb-4"
                required
            >

                <option value="" disabled>-- Please Select --</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>

        </>
    );
  }


   