import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Movie } from "./movie.js"
import './category.css';
import '../fonts.css'
import $ from 'jquery';
// import fs from 'fs';



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
            img1: this.props.image + "thiz" + Math.floor(Math.random() * (this.props.max + 1)) + ".JPG",
            img2: this.props.image + "thiz" + Math.floor(Math.random() * (this.props.max + 1)) + ".JPG",
            opacityRight: 1,
            opacityLeft: 0,
            imgOpacity: true
        }

        

        this.handleWindowScroll = this.handleWindowScroll.bind(this);

        this.interval = setInterval(async () => {

            const is1 = this.state.imgOpacity
            const random = this.props.image + "thiz" + Math.floor(Math.random() * (this.props.max + 1)) + ".JPG";

            if(is1) {
                this.setState({
                    img2: random,
                })
            } else {
                this.setState({
                    img1: random,
                })
            }

            this.setState({
                imgOpacity: !is1
            })

        }, 4000);

    }

    randomImageFile() {
        if (this.props.image != null) {
            return (
                <div style={this.props.right ? {float: "right"} : {float: "left"}} className="image-container">
                    <div style={
                        {
                            width: this.props.imageWidth + "%", 
                            height: this.props.imageHeight + "px",
                        }}
                        className="gradient"></div>
                    <img className="fade img1" style={
                        {
                            width: this.props.imageWidth + "%", 
                            height: this.props.imageHeight + "px",
                            opacity: this.state.imgOpacity ? 1 : 0
                        }} width="100%" height="100%" src={this.state.img1}></img>
                    <img className="fade img2" style={
                        { 
                            width: this.props.imageWidth + "%", 
                            height: this.props.imageHeight + "px", 
                            opacity: this.state.imgOpacity ? 0 : 1 
                        }} width="100%" height="100%" src={this.state.img2}></img>
                </div>
            )
        }
        return null;
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


        let moviesWidth = 100;

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


        if (this.props.imageWidth != null) {
            moviesWidth = moviesWidth - this.props.imageWidth;
        }

        return (
            <div className="category-container">
                <div className="fade upper-description">
                    <p className="title rubikSBF">{this.props.title}</p>
                    <p className="description rubikf">{this.props.description}</p>
                </div>
                <div style={!this.props.right ? {marginLeft: this.props.imageWidth+"%", width: moviesWidth + "%"} : {width: moviesWidth + "%"}} className="movies-container">
                    <div id="rightGradient" className="slideshow-gradient" style={{ opacity: this.state.opacityRight }}></div>
                    <div id="leftGradient" className="slideshow-gradient" style={{ opacity: this.state.opacityLeft }}></div>
                    <div ref={this.setScrollerRef} className="fade scroller">
                        {children}
                        <div className="clear"></div>
                    </div>
                </div>
                {this.randomImageFile()}
            </div>
        );
    }
}


export function fadeDetection() {
    $(".fade").each(function () {
        if ($(this).isInViewport()) {
            $(this).css({ "opacity": "1" })
        } else {
            $(this).css({ "opacity": "0" })
        }
    });
}

$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top + 80;
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementTop < viewportBottom;
};
