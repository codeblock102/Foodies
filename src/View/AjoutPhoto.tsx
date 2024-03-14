import EnteteParam from "./composantes/EnteteParam";
import televerserImg from "../assets/televerser.svg"
import Bouton from "./composantes/Bouton";
export default function AjoutPhoto() {
  return (
    <div className="AjoutPhoto h-screen w-screen">
      <EnteteParam/>
      <form action="" className="mt-12">
        <div className="conteneur-img bg-white w-72 h-72 mx-auto mb-12 border-3 flex " >
        <label htmlFor="imageUtil" className="w-full h-full flex flex-col	items-center justify-center">
          <img src={televerserImg} alt="" className="max-h-16 w-16 mx-auto"/>
          <h4 className="h-fit text-center mt-4">Appuyez sur la flèche pour mettre l’image que vous voulez</h4>
          <input type="file" name="image" id="imageUtil" className="hidden" />
        </label>
        </div>
        <input type="text" placeholder="Titre" className="text-2xl"/>
        <input type="text" placeholder="Description " className="text-2xl"/>
        <input type="text" placeholder="Ingredients" className="text-2xl"/>
        <Bouton/>
      </form>
    </div>
  );
}
