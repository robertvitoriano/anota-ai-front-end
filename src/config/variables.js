import productionVariables from './production_variables'

const variables = productionVariables.REACT_APP_API_URL ? productionVariables : import ('./local_variables')


export default variables