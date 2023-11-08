import React from "react"
import "./clickes.css"


 class Click extends React.Component
{
    state ={
        divcontainer:false,   
    }
    render()
    {
    
        let Handlechange = () =>{
            this.setState({divcontainer :!this.state.divcontainer})
        }
        const x=this.state.divcontainer

        return(
            <div>
            <a className="cliques" onClick={Handlechange}>{x?"Cerrar":"SI aun no te has registrado"}</a>
            {
                x &&(<div className="nombresq">
                       
                       <input className="innombre input" type="text" placeholder="Nombre..."/>
                       <input type="text" placeholder="Apellido..." className="input mm"/>
                     
                       <input type="text" placeholder="Email..." className="input qq"/>
                      
                       <input type="password" placeholder="Contraseña..." className="input uu"/>
                       <a href="#" className="env">Enviar</a>


                    </div>)
            }
           </div>
        )
    }

}
export default Click;


