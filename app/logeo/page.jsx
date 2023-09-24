"use client"
import  '../page.module.css'




export default function page() {
    
  return (

    <div className="contenedor boton-clic">
     

        <div><h1 className='bienvenido'>Bienvenido!</h1></div>
        <form className='form'>
            <label className='nombre'>Email</label>
           <input type="text"  placeholder='Email' name='email' className='input'/>
         <label   className='nombre dos'>Contraseña</label>
         <input type="text" placeholder='Contraseña' name='contraseña' className='tres'/>
         <input type='input' className='sino boton-clic'
          placeholder='si aun no te reuiat'/>
         <div className='registrate' id='registrate'>
          
          <label className='name'>Nombre</label>
          <input type="text" className='in a'/>
          <label className='apellido'>Apellido</label>
          <input type="text" className='in b'/>
          <label className='emas'>Email</label>
          <input type="text" className='in c'/>
          <label className='contr'>Contraseña</label>
          <input type="text" className='in d' />
         </div>
         <input type="submit" className='enviar' value="Enviar"/>
         {/* <input type="hidden" name='_next' value={"http://localhost:3000/"} /> */}
        </form>
    <img className='imagen' src={("https://www.bbva.pe/content/dam/public-web/peru/photos/blog-img/card/card-vehiculos-seguros.jpg")} alt="" />
    </div>
  )
}
