import Publimini from "./composantes/Publimini";
import Entete from "./composantes/Entete";
import MenuNav from "./composantes/MenuNav";
import "../style.css";
import "../index.css";

export default function Exploration() {
  return (
    <div className="Exploration">
      <Entete />
      <form action="">
        <input type="text" placeholder="chercher" className="barre-recherche" />
      </form>
      <div className="posts flex w-screen mx-auto ml-0.5">
        <Publimini />
        <Publimini />
        <Publimini />
        <Publimini />
        <Publimini />
        <Publimini />
        <Publimini />
        <Publimini />
        <Publimini />
        <Publimini />
        <Publimini />
        <Publimini />
        <Publimini />
        <Publimini />
        <Publimini />
        <Publimini />
        <Publimini />
        <Publimini />
        <MenuNav/>
      </div>
      
    </div>
  );
}
