import type { JSX } from "react";
import type { Department, Employee } from "./Employee";
import { EmployeeForm } from "./EmployeeForm";
import { useDepartments } from "../../hooks/useDepartments";

export function Landing() {
  const { departments, createEmployee } = useDepartments();

  return (
    <main id="main-content">
      <DepartmentList departments={departments} />
      <EmployeeForm departments={departments} onAdd={createEmployee} />
    </main>
  );
}

function DepartmentList({ departments }: { departments: Department[] }) {
  const departmentSections: JSX.Element[] = [];

  departments.forEach((department) => {
    departmentSections.push(
      <DepartmentSection department={department} key={department.id} />
    );
  });

  return <>{departmentSections}</>;
}

function DepartmentSection({ department }: { department: Department }) {
  return (
    <section id={department.id}>
      <h2>{department.name}</h2>
      <EmployeeList people={department.people} />
    </section>
  );
}

function EmployeeList({ people }: { people: Employee[] }) {
  const employeeListItems: JSX.Element[] = [];

  people.forEach((person) => {
    employeeListItems.push(<EmployeeListItem person={person} key={person.id} />);
  });

  return <ul>{employeeListItems}</ul>;
}

function EmployeeListItem({ person }: { person: Employee }) {
  return (
    <li data-id={person.id}>
      {person.first} {person.last}
    </li>
  );
}

export default Landing;