import type { JSX } from "react";
import leadershipData from "../../leadership.json";
import type { Role } from "./Role";

export function Organization() {
  const roles: Role[] = leadershipData;

  return (
    <main id="main-content">
      <RoleList roles={roles} />
    </main>
  );
}

function RoleList({ roles }: { roles: Role[] }) {
  const roleListItems: JSX.Element[] = [];

  roles.forEach((role) => {
    roleListItems.push(<RoleListItem role={role} key={role.id} />);
  });

  return <ul>{roleListItems}</ul>;
}

function RoleListItem({ role }: { role: Role }) {
  return (
    <li data-id={role.id}>
      <span>{role.first} {role.last}</span>
      <span>{role.role}</span>
    </li>
  );
}

export default Organization;