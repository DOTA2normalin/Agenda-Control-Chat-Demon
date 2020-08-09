import React,{useState} from 'react';
import {db} from '../firebase/index';
import { Button } from "react-bootstrap";
const Search=(props)=>{
   const initialValues= {
      search: "",
   };
   const [values,setValues]=useState([]);
   const [dato, setDato] =useState(initialValues);
   const handleInputChange=(e)=>{
      const { name, value } = e.target;
      setDato({ ...dato, [name]: value });
   }
   const handleSubmit= async(e)=>{
      e.preventDefault();
      db.collection('contacts').onSnapshot((querySnapshot)=>{
         const docs =[];
         querySnapshot.forEach((doc)=>{
            if(doc.data().name===dato.search){
               console.log(doc.data());
               docs.push({...doc.data(),id:doc.id});
            }
         })
         setValues(docs);
      })
      setDato({...initialValues});
   }

   return(
      <form onSubmit={handleSubmit}>
         <div className="card card-body border-info m-5">
            <p className="text-center">SEARCH CONTACTS</p>
                  <div>
                     <input 
                     type="text" 
                     name="search" 
                     placeholder="Search by name" 
                     className="form-control" 
                     value={dato.search}
                     onChange={handleInputChange}/>
                  </div>
            </div>
            <div className="col-md-7">
               <table className="table table-border-less table-stripped">
                     
                <thead className="thead-dark">
                      <tr>
                        <th>Full Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Actions</th>
                     </tr>  
                </thead>
                <tbody>
                  {
                     values.length > 0 ?
                    values.map((value)=>(
                      <tr key={value.id}>
                        <td>{value.name}</td>
                        <td>{value.telefono}</td>
                        <td>{value.email}</td>
                        <td>
                          <div className="btn text-primary">
                            <Button
                              className="material-icons text-danger"
                              onClick={() => props.onDeleteLink(value.id)} 
                            >
                              delete
                            </Button>
                            <Button
                              className="material-icons text-black"
                              onClick={() => props.setCurrentId(value.id)}
                            >
                              create
                            </Button>
                          </div>
                        </td>
                      </tr>
                    )):(
                       <tr>
                          <td colSpan={3}>No contacts</td>
                       </tr>
                    )
                  }
                </tbody>
              </table>
            </div>

      </form>

        
   )
}
export default Search;