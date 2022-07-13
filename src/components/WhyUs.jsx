import CheckText from './layouts/CheckText'

import './whyUs.css'

const WhyUs = () => {
  return (
    <section className="why_us_container">
      <div className='why_us_text'>
        <h1>Some reasons</h1>
        <h2>
          <span>Why </span>
          choose us ?
        </h2>
      </div>

      <ul>
        <CheckText
          text='Over 140 + expert coachs'
          className='check_text_model_one'
        />
        <CheckText
          text='Train smarter and faster than before'
          className='check_text_model_one'
        />
        <CheckText
          text='1 free program for new member'
          className='check_text_model_one'
        />
        <CheckText
          text='Reliable partners'
          className='check_text_model_one'
        />
      </ul>
    </section>
  )
}
export default WhyUs