import productionVariables from './production_variables'

const variables = productionVariables.PORT ? productionVariables : import ('./local_variables')


export default variables