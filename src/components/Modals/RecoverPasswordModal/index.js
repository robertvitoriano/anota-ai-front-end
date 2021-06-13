import React from "react";


import Modal from './../../Modal'

import Input from './../../Input'

import Button from './../../Button'
const RecoverPasswordModal = ({ email, setEmail, onSubmit, setDisplayModal}) =>{



  return(
       <Modal title="Recuperação de E-mail" setDisplayModal={setDisplayModal}>

       <Input label="Digite seu E-mail" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
       <Button text="Enviar E-mail de recuperação" onClick={onSubmit}/>

       </Modal>
  )

}


export default RecoverPasswordModal