import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faCircleUser } from "@fortawesome/free-regular-svg-icons";
import {
  faGrip,
  faBullhorn,
  faMoneyBills,
  faCashRegister,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const navBars = [
  { href: "#", icon: faGrip, alt: "Dashboard" },
  { href: "#", icon: faBullhorn, alt: "Campaign" },
  { href: "#", icon: faMoneyBills, alt: "Payment" },
  { href: "#", icon: faCashRegister, alt: "Withdraw" },
  { href: "#", icon: faCircleUser, alt: "Profile" },
  { href: "#", icon: faArrowRightFromBracket, alt: "Logout" },
];

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <div className={cx("sideBar__wrapper")}>
      <div className={cx("sideBar__section")}>
        <ul className={cx("nav__bar")}>
          {navBars.map((navBar, index) => {
            return (
              <li key={index}>
                <a href={navBar.href}>
                  <FontAwesomeIcon
                    className={cx("navBar__icon")}
                    icon={navBar.icon}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className={cx("mode__section")}>
          <a href="#">
            <FontAwesomeIcon className={cx("sun__icon")} icon={faSun} />
          </a>
        </div>
      </div>
      <div className={cx("sideBar__mobile")}></div>
    </div>
  );
}

export default Sidebar;
