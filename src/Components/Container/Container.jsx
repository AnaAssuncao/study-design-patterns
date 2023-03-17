import './Container.css'

export default function Container({ title, text, children }) {

  return (
    <div className="container">
      <div className="container-description">
        <h2 className="container-title">{title}</h2>
        <div className="container-text">{text}</div>
      </div>
      <div className="container-content">
        <h2 className="container-text">Exemplo</h2>
        {children}
      </div>
    </div>

  )
}





