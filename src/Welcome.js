import React from 'react'
import PropTypes from 'prop-types';

class Welcome extends React.Component{
    render(){
        return(
            <h1>Welcome to {this.props.name} - {this.props.year}</h1>
        )
    }
}

Welcome.propTypes={
    name:PropTypes.string.isRequired,
    year:PropTypes.number,
    password(props, propName, component){
        if(!(propName in props)){
          return new Error(`missing ${propName}`)
        }
        if(props[propName].length < 6){
          return new Error(`${propName} was too short`)
        }
      }
}

Welcome.defaultProps={
    year:2020
}

export default Welcome;