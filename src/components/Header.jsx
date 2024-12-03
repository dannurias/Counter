const Header = ({ title, description }) => {
  return (
    <header className="text-center bg-black text-white p-4">
      <h1 className="text-2xl font-bold">{title}</h1>
    </header>
  );
};

export default Header;
