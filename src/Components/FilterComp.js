import React, { Component } from 'react'
import 'tachyons'

class FilterComp extends Component
{
    render(){
        return(
            <form className='white tc mb3' onSubmit={ this.props.filterItems}>
                <label >
                    Filter
                </label>

                <select className='ml2' name='filter' id='filter' onChange={this.props.handleDisplaychange} value={this.props.displayState} >
                    <option value='none' >None</option>
                    <option value='month' >Month</option>
                </select>
                
                <input type='submit' value='GO' />
            </form>
        )
    }
}

export default FilterComp;