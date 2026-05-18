export function calculateStrength(password) {
  if (password === '') return 'vacía' // Si la contraseña está vacía, retorna 'vacía'
  if (password.length < 8) return 'débil' // Si la contraseña tiene menos de 8 caracteres, retorna 'débil'

  const hasNumber = /[0-9]/.test(password) // Verifica si la contraseña contiene al menos un número usando una expresión regular
  const hasSymbol = /[^a-zA-Z0-9]/.test(password) //al igual que arriba pero ahora para símbolos, verifica si la contraseña contiene al menos un símbolo 

  if (hasNumber && hasSymbol) return 'muy fuerte'
  if (hasNumber) return 'fuerte'
  return 'media'
}