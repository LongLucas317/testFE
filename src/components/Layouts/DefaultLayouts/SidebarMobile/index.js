import classNames from "classnames/bind";
import styles from "./SidebarMobile.module.scss";

import logo from "../../../../assets/images/logo.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faCircleUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faGrip,
  faBullhorn,
  faMoneyBills,
  faCashRegister,
  faArrowTrendUp,
  faChevronDown,
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

function SidebarMobile() {
  return (
    <div className={cx("sideBarMB__wrapper")}>
      <div className={cx("sideBarMB__header")}>
        <div className={cx("sidebarMB__head__wrapper")}>
          <div className={cx("logo__img")}>
            <img className={cx("logo")} src={logo} alt="Logo Company" />
          </div>

          <div className={cx("btn__section")}>
            <button className={cx("campaign__btn")}>Start a campaign</button>
          </div>

          <div className={cx("menuBar__icon")}>
            <FontAwesomeIcon className={cx("menu__barMB")} icon={faBars} />
          </div>
        </div>
      </div>
      <div className={cx("sideBarMB__section")}>
        <div className={cx("fundriseMB__section")}>
          <div className={cx("line__chart")}>
            <FontAwesomeIcon icon={faArrowTrendUp} />
          </div>
          <a href="#" className={cx("fundrise__content")}>
            Fundrising for
          </a>
          <div className={cx("arrow__down")}>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>

        <ul className={cx("nav__bar")}>
          {navBars.map((navBar, index) => {
            return (
              <li key={index}>
                <a href={navBar.href}>
                  <FontAwesomeIcon
                    className={cx("navBar__icon")}
                    icon={navBar.icon}
                  />
                  <label>{navBar.alt}</label>
                </a>
              </li>
            );
          })}
        </ul>

        <div className={cx("mode__section")}>
          <a href="#">
            <FontAwesomeIcon className={cx("sun__icon")} icon={faSun} />
            <label>Light/Dark</label>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SidebarMobile;
