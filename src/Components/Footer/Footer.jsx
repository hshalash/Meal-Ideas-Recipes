import photo from "../../assets/logo.png";
import Style from "./Footer.module.scss"
import clsx from "clsx";


export default function Footer() {
  return (
    <>
      <div className="bg-white px-16 ">
        <div className=" flex flex-row items-center justify-between">
          <div className="flex flex-row items-center">
            <img src={photo} alt="" className="w-20" />
          </div>
          <div className={`${clsx(Style.footerText)} gradientText`}>Route</div>
        </div> 
      </div>
    </>
  );
}
