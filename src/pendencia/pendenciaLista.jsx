import React from 'react'
import IconButton from '../template/iconButton'
export default props => {
  
  const renderRows = () => {
    const list = props.list || []
    return list.map(lista =>(
      <tr key={lista._id}>
        {/*Se tiver concluido ele vai mostrar a classe markedAsDone, se não, não mostra nada*/}
        <td className={lista.done ? 'markedAsDone' : ''}>{lista.description}</td>
        <td>
          <IconButton style='success' icon='check' hide={lista.done}
            onClick={() => props.handleMarkAsDone(lista)}/>
          <IconButton style='warning' icon='undo' hide={!lista.done}
            onClick={() => props.handleMarkAsPending(lista)}/>
            {/*Vai esconder o botão se ele não estiver concluido*/}
          <IconButton style='danger' icon='trash-o' hide={!lista.done}
            onClick={() => props.handleRemove(lista)}/>
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