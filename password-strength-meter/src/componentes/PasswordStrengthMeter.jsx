import { useState } from 'react'
import { calculateStrength } from '../utils/calculateStrength' // Importa la función calculateStrength desde el archivo de utilidades para evaluar la fortaleza de la contraseña

function PasswordStrengthMeter() {
  const [password, setPassword] = useState('') // password para almacenar el valor del input de contraseña, y setPassword para actualizarlo

  const strength = calculateStrength(password) // Llama a calculateStrength con el valor actual de password para obtener la fortaleza de la contraseña y almacenarla en la variable strength

  return ( // Renderiza un div  
    <div>
      <input
        type="password" //que contiene un input de tipo password y un parrrafo que muestra la fortaleza de la contraseña
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Escribe tu contraseña"
      />
      <p>{strength}</p> 
    </div>
  )
}

export default PasswordStrengthMeter // Exporta el componente para ser utilizado en otras partes