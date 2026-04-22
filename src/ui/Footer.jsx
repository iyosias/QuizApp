function Footer() {
  return (
    <footer className="bg-indigo-500 h-12 flex justify-center items-center">
      <p className="font-brand-header text-white">
        &copy; Copyright {`${new Date().getFullYear()}`} Nested Reality
      </p>
    </footer>
  );
}

export default Footer;
