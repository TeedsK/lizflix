import React from 'react';
import ReactDOM from 'react-dom/client';
import './banner.css';
import '../fonts.css';
import '../home/home.js'
import '../home/featuredFilm.js'
import '../categories/category.js'

function scrollToItem(id) {
    // location.href = id;
    // document.getElementById().scrollIntoView()
}

export class Banner extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            opacity: 0,
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        // Add the 'scroll' event listener when the component is mounted
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        // Remove the event listener when the component is unmounted
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        // Calculate the new value for the opacity based on the current scroll position
        let newOpacity = (window.scrollY / window.innerHeight) * 2;

        // Update the ref with the new value for the opacity
        if(newOpacity > 0.2)
            newOpacity = 1;
        else 
            newOpacity = 0;
    
        this.setState({
            opacity: newOpacity
        })

    }

    render() {
        return (
            <div className="banner-background" style={{ backgroundColor: `rgba(18,18,18,${this.state.opacity})`, boxShadow: `0 0 0 2pt rgb(23,23,23, ${this.state.opacity})`}} >
                <div className="latoSB header-title">
                    <h1 style={{color: "rgb(229, 9, 20)"}}><span style={{color: "rgb(229, 9, 20)"}}>Liz</span>Flix</h1>
                </div>
                <div className="categories">
                    <div className="rubikf category-titles">
                        <p onClick={scrollToItem("featured-film")}>Home</p>
                        <p onClick={scrollToItem("stop-motions")}>Stop-Motions</p>
                        <p onClick={scrollToItem("tmations")}>Tmations</p>
                    </div>
                </div>
                <div className="profile">

                </div>
            </div>
        )
    }
}

