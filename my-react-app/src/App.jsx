import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      "temp": 36
    }
  }

  handleChange = (e) => {
    this.setState({
      "temp": e.target.value
    })
  }

  render(){
    const tempF = this.state.temp*9/5 + 32;

    return(
      <>
        <h3>Degree Celsius to Fahrenheit conversion</h3>
        <input type='number' value={this.state.temp} onChange={this.handleChange} />
        <p>deg C = {tempF} deg F.</p>
      </>
    )
  }
}

export default App
