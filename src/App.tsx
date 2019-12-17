import * as React from 'react'
import { useCallback, useEffect, useState } from 'react'

const styles = require('./App.scss')

console.log(styles)

function App() {

  const [count, useCount] = useState(0)

  useEffect(() => {
    document.title = `click ${count}`
  }, [count])

  const plus = useCallback(() => {
    useCount((c) => c + 1)
  }, [])

  return (
    <div className={styles.container}>
      <div className="ga">123</div>
      click count: {count}
      <button onClick={plus}>Plus</button>
    </div>
  )
}

export default App
