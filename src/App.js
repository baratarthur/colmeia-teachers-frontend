import React, { useState, useEffect, Suspense, lazy } from 'react'

import service from './services/api'

const LazyApp = lazy(() => import('./components/list-teachers'))

function App() {

  const [teachers, setTeachers] = useState([]);

  const [serch, setSerchTerm] = useState("")

  useEffect(() => {
    fetchData()
  }, [teachers.length])

  const fetchData = async () => {
    const response = await service.get('teachers/all')
    setTeachers(response.data)
  }

  return <>
    <div className="search">
      <label htmlFor="search" >Busca</label>
      <input 
          type="text"
          name="search"
          value={serch}
          onChange={e => setSerchTerm(e.target.value)}
          placeholder="Digite aqui o nome do tutor" />
    </div>
    <Suspense fallback={<h2>Carregando... se demorar demais por favor recarregue a página.</h2>} >
      <LazyApp 
        teachers={teachers}
        serch={serch} />
    </Suspense>
  </>
}

export default App
