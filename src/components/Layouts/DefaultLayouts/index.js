import classNames from "classnames/bind";
import styles from "./DefaultLayouts.module.scss";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import SidebarMobile from "./SidebarMobile";

const cx = classNames.bind(styles);

function DefaultLayouts({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <div className={cx("content")}>{children}</div>
      </div>
      <Footer />
      <SidebarMobile />
    </div>
  );
}

export default DefaultLayouts;
