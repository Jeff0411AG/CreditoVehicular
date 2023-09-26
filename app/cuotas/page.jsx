import Naves from "../Naves"
import "../vehiculo.css"

export default function ({oferta,fecha,input}) {
  return (
    <div>
        <Naves></Naves>
        <div className="wlw">
    <div className="container">
      <div className="col">
        <h2 className="h2">INGRESA TUS DATOS</h2>
        <label  className="fechad">Dia de Pago</label>
        <input type="date"  className="inputtres"  />
        <h3 className="h3">Proteccion contra robos</h3>
        <p className="p">En caso de que mueras nos hacemos cargo por ti.</p>
        <span className="span">.Seguro de desgravame</span>
        <input type="checkbox" name="" className="check" />
        <a href="#" className="cotizalo">Cotizalo</a>
        </div>
      <div className="col">

        <label  className="fechadd">Valor Vehicular</label>
        <input type="number" name=""  className="number" placeholder="Ingresa el monto..."/>
        <h3 className="h33">Cuota de Inicio</h3>
        <p className="pp">Cuota Inicial de Pago</p>
        <span className="spann">Cualquier duda hacercarse al centro de atencion en la avenida messi</span>
         <input type="number" name="" className="number2" placeholder="Ingresa el monto..."/>
      </div>
      <div className="col">
      
        <label  className="fech">Tasa de Interes efectiva Anual</label>
        <input type="number" name=""  className="numbe" placeholder="Interes..."/>
        <h3 className="h33 t">Seguro Anual Vehicular</h3>
        <p className="pn">Vehiculo</p>
        <span className="spa">No pierdas mas esta oportunidad</span>
         <input type="number" name="" className="numbe2" placeholder="Seguro..."/>
      </div>
      </div>
    </div>
    </div>
  )
}
