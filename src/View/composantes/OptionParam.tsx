import { Link } from "react-router-dom";

export default function OptionParam() {
  return (
    <Link className="OptionParam flex w-full h-12 pt-1" to='/'>
        <div className="icon"></div>
        <h3 className='nom-option'>Compte</h3>
    </Link>
  )
}
