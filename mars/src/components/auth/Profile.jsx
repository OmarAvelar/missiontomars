import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {getProfile} from '../../services/auth'

 class ProfilePage extends Component {

    state={
        user:{}
    }

    componentWillMount(){
        getProfile()
            .then(user=>{
                this.setState({user})
            }).catch(error=>{
                console.log(error)
            })
    }

  render() {
    const {user} = this.state
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
    if(!loggedUser) this.props.history.push('/login')
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
     <div className="card">
       <div className="card-content">
           <div className="media">

           <div className="media-content">
               <p className="title is-4">Name: {user.name} </p>
               <p className="title is-4">Email: {user.email} </p>
           </div>
           </div>
       </div>
       </div>
   </div>

    )
  }
}
export default ProfilePage











// import React from 'react'
// import {Link} from 'react-router-dom'
// import {getProfile} from '../../services/auth'


// export default function Profile() {

    

//   return (
//     <div>
//          <nav className="navbar" role="navigation" aria-label="main navigation">
//         <div className="navbar-brand">
//             <Link to="/" className="navbar-item" >
//             <img src="/logo.png" alt="Logo"/>
//             </Link>

//             <div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
//             <span aria-hidden="true"></span>
//             <span aria-hidden="true"></span>
//             <span aria-hidden="true"></span>
//             </div>
//         </div>

//         <div id="navbarBasicExample" className="navbar-menu">
//             <div className="navbar-start">
//             <Link to="/" className="navbar-item">
//                 Mission to Mars
//             </Link>
//             <Link to="/" className="navbar-item">
//                 Home
//             </Link>

//             </div>

//             <div className="navbar-end">
//             <div className="navbar-item">
//                 <div className="buttons">
//                 <Link to="/signup" className="button is-primary">
//                     <strong>Sign up</strong>
//                 </Link>
//                 <Link to="/login" className="button is-light">
//                     Log in
//                 </Link>
//                 </div>
//             </div>
//             </div>
//         </div>
//         </nav>
//       <div className="card">
//         <div className="card-content">
//             <div className="media">

//             <div className="media-content">
//                 <p className="title is-4">Name: holi </p>
//                 <p className="title is-4">Email: </p>
//             </div>
//             </div>
//         </div>
//         </div>
//     </div>
//   )
// }
