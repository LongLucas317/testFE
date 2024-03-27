import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { useState, useRef } from "react";

import logo from "../../../../assets/images/logo.svg";
import staff from "../../../../assets/images/useravt/nabil.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faArrowTrendUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Header({ sideBarRef }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={cx("navigation")}>
      <div className={cx("header__section")}>
        <div className={cx("header__wrapper")}>
          {/* Logo + Search Input */}
          <div className={cx("logo__section")}>
            <div className={cx("logo__img")}>
              <img className={cx("logo")} src={logo} alt="Logo Company" />
              <FontAwesomeIcon className={cx("menu__bar")} icon={faBars} />
            </div>

            <div className={cx("search__section")}>
              <input
                type="text"
                className={cx("search__input")}
                placeholder="Do fundrise now"
              />
              <div className={cx("input__icon")}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
            </div>
          </div>

          {/* Profile */}
          <div className={cx("fundrasing__section")}>
            <div className={cx("fundrise__section")}>
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

            <div className={cx("btn__section")}>
              <button className={cx("campaign__btn")}>Start a campaign</button>
            </div>

            {/* Profile */}
            <div className={cx("profile__section")}>
              <div className={cx("profile__btn")}>
                <img className={cx("profile__img")} src={staff} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
