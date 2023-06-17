import React, { useEffect, useRef, useState } from 'react'

export const Ejemplo = () => {
  
    const [numeroSaludo, setNumeroSaludo] = useState(0);

    const saludosEnCola = useRef(numeroSaludo);
    


    //Mostrar saludo cada 3 segundos con useREF
    useEffect(() => {
        saludosEnCola.current = numeroSaludo;
        setTimeout(()=> {
            console.log("Saludos en cola: " + saludosEnCola.current);
        }, 3000)
    }, [numeroSaludo])

    const enviarSaludo = e => {
        setNumeroSaludo(numeroSaludo +1);
    }
    return (
    <div>
        <h1>Ejemplo con useRef</h1>
        <h2>Saludos enviados: {numeroSaludo}</h2>
        <button onClick={enviarSaludo}>Enviar Saludo!!</button>
        <hr />
    </div>
  )
}
