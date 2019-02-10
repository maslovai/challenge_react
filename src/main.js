import React from 'react';
import ReactDom from 'react-dom';
import './style/main.scss';
import ItemsList from './components/items';

class Header extends React.Component{
    render(){

        return(
            <header>
                <h1>FIRST TRY</h1>
            </header>
        )
    }
}

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list:['HOTES', 'TOOLS']}  
        // this.getItems = this.getItems.bind(this)      
    }
    
    // getItems(items){
    //     // this.setState({list:(articles).slice(0, number)});
    //     // console.log('in main, articles', this.state.list)
    // }

    render(){
        return(
            <div>
                <ItemsList list = {this.state.list}/>
            </div>
        )
    }
}
ReactDom.render(<App/>, document.getElementById('root'));