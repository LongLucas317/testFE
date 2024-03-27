import classNames from "classnames/bind";
import styles from "./Home.module.scss";

import SidebarMobile from "../../components/Layouts/DefaultLayouts/SidebarMobile";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-regular-svg-icons";

import userCampaign from "../../assets/images/campaign/usercampaign/usercampaign.jpg";

// Popular Campaign
import powerdKits from "../../assets/images/campaign/othercampaign/popularcampaign/poweredKits.jpg";
import buildingHope from "../../assets/images/campaign/othercampaign/popularcampaign/buildingHope.jpg";
import newiMac from "../../assets/images/campaign/othercampaign/popularcampaign/newiMac.jpg";
import theWatchman from "../../assets/images/campaign/othercampaign/popularcampaign/theWatchman.jpg";
// Recent Campaign
import actionCamera from "../../assets/images/campaign/othercampaign/recentcampaign/actionCamera.jpg";
import resturant from "../../assets/images/campaign/othercampaign/recentcampaign/resturant.jpg";
import lostSoul from "../../assets/images/campaign/othercampaign/recentcampaign/lostSoul.jpg";
import coolShoes from "../../assets/images/campaign/othercampaign/recentcampaign/coolShoes.jpg";
// User Avatar
import nabil from "../../assets/images/useravt/nabil.jpg";
import shafi from "../../assets/images/useravt/shafi.jpg";
import samiAhmed from "../../assets/images/useravt/samiAhmed.jpg";
import nill from "../../assets/images/useravt/nill.jpg";
import cham from "../../assets/images/useravt/cham.jpg";
import alom from "../../assets/images/useravt/alom.jpg";
import rahman from "../../assets/images/useravt/rahman.jpg";
import salehAhmed from "../../assets/images/useravt/salehAhmed.jpg";

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("main__section")}>
      <div className={cx("user__campaign")}>
        <h3 className={cx("userCampaign__header")}>
          Your Campaign
          <span className={cx("userCampaigns__number")}>(4)</span>
        </h3>

        <div className={cx("userCampaign__section")}>
          <div className={cx("userCampaign__img")}>
            <img className={cx("campaign__img")} src={userCampaign} alt="" />
          </div>

          <div className={cx("userCampaign__detail")}>
            <div className={cx("categories__name")}>
              <FontAwesomeIcon
                className={cx("categories__icon")}
                icon={faFolder}
              />
              <p className={cx("architecture")}>Architecture</p>
            </div>

            <div className={cx("title__section")}>
              <h3 className={cx("title__header")}>
                Remake - We Make architecture exhibition
              </h3>
              <p className={cx("title__description")}>
                Remake - We Make: an exhibition about architecture's social
                agency in the face of urbanisation
              </p>
            </div>

            <div className={cx("progress__section")}>
              <span className={cx("progress__achieved")}></span>
            </div>

            <div className={cx("raised__amount")}>
              <div className={cx("amount__section")}>
                <span className={cx("amount__achieved")}>$2,000</span>
                <p className={cx("amount__description")}>
                  Raised of <span>$2,500</span>
                </p>
              </div>

              <div className={cx("backer__section")}>
                <span className={cx("backer__number")}>173</span>
                <p className={cx("backer__description")}>Total backers</p>
              </div>

              <div className={cx("dayNumber__section")}>
                <span className={cx("dayNumber__achieved")}>30</span>
                <p className={cx("dayNumber__description")}>Dayleft</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={cx("other__campaign")}>
        <div className={cx("popular__section")}>
          <h3 className={cx("section__header")}>Popular Campaign</h3>

          <div className={cx("campaign__list")}>
            {/* Campaign Detail */}
            <div className={cx("campaign__detail")}>
              <div className={cx("campaign__img")}>
                <img src={powerdKits} alt="" />
              </div>

              <div className={cx("campaign__infor")}>
                <div className={cx("campaign__type")}>
                  <FontAwesomeIcon
                    className={cx("folder__icon")}
                    icon={faFolder}
                  />
                  <p className={cx("campaign__name")}>Education</p>
                </div>

                <div className={cx("campaign__title")}>
                  <h3 className={cx("campaign__header")}>
                    Powered Kits Learning Boxes
                  </h3>
                  <p className={cx("campaign__description")}>
                    Fun, durable and reusable boxes with eco-friendly options.
                  </p>
                </div>

                <div className={cx("raised__amount")}>
                  <div className={cx("amount__section")}>
                    <span className={cx("amount__achieved")}>$2,000</span>
                    <p className={cx("amount__description")}>
                      Raised of <span>$2,500</span>
                    </p>
                  </div>

                  <div className={cx("backer__section")}>
                    <span className={cx("backer__number")}>173</span>
                    <p className={cx("backer__description")}>Total backers</p>
                  </div>
                </div>

                <div className={cx("author__section")}>
                  <div className={cx("author__avatar")}>
                    <img src={nabil} alt="" />
                  </div>

                  <div className={cx("author__name")}>
                    <p>
                      by <span>Mahfuzul Nabil</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Campaign Detail */}
            <div className={cx("campaign__detail")}>
              <div className={cx("campaign__img")}>
                <img src={buildingHope} alt="" />
              </div>

              <div className={cx("campaign__infor")}>
                <div className={cx("campaign__type")}>
                  <FontAwesomeIcon
                    className={cx("folder__icon")}
                    icon={faFolder}
                  />
                  <p className={cx("campaign__name")}>Real Estate</p>
                </div>

                <div className={cx("campaign__title")}>
                  <h3 className={cx("campaign__header")}>
                    Building Hope Village
                  </h3>
                  <p className={cx("campaign__description")}>
                    Together we can create access for everyone!
                  </p>
                </div>

                <div className={cx("raised__amount")}>
                  <div className={cx("amount__section")}>
                    <span className={cx("amount__achieved")}>$250</span>
                    <p className={cx("amount__description")}>
                      Raised of <span>$1,900</span>
                    </p>
                  </div>

                  <div className={cx("backer__section")}>
                    <span className={cx("backer__number")}>50</span>
                    <p className={cx("backer__description")}>Total backers</p>
                  </div>
                </div>

                <div className={cx("author__section")}>
                  <div className={cx("author__avatar")}>
                    <img src={shafi} alt="" />
                  </div>

                  <div className={cx("author__name")}>
                    <p>
                      by <span>Adom Shafi</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Campaign Detail */}
            <div className={cx("campaign__detail")}>
              <div className={cx("campaign__img")}>
                <img src={newiMac} alt="" />
              </div>

              <div className={cx("campaign__infor")}>
                <div className={cx("campaign__type")}>
                  <FontAwesomeIcon
                    className={cx("folder__icon")}
                    icon={faFolder}
                  />
                  <p className={cx("campaign__name")}>Real Estate</p>
                </div>

                <div className={cx("campaign__title")}>
                  <h3 className={cx("campaign__header")}>
                    New iMac For My Business!
                  </h3>
                  <p className={cx("campaign__description")}>
                    My computer decided to die. As a result, my small business
                    aaaaaaaaaaaaaa ...
                  </p>
                </div>

                <div className={cx("raised__amount")}>
                  <div className={cx("amount__section")}>
                    <span className={cx("amount__achieved")}>$1,200</span>
                    <p className={cx("amount__description")}>
                      Raised of <span>$1,800</span>
                    </p>
                  </div>

                  <div className={cx("backer__section")}>
                    <span className={cx("backer__number")}></span>
                    <p className={cx("backer__description")}>Total backers</p>
                  </div>
                </div>

                <div className={cx("author__section")}>
                  <div className={cx("author__avatar")}>
                    <img src={samiAhmed} alt="" />
                  </div>

                  <div className={cx("author__name")}>
                    <p>
                      by <span>Sami Ahmed</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Campaign Detail */}
            <div className={cx("campaign__detail")}>
              <div className={cx("campaign__img")}>
                <img className={cx("ob-cover")} src={theWatchman} alt="" />
              </div>

              <div className={cx("campaign__infor")}>
                <div className={cx("campaign__type")}>
                  <FontAwesomeIcon
                    className={cx("folder__icon")}
                    icon={faFolder}
                  />
                  <p className={cx("campaign__name")}>Home</p>
                </div>

                <div className={cx("campaign__title")}>
                  <h3 className={cx("campaign__header")}>
                    The Watchman's Chairs
                  </h3>
                  <p className={cx("campaign__description")}>
                    Your home for indie and classic cinema has just been handed
                    an...
                  </p>
                </div>

                <div className={cx("raised__amount")}>
                  <div className={cx("amount__section")}>
                    <span className={cx("amount__achieved")}>$5,000</span>
                    <p className={cx("amount__description")}>
                      Raised of <span>$10,900</span>
                    </p>
                  </div>

                  <div className={cx("backer__section")}>
                    <span className={cx("backer__number")}>100</span>
                    <p className={cx("backer__description")}>Total backers</p>
                  </div>
                </div>

                <div className={cx("author__section")}>
                  <div className={cx("author__avatar")}>
                    <img src={nill} alt="" />
                  </div>

                  <div className={cx("author__name")}>
                    <p>
                      by <span>Nill</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={cx("recent__section")}>
          <h3 className={cx("section__header")}>Recent Campaign</h3>

          <div className={cx("campaign__list")}>
            {/* Campaign Detail */}
            <div className={cx("campaign__detail")}>
              <div className={cx("campaign__img")}>
                <img src={actionCamera} alt="" />
              </div>

              <div className={cx("campaign__infor")}>
                <div className={cx("campaign__type")}>
                  <FontAwesomeIcon
                    className={cx("folder__icon")}
                    icon={faFolder}
                  />
                  <p className={cx("campaign__name")}>Camare Gear</p>
                </div>

                <div className={cx("campaign__title")}>
                  <h3 className={cx("campaign__header")}>
                    Advanced 4K Action Camera
                  </h3>
                  <p className={cx("campaign__description")}>
                    THE SV RIG. - Start Creating Now Without Limitation.
                  </p>
                </div>

                <div className={cx("raised__amount")}>
                  <div className={cx("amount__section")}>
                    <span className={cx("amount__achieved")}>$500</span>
                    <p className={cx("amount__description")}>
                      Raised of <span>$1,000</span>
                    </p>
                  </div>

                  <div className={cx("backer__section")}>
                    <span className={cx("backer__number")}>173</span>
                    <p className={cx("backer__description")}>Total backers</p>
                  </div>
                </div>

                <div className={cx("author__section")}>
                  <div className={cx("author__avatar")}>
                    <img src={cham} alt="" />
                  </div>

                  <div className={cx("author__name")}>
                    <p>
                      by <span>Cham</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Campaign Detail */}
            <div className={cx("campaign__detail")}>
              <div className={cx("campaign__img")}>
                <img className={cx("ob-cover")} src={resturant} alt="" />
              </div>

              <div className={cx("campaign__infor")}>
                <div className={cx("campaign__type")}>
                  <FontAwesomeIcon
                    className={cx("folder__icon")}
                    icon={faFolder}
                  />
                  <p className={cx("campaign__name")}>Food</p>
                </div>

                <div className={cx("campaign__title")}>
                  <h3 className={cx("campaign__header")}>
                    Resturants Open Business
                  </h3>
                  <p className={cx("campaign__description")}>
                    A unique restaurant, bar, beer garden, and tailgating
                    location
                  </p>
                </div>

                <div className={cx("raised__amount")}>
                  <div className={cx("amount__section")}>
                    <span className={cx("amount__achieved")}>$950</span>
                    <p className={cx("amount__description")}>
                      Raised of <span>$1,200</span>
                    </p>
                  </div>

                  <div className={cx("backer__section")}>
                    <span className={cx("backer__number")}>150</span>
                    <p className={cx("backer__description")}>Total backers</p>
                  </div>
                </div>

                <div className={cx("author__section")}>
                  <div className={cx("author__avatar")}>
                    <img src={alom} alt="" />
                  </div>

                  <div className={cx("author__name")}>
                    <p>
                      by <span>Mahbubul Alom</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Campaign Detail */}
            <div className={cx("campaign__detail")}>
              <div className={cx("campaign__img")}>
                <img src={lostSoul} alt="" />
              </div>

              <div className={cx("campaign__infor")}>
                <div className={cx("campaign__type")}>
                  <FontAwesomeIcon
                    className={cx("folder__icon")}
                    icon={faFolder}
                  />
                  <p className={cx("campaign__name")}>Comics</p>
                </div>

                <div className={cx("campaign__title")}>
                  <h3 className={cx("campaign__header")}>
                    “Lost Soul” graphic novel
                  </h3>
                  <p className={cx("campaign__description")}>
                    A team of ex-superheroes attempt to save a "monster"
                  </p>
                </div>

                <div className={cx("raised__amount")}>
                  <div className={cx("amount__section")}>
                    <span className={cx("amount__achieved")}>$1,800</span>
                    <p className={cx("amount__description")}>
                      Raised of <span>$1,900</span>
                    </p>
                  </div>

                  <div className={cx("backer__section")}>
                    <span className={cx("backer__number")}>05</span>
                    <p className={cx("backer__description")}>Total backers</p>
                  </div>
                </div>

                <div className={cx("author__section")}>
                  <div className={cx("author__avatar")}>
                    <img src={rahman} alt="" />
                  </div>

                  <div className={cx("author__name")}>
                    <p>
                      by <span>Sajib Rahman</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Campaign Detail */}
            <div className={cx("campaign__detail")}>
              <div className={cx("campaign__img")}>
                <img src={coolShoes} alt="" />
              </div>

              <div className={cx("campaign__infor")}>
                <div className={cx("campaign__type")}>
                  <FontAwesomeIcon
                    className={cx("folder__icon")}
                    icon={faFolder}
                  />
                  <p className={cx("campaign__name")}>Clothe & Wearables</p>
                </div>

                <div className={cx("campaign__title")}>
                  <h3 className={cx("campaign__header")}>
                    Cool Comfy Shoes easy on You
                  </h3>
                  <p className={cx("campaign__description")}>
                    A new category of super comfortable casual shoes.
                  </p>
                </div>

                <div className={cx("raised__amount")}>
                  <div className={cx("amount__section")}>
                    <span className={cx("amount__achieved")}>$4,000</span>
                    <p className={cx("amount__description")}>
                      Raised of <span>$5,000</span>
                    </p>
                  </div>

                  <div className={cx("backer__section")}>
                    <span className={cx("backer__number")}>100</span>
                    <p className={cx("backer__description")}>Total backers</p>
                  </div>
                </div>

                <div className={cx("author__section")}>
                  <div className={cx("author__avatar")}>
                    <img src={salehAhmed} alt="" />
                  </div>

                  <div className={cx("author__name")}>
                    <p>
                      by <span>Saleh Ahmed</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
