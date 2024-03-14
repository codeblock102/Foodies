import Publimini from "./composantes/Publimini";
import Entete from "./composantes/Entete";
import MenuNav from "./composantes/MenuNav";
import {Form} from "react-router-dom";
import "../style.css";
import "../index.css";

export default function Exploration() {
  return (
    <div className="Exploration">
      <Entete />
      <Form className="h-fit">
      <input type="text" placeholder="chercher" className="barre-recherche h-4 pl-2" />
      </Form>
      <div className="posts flex w-screen mx-auto ml-0.5 m-14">
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
