import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription, search } from './pendenciaActions'

class  pendenciaForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        if(e.key === 'Enter'){
            //Se o shift tiver pressionado faça uma pesquisa, se ele não tiver pressionado adicione.
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
            //Se apertar o botão Esc ele limpa o formulário
        } else if (e.key === 'Escape') {
            props.handleClear()
        }

    }

    render() {
        return (
            <div role='form' className='pendenciaForm'>
                <div className='col-xs-12 col-sm-9 col-md-10'>
                    <input id='description' className='form-control' 
                    placeholder='Adicione uma tarefa'
                    onChange={this.props.changeDescription}
                    value={this.props.description}
                    onKeyUp={this.keyHandler}></input>
                </div>
    
                <div className='col-xs-12 col-sm-9 col-md-2'>
                    <IconButton style='primary' icon='plus'
                        onClick={this.props.handleAdd}></IconButton>
                    <IconButton style='info' icon='search'
                        onClick={this.props.handleSearch}></IconButton>
                    <IconButton style='default' icon='close'
                        onClick={this.props.handleClear}></IconButton>
                </div>
        </div>
        )
    }
}

const mapStateToProps = state => ({description: state.pendencia.description})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ changeDescription, search }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(pendenciaForm)