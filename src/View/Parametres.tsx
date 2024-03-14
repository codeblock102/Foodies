import EnteteParam from "./composantes/EnteteParam"
import OptionParam from "./composantes/OptionParam"
export default function Parametres() {
  return (
    <div className='Parametres h-screen w-screen'>
        <EnteteParam/>
        <div className="options">
            <OptionParam/>
            <OptionParam/>
            <OptionParam/>
            <OptionParam/>
            <OptionParam/>
        </div>
    </div>
  )
}
