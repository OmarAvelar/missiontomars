import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {photos} from '../../services/nasaApi'

export default class All extends Component {
    
    state = {
        data: []
    }
    
    componentWillMount(){
        photos()
        .then(r=> {
            this.setState({data:r})
        })
        .catch(e=>console.log(e))
    }
    render() {
        const {data} = this.state
        let fotos = []
        if(data.photos) {for(let i=1; i<50; i++){
            fotos.push(data.photos[i])
        }}
        console.log(fotos)
    return (
      <div>
       <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item" >
                <img src="/logo.png" alt="Logo"/>
                </Link>

                <div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </div>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                <Link to="/" className="navbar-item">
                    Mission to Mars
                </Link>
                <Link to="/" className="navbar-item">
                    Home
                </Link>

                </div>

                <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                    <Link to="/signup" className="button is-primary">
                        <strong>Sign up</strong>
                    </Link>
                    <Link to="/login" className="button is-light">
                        Log in
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            </nav>
            {fotos.map((foto,index)=> {
                return <div key={index}>
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by3">
                            <Link to="/detail">
                                <img src={foto.img_src} alt="Placeholder"/>
                            </Link>
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-content">
                                    <p className="title is-4">{foto.rover.name}</p>
                                    <p className="subtitle is-6">{foto.camera.full_name}</p>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
            })}
            
      </div>
    )
  }
}
