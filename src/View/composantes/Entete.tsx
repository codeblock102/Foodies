import "../../style.css";
import "../../index.css";
import parametres_menu from "../../assets/parametres_menu.svg";

export default function Entete() {
  return (
    <div className="header Entete w-screen bg-white flex justify-between h-12 p-2">
      <h1 className="logo">Foodies</h1>
      <li className="h-10 w-10 list-none	">
        <img src={parametres_menu} alt="" className="h-8 w-8" />
      </li>
    </div>
  );
}
