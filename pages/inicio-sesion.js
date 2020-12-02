import React from 'react'
import Link from 'next/link'

export default function InicioSesion() {
  return (
    <div className="container">
      <h1>Este es la pagina de inicio de sesión</h1>
      <nav>
          <ul>
            <li>
              <Link href="/">
                <a>index</a>
              </Link>
            </li>
            <li>
              <Link href="/registro">
                <a>Registro</a>
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
