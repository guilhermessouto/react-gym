import React from 'react'

import './input.css'

const Input = React.forwardRef(( props, ref ) => {
  const value = ev => {
    props.onChange(ev)
  }

  return (
    <div className='form_fields'>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        required={props.required}
        value={props.value}
        onChange={e => value(e)}
        ref={ref}
        {...props}
      />
    </div>
  )
})

export default Input