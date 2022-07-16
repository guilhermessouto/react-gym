import './formContainer.css'

const FormContainer = ({ children, onSubmit }) => {
  return (
    <form 
      className='form_container'
      onSubmit={onSubmit}
    >
      {children}
    </form>
  )
}

export default FormContainer