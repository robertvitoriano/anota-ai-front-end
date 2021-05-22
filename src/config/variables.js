import productionVariables from './production_variables'

let  variables =  productionVariables 

if(!productionVariables.REACT_APP_API_URL){

    
    variables  = require('./local_variables').default


}


export default variables