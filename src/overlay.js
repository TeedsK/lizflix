import React from 'react';
import ReactDOM from 'react-dom/client';
import './overlay.css';
import './fonts.css'
import { YoutubeLink } from './home/featuredFilm.js'

const API_KEY = "AIzaSyBDEaD62BXP-A-__1AvDgTcetw8eRW-_Ds"



export class Info extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            description: this.props.description,
            director: (this.props.director != null) && "Directed by: " + this.props.director
        }

        this.youtubeDescription(this.props.link, this.props.description)
    }

    youtubeDescription = async (videoId, description) => {

        if (description != null) {
            this.setState({
                description: description
            })
        } else {
            let url = "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + videoId + "&key=" + API_KEY
            return await fetch(url)
                .then((response) => response.json())
                .then((json) => {
                    this.setState({
                        description: json.items[0].snippet.description
                    })
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }

    setDirector = (director) => {
        if(director != null) 
            return director
        return ""
    }

    nothing = (e) => {
        e.stopPropagation();
    }

    /**
    * Renders this component
    */
    render() {
        return (
            <div onClick={this.props.callback} className="overlay-background">
                <div onClick={this.nothing} className="wrapper">
                    <div className="left-info">
                        <div className="rubikBF left-title">
                            <p>{this.props.title}</p>
                        </div>
                        <p className="rubikf description">{this.state.description}</p>
                        <p className="rubikf director">{this.state.director}</p>
                        <div id="watch" className="rubikf featured-button info-watch">
                            <p onClick={(e) => {window.open("https://www.youtube.com/watch?v=" + this.props.link)}} >watch</p>
                        </div>
                    </div>
                    <div className="right-movie">
                        <div className="film-wrapper">
                            <div className="overlay-gradient"></div>
                            <iframe
                                className="film"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                src={YoutubeLink(this.props.link)}
                                allow="autoplay; encrypted-media"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}