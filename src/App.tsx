import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { useMount } from 'react-use'
import VConsole from 'vconsole'
import routes from '~react-pages'

function App() {
  useMount(() => new VConsole())
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {useRoutes(routes)}
    </Suspense>
  )
}
export default App
