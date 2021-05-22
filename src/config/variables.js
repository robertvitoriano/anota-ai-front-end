import productionVariables from './production_variables'

let  variables =  productionVariables.REACT_APP_API_URL ?productionVariables :require('./local_variables').default




export default variables