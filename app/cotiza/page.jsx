import "./cotiza.css"
import Naves from "../Naves"
import "../vehiculo.css"
export default function page() {
  return (
    <div>
      <Naves></Naves>
      <div>
        <div className="general">
          <h1 className="titulo">Por que lo hacemos pensando en ti</h1>
          <p className="parrafo">Estas muy cerca de obtener tu prestamo solo unos pasos mas.</p>
          <div className="grid">
            <div className="fila aaa"><h2>Cuota mensual total</h2><span className="sol">$</span></div>
            <div className="fila"></div>
            <div className="fila bbb"><h2>Costo efectivo Anual (En base a 360 dias)</h2></div>
            <div className="fila"></div>
          </div>
          <div className="imagen">
            <img  src="	https://ventasonline.pacifico.com.pe/seguro-vehicular/assets/pareja-abrazo.4f70a10a.webp" alt="" />
          </div>
          <div className="contbo">
          <button className="boton aa">Ver</button>
             <button className="boton bb">Ver Cronograma</button>
          </div>
        </div>
      </div>
    </div>
  )
}
