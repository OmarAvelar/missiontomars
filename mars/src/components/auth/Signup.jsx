import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {signup} from '../../services/auth'

export default class Signup extends Component {
    state={
        user: {}
    }
    signup = (e) => {
        const { user } = this.state
        e.preventDefault()
        signup(user)
        .then(r => {
            this.props.history.push('/profile')
            console.log(r)
        })
        .catch(e => console.log(e))
    }
    
    handleText = (e) => {
        const { user } = this.state
        const field = e.target.name
        user[field] = e.target.value
        this.setState({user})
    }
  render() {
    const {signup, handleText} = this
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
      <form onSubmit={signup} style={{width:"50%", margin:"auto"}}>
        <h1>Sign Up</h1>
        <div className="field">
        <label className="label">Username</label>
        <div className="control">
            <input onChange={handleText} name="name" className="input" type="text" placeholder="R2-D2"/>
        </div>
        </div>

        <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left has-icons-right">
            <input onChange={handleText} name="email" className="input" type="email" placeholder="darthVader@gmail.com"/>
        </div>
        </div>

        <div className="field">
        <label className="label">Password</label>
        <div className="control has-icons-left has-icons-right">
            <input onChange={handleText} name="password" className="input" type="password"/>
        </div>
        </div>


        <div className="field is-grouped">
            <div className="control">
                <button type="submit" className="button is-link">Submit</button>
            </div>

        </div>
      </form>
      </div>
    )
  }
}
