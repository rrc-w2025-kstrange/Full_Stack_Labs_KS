import { useEffect, useState } from "react";
import * as EmployeeService from "../services/employeeService";
import type { Department } from "../components/landing/Employee";

/**
 * This hook holds the list of departments as state. It gets them from the
 * service when the page first loads, and gets them again after an employee
 * is created, so the page always shows the latest list.
 */
export function useDepartments() {
  const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
    let ignore = false;

    async function loadDepartments() {
      const result = await EmployeeService.fetchDepartments();

      if (!ignore) {
        setDepartments([...result]);
      }
    }

    loadDepartments();

    return () => {
      ignore = true;
    };
  }, []);

  async function createEmployee(
    firstName: string,
    lastName: string,
    departmentId: string
  ) {
    const result = await EmployeeService.createEmployee(
      firstName,
      lastName,
      departmentId
    );

    // get the departments again so the new employee shows up
    if (result.isValid) {
      const updatedDepartments = await EmployeeService.fetchDepartments();
      setDepartments([...updatedDepartments]);
    }

    return result;
  }

  return { departments, createEmployee };
}