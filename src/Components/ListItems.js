import React from 'react'
import './Style/ListItems.css';

function ListItems(props)
{
    const items = props.items;
    const listItems = items.map(item =>
        {
            return <div className='list dib ma3 pa3 pb0 br4' key={item.key}>
                    
                    <p className='f6 b tc underline mb1' >{item.date}-{item.month}-{item.year}</p>

                    <textarea rows='7' onChange={ (e) => props.setUpdate(e.target.value, item.key) } type='text' id={item.key} value={item.text} />
                    
                    <div className='trash-icon tc grow' onClick={ () => props.deleteItem(item.key) } >

                        <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                    
                    </div>
                    
                </div>
        })

    return(
        <div className='list1'>{listItems}</div>
    )
}

export default ListItems;