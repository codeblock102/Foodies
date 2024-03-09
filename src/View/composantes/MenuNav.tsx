import "../../style.css";
import "../../index.css";
import maison_menu from "../../assets/maison_menu.svg";
import loupe_menu from "../../assets/loupe_menu.svg";
import boutonPlusMenu from "../../assets/boutonPlus_menu.svg";
import clocheMenu from "../../assets/cloche_menu.svg";
export default function MenuNav() {
  return (
    <nav className=" MenuNav h-14 sticky w-4/5 bottom-36 m-auto rounded-full border-1 border-black bg-white	">
      <ul className="p-4 h-12 w-full flex justify-between items-center">
        <li className="h-10 w-10">
          <img src={maison_menu} alt="" className="h-full w-full" />
        </li>

        <li className="h-10 w-10">
          <img src={loupe_menu} alt="" className="h-full w-full" />
        </li>

        <li className="boutonAjout h-20 w-20 bg-orange-400 rounded-full flex justify-center items-center">
        <img src={boutonPlusMenu} alt="" className="h-14 w-14 align-middle " />
        </li>

        <li className="h-10 w-10">
          <img src={clocheMenu} alt="" className="h-full w-full" />
        </li>

        <li className="h-10 w-10 bg-orange-400 rounded-full">
          <a href="#"></a>
        </li>
      </ul>
    </nav>
  );
}
