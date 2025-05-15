import React, { useState } from "react";
import { usePage } from '@inertiajs/react';

const columns = [
  { key: "id", label: "ID" },
  { key: "user_id", label: "User ID" },
  { key: "last_name", label: "Last Name" },
  { key: "first_name", label: "First Name" },
  { key: "middle_name", label: "Middle Name" },
  { key: "name_extension", label: "Extension" },
  { key: "gender", label: "Gender" },
  { key: "birth_date", label: "Birth Date" },
  { key: "civil_status", label: "Civil Status" },
  { key: "religion", label: "Religion" },
  { key: "ethnicity", label: "Ethnicity" },
  { key: "blood_type", label: "Blood Type" },
  { key: "year_started_staying", label: "Year Started" },
  { key: "status_of_employment", label: "Employment Status" },
  { key: "monthly_gross_income", label: "Monthly Income" },
  { key: "pension", label: "Pension" },
];

const ShowResidents = () => {
  const [searchColumn, setSearchColumn] = useState("last_name");
  const [searchTerm, setSearchTerm] = useState("");

  const { residents = [] } = usePage().props;

  const filteredResidents = residents.filter((resident) => {
  if (!searchTerm.trim()) return true;

  let value = resident[searchColumn];

  if (value === null || value === undefined) return false;

  if (searchColumn === "birth_date") {
    value = new Date(value).toLocaleDateString().trim();
  } else {
    value = value.toString().trim();
  }

  return value.includes(searchTerm.trim());
});

  return (
    <div
      style={{
        maxWidth: 1100,
        margin: "3rem auto",
        padding: "2rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#333",
          marginBottom: "1rem",
          fontWeight: "700",
          fontSize: "2rem",
        }}
      >
        Residents Directory
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginBottom: "2rem",
          flexWrap: "wrap",
        }}
      >
        <select
          value={searchColumn}
          onChange={(e) => setSearchColumn(e.target.value)}
          style={{
            padding: "10px 15px",
            borderRadius: "8px",
            border: "1.5px solid #ccc",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          {columns.map(({ key, label }) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder={`Search ${columns.find((c) => c.key === searchColumn)?.label}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            flex: "1 1 300px",
            padding: "10px 15px",
            borderRadius: "8px",
            border: "1.5px solid #ccc",
            fontSize: "1rem",
          }}
        />
      </div>

      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: "0 10px",
            fontSize: "0.9rem",
            color: "#555",
          }}
        >
          <thead>
            <tr>
              {columns.map(({ key, label }) => (
                <th
                  key={key}
                  style={{
                    textAlign: "left",
                    padding: "12px 15px",
                    color: "#777",
                    fontWeight: "600",
                    borderBottom: "2px solid #eee",
                    whiteSpace: "nowrap",
                  }}
                >
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredResidents.length > 0 ? (
              filteredResidents.map((resident) => (
                <tr
                  key={resident.id}
                  style={{
                    backgroundColor: "#f9faff",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
                    borderRadius: "10px",
                    transition: "background-color 0.3s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#e6f0ff")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#f9faff")
                  }
                >
                  <td style={{ padding: "12px 15px", fontWeight: "600", color: "#333" }}>
                    {resident.id}
                  </td>
                  <td style={{ padding: "12px 15px" }}>{resident.user_id}</td>
                  <td style={{ padding: "12px 15px" }}>{resident.last_name}</td>
                  <td style={{ padding: "12px 15px" }}>{resident.first_name}</td>
                  <td style={{ padding: "12px 15px" }}>
                    {resident.middle_name || "-"}
                  </td>
                  <td style={{ padding: "12px 15px" }}>
                    {resident.name_extension || "-"}
                  </td>
                  <td style={{ padding: "12px 15px" }}>{resident.gender}</td>
                  <td style={{ padding: "12px 15px" }}>
                    {new Date(resident.birth_date).toLocaleDateString()}
                  </td>
                  <td style={{ padding: "12px 15px" }}>{resident.civil_status}</td>
                  <td style={{ padding: "12px 15px" }}>
                    {resident.religion || "-"}
                  </td>
                  <td style={{ padding: "12px 15px" }}>
                    {resident.ethnicity || "-"}
                  </td>
                  <td style={{ padding: "12px 15px" }}>
                    {resident.blood_type || "-"}
                  </td>
                  <td style={{ padding: "12px 15px", textAlign: "center" }}>
                    {resident.year_started_staying || "-"}
                  </td>
                  <td style={{ padding: "12px 15px" }}>
                    {resident.status_of_employment || "-"}
                  </td>
                  <td style={{ padding: "12px 15px", textAlign: "right" }}>
                    {resident.monthly_gross_income != null
                      ? `$${resident.monthly_gross_income.toLocaleString()}`
                      : "-"}
                  </td>
                  <td style={{ padding: "12px 15px", textAlign: "right" }}>
                    {typeof resident.pension === "number" ? resident.pension.toFixed(2) : "-"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  style={{
                    padding: "20px",
                    textAlign: "center",
                    color: "#999",
                    fontStyle: "italic",
                  }}
                >
                  No residents found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowResidents;