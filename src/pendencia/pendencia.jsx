import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import PendenciaForm from './pendenciaForm'
import PendenciaLista from './pendenciaLista'

const URL = 'http://localhost:3003/api/listas'

export default class Pendencia extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this) 
        this.handleRemove = this.handleRemove.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        
        this.refresh()
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : '' 
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then((resp) => this.setState({...this.state, description, list: resp.data}))
    }

    handleSearch() {
        this.refresh(this.state.description)
    }
    
    handleClear(){
        this.refresh()
    }

    

    handleChange(e){
        this.setState({...this.state, description: e.target.value })
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => this.refresh())
    }

    handleRemove(lista){
        axios.delete(`${URL}/${lista._id}`)
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsDone(lista){
        axios.put(`${URL}/${lista._id}`, {...lista, done: true})
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPending(lista){
        axios.put(`${URL}/${lista._id}`, {...lista, done: false})
            .then(resp => this.refresh(this.state.description))
    }

    render() {
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>
                <PendenciaForm 
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}/>
                <PendenciaLista 
                    list={this.state.list} 
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone} 
                    handleMarkAsPending={this.handleMarkAsPending}
                    />
                    
            </div>
        )
    }
}