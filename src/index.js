import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Banner } from './header/banner.js'
import { Home } from './home/home.js'
import { Info } from './overlay.js'
import { useEffect } from 'react';

/**
 * This class represents the main container for the Website
 */
class RelationFlix extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: null,
            description: null,
            link: null,
            director: null
        }
    }

    removeOverlay = () => {
        this.setState({
            title: null,
            description: null,
            link: null,
            director: null
        });
    }

    handleClicked = (title, description, link, director) => {
        this.setState({
            title: title,
            description: description,
            link: link,
            director: director
        });
    }

    renderOverlay() {

        const title = this.state.title;
        const description = this.state.description;
        const link = this.state.link;
        const director = this.state.director;

        if (this.state.title != null) {

            const info = <Info
                title={title}
                description={description}
                link={link}
                director={director}
                callback={this.removeOverlay}
            />

            return info
        }
    }


    /**
     * Renders this component
     */
    render() {
        return (
            <div className="background">

                <div>
                    <Banner />
                </div>

                {this.renderOverlay()};

                <div className="home">
                    <Home clickHandler={this.handleClicked} />
                </div>

                
            </div>
        );

    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RelationFlix />);