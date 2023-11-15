"use client"
import Navez from "../Naves.jsx"
import "../vehiculo.css"
import "./cronograma.css"

 async function ver(e){
   
    const res = await fetch("http://localhost:8080/ofertas")
    const data =await res.json()
    return data;

}
export default async function page() {
    const mostrar = await ver()
  return (
    <div>
       <Navez></Navez>
       <div className="cont">
           <div className="grid">
            <div className="fila">
            <div className="colum"><h3>Interes</h3></div>
            <div className="colum"><h3>Seguro Desg</h3></div>
            <div className="colum"><h3>Seguro Bien</h3></div>
            <div className="colum"><h3>Amortizacion</h3></div>
            <div className="colum"><h3>Envio fisico de Estado Cuenta</h3></div>
            <div className="colum"><h3> Evaluacion de Poliza endosada</h3></div>
            <div className="colum"> <h3 className="cuota">Cuota</h3></div>
            </div>
            <div className="fila2">
            <div className="colums">
                {
                    mostrar.map((mostra)=>{
                        <div key={mostra.id}>
                        <span>{mostra.van}</span>
                        <span>{mostra.tir}</span>
                        </div>
                    })
                }
            </div>
        
            <div className="colums"></div>
            <div className="colums"></div>
            <div className="colums"></div>
            <div className="colums"></div>
            <div className="colums"></div>
            <div className="colums"></div>
            <div className="colums"><h2 className="tota">Total a Pagar</h2></div>
            </div>
           </div>
        <div className="grid2">
            <div className="filaa">
                <div className="culumns"><h3>#</h3></div>
                <div className="culumns"><h3>Fecha</h3></div>
                <div className="culumns"><h3>Saldo</h3></div>
                <div className="culumns"><h3>Interés</h3></div>
                <div className="culumns"><h3>Seguro desg</h3></div>
                <div className="culumns"><h3>Seguro Bien</h3></div>
                <div className="culumns"><h3>Amortizacion</h3></div>
                <div className="culumns"><h3>Envio fisico Estado Cuenta</h3></div>
                <div className="culumns"><h3>Evaluacion Poliza Endosada</h3></div>
                <div className="culumns"><h3>Cuota</h3></div>
                </div>
            <div className="filaa">
                <div className="culumns"><h3>#</h3></div>
                <div className="culumns">2</div>
                <div className="culumns">2</div>
                <div className="culumns">2</div>
                <div className="culumns">2</div>
                <div className="culumns">2</div>
                <div className="culumns">2</div>
                <div className="culumns">2</div>
                <div className="culumns">2</div>
                <div className="culumns">2</div>
                
                </div>
            <div className="filaa">
                <div className="culumns"><h3>#</h3></div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                </div>
            <div className="filaa">
                <div className="culumns"><h3>1</h3></div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                </div>
            <div className="filaa">
                <div className="culumns"><h3>2</h3></div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                </div>
            <div className="filaa">
                <div className="culumns"><h3>3</h3></div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                </div>
            <div className="filaa">
                <div className="culumns"><h3>4</h3></div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                </div>
            <div className="filaa">
                <div className="culumns"><h3>5</h3></div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                </div>
            <div className="filaa">
                <div className="culumns"><h3>6</h3></div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                </div>
            <div className="filaa">
                <div className="culumns"><h3>7</h3></div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                </div>
            <div className="filaa">
                <div className="culumns"><h3>8</h3></div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                </div>
            <div className="filaa">
                <div className="culumns"><h3>9</h3></div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                </div>
            <div className="filaa">
                <div className="culumns"><h3>10</h3></div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                </div>
            <div className="filaa">
                <div className="culumns"><h3>11</h3></div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                </div>
            <div className="filaa">
                <div className="culumns"><h3>12</h3></div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                </div>
            <div className="filaa">
                <div className="culumns"><h3>13</h3></div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                </div>
            <div className="filaa">
                <div className="culumns"><h3>14</h3></div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns">3</div>
                <div className="culumns dos">3</div>
                </div>

        </div>
       </div>

    </div>
  )
}
