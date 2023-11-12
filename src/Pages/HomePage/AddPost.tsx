import React from 'react'
import AddPostProps from '../../components/Types/AddPostProps'

const AddPost:React.FC<AddPostProps> = ({onAdd}) => {

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const bodyInput = form.elements.namedItem('bodyPost') as HTMLInputElement;
    const titleInput = form.elements.namedItem('titlePost') as HTMLInputElement;
    if(bodyInput.value.length > 0 && titleInput.value.length>0){
      onAdd(bodyInput.value,titleInput.value);
      bodyInput.value = "";
      titleInput.value="";
    }

  }

  return (
    <div className='sss'>
      <form className='form' onSubmit={handleOnSubmit}>
        <input placeholder='title' name='titlePost'/>
        <input className='bodyPost' name='bodyPost'/>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default AddPost