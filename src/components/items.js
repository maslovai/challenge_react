import React from 'react';
import ReactDom from 'react-dom';

class ItemsList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){  
        
        console.log('in list:::::', this.props.list);
        const items = this.props.list;
        return(
        <div id ='resultBox'>
            <h3>Items:</h3>
            <ul>{
                items.map((item,i)=>{
                return(
                    <li key={i}>item</li>
                )})
            }   
            </ul>
        </div>
        )
    }
}
export default ItemsList;