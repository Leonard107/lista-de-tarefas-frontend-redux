import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { add, changeDescription, search, clear } from './pendenciaActions'

class  pendenciaForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { add, search, description, clear} = this.props
        if(e.key === 'Enter'){
            //Se o shift tiver pressionado faça uma pesquisa, se ele não tiver pressionado adicione.
            e.shiftKey ? search(description) : add(description)
            //Se apertar o botão Esc ele limpa o formulário
        } else if (e.key === 'Escape') {
            clear()
        }

    }

    render() {
        const { add, search, description } = this.props
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
                        onClick={() => add(description)}></IconButton>
                    <IconButton style='info' icon='search'
                        onClick={() => search(description)}></IconButton>
                    <IconButton style='default' icon='close'
                        onClick={this.props.clear}></IconButton>
                </div>
        </div>
        )
    }
}

const mapStateToProps = state => ({description: state.pendencia.description})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ add, changeDescription, search, clear}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(pendenciaForm)