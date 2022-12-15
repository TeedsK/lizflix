import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {Movie} from "./movie.js"
import './category.css';
import '../fonts.css'
import $ from 'jquery';


/**
 * This class represents a cateogry
 */
export class Category extends React.Component {

    /**
     * this is the constructor for this Component
     * it initializes the beginning variables
     * 
     * @param {*} props - the properties of this element
     */
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            description: props.description,
            opacityRight: 1,
            opacityLeft: 0,
        }
        this.handleWindowScroll = this.handleWindowScroll.bind(this);
    }

    componentDidMount() {
        this.scrollerRef.addEventListener('scroll', this.handleScroll);
        window.addEventListener('scroll', this.handleWindowScroll);
    }

    setScrollerRef = ref => {
        this.scrollerRef = ref;
    }

    componentDidMount = () => {
        this.scrollerRef.addEventListener('scroll', this.handleScroll);
        this.handleScroll();

        window.addEventListener('scroll', this.handleWindowScroll);
        this.handleWindowScroll();
    };

    handleScroll = () => {
        
        const scroller = this.scrollerRef;

        const sum = scroller.offsetWidth + scroller.scrollLeft;
        
        const right = 1 - ((sum - (scroller.scrollWidth - 200)) / 200)
        const left = scroller.scrollLeft / 200;
        
        this.setState({
            opacityLeft: left,
            opacityRight: right
        })
    }

    handleWindowScroll = (event) => {
        fadeDetection();
    };

    render() {

        const children = [];
        
        const click = this.props.clickHandler

        this.props.movies.forEach(function (movie, i) {
            children.push(
                <Movie className="movie" clickHandler={click}
                    id={movie[0]}
                    title={movie[1]}
                    description={movie[2]}
                    director={movie[3]}
                    key={i}
                    
                />
            )
        })

        return (
            <div className="category-container">
                <div className="fade upper-description">
                    <p className="title rubikSBF">{this.props.title}</p>
                    <p className="description rubikf">{this.props.description}</p>
                </div>
                <div className="movies-container">
                    <div id="rightGradient" className="slideshow_gradient" style={{opacity: this.state.opacityRight}}></div>
                    <div id="leftGradient"  className="slideshow_gradient" style={{opacity: this.state.opacityLeft}}></div>
                    <div ref={this.setScrollerRef} className="fade scroller">
                        {children}
                        <div className="clear"></div>
                    </div>
                </div>
            </div>
        );
    }
}


function fadeDetection() {
    $(".fade").each(function() {
        if($(this).isInViewport()) {
            $(this).css({"opacity": "1"})
        } else {
            $(this).css({"opacity": "0"})
        }
    });
}

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top + 80;
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementTop < viewportBottom;
};
