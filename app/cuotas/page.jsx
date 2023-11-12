import { useState } from "react"
import Naves from "../Naves"
import "../vehiculo.css"
import "./cuotas.css"

export default function ({oferta,fecha,input}) {


  //   const [values,setvalues] = useState({
  //     moneda:"",
  //     plazosGraciaTotal:0,
  //     plazoGraciaParcial: 0,
  //     ingresoMensual:0,
  //     precioVehiculo:0,
  //     porcentajeCuotaInicial:0.00,
  //     plazo:0,
  //     tea:0,
  //     cok: 0,
  //     seguroVehicularAnual: 0
  //   });
    
  
  // const changeinput =(event) =>{
  //   const [name,value] = event.target;
  //   setvalues({
  //     ...values,
  //     [name]:value
  //   });
  // };
  return (
    <div>
        <Naves></Naves>
        <form action={"http://localhost:8080/ofertas/registrar"} className="wlw">
    <div className="container">
      <div className="col">
        <h2 className="h2">INGRESA TUS DATOS</h2>
        <label  className="fechad">Dia de Pago</label>
        <input type="text" name="moneda" className="inputtres"  onChange={changeinput}/>
        <h3 className="h3">Proteccion contra robos</h3>
        <p className="p">En caso de que mueras nos hacemos cargo por ti.</p>
        <span className="span">.Seguro de desgravame</span>
        <input type="number" name="plazosGraciaTotal" className="check" onChange={changeinput} />
        <a href="#" className="cotizalo">Cotizalo</a>
        </div>
      <div className="col">

        <label  className="fechadd">Valor Vehicular</label>
        <input type="number" name="ingresoMensual"  className="number" placeholder="Ingresa el monto..."/>
        <h3 className="h33">Cuota de Inicio</h3>
        <p className="pp">Cuota Inicial de Pago</p>
        <span className="spann">Cualquier duda hacercarse al centro de atencion en la avenida messi</span>
         <input type="number" name="precioVehiculo" className="number2" placeholder="Ingresa el monto..."/>
      </div>
      <div className="col">
      
        <label  className="fech">Tasa de Interes efectiva Anual</label>
        <input type="number" name="porcentajeCuotaInicial"  className="numbe" placeholder="Interes..."/> 
        <h3 className="h33 t">Seguro Anual Vehicular</h3>
        <p className="pn">Vehiculo</p>
        <span className="spa">No pierdas mas esta oportunidad</span>
         <input type="number" name="plazo" className="numbe2" placeholder="Seguro..."/>
         <input type="number" name="tea" className="numbe2" placeholder="Seguro..."/>
         <input type="number" name="cok" className="numbe2" placeholder="Seguro..."/>
         <input type="number" name="seguroVehicularAnual" className="numbe2" placeholder="Seguro..."/>
      </div>
      </div>
    </form>
    </div>
  )
}
