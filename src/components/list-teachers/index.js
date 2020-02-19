import React from 'react'

import Card from '../card'

const ListTeachers = ({
    serch, teachers
}) => <>
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

export default ListTeachers