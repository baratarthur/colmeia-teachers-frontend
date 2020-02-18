import React from 'react'
import "./index.scss"

import locationSVG from '../../assets/map-marker-alt-solid.svg'
import starICO from '../../assets/rating-star.png'

const Card = ({ teacher }) => (
    <div className="card">
        <div className="card-head">
            <div className="teacher-img" style={{ backgroundImage: `url(${teacher.imagem.url})` }} ></div>
            <div className="information" >
                <h2>{teacher.nome}</h2>
                Disciplinas
                <ul className="materias" >
                    {teacher.materia.map(materia => (
                        <li>{materia}</li>
                    ))}
                </ul>
            </div>
            <div className="nota" >
                {teacher.nota} <img src={starICO} width="20px" height="20px" />
            </div>
        </div>
        <div className="card-body">
            <h3>Currículo</h3>
            <hr/>
            <div className="curriculo" >
                {teacher.curriculo}
            </div>
            <div className="bairro">
                <img src={locationSVG} width="20px" height="20px" /> {teacher.bairro}
            </div>
        </div>
    </div>
)

export default Card