"use client"
import  '../page.module.css'
import Click from  "./click.jsx"
import Link from 'next/link'
import { useRouter } from 'next/navigation'


export default function page() {

    const onsubmit =async (e)=>{
      const router = useRouter()

      e.preventDefault()
      const nombre = e.target.nombre.value
      const apellido = e.target.apellido.value
      const res =await fetch("http://localhost/tomas/Post.php", {
        method:"POST",
        body: JSON.stringify({nombre,apellido}),
        headers:{
          'Content-Type':'application/json'
        }
      })
      const data =  res.json()
      console.log(data)

      router.push("/vehiculo")
    }
   
  return (
    <div className="contenedor" id='contenedor'>
    <div><h1 className='bienvenido'>Bienvenido!</h1></div>
    <form className='form' action={"Post.php"}  method="post">
        <label htmlFor='nombre' className='nombre' >  </label>
       <input type="text"  placeholder='Email...' name='nombre'  className='input'/>
       <label  className='contr'></label>
     <input type="password" placeholder='Contraseña...'name='apellido' className='tres' />
        <Click></Click>
        
     <Link href="/" className='enviar' onSubmit={onsubmit}>
      
     </Link>   
     {/* onClick={(e)=> saveveCliente(e) } */}
    
     {/* <input type="hidden" name='_next' value={"http://localhost:3000/"} /> */}
    </form>
<img className='imagen' src={("https://www.bbva.pe/content/dam/public-web/peru/photos/blog-img/card/card-vehiculos-seguros.jpg")} alt="" />
</div>
  )
  

  }

  
