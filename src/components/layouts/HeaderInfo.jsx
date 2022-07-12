import './headerInfo.css'

import { AiOutlinePlus } from 'react-icons/ai'

const HeaderInfo = ({number, text}) => {
  return (
    <div className='header_infos'>
      <div className='info_number'>
          <AiOutlinePlus />
        <span>{number}</span>
      </div>

      <div className='info_text'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default HeaderInfo