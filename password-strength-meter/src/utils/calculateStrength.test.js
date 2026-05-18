import { describe, it, expect } from 'vitest' // decribe/it/expect de vitest 
import { calculateStrength } from './calculateStrength' 

describe('calculateStrength', () => {
  it('retorna "vacía" cuando la contraseña está vacía', () => {  // El test se llama "retorna 'vacía' cuando la contraseña está vacía"
    expect(calculateStrength('')).toBe('vacía') // El test espera que calculateStrength('') retorne 'vacía'
  })

  it('retorna "débil" cuando la contraseña tiene menos de 8 caracteres', () => { 
    expect(calculateStrength('abc')).toBe('débil') //cuando la contraseña tiene menos de 8 caracteres, se espera que retorne 'débil'
  })

  it('retorna "débil" con solo símbolos y menos de 8 caracteres', () => {
    expect(calculateStrength('!@#')).toBe('débil') //cuando la contraseña tiene solo símbolos y menos de 8 caracteres, se espera que retorne 'débil'
  })

  it('retorna "media" con 8+ caracteres sin números ni símbolos', () => {
    expect(calculateStrength('abcdefgh')).toBe('media') //cuando la contraseña tiene 8 o más caracteres sin números ni símbolos, se espera que retorne 'media'
  })

  it('retorna "fuerte" con 8+ caracteres y al menos un número', () => {
    expect(calculateStrength('abcdefg1')).toBe('fuerte') //cuando la contraseña tiene 8 o más caracteres y al menos un número, se espera que retorne 'fuerte'
  })

  it('retorna "muy fuerte" con 8+ caracteres, número y símbolo', () => {
    expect(calculateStrength('abcdefg1!')).toBe('muy fuerte') //cuando la contraseña tiene 8 o más caracteres, al menos un número y al menos un símbolo, se espera que retorne 'muy fuerte' 
  })

  // Edge cases
  it('exactamente 8 caracteres sin números NO es débil', () => {
    expect(calculateStrength('abcdefgh')).not.toBe('débil') //cuando la contraseña tiene exactamente 8 caracteres sin números, se espera que NO retorne 'débil'
  })

  it('exactamente 7 caracteres NO es media', () => {
    expect(calculateStrength('abcdefg')).not.toBe('media') //cuando la contraseña tiene exactamente 7 caracteres, se espera que NO retorne 'media'
  })
  
  it('un espacio cuenta como símbolo', () => {
    expect(calculateStrength('abcdefg1 ')).toBe('muy fuerte')// incluye espacio al final, 8 chars con número y espacio que cuenta como símbolo                               
  })

  it('los espacios cuentan para la longitud', () => {
    expect(calculateStrength('abc efg1')).toBe('fuerte') // incluye espacio en medio, 8 chars con número y espacio que cuenta como símbolo  por lo que es fuerte
  })
})