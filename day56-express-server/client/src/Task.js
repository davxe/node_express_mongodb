import React from 'react'
import axios from 'axios'
class Task extends React.Component
{
    state={
        tasks:[]
    }
    componentDidMount()
    {
        axios.get('/tasks')
        .then((response)=>{
            const tasks=response.data
            this.setState({tasks})
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render()
    {
        return(
            <div>
                <h2>Listing Tasks-{this.state.tasks.length}</h2>
                <ul>
                    {
                        this.state.tasks.map((ele,i)=>{
                            return <li key={i}>{ele.title}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Task