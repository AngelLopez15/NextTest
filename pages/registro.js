import React from 'react'
import Link from 'next/link'

export default function Registro() {
  return (
    <div className="container">
      <h1>Este es la pagina de Registro de Usuario</h1>
      <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Inicio</a>
              </Link>
            </li>
            <li>
              <Link href="/inicio-sesion">
                <a>Inicio de Sesión</a>
              </Link>
            </li>
          </ul>
        </nav>

        <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

    </div>
  )
}
