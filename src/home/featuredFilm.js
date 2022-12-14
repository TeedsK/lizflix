import React from 'react';
import ReactDOM from 'react-dom/client';
import './featured.css';
import '../fonts.css';

export function YoutubeLink(link) {

    let result = "";
    let code;

    if(link.includes("youtube.com"))
        result = link + "?"
    else  {
        result = "https://www.youtube.com/embed/" + link + "?";
        code = link;
    }

    let options = [
        "showinfo=0",
        "autoplay=1",
        "mute=1",
        "loop=1",
        "rel=0",
        "modestbranding=0",
        "controls=0",
        "showsearch=0",
        "&iv_load_policy=3",
        "disablekb=1"
    ]

    if(code != null)
        options.push("playlist=" + code);

    options.forEach(function (control) {
        result += "&" + control;
    })

    return result;
}

/**
* 
* @param {*} props 
* @returns 
*/
function Title(props) {
    return (
        <div>
            <h1 className={props.font +" home-title-line"}>{props.title}</h1>
        </div>
    );
}

function FeaturedButtons(props) {
    return (
        <div style={{color: props.foreground}} id={props.id}  className="rubikf featured-button">
            <p>{props.text}</p>
        </div>
    )
}

export class FeaturedFilm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: "Hi, Elizabeth Love, Theodore",
            fonts: ["writing", "writing"],
            lineCut: [2],
            description: "One man writes a letter confessing his love for a beautiful young woman. Follow the stop-motion creativity of Theodore Kremer. "
        }
    }

    /**
    * Splits a title by the positions that are given
    * 
    * @param {*} title - the title of the movie
    * @param {*} positions - the positions where the title is lowered a line
    * @returns arr - an array containing the title with each item representing a new line 
    */
    getSplitTitle(title, positions) {

        const seperations = title.split(" ");
        const arr = [""];

        for (let i = 0; i < seperations.length; i++) {
            for (let k = 0; k < positions.length; k++) {
                if (i == positions[k])
                    arr.push("")
            }
            arr[arr.length - 1] = arr[arr.length - 1] + " " + seperations[i];
        }

        return arr;
    }

    getDescription(description) {
        return (
            <div className="rubikf description-wrapper">
                <p>{description}</p>
            </div>
        )
    }

    render() {

        const title = this.state.title;
        const lineCut = this.state.lineCut;
        const description = this.state.description;
        const fonts = this.state.fonts;
        const children = []

        this.getSplitTitle(title, lineCut).forEach(function (phrase, i) {
            children.push(
                <Title 
                    title={phrase}
                    key={i}
                    font={fonts[i]}
                />
            )
        })

        return (
            <div>
                <div className="title-container">
                    {children}
                    {this.getDescription(description)}
                    <div className="featured-button-wrapper">
                        <FeaturedButtons id="watch" foreground="black" text="watch"/>
                        <FeaturedButtons id="info" foreground="white" text="info"/>
                    </div>
                </div>
                <div className="featured-wrapper">
                    <iframe
                        className="featured"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        src={YoutubeLink("MLwQKeWqh3w")}
                        allow="autoplay; encrypted-media"
                        >
                    </iframe>
                </div>
            </div>
        )
    }
}