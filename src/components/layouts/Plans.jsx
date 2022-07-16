import { Element } from 'react-scroll'

import Card from './Card'
import CheckText from './CheckText'
import Button from './Button'

import { CgGym } from 'react-icons/cg'
import { RiHeartPulseFill, RiVipCrownFill } from 'react-icons/ri'
import { AiOutlineArrowRight } from 'react-icons/ai'

import './plans.css'

const Plans = () => {
  return (
    <Element name='plans'>
      <section className='plans_container'>
        <h1>
          <span>Ready to start </span>
          your jounery
          <span> now withus</span>
        </h1>
        <div className='plans_card_container'>
          <div className='plans'>
            <Card
              className='plans_card'
              icon={<RiHeartPulseFill />}
              title='Basic plan'
              cost='$ 25'
            >
              <CheckText
                className='check_text_plans'
                text='2 hours of excercises'
              />
              <CheckText
                className='check_text_plans'
                text='Free consultaion to coaches'
              />
              <CheckText
                className='check_text_plans'
                text='Access to The Community'
              />
              <div className='plans_button'>
                <span>
                  <Button
                    text='See more benefits'
                    className='button_model_three'
                    icon={<AiOutlineArrowRight />}
                  />
                </span>
                <Button
                  text='Join now'
                  className='button_model_four'
                />
              </div>
            </Card>
          </div>
          <div className="plans_premium">
          <Card
              className='plans_card'
              icon={<RiVipCrownFill />}
              title='Premium plan'
              cost='$ 45'
            >
              <CheckText
                className='check_text_plans'
                text='5 hour of excercises'
              />
              <CheckText
                className='check_text_plans'
                text='Consultation of Private Coach'
              />
              <CheckText
                className='check_text_plans'
                text='Free Fitness Merchandises'
              />
              <div className='plans_button'>
                <span>
                  <Button
                    text='See more benefits'
                    className='button_model_three'
                    icon={<AiOutlineArrowRight />}
                  />
                </span>
                <Button
                  text='Join now'
                  className='button_model_five'
                />
              </div>
            </Card>
          </div>
          <div className='plans'>
            <Card
              className='plans_card'
              icon={<CgGym />}
              title='Pro plan'
              cost='$ 30'
            >
              <CheckText
                className='check_text_plans'
                text='8 hours of excercises'
              />
              <CheckText
                className='check_text_plans'
                text='Consultation of Private Coach'
              />
              <CheckText
                className='check_text_plans'
                text='Free Fitness Merchandises'
              />
              <div className='plans_button'>
                <span>
                  <Button
                    text='See more benefits'
                    className='button_model_three'
                    icon={<AiOutlineArrowRight />}
                  />
                </span>
                <Button
                  text='Join now'
                  className='button_model_four'
                />
              </div>
            </Card>
          </div>
        </div>
      </section>
    </Element>
  )
}

export default Plans