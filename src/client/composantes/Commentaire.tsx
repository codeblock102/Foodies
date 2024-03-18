import "../style.css";
import "../index.css";

export default function Commentaire(commentaire:any) {
  return (
    <div className="Commentaire w-full bg-red-400 min-h-20">
      <div className="info-util">
        <div className="img-util" />
        <p>nom-Util</p>
      </div>
      <p className="description-commentaire">
        {commentaire.description}
      </p>
    </div>
  );
}
