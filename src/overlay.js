import React from 'react';
import ReactDOM from 'react-dom/client';
import './overlay.css';
import './fonts.css'
import { YoutubeLink } from './home/featuredFilm.js'

export class Info extends React.Component {

    constructor(props) {
        super(props);

    }

    /**
    * Renders this component
    */
    render() {
        return (
            <div onClick={this.props.callback} className="overlay-background">
                <div className="wrapper">
                    <div className="left-info">
                        <div className="rubikBF left-title">
                            <p>{this.props.title}</p>
                        </div>
                        <p className="rubikf description">{this.props.description}</p>
                    </div>
                    <div className="right-movie">
                        <div className="film-wrapper">
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