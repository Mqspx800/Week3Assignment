import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import ModelDetails from './components/modelDetails'


class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  componentDidMount() {
    this.setState({ initialData: this.data })
  }

  render() {
    return this.state.initialData ? (
      <div className="App" ref={this.myRef}>
        <ModelDetails models={this.props.selectedItem} />
        

        <form className='imputForm'>

          <select name='currentValue'
            onChange={this.updateSelection}>
            <option value='' defaultValue>-- pick a model --</option>

            {this.state.initialData.map((item) =>
              <option value={item.name} key={item.name}>
                {item.name + '(' + item.year + ')'}
              </option>)}
          </select>


          <input type='submit' value='Add' onClick={this.addModel} />
        </form>


      </div>
    ) : 'Loading ...';
  }

  updateSelection = (event) => {
    const options = event.target.options
    const value = options[options.selectedIndex].value
    const name = event.target.name;
    this.setState({
      [name]: this.state.initialData.find((item) => item.name == value)
    });
  }

  addModel = (event) => {
    event.preventDefault()
    const currentValue = this.state.currentValue
    if (currentValue)
      this.props.dispatch({
        type: 'ADD_MODEL',
        payload: { ...this.state.currentValue }
      })
  }

  data = [
    {
      name: "Ivel Z3",
      manufacturer: "Ivasim",
      year: 1969,
      origin: "Croatia"
    },
    {
      name: "Bally Astrocade",
      manufacturer: "Bally Consumer Products",
      year: 1977,
      origin: "USA"
    },
    {
      name: "Sord M200 Smart Home Computer",
      manufacturer: "Sord Computer Corporation",
      year: 1971,
      origin: "Japan"
    },
    {
      name: "Commodore 64",
      manufacturer: "Commodore",
      year: 1982,
      origin: "USA"
    },
    {
      name: 2222,
      manufacturer: 2222,
      year: 'dadfasfd',
      origin: 32332
    }
  ]
}

const mapStateToProps = (state) => {
  return {
    selectedItem: state
  }
}

export default connect(mapStateToProps)(App);
