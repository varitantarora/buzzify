import Navbar from "../../components/Navbar/Navbar";
import classes from "./NotFound.module.css";
import { useDispatch, useSelector } from "react-redux";
import { navbarActions } from "../../store/navbar-slice";
import { menuActions } from "../../store/menu-slice";
import { dropdownActions } from "../../store/dropdown-slice";
import { useEffect } from "react";
import Menu from "../../components/Dashboard/Menu/Menu";

const NotFound = () => {
  const theme = useSelector((state) => state.settings.toggle.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(menuActions.deactivate());
    dispatch(navbarActions.deactivate());
    dispatch(navbarActions.activateSearchInput());
  }, []);

  const deactivateDropdownHandler = () => {
    dispatch(dropdownActions.deactivate());
  };

  return (
    <>
      <Navbar />
      <div className={classes["not-found"]} data-theme={theme}>
        <div
          className={classes["left-menu"]}
          onClick={deactivateDropdownHandler}
        >
          <Menu />
        </div>
        <div className={classes["not-found-wrapper"]}>
          <span className={classes["status-msg"]}>404!</span>
          <span className={classes["not-found-msg"]}>
            Oops, looks like you got lost...
          </span>
        </div>
      </div>
    </>
  );
};

export default NotFound;
