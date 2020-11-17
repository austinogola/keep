import React from 'react'
import {db} from './Notes-firebase'

class Notes extends React.Component{
    componentDidMount(){
        db.collection('notes').get().then((snapshot)=>{
            console.log(snapshot.docs);
        })
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}

export default Notes