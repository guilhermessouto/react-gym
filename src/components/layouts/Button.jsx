import './button.css'

const Button = ({ className, text, icon }) => {
  return (
      <>
        <button className={className}>{text}</button>
        {icon}
      </>
  )
}

export default Button