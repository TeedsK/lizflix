import React from 'react';
import ReactDOM from 'react-dom/client';
import './polaroids.css';

export class Polaroids extends React.Component {
    constructor(props) {
        super(props);

        const images = []
        for (let i = 0; i <= this.props.count; i++)
            images.push(this.props.dir + i + ".jpeg")

        this.state = {
            max: this.props.count,
            dir: this.props.dir,
            images: images,
            currentIndex: 0, // The index of the currently displayed image
            translateValue: 0 // The value to use for the CSS transform to move the images horizontally
        }

    }

    componentDidMount() {
        // Start the animation loop when the component mounts
        this.startAnimation();
    }

    componentWillUnmount() {
        // Stop the animation loop when the component unmounts
        this.stopAnimation();
    }


    startAnimation = () => {
        // Set an interval to update the translateValue and currentIndex state values
        // every 100 milliseconds
        this.animationInterval = setInterval(() => {
            // Calculate the next index to display
            let nextIndex = this.state.currentIndex;
            if (nextIndex >= this.state.max) {
                // If the next index is out of bounds, wrap around to the beginning
                this.state.images = this.state.images.splice(this.state.max, this.state.images.length + 1)
                nextIndex = 0;

            }


            let imageWidth = document.getElementsByClassName("carousel-item")[nextIndex].offsetWidth

            // Calculate the next translateValue based on the width of the images
            // and the currentIndex
            const nextTranslateValue = this.state.translateValue - imageWidth;

            this.state.images.push(this.state.images[nextIndex]);

            this.setState({
                currentIndex: nextIndex + 1,
                translateValue: nextTranslateValue
            });
        }, 2500);
    }

    stopAnimation = () => {
        // Clear the interval to stop the animation
        clearInterval(this.animationInterval);
    }

    render() {


        return (
            <div className="fade carousel-container">
                <div className="gradient"/>
                <div
                    className="carousel-slider"
                    style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 0.8s'
                    }}>
                    {this.state.images.map((image) => (
                        <img key={image} className="carousel-item" src={image} />
                    ))}
                </div>
            </div>
        );

    }
}