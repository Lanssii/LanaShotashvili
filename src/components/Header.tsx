const Header = () => {
  return (
    <header className="bg-cream py-3.5">
      <div className="custom-container flex justify-between items-center">
        <div className="text-primary text-[19px]">
          <a href="/">Portfolio</a>
        </div>

        <nav>
          <ul className="flex gap-15 text-primary uppercase text-[14px]">
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
