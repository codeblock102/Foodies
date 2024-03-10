import Entete from './composantes/Entete';
import MenuNav from "./composantes/MenuNav";
import Publimini from './composantes/Publimini';
import '../style.css';
import '../index.css';
export default function Profile() {
  return (
    <div className="Profile">
        <Entete/>  
        <section className='profileInfo'>
            <div className="imgMain"></div>
            <div className="profileImg"></div>
            <div className="textFollowing">
                <p>200 Following</p>
                <p>144k Followers</p>
            </div>
            <div className="infoPerso">
                <h2>Nom</h2>
                <h3>Titre</h3>
                <p>description</p>
            </div>
        </section>
        <button className='follow'>Follow</button>
        <div className="posts flex w-screen mx-auto ml-0.5">
            <Publimini/>
            <Publimini/>
            <Publimini/>
            <Publimini/>
            <Publimini/>
            <Publimini/>
            <Publimini/>
            <Publimini/>
            <Publimini/>
            <Publimini/>
        </div>
        <MenuNav/>
    </div>
  )
}
