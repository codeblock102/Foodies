import fleche_arriere from '../../assets/fleche_arriere.svg'
export default function EnteteParam() {
  return (
    <div className="EnteteParam h-12 w-full flex items-center justify-start">
        <button className="boutonArriere w-6/12 flex itens-center"> <img src={fleche_arriere} alt="" className='h-6 w-6 mr-4'/> <h2>Paramètres</h2></button>
    </div>
  )
}
