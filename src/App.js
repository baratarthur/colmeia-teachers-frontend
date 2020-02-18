import React, { useState, useEffect } from 'react'

import Card from './components/card'
import service from './services/api'

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

  return (
    <>
      <div className="search">
        <label htmlFor="search" >Busca</label>
        <input 
          type="text"
          name="search"
          value={serch}
          onChange={e => setSerchTerm(e.target.value)}
          placeholder="Digite aqui o nome do tutor" />
      </div>

      <div className="App">

        {serch?
          teachers
          .filter(teacher => teacher.nome.toLocaleLowerCase().includes(serch.toLocaleLowerCase()))
          .map((teacher, i) => (
            <Card teacher={teacher} key={i} />
          ))
        :
          teachers.map((teacher, i) => (
            <Card teacher={teacher} key={i} />
          ))
        }
      </div>
    </>
  )
}

export default App
