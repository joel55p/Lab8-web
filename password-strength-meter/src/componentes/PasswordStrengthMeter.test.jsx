import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react' // para renderizar el componente y buscar elementos en el DOM
import userEvent from '@testing-library/user-event' // para simular eventos de usuario como escribir en el input
import PasswordStrengthMeter from './PasswordStrengthMeter' // el componente a testear

describe('PasswordStrengthMeter', () => {
  // Tests de renderizado
  it('renderiza un input de tipo password', () => {
    render(<PasswordStrengthMeter />)
    expect(document.querySelector('input[type="password"]')).toBeInTheDocument() // Busca un input de tipo password usando querySelector y espera que este en el documento
  })

  it('muestra "vacía" como estado inicial', () => {
    render(<PasswordStrengthMeter />)
    expect(screen.getByText('vacía')).toBeInTheDocument()
  })

  // Tests de comportamiento
  it('muestra "débil" al escribir una contraseña corta', async () => {
    const user = userEvent.setup() // Crea una instancia de userEvent para simular un usuario interactuando con el componente
    render(<PasswordStrengthMeter />) // Renderiza el componente para que el input esté disponible en el DOM
    await user.type(document.querySelector('input[type="password"]'), 'abc') // Simula que el usuario escribe 'abc' en el input de tipo password
    expect(screen.getByText('débil')).toBeInTheDocument() // Busca el texto 'débil' en el DOM y espera que esté presente, lo que indicaría que la contraseña se evaluó como 'débil'
  })

  it('muestra "media" con 8+ caracteres sin números ni símbolos', async () => {
    const user = userEvent.setup() 
    render(<PasswordStrengthMeter />) 
    await user.type(document.querySelector('input[type="password"]'), 'abcdefgh') // Escribe 'abcdefgh' en el input de tipo password
    expect(screen.getByText('media')).toBeInTheDocument() // Busca el texto 'media' en el DOM y espera que esté presente, lo que indicaría que la contraseña se evaluó como 'media'
  })

  it('muestra "fuerte" con 8+ caracteres y un número', async () => {
    const user = userEvent.setup()
    render(<PasswordStrengthMeter />)
    await user.type(document.querySelector('input[type="password"]'), 'abcdefg1') // Escribe 'abcdefg1' en el input de tipo password
    expect(screen.getByText('fuerte')).toBeInTheDocument() //busca texto 'fuerte'
  })

  it('muestra "muy fuerte" con 8+ caracteres, número y símbolo', async () => {
    const user = userEvent.setup()
    render(<PasswordStrengthMeter />)
    await user.type(document.querySelector('input[type="password"]'), 'abcdefg1!') // Escribe 'abcdefg1!' en el input de tipo password
    expect(screen.getByText('muy fuerte')).toBeInTheDocument() // Busca el texto 'muy fuerte' en el DOM y se espera  que este.
  })

  it('vuelve a "vacía" al borrar toda la contraseña', async () => {
    const user = userEvent.setup()
    render(<PasswordStrengthMeter />)
    const input = document.querySelector('input[type="password"]') // Selecciona el input de tipo password y lo guarda en la variable input para usarlo en los siguientes pasos
    await user.type(input, 'abc') // Escribe 'abc' en el input de tipo password
    await user.clear(input) // Borra el contenido del input de tipo password
    expect(screen.getByText('vacía')).toBeInTheDocument() // Busca el texto 'vacía' en el DOM
  })

  // Edge cases
  it('exactamente 8 caracteres sin números no es débil', async () => {
    const user = userEvent.setup()
    render(<PasswordStrengthMeter />)
    await user.type(document.querySelector('input[type="password"]'), 'abcdefgh') // Escribe 'abcdefgh' en el input de tipo password
    expect(screen.queryByText('débil')).not.toBeInTheDocument() // Busca el texto 'débil' en el DOM y se espera que no este 
  })

  it('7 caracteres no muestra "media"', async () => {
    const user = userEvent.setup()
    render(<PasswordStrengthMeter />)
    await user.type(document.querySelector('input[type="password"]'), 'abcdefg')
    expect(screen.queryByText('media')).not.toBeInTheDocument() //se espera que no este el texto 'media' en el DOM
  }) 

  it('solo símbolos con menos de 8 caracteres sigue siendo débil', async () => {
    const user = userEvent.setup()
    render(<PasswordStrengthMeter />)
    await user.type(document.querySelector('input[type="password"]'), '!@#') // Escribe '!@#' en el input de tipo password
    expect(screen.getByText('débil')).toBeInTheDocument() //se espera que este el texto 'dbil'en el DOM
  })
})