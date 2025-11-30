import Navigation from "./Navigation";
import ButtonLink from "./ButtonLink";

import MenuIcon from "@/public/icons/menu.svg";
import CrossIcon from "@/public/icons/cross.svg";

type HeaderMenuProps = {
  showMenu: boolean;
  setShowMenu: (value: boolean) => void;
};

function HeaderMenu({ showMenu, setShowMenu }: HeaderMenuProps) {
  const toggleMenu = () => setShowMenu(!showMenu);
  const closeMenu = () => setShowMenu(false);

  return (
    <nav className="flex grow items-center justify-end gap-3 font-medium">
      <button
        onClick={toggleMenu}
        type="button"
        className="focus relative z-30 h-8 w-8 max-lg:order-1 lg:hidden"
        aria-controls="navbar"
        aria-label={showMenu ? "Close main menu" : "Open main menu"}
      >
        {showMenu ? (
          <CrossIcon className="h-full w-full" />
        ) : (
          <MenuIcon className="h-full w-full" />
        )}
      </button>

      <div className="fixed left-0 top-20 z-20 flex w-full justify-center bg-gray-50 lg:static">
        <div className="flex items-center justify-between lg:justify-around lg:shadow-none">
          <div
            id="navbar"
            className={`lg:flex lg:p-0 ${showMenu ? "flex w-full items-center justify-between pb-6 pt-3 lg:order-1" : "hidden"}`}
          >
            <Navigation closeMenu={setShowMenu} />
          </div>
        </div>
      </div>

      <ButtonLink
        href="/contact"
        customStyles="max-lg:order-0"
        type="nav"
        onClick={closeMenu}
      >
        Book now
      </ButtonLink>
    </nav>
  );
}

export default HeaderMenu;
