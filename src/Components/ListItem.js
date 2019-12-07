import React, { Component } from 'react';
class List extends Component {
  state = {
    etat: false
  }

  render() {
    let textDecorationStyle;
    if (this.state.etat === true) {
      textDecorationStyle = 'line-through'
    } else {
      textDecorationStyle = 'none'
    }



    return (

      <li
        style={{ textDecoration: textDecorationStyle, cursor: 'pointer' }}
        onClick={() => this.setState({ etat: !this.state.etat })}
      >
        {this.props.item}
      </li>

    );

  }

}
export default List;