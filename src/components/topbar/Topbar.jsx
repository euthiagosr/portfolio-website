import "./Topbar.scss";
import {Person, Mail} from '@material-ui/icons'

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">genius.</a>

          <div className="itemContainer">
            <Person className="icon"/>
            <span>+351 924 405 891</span>
          </div>

          <div className="itemContainer">
            <Mail className="icon"/>
            <span>euthiagosr@gmail.com</span>
          </div>

        </div>


        <div className="right">
          <div className="hamburguer" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="lin1"></span>
            <span className="lin2"></span>
            <span className="lin3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
