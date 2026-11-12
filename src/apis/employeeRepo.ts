import { Guid } from "guid-typescript";
import departmentsData from "../departments.json";
import type { Department, Employee } from "../components/landing/Employee";

/**
 * For now the "database" is the departments.json file, copied into this
 * variable. It only lives in memory, so it resets when the page reloads.
 */
let departments: Department[] = departmentsData;

// Get all departments, each one with its employees inside it
export async function fetchDepartments(): Promise<Department[]> {
  return departments;
}

// Add an employee to one department, and return the new employee
export async function createEmployee(
  departmentId: string,
  firstName: string,
  lastName: string
): Promise<Employee> {
  const newEmployee: Employee = {
    id: Guid.create().toString(),
    first: firstName,
    last: lastName,
  };

  departments = departments.map((department) =>
    department.id === departmentId
      ? { ...department, people: [...department.people, newEmployee] }
      : department
  );

  return newEmployee;
}