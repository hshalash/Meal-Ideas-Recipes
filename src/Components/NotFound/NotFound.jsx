import Style from "./NotFound.module.scss";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <div>
        <div className={Style.face}>
          <div className={Style.band}>
            <div className={Style.red} />
            <div className={Style.white} />
            <div className={Style.blue} />
          </div>
          <div className={Style.eyes} />
          <div className={Style.dimples} />
          <div className={Style.mouth} />
        </div>
        <h1>Oops! Page not Found!</h1>
      </div>
      <div className="md:pb-40"></div>
    </div>
  );
}
