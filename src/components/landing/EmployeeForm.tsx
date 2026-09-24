import { useState } from "react";
import type { Department, Employee } from "./Employee";

export function EmployeeForm({
  departments,
  setDepartments,
}: {
  departments: Department[];
  setDepartments: React.Dispatch<React.SetStateAction<Department[]>>;
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [error, setError] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        setError("");

        if (firstName.trim().length < 3) {
          setError("First name must be at least 3 characters.");
          return;
        }

        const selectedDepartment = departments.find((d) => d.id === departmentId);
        if (!selectedDepartment) {
          setError("Please select a department.");
          return;
        }

        const newEmployee: Employee = {
          id: `e${Date.now()}`,
          first: firstName.trim(),
          last: lastName.trim(),
        };

        setDepartments((prevDepartments) =>
          prevDepartments.map((department) =>
            department.id === departmentId
              ? { ...department, people: [...department.people, newEmployee] }
              : department
          )
        );
      }}
    >
      <h2>Add Employee</h2>
      {error && <p>{error}</p>}
      <input
        type="text"
        placeholder="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <select value={departmentId} onChange={(e) => setDepartmentId(e.target.value)}>
        <option value=""> Choose a department </option>
        {departments.map((department) => (
          <option key={department.id} value={department.id}>
            {department.name}
          </option>
        ))}
      </select>
      <button type="submit">Add Employee</button>
    </form>
  );
}