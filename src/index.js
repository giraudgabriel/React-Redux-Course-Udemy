import React from 'react'
import ReactDom from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import {CompA, CompB} from './componentes/DoisComponentes'
// import MultiElementos from "./componentes/MultiElementos";
// import FamiliaGiraud from './componentes/FamiliaGiraud'
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membro'
// import ComponenteComFuncao from './componentes/ComponenteComFuncao'
// import Pai from './componentes/Pai'
// import ComponenteClasse from './componentes/ComponenteClasse'
// import Contador from './componentes/Contador'
import Hook from './componentes/Hook'

const elemento = document.getElementById('root')

ReactDom.render(
    <div>
        {/* <MultiElementos></MultiElementos> */}
        {/* <PrimeiroComponente valor={Math.random()} />
        <CompA valor="Olá eu sou A!"></CompA>
        <CompB valor="Olá eu sou B!"></CompB> */}
        {/* <FamiliaGiraud/> */}
        {/* <Familia sobrenome="Pereirao">
            <Membro nome="Andre"></Membro>
        </Familia> */}
        {/* <ComponenteComFuncao></ComponenteComFuncao> */}
        {/* <Pai></Pai> */}
        {/* <ComponenteClasse valor="sou um componente de classe kkkkkkkkkkk"/> */}
        {/* <Contador numero={0}></Contador> */}
        <Hook></Hook>
    </div>
,elemento)

// ReactDom.render(
//     <ul>
//         <li>1 Pedro</li>
//         <li>2 Maria</li>
//         <li>3 Ana</li>
//     </ul>
// ,elemento)
