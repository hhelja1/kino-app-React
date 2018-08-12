import React from 'react'
import Movie from '../components/Movie'
import Details from '../components/Details';
import '../css/MovieLibrary.css'


class MovieLibrary extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            Movies :[],
            showDetails: false,
            Details: {}
        }
    }
    
    componentDidMount(){
        fetch('http://localhost:8085/api/vratiListuFilmova')
        .then(function(response) {
            return response.json();
        }) 
        .then(data => {
            this.setState({Movies: data});
        })    
    }
    
    handleSeeMore = (data)=>{
        this.setState({showDetails: true, Details: data});
       }
    handleGoBack = () => {
        this.setState({showDetails: false, Details: {}});
    }

    render(){
        return(
            <div className='MovieLibrary'>
                
                {this.state.showDetails ?
                <Details data = {this.state.Details} onGoBack={this.handleGoBack}/> : 
                <div className="MovieLibrary_grid">
                {this.state.Movies.map((movie) =>
                    {
                       return <Movie data = {movie} onSeeMore={this.handleSeeMore}/>
                    }
                )}
                </div>}
            </div>
        );
    }
    
}

export default MovieLibrary;