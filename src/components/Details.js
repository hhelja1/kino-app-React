import React from 'react'
import '../css/Details.css'

class Details extends React.Component {

    clickGoBack = () => {
        this.props.onGoBack();
    }
    render(){
        
        var date = new Date(this.props.data.datumRelease);
        var mon = +date.getMonth() + 1;
        var d = ('0' + date.getDate()).slice(-2) + '.' + ('0' + mon).slice(-2) + '.' + date.getFullYear()+'.';
        
        return(
        <div className='Details'>
        <img className='poster' src={this.props.data.posterURL} />
            <h2 className="Movie_name">{this.props.data.naziv}</h2>
            <h4 className="Movie_duration">Trajanje: {this.props.data.trajanje}</h4>
            <h4 className="Movie_releaseDate">Datum: {d}</h4>
            <p className='sinopsis'>Sinopsis: <br/>{this.props.data.sinopsis}</p>
            <button className="goBack" onClick={this.clickGoBack}>Idi nazad..</button>
        </div>
        );
    }
}

export default Details;