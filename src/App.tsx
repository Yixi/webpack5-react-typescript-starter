import * as React from 'react'
import { useEffect, useState } from 'react'

function App() {

  const [count, useCount] = useState(0)

  useEffect(() => {
    document.title = `click ${count}`
  }, [count])

  return (
    <div>
      click count: {count}
      <button onClick={() => useCount((c) => c + 1)}>Plus</button>
    </div>
  )
}

export default App
