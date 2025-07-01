import { useState } from 'react'
import ElevateAnimation from './ElevateAnimation/ElevateAnimation'
import styles from './ElevateAnimation/ElevateAnimation.module.css'

function App() {
  const [key, setKey] = useState(0)

  return (
    <div style={{ minHeight: '100vh', minWidth: '100vw', background: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <div className={styles.container}>
          <ElevateAnimation key={key} />
        </div>
        <button className={styles.replayBtn} onClick={() => setKey(k => k + 1)}>
          Replay Animation
        </button>
      </div>
    </div>
  )
}

export default App
