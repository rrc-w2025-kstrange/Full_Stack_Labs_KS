export interface Employee {
  id: string;
  first: string;
  last: string;
}

export interface Department {
  id: string;
  name: string;
  people: Employee[];
}

export interface CreateEmployeeResult {
  isValid: boolean;
  firstNameErrors: string[];
  departmentErrors: string[];
}