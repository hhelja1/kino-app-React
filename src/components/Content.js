import React from 'react'
import Movie from '../components/Movie'
import Details from '../components/Details';
import MovieLibrary from '../components/MovieLibrary';
import '../css/MovieLibrary.css'
import ShowtimeLibrary from './ShowtimeLibrary';


class Content extends React.Component {
    
    
    render(){
        return(
            <div className='Content'>
            {this.props.switchContent ?
                <ShowtimeLibrary/>:
                <MovieLibrary/>}
            </div>
        );
    }
    
}

export default Content;