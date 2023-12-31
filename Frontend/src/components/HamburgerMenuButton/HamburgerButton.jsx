import "./HamburgerButton.css";

const HamburgerButton = ({ mobileMenu, setMobileMenu }) => {
  return (
    <button
      onClick={() => setMobileMenu(!mobileMenu)}
      className={`${
        mobileMenu && "open"
      } block hamburger sm:hidden focus:outline-none`}
    >
      <span className="hamburger-top bg-slate-50"></span>
      <span className="hamburger-middle bg-slate-50"></span>
      <span className="hamburger-bottom bg-slate-50"></span>
    </button>
  );
};

export { HamburgerButton };
