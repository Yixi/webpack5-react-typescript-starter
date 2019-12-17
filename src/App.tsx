import * as React from 'react'
import { useCallback, useEffect, useMemo, useState } from 'react'

function App() {

  const [count, useCount] = useState(0)

  useEffect(() => {
    document.title = `click ${count}`
  }, [count])

  const plus = useCallback(() => {
    useCount((c) => c + 1)
  }, [])

  return (
    <div>
      click count: {count}
      <button onClick={plus}>Plus</button>
    </div>
  )
}

export default App
