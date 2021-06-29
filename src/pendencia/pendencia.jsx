import React from 'react'

import PageHeader from '../template/pageHeader'
import PendenciaForm from './pendenciaForm'
import PendenciaLista from './pendenciaLista'

const pendencia = props => (
    <div>
        <PageHeader name='Tarefas' small='Cadastro'/>
        <PendenciaForm />
        <PendenciaLista />
    </div>
)

export default pendencia