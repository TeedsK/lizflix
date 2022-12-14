import React from 'react';
import ReactDOM from 'react-dom/client';
import './movie.css';


/**
 * This class represents a single Movie 
 * 
 * @author Theo Kremer
 * @version - 10 December 2022
 */
export class Movie extends React.Component {
    
    /**
     * this is the constructor for this Component
     * it initializes the beginning variables
     * 
     * @param {*} props - the properties of this element
     */
    constructor(props) {
        super(props);
    }


    getThumbnail(id) {
        let location = "https://img.youtube.com/vi/" +id +"/sddefault.jpg";
        return (
            <img className="movie-thumbnail" src={location}></img>
        );
    }

    render() {
        return(
            <div className="thumbnail-wrapper" onClick={() => this.props.clickHandler(this.props.title, this.props.description, this.props.id)}>
                {this.getThumbnail(this.props.id)}
            </div>
        );
    }
}


