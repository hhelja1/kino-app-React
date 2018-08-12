import React from 'react'
import '../css/Showtime.css'

class Showtime extends React.Component {

    clickReserve = ()=>{
        this.props.onReserve(this.props.data);
    }

    render(){
        var date = new Date(this.props.data.datumProjekcije);
        var mon = +date.getMonth() + 1;
        var d = ('0' + date.getDate()).slice(-2) + '.' + ('0' + mon).slice(-2) + '.' + date.getFullYear()+'.';
        var t = ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2) + 'h';
        
        return(
        <div className="Showtime">
            <ul className="Showtime_listH">
                <li className="itemNaziv">{this.props.data.nazivFilma}</li>
                <li className="itemDatum">{d}</li>
                <li className="item">{t}</li>
                <li className="item">{this.props.data.brojSale}</li>
                <li className="item">{this.props.data.cijenaKarte + 'KM'}</li>
                <li className="itemButton" onClick={this.clickReserve}>Rezerviši</li>
            </ul>
        </div>)
    }

}

export default Showtime;