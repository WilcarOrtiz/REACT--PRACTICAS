import { useState, useEffect } from 'react'

const FollowMouse = () => {
  const [enable, SetEnable] = useState(false)
  const [position, SetPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('Hola mundo', { enable })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      SetPosition({ x: clientX, y: clientY })
    }
    if (enable) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      // clean the suscription
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enable])
  return (
    <>
      <div
        style={{
          position: 'absolute',
          backgroundColor: '#09f',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px,${position.y}px)`,
        }}
      ></div>
      <button onClick={() => SetEnable(!enable)}>
        {enable ? 'Desactivar' : 'Activar'}
      </button>
    </>
  )
}

function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
