import './button.css'

const Button = ({ className, text, icon, type }) => {
  return (
      <>
        <button className={className} type={type}>{text}</button>
        {icon}
      </>
  )
}

export default Button