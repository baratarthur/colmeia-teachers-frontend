import React, { useState } from 'react'

import Card from './components/card'

import json from './image.json'

function App() {

  const [teachers, setTeachers] = useState([
    {
      objectId: "123",
      nome: "Igor Santos Duarte Costa",
      imagem: json.image,
      curriculo: "Estudante de química pela UnB no último semestre. "+
      "Fiz iniciação científica em química teórica e hoje trabalho com bioinformática em meu tcc."+
      "Dou aulas de reforço escolar há um ano e tenho tido um constante aprendizado desde então."+
      "Gosto bastante de ciência e sempre tenho diversas curiosidades para despertar interesse e "+
      "manter atenção dos alunos, que, cada vez mais, me mostram um interesse genuíno em aprender,"+
      "independente de suas dificuldades. Gosto bastante de ensinar e de aprender.",
      materia: [
        "Matemática",
        "Física",
        "Química"
      ],
      nota: 4.92,
      bairro: "Asa Sul"
    },
    {
      objectId: "124",
      nome: "Gustavo Benevenuto Silva Chaves",
      imagem: json.image,
      curriculo: "Jovem profissional da área de Química com perfil ágil e inovador para Ensino & \
      Análises Laboratoriais. Trabalho com aulas particulares desde a minha graduação,uma área na \
      qual tenho muitas habilidades e facilidades para lecionar.Com a formação em licenciatura em \
      química, utilizo da minha didática para um entendimento melhor do aluno.Tenho experiências \
      laboratoriais com ênfase na parte de Fisíco-Química e Orgânica.Participei do Programa de \
      Educação Tutorial (PET-Química), durante 6 meses como voluntário e posteriormente 4 anos \
      como bolsista, na qual trabalhamos com projetos de ensino, pesquisa e extensão.Como aluno \
      petiano, participei do prêmio de melhor trabalho na área de ensino de química no XXX Encontro\
      Regional do Ensino de Química onde ocorreu em Uberlândia na data 13/11/16 até 15/11/16. \
      Desenvolvemos uma ferramenta didática para trabalhar geometria molecular em forma de holograma, \
      ou seja em 3D, com a intensão de trabalhar o conteúdo de forma menos abstrata e mais real. \
      Participei de um projeto com o professor Daniel Alves Cerqueira, no qual produzimos carvão ativado \
      a partir da casca de café, onde tivemos bons resultados de adsorção do material.Tenho prática com \
      as plataformas do Mendeley, Chemsketch.",
      materia: [
        "Matemática",
        "Química"
      ],
      nota: 4.90,
      bairro: "Asa Sul"
    },
    {
      objectId: "125",
      nome: "Maria Eduarda Alves Ferreira Ramos",
      imagem: json.image,
      curriculo: "Olá! Sou graduada em Geologia pela Universidade Federal de Minas Gerais \
      e concluí mestrado em Geologia na Universidade de Brasília. Durante a graduação trabalhei \
      por 1 ano como monitora e 2 anos como bolsista de iniciação científica. Além disso, participei \
      do programa Ciências sem Fronteiras, estudando Ciências da Terra e dos Oceanos na National \
      University of Ireland – Galway durante 1 ano. No mestrado também exercitei a docência como \
      monitora de algumas disciplinas. Atuo como professora particular desde 2010, ministrando aulas \
      de matemática, física e química para alunos do Ensino Fundamental e Médio. Em 2016 trabalhei por \
      6 meses como professora substituta no Instituto Gabriela Leopoldina, em Belo Horizonte-MG, minha \
      terra natal. Em 2017 me mudei para Brasília e trabalhei como professora na Filhos Educação. \
      Atualmente sou professora na Colmeia. Como professora e aluna ao mesmo tempo, sei que o \
      aprendizado deve ser algo interessante pra quem aprende, algo que faça sentido. Por isso \
      busco conhecer os interesses e habilidades do aluno e, com isso, adaptar o conteúdo para \
      cada um deles, tornando as aulas mais eficientes e agradáveis.",
      materia: [
        "Matemática",
        "Física",
        "Química",
        "Ciências"
      ],
      nota: 4.94,
      bairro: "Asa Sul"
    },
    {
      objectId: "126",
      nome: "Arthur Rezende Bueno Pontes Barata",
      imagem: json.image,
      curriculo: "Estudante de química pela UnB no último semestre. "+
      "Fiz iniciação científica em química teórica e hoje trabalho com bioinformática em meu tcc."+
      "Dou aulas de reforço escolar há um ano e tenho tido um constante aprendizado desde então."+
      "Gosto bastante de ciência e sempre tenho diversas curiosidades para despertar interesse e "+
      "manter atenção dos alunos, que, cada vez mais, me mostram um interesse genuíno em aprender,"+
      "independente de suas dificuldades. Gosto bastante de ensinar e de aprender.",
      materia: [
        "Matemática",
        "Português"
      ],
      nota: 4.5,
      bairro: "Asa Sul"
    }
  ]);

  const [serch, setSerchTerm] = useState("")

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
