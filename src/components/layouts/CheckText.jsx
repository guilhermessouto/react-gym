import { BsCheck2Circle } from 'react-icons/bs'
import './checkText.css'

const CheckText = ({ text, className }) => {
  return (
    <div className={'check_text ' + className}>
      <BsCheck2Circle />
      <p>{text}</p>
    </div>
  )
}

export default CheckText