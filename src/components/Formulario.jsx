import "./Formulario.css"
import { useState } from "react"

export function Formulario ({ setUser }) {
    const [nombre, serNombre] = useState("")
    const [contrasena, serContrasena] = useState("")
    const [error, setError] = useState(false)
    
    const handleSubmit = (e) =>{
        e.preventDefault()

        if(nombre == "" || contrasena == ""){
            setError(true)
            return 
        }

        setError(false)

        setUser([nombre])


    }
    return(
        <section>
            <h1>Login</h1>
            <form 
                className="formulario"
                onSubmit={handleSubmit}
            >
                <input 
                type="text"
                value={nombre}
                onChange={e => serNombre(e.target.value)}
                />
                <input 
                type="password"
                value={contrasena}
                onChange={e => serContrasena(e.target.value)}
                />
                <button> Iniciar Sesion </button>
            </form>
            {error && <p>Todos los campos deben ser diligenciados</p>}
        </section>
    )
}