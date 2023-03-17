import { Link } from "react-router-dom";
import './List.css'

export default function List() {

  return (
    <div className="content">
      <h2>Lista</h2>
      <div className="list">
        <div className="content-item"><Link className="list-item" to={"/Singleton"}><p >Singleton</p></Link> </div>
        <div className="content-item"><Link className="list-item" to={"/Prototype"}><p >Prototype</p></Link> </div>
        <div className="content-item"><Link className="list-item" to={"/Provider"}><p >Provider</p></Link> </div>
        <div className="content-item"><Link className="list-item" to={"/Proxy"}><p >Proxy</p></Link> </div>
        <div className="content-item"><Link className="list-item" to={"/Container"}><p >Container</p></Link> </div>
        <div className="content-item"><Link className="list-item" to={"/Observer"}><p >Observer</p></Link> </div>
        <div className="content-item"><Link className="list-item" to={"/Module"}><p >Module</p></Link> </div>
        <div className="content-item"><Link className="list-item" to={"/HOC"}><p >HOC</p></Link> </div>
        <div className="content-item"><Link className="list-item" to={"/Render"}><p >Render</p></Link> </div>
        <div className="content-item"><Link className="list-item" to={"/Hooks"}><p >Hooks</p></Link> </div>
        <div className="content-item"><Link className="list-item" to={"/Flyweight"}><p >Flyweight</p></Link> </div>
        <div className="content-item"><Link className="list-item" to={"/Factory"}><p >Factory</p></Link> </div>
        <div className="content-item"><Link className="list-item" to={"/Compound"}><p >Compound</p></Link> </div>
        <div className="content-item"><Link className="list-item" to={"/Command"}><p >Command</p></Link> </div>
      </div>
    </div>
  )
}





