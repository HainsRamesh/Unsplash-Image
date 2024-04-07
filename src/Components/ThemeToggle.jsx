import { useGlobalContext } from "../AppContext";
import { MdSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";

const ThemeToggle = () => {
  // custom hook for global context
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <section className="toggle-container">
      <button onClick={toggleDarkTheme} className="dark-toggle">
        {isDarkTheme ? (
          <IoMoonOutline className="toggle-icon" />
        ) : (
          <MdSunny className="toggle-icon" />
        )}
      </button>
    </section>
  );
};
export default ThemeToggle;
