import React, { useEffect, useState } from "react";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Row from "../components/Row";
import requests from "../Requests";
import { UserAuth } from "../context/AuthContext";
import classNames from "classnames";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineClose } from "react-icons/md";
import { HiLightningBolt } from "react-icons/hi";
import styles from "./Login.module.css";
import Singlerow from "../components/Singlerow";
import Modale from "../components/Modale";


const Home = () => {
  const [show, setShow] = useState(true);
  const {user} = UserAuth();
  
  
  {user && (toast.custom(
    (t) => (
      <div
        className={classNames([
          styles.successnotif,
          t.visible ? "top-0" : "-top-96",
        ])}
      >
        <div className={styles.iconWrapper}>
          <HiLightningBolt />
        </div>
        <div className={styles.contentWrapper}>
          <h1>Seuccess</h1>
          <p>
            Signin successfully !!
          </p>
        </div>
        <div className={styles.closeIcon} onClick={() => toast.dismiss(t.id)}>
          <MdOutlineClose />
        </div>
      </div>
    ),
    { id: "unique-notification", position: "top-center" }
  )) }
  return (
    <div className="bg-black">
      <Modale show={show} setShow={setShow}/> 
      {user && (<Toaster/>)}
    
      <Main />
      <Singlerow rowID="1" title="UpComing" fetchURL={requests.requestUpcoming} />
      <Row rowID="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="3" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID="4" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowID="5" title="Horror" fetchURL={requests.requestHorror} />
    </div>
  );
};

export default Home;
