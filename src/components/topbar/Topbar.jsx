import "./Topbar.scss";
import {Person, Mail} from '@material-ui/icons'

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Need a solution?</a>

          <div className="itemContainer">
            <Person className="icon"/>
            <span>+351 924 405 891</span>
          </div>

          <div className="itemContainer">
            <Mail className="icon"/>
            <a href="mailto:euthiagosr@gmail.com">euthiagosr@gmail.com</a>
          </div>

        </div>


        <div className="right">
          <div className="hamburguer" onClick={()=>setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
