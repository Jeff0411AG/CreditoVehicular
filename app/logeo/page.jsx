"use client"
import  '../page.module.css'




export default function page() {
    
  return (
    <div className="contenedor">
    <div><h1 className='bienvenido'>Bienvenido!</h1></div>
    <form className='form'>
        <label className='nombre'>Email</label>
       <input type="text"  placeholder='Email' name='email' className='input'/>
     <input type="text" placeholder='Contraseña' name='contraseña' className='tres'/>
        <Click></Click>
     <input type="submit" className='enviar' value="Enviar"/>
     {/* <input type="hidden" name='_next' value={"http://localhost:3000/"} /> */}
    </form>
<img className='imagen' src={("https://www.bbva.pe/content/dam/public-web/peru/photos/blog-img/card/card-vehiculos-seguros.jpg")} alt="" />
</div>
  )
}
