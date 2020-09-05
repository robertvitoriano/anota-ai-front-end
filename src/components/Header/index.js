import React,{useState,useEffect} from 'react';
import './index.css'
import {useHistory} from 'react-router-dom';
import api from './../../services/api'


function Header ({match}){
    const history = useHistory();
    const[showDropdownMenu,setShowDropDownMenu] = useState(false);
    const[createdCategories,setCreatedCategories] = useState([]);
    const[newCategory,setNewCategory] = useState('');
    const[showNewCategoryModal,setShowNewCategoryModal] = useState(false);


    useEffect(()=>{

     async  function loadCategories(){
         const response  =   await api.get(`/${match.params.userId}/categories`,{
              headers: {
                    userauth: localStorage.getItem("Authorization")
                },
            })
            setCreatedCategories(response.data);
        }
      loadCategories();


    },[])
    async function handleCreation() {
        history.push(`/${match.params.userId}/creation`);
    }

    async function handleHome(){
        history.push(`/user/${match.params.userId}`)
    }
    async function handleDropDown(){
        setShowDropDownMenu(!showDropdownMenu);
        console.log(showDropdownMenu);
    }

    async function showCategory(){

    }
    async function handleLogout() {
        try{
            await api.post('/users/logout', {
                headers: {
                    userauth: localStorage.getItem("Authorization"),
                },
            })

        }catch(e){
            console.log(e);

        }
        localStorage.removeItem("Authorization")
        history.push(`/`);
    }
    async function handleCategoryCreation(e){
        e.preventDefault();
         await api('/'+match.params.userId+'/categories',{
             name: newCategory, 
             authorId:match.params.userId
         },{
            headers:{
                userauth: localStorage.getItem("Authorization")
            }
        })

    }
    
    return(
        <>
        <div className="header-container">
            
            <div className="header-content">
                <a onClick={handleHome} className=" header-button" >Home</a>
                <div className="categories-dropdown-menu">
                    <a onClick={handleDropDown} className=" header-button categories-button" >Categorias</a>
           
                        <div className={`dropdown-menu  ${showDropdownMenu ? 'show-dropdown-menu':''}`}>

                            <a className=" header-button dropdown-menu-item" onClick={e=>setShowNewCategoryModal(true)} >Nova Categoria</a>
                      <div className="created-categories">
                {createdCategories.map((createdCategory, index) => (
           <a onClick={showCategory} className=" header-button dropdown-menu-item" >{createdCategory.name}</a>))}
                     </div>
             
                    </div>
            
                </div>
            <a onClick={handleCreation} className="header-button">Criar Anotação</a>
                <a onClick={handleLogout} className=" header-button">LOGOUT</a>
            </div>
        </div>
        {showNewCategoryModal?(
        <div className="new-category-modal">
            <form>
                <div className="new-category-close-button">X</div>
                <span className="new-category-call">Crie uma Categoria</span>
            <input type="text"
             className="new-category-input"
             value={newCategory}
             onChange={e=>setNewCategory(e.target.value)}
             />
                    <button className={`new-category-button `} onCLick={handleCategoryCreation}>Criar Categoria</button>
            </form>
        </div>
            ):''}
        </>
    )

}
export default Header;


