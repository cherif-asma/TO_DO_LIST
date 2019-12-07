import React, {Component} from 'react';
import ListItem from './Components/ListItem';
class App extends Component {
  state = {
    text: '',
    items: [],
  
  
  }
addInput= () => {

    this.setState({
      text: '',
      items: [...this.state.items, this.state.text],
   
    });
  }



render() {

  
  return (
    <div style={{display: 'flex', justifyContent: 'center', marginTop: 50, flexDirection: 'column', alignItems: 'center'}}>
       <input style={{width: '400px'}} type="text" value={this.state.text} onChange={(event) => this.setState({text: event.target.value})} /> 
       <button onClick={this.addInput}   >ADD</button>
        <ul>
       {this.state.items.map((item,index) => {
          return <ListItem item={item} />
        })}
        </ul>
      
    </div>
  );
}

}
export default App;