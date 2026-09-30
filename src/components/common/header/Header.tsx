import "./Header.css";

function Header() {
  return (
    <header>
      <img src="https://itsm-ace.ca/images/logo.svg" alt="Pixell River Logo" width={120} />
      <div>
        <h1>Pixell River Employee Directory</h1>
        <p>Welcome to the employee portal</p>
      </div>
    </header>
  );
}

export default Header;