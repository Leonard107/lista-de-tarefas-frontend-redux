import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {
    const keyHandler = (e) => {
        if(e.key === 'Enter'){
            //Se o shift tiver pressionado faça uma pesquisa, se ele não tiver pressionado adicione.
            e.shiftKey ? props.handleSearch() : props.handleAdd()
            //Se apertar o botão Esc ele limpa o formulário
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }
    return (
        <div role='form' className='pendenciaForm'>
            <div className='col-xs-12 col-sm-9 col-md-10'>
                <input id='description' className='form-control' 
                placeholder='Adicione uma tarefa'
                 onChange={props.handleChange}
                value={props.description}
                onKeyUp={keyHandler}></input>
            </div>
    
            <div className='col-xs-12 col-sm-9 col-md-2'>
                <IconButton style='primary' icon='plus'
                    onClick={props.handleAdd}></IconButton>
                <IconButton style='info' icon='search'
                    onClick={props.handleSearch}></IconButton>
                <IconButton style='default' icon='close'
                    onClick={props.handleClear}></IconButton>
            </div>
        </div>
    )
}