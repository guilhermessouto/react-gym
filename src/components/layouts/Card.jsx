import './card.css'

const Card = ({ title, text, icon, cost, className, children }) => {
  return (
    <div className={className}>
      {icon}

      <h2>{title}</h2>

      <h3>{cost}</h3>

      <p>{text}</p>
      
      {children}
    </div>
  )
}

export default Card