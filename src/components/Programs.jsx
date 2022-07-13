import Card from './layouts/Card'

import { CgGym } from 'react-icons/cg'
import { BiRun } from 'react-icons/bi'
import { IoMdFlame } from 'react-icons/io'
import { RiHeartPulseFill } from 'react-icons/ri'
import { AiOutlineArrowRight } from 'react-icons/ai'

import './programs.css'
import Button from './layouts/Button'

const Programs = () => {
  return (
    <section className='programs_container'>
      <h1>
        <em>
          <span>Explore our </span>
          programs
          <span> to shape you</span>
        </em>
      </h1>

      <div className="programs">
        <Card 
          icon={<CgGym />}
          title='Strength Training'
          text='In this program, you are trained to improve your strength through many exercises.'
          className='programs_card'
        >
          <div className='button_model_arrow'>
            <Button 
              className='button_model_three'
              text='Join now'
              icon={<AiOutlineArrowRight />}
            />
          </div>
        </Card>
        
        <Card 
          icon={<BiRun />}
          title='Cardio Training'
          text='In this program, you are trained to do sequential moves in range of 20 until 30 minutes.'
          className='programs_card'
        >
          <div className='button_model_arrow'>
            <Button 
              className='button_model_three'
              text='Join now'
              icon={<AiOutlineArrowRight />}
            />
          </div>
        </Card>

        <Card
          icon={<IoMdFlame />}
          title='Fat Burning'
          text='This program is suitable for you who wants to get rid of your fat and lose their weight.'
          className='programs_card'
          >
            <div className='button_model_arrow'>
              <Button 
                className='button_model_three'
                text='Join now'
                icon={<AiOutlineArrowRight />}
              />
            </div>
        </Card>

        <Card
          icon={<RiHeartPulseFill />}
          title='Health Fitness'
          text='This programs is designed for those who exercises only for their body fitness not body building.'
          className='programs_card'
          >
            <div className='button_model_arrow'>
              <Button 
                className='button_model_three'
                text='Join now'
                icon={<AiOutlineArrowRight />}
              />
            </div>
        </Card>
      </div>
    </section>
  )
}

export default Programs