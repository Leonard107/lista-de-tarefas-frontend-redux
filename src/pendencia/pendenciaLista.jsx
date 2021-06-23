import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/iconButton'
import { markAsDone, markAsPending, remove } from './pendenciaActions'

const pendenciaLista = props => {
  
  const renderRows = () => {
    const list = props.list || []
    return list.map(pendencia =>(
      <tr key={pendencia._id}>
        {/*Se tiver concluido ele vai mostrar a classe markedAsDone, se não, não mostra nada*/}
        <td className={pendencia.done ? 'markedAsDone' : ''}>{pendencia.description}</td>
        <td>
          <IconButton style='success' icon='check' hide={pendencia.done}
            onClick={() => props.markAsDone(pendencia)}/>
          <IconButton style='warning' icon='undo' hide={!pendencia.done}
            onClick={() => props.markAsPending(pendencia)}/>
            {/*Vai esconder o botão se ele não estiver concluido*/}
          <IconButton style='danger' icon='trash-o' hide={!pendencia.done}
            onClick={() => props.remove(pendencia)}/>
        </td>
      </tr>
    ))
  }

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Descrição</th>
          <th className='tableActions'>Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}

const mapsStateToprops = state => ({list: state.pendencia.list})
const mapDispatchToProps = (dispatch) => 
    bindActionCreators({ markAsDone, markAsPending, remove}, dispatch)
export default connect(mapsStateToprops, mapDispatchToProps)(pendenciaLista)