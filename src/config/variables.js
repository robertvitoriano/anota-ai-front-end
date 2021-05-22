import productionVariables from './production_variables'
import localVariables from './local_variables'

const variables = productionVariables.PORT ? productionVariables : localVariables


export default variables