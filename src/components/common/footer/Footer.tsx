import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return <footer>Pixell River Financial {year}</footer>;
}

export default Footer;