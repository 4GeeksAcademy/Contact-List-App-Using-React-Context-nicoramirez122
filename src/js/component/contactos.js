import React,{ useState, useContext } from "react";
import { BsFillTelephoneFill,BsFillEnvelopeFill, BsFillPinFill,BsFillPencilFill,BsFillTrashFill } from "react-icons/bs"
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";


const Contactos = (props) => {
	
	const { store, actions } = useContext(Context);
	const setStore = actions.setStore;
	const borrarContacto = (id) => {
		fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
			method: "DELETE"
		})
			.then(() => {
				actions.loadSomeData(); // Actualizar los datos después de eliminar el contacto
			})
			.catch((error) => {
				console.error("Error deleting contact:", error);
			});
	
		  
	  };

return (
<div className="card mb-3" style={{width: "100%"}}>
	<div className="row g-0">
	  <div className="col-md-3">
	  <img src="https://opem.b-cdn.net/wp-content/uploads/2022/10/foto-curriculum.jpg" style={{width:"150px",height:"150px",borderRadius:"50%",marginTop:"10px",marginLeft:"100px"}} alt="..."/>
	  </div>
	  <div className="col-md-9">
		<div className="card-body">
		  <h5 className="card-title">{props.nombre}
		  	 <div className="botonescontacto">
		 	 	<Link to={"/single/" + props.id} ><BsFillPencilFill/></Link>
		 	 	<button type="button" style={{border:"0px",background:"white"}} onClick={() => borrarContacto(props.id)}><BsFillTrashFill/></button>
		  	 </div> 
		  </h5>
		  <p className="card-text"><BsFillPinFill/>{props.address}</p>
          <p className="card-text"><BsFillTelephoneFill/>{props.phone}</p>
		  <p className="card-text"><small className="text-muted"><BsFillEnvelopeFill/>{props.email}</small></p>

		  

		</div>
	  </div>
	</div>
  </div>


)
};

export default Contactos;