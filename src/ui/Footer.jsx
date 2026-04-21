function Footer() {
  return (
    <footer className="bg-teal-300">
      <div className="flex flex-row justify-center items-center">
        <p>&copy; Copyright {`${new Date().getFullYear()}`} Nested Reality</p>
      </div>
    </footer>
  );
}

export default Footer;
