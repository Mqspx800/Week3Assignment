import { createStore } from 'redux'
import reducer from './reducer'

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducer, enhancer)

export default store



// modelDetails.propTypes = {
//   arrayWithShape: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     manufacturer: PropTypes.string.isRequired,
//     year: PropTypes.number.isRequired,
//     origin: PropTypes.string.isRequired,
//   })).isRequired,
// }