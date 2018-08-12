import React, { Component } from 'react'
import '../css/Menu.css'

class Menu extends Component {
    
    clickFilmovi = ()=>{
        this.props.onFilmovi();
    }
    clickProjekcije = ()=>{
        this.props.onProjekcije();
    }
    render(){
        return(
        <div className="Menu">
            <ul className="Menu_list">
                <li className="Menu_list_logo"><img className= "logo" height="40" width="40" src = "https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-film-movie-multimedia-video-camera-36739343a193a1ff-512x512.png" alt="logo"/></li>
                <li className="Menu_list_item" onClick={this.clickFilmovi}>Dostupni filmovi</li>
                <li className="Menu_list_item" onClick={this.clickProjekcije}>Projekcije</li>
            </ul>
        </div>);
    }
}

export default Menu;