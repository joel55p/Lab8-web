# Password Strength Meter

Componente React que evalúa la fortaleza de una contraseña en tiempo real, construido con **Vite**, **Vitest** y **React Testing Library** siguiendo el flujo de **Test Driven Development (TDD)**.

---

## Instalación

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/joel55p/Lab8-web.git
cd password-strength-meter
bun install
```

Requiere Bun(https://bun.sh/) instalado en  sistema.

---

## Cómo correr los tests

Ejecuta todos los tests una sola vez:

```bash
bun test
```

Ejecuta los tests en modo watch (se vuelven a correr automáticamente al guardar cambios):

```bash
bun run test:watch
```

En si este lab incluye 20 tests distribuidos en dos archivos:

- src/utils/calculateStrength.test.js — tests unitarios de la lógica pura (10 tests)
- src/componentes/PasswordStrengthMeter.test.jsx — tests del componente React (10 tests)

---

## Modo desarrollo

Inicia el servidor de desarrollo con Hot Module Replacement (HMR):

```bash
bun run dev
```

La aplicación estará disponible en `http://localhost:5173`.

---

## Estructura del proyecto

```
password-strength-meter/
├── src/
│   ├── componentes/
│   │   ├── PasswordStrengthMeter.jsx       # Componente React
│   │   └── PasswordStrengthMeter.test.jsx  # Tests del componente
│   ├── utils/
│   │   ├── calculateStrength.js            # Logica pura de evaluacion
│   │   └── calculateStrength.test.js       # Tests unitarios de la logica
│   ├── setupTests.js                       # Configuracion de jest-dom
│   └── main.jsx
├── vite.config.js                          # Configuracion de Vite + Vitest
├── package.json
└── bun.lock                                # Lockfile de Bun (commiteado)
```



## Flujo TDD seguido

El proyecto fue desarrollado siguiendo estrictamente el ciclo:

**1. Configuración del proyecto**
Se configuró manualmente Vite con el template de React, se instalaron Vitest, jsdom, React Testing Library y jest-dom, y se ajustó `vite.config.js` para registrar el entorno de testing. Todo esto antes de escribir cualquier test o implementación.

**2. Tests escritos primero (commit con tests fallando)**
Se escribieron todos los tests de `calculateStrength` y `PasswordStrengthMeter` antes de crear los archivos de implementación. Al correr `bun test` en este punto, todos los tests fallaban porque los módulos importados no existían

**3.Implementación mínima para pasar los tests**
Se implementó `calculateStrength.js` con la lógica de evaluación usando expresiones regulares, y `PasswordStrengthMeter.jsx` con un input controladoo. Por lo que  al correr `bun test`, todos los tests pasaron.

**4. Limpieza manteniendo tests**
Se revisó que la separación entre lógica pura y componente fuera clara, se agregaron comentarios explicativos en el código y se corrigió un test que tenía una contradicción lógica.

---

## Stack tecnológico

- React 19(https://react.dev/) — libreria de UI
- Vite 8(https://vite.dev/) — bundler y servidor de desarrollo
- Vitest 4(https://vitest.dev/) — test runner compatible con Vite
- React Testing Library(https://testing-library.com/react) — testing de componentes
- jsdom(https://github.com/jsdom/jsdom) — entorno de navegador simulado para tests
- Bun(https://bun.sh/) — package manager y runtime