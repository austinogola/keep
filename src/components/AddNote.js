import React from 'react'

class AddNotes extends React.Component{
    render(){
        return(
            <div className='AddNotes d-flex justify-content-center mt-5'>
                <form action="" className='w-50'>
                    <div className='form-group'>
                        <input type="text" placeholder='Note Title' name='title' className='form-control'/>
                        <textarea name="body" id="body" cols="30" rows="10" placeholder='Note' className='form-control'>
            
                        </textarea>
                    </div>
                    <button className="btn btn-large btn-warning" type='submit'>+</button>
                </form>
            </div>
        )
    }
}

export default AddNotes