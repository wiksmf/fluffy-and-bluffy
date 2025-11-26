import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";

function Header() {
  return (
    <header className="fixed top-0 z-30 flex h-20 w-full bg-gray-50 shadow-md">
      <div className="container-wide flex w-full items-center justify-between bg-gray-50 px-5 py-3 lg:px-2 lg:py-0">
        <Logo />
        <HeaderMenu />
      </div>
    </header>
  );
}

export default Header;
