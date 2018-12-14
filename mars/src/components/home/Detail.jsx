import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {photoDetail} from '../../services/nasaApi'

export default class Detail extends Component {
    
    state = {
        data: {}
    }
    
    componentDidMount(){
        photoDetail()
        .then(r=> {
            this.setState({data:r})
        })
        .catch(e=>console.log(e))
    }
    render() {
        const {data} = this.state
        console.log(data.photos)
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
            {data.photos ? data.photos.map((foto, index)=> {
                return <div key={index} style={{textAlign:"center"}}>
                <h1 style={{fontSize:"2rem", fontWeight:"bold"}}>{foto.rover.name}</h1>
                <img src={foto.img_src} alt={foto.rover.name}/>
            </div>
            })  : <div>Loading</div>}
      </div>
    )
  }
}
