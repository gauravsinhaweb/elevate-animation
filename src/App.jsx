import { useState } from 'react'
import ElevateAnimation from './ElevateAnimation/ElevateAnimation'

function App() {
  const [key, setKey] = useState(0)

  return (
    <div style={{ width: 700, height: 700, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'black' }}>
      <ElevateAnimation key={key} />
      <button style={{ marginTop: 32 }} onClick={() => setKey(k => k + 1)}>
        Replay Animation
      </button>
    </div>
  )
}

export default App
