import React, { Component } from 'react';
import Menu from '../components/Menu';
import { Parallax, Button } from 'react-materialize';
import api from '../services/api'
import Swal from 'sweetalert2';

class Home extends Component {
    constructor()
    {
        super();
        this.state = {
            users: [],
            name: '',
            email: ''
        }
    }
    
    componentDidMount() {
        this.getUsers()
    }

    async getUsers() {
        const { data: users } = await api.get('/users')
        
        this.setState({ users })
    }

    async criarUsuario(e) {
        e.preventDefault()
        
        const user = await api.post('/users', {
            name: this.state.name,
            email: this.state.email
        })

        this.getUsers()

        Swal.fire({
            title: user.data.message,
            icon: user.status === 201 ? 'success' : 'error',
            timer: 2000
        });
    }

    render() {
        return (
            <div>
                <Menu />
                <div>
                    <Parallax
                        image={<img alt="" src="http://materializecss.com/images/parallax1.jpg"/>}
                        options={{
                        responsiveThreshold: 0
                        }}
                    />
                    <div className="section white">
                        <div className="row container">
                            <h2 className="header">
                                Parallax
                            </h2>
                            <p className="grey-text text-darken-3 lighten-3">
                                {
                                    this.state.users.map((user) => (
                                        <div>
                                            Nome: {user.name}
                                            <br />
                                            Email: {user.email}
                                            <br /><br />
                                        </div>
                                    ))
                                }
                            </p>
                            <div>
                                <div class="row">
                                    <form class="col s12" onSubmit={(e) => {this.criarUsuario(e)}}>
                                        <div class="row">
                                            <div class="input-field col s6">
                                                <input onChange={(e) => {this.setState({ name: e.target.value })}} id="first_name" required type="text" class="validate"/>
                                                <label for="first_name">Nome</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="input-field col s6">
                                                <input id="last_name" onChange={(e) => {this.setState({ email: e.target.value })}} required type="text" class="validate"/>
                                                <label for="last_name">Email</label>
                                            </div>
                                        </div>
                                        <Button>Enviar</Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Parallax
                        image={<img alt="" src="http://materializecss.com/images/parallax2.jpg"/>}
                        options={{
                        responsiveThreshold: 0
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default Home;