import * as React from 'react'
import { useEffect, useState } from 'react'
import Demo from '@root/components/Demo'

const styles = require('./App.scss')

console.log(styles)

function App() {

  const [count, useCount] = useState(0)

  useEffect(() => {
    document.title = `click ${count}`
  }, [count])

  return (
    <div className={styles.container}>
      <div className="ga">123</div>
      click count: {count}
      <button onClick={() => useCount((c) => c + 1)}>Plus</button>
      <Demo/>
    </div>
  )
}

export default App
