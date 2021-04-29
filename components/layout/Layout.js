import classes from "./Layout.module.css";
import Head from "../head/index";
import Header from "../header/index";

function Layout(props) {
  return (
    <>
      <Head />
      <Header />
      <main className={classes.main}>{props.children}</main>
    </>
  );
}

export default Layout;
