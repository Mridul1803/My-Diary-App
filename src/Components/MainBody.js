import React, {Component} from 'react'
import 'tachyons'
import './Style/MainBody.css';

class MainBody extends Component
{
    render()
    {
        return(
            <div className = 'form-div shadow-3 pa5'>
                <form id='notes-form' onSubmit= {this.props.addItem} >
                    <textarea rows='4' type='text' onChange={this.props.handleInput} value={this.props.text} placeholder="Start making notes..." />
                    <button className='shadow-3' type='submit'>Save</button>
                </form>
            </div>
        )
    }
}

export default MainBody;