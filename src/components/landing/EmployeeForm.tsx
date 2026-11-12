import { useFormInput } from "../../hooks/useFormInput";
import type { CreateEmployeeResult, Department } from "./Employee";

/**
 * The form needs to know the departments for its drop-down, and it needs a
 * method for adding an employee. Both come from the parent, because the
 * parent's page also shows the list of employees.
 */
export function EmployeeForm({
  departments,
  onAdd,
}: {
  departments: Department[];
  onAdd: (
    firstName: string,
    lastName: string,
    departmentId: string
  ) => Promise<CreateEmployeeResult>;
}) {
  const firstName = useFormInput();
  const lastName = useFormInput();
  const department = useFormInput();

  const handleEmployeeSubmit = async () => {
    const result = await onAdd(
      firstName.value,
      lastName.value,
      department.value
    );

    firstName.validate(() => result.firstNameErrors);
    department.validate(() => result.departmentErrors);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleEmployeeSubmit();
      }}
    >
      <h2>Add Employee</h2>
      <input
        type="text"
        placeholder="First name"
        value={firstName.value}
        onChange={(e) => firstName.setValue(e.target.value)}
      />
      {firstName.messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
      <input
        type="text"
        placeholder="Last name"
        value={lastName.value}
        onChange={(e) => lastName.setValue(e.target.value)}
      />
      <select
        value={department.value}
        onChange={(e) => department.setValue(e.target.value)}
      >
        <option value=""> Choose a department </option>
        {departments.map((d) => (
          <option key={d.id} value={d.id}>
            {d.name}
          </option>
        ))}
      </select>
      {department.messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
      <button type="submit">Add Employee</button>
    </form>
  );
}