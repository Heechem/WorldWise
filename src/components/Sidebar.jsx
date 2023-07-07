import styles from "./Sidebar.module.css";
import Logo from "../pages/Logo";
import AppNav from "./AppNav";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>List of the cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc
        </p>
      </footer>
    </div>
  );
};

export default Sidebar;
