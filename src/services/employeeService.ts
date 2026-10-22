import * as EmployeeRepo from "../apis/employeeRepo";
import type { CreateEmployeeResult, Department } from "../components/landing/Employee";


/**
 * A straightforward request to get all departments from the repository.
 */
export async function fetchDepartments(): Promise<Department[]> {
  const departments = await EmployeeRepo.fetchDepartments();
  return departments;
}

/**
 * Decides if an employee can be created. The repository is only invoked
 * if the department exists and the first name has at least three characters.
 * If not, nothing is created, and the errors say what went wrong.
 */
export async function createEmployee(
  firstName: string,
  lastName: string,
  departmentId: string
): Promise<CreateEmployeeResult> {
  let isValid = true;
  const firstNameErrors: string[] = [];
  const departmentErrors: string[] = [];

  const departments = await EmployeeRepo.fetchDepartments();

  if (!departments.find((department) => department.id === departmentId)) {
    isValid = false;
    departmentErrors.push("Please select a department.");
  }

  if (firstName.trim().length < 3) {
    isValid = false;
    firstNameErrors.push("First name must be at least 3 characters.");
  }

  if (isValid) {
    await EmployeeRepo.createEmployee(
      departmentId,
      firstName.trim(),
      lastName.trim()
    );
  }

  return { isValid, firstNameErrors, departmentErrors };
}