import React, { Component } from 'react'
import '../css/Seat.css'
import Popup from "reactjs-popup";

class Seat extends Component {
    
    constructor (props){
        super(props);
        this.state = {
            brojSjedista: 0,
            stanje: false
        }
        
    } 

    componentDidMount = () => {
        this.setState({brojSjedista: this.props.data.brojSjedista, stanje: this.props.data.stanje});
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        fetch('http://localhost:8086/api/rezervacija/' + this.props.data.brojSjedista , {
            method: 'post',
            headers:{
                'Content-Type': 'application/json'
            },
            body: 
                JSON.stringify({"ime": data.get("name").toString(),
                "prezime": data.get("surname").toString(),
                "_id": this.props._id})
            
        })
        .then(response => {
            if(response.ok){
                this.setState({stanje:true});
                this.forceUpdate();
            }
        });
        
    }
    render(){
        console.log('jel');
        return(
        <div className="Seat">
         
            {this.state.stanje ?
            <img width = "30" height = "30" src="https://cdn3.iconfinder.com/data/icons/movie-entertainment-filled-outline-style/64/13_seat-movie-cinema-chair-theater-512.png" className = "seatTaken"/>:
            <Popup trigger={<input type="image" width = "30" height = "30" src="https://cdn3.iconfinder.com/data/icons/movie-entertainment-filled-outline-style/64/13_seat-movie-cinema-chair-theater-512.png" className = "seatBtn" onClick={() => this.clickSeat()}/>} >
               {close => (
                   <div className="popup">
                   <form onSubmit={this.handleSubmit}>
                       <input className="inputs" type="text" name="name" placeholder="Ime"/>
                       <input className="inputs" type="text" name="surname" placeholder="Prezime"/>
                       <input className="btn" type="submit" value="Rezerviši" />
                       <button className="btn" onClick={close}>Odustani</button>
                   </form>
               </div>
               )}
                
            </Popup>
        } 
            </div>);
    }
}

export default Seat;