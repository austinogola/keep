import React from 'react'
import './AddNotes.css'

class AddNotes extends React.Component{
    componentDidMount(){
        const note=document.querySelector('.note')
        const title=document.querySelector('.title')
        const form=document.querySelector('.noteForm')

        title.style.display='none'
        note.addEventListener('focus',e=>{
            e.preventDefault()
            note.setAttribute('rows','7')
            title.style.display='block'
        })

        form.addEventListener('submit',e=>{
            e.preventDefault()
            console.log(form.title.value);
            console.log(form.body.value);
        })
    }
    render(){
        return(
            <div className='AddNotes d-flex justify-content-center mt-5'>
                <form action="" className='w-50 noteForm'>
                    <div className='form-group shadow p-1'>
                        <input type="text" placeholder='Title' name='title' className='form-control title'/>
                        <textarea name="body" id="body" cols="30" rows="2" placeholder='Take A Note...' className='form-control note'>
            
                        </textarea>
                    </div>
                    <div className="row">
                        <div className="col-10"></div>
                        <div className="col-2">
                            <button className="btn btn-large btn-warning add" type='submit'><h3>+</h3></button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddNotes