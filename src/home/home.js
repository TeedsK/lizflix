import React from 'react';
import ReactDOM from 'react-dom/client';
import { FeaturedFilm } from './featuredFilm';
import { Category } from '../categories/category'
import { Polaroids } from '../flics/polaroids'
import './home.css';
import '../fonts.css';

function getThizImage() {
    return '../images/thiz' + Math.round(Math.random() * 10) + '.JPG';
}
/**
 * This class represents the home page 
 * 
 * @author Theo Kremer 
 */
export class Home extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div className="home-background">
                <FeaturedFilm
                    className="featured-wrapper"
                    clickHandler={this.props.clickHandler}
                />
                <div className="featuredTransition"></div>
                <div className="categories-wrapper">

                    <Category clickHandler={this.props.clickHandler}
                        title="Top Picks"
                        description="oh wow these are great"
                        movies={
                            [
                                ["g1Bhhkm3xLM", "a Beautiful Korea Trip", "A wonderful place with a beautiful woman, follow along as Theo, Liz, Stanley, and Maddie make a quick but exciting and adventerous trip to Seoul, South Korea", "Theo + Liz"]
                            ]
                        } />
                    <Category id="stop-motions" clickHandler={this.props.clickHandler}
                        title="Stop Motion Animations"
                        description="films with each frame individual taken to create a full length film"
                        movies={
                            [
                                ["myzXCcsyqPA", "Lego Zombie Trailer", "Lost in the zombie apacolypse with no hope, one man finds a stranger changing everything he knows, the trailer for a much larger film: Lego Zombies", "Theo Kremer"],
                                ["S43fO8xPOdg", "Stop Motion in Real Life", "life taken in pictures of a waking boy who is starting off his day. Through the use of stop-motion animation, watch the movie showcases the boundless potential of the human imagination", "Theo Kremer"],
                                ["R39DzcgGcAI", "Lego Time Machine", "One man finds a makeshift old time machine in an abandoned warehouse, follow along as time itself gets manipulated and change, how will it end??", "Theo Kremer"],
                                ["Sh9yIweBaRM", "Lego Arcade", "Heaven? Best Place on Earth? Wonderland? all three of these words perfectly describe the Arcade, the best place on Earth, or the most frustrating? Watch as one child ventures and finds out", "Theo Kremer"],
                                ["2X05pXsPgKE", "Lego Missing the Bus", "A student Lego figure misses his ride to school, with no other option, he must find his own way to make it to class before it's too late, but what will he do??", "Theo Kremer"],
                                ["MLwQKeWqh3w", "Lego Zombies", "A young teen, lost in the woods, stuck in his car, with absolutely no hope he is about to end it all. How will things unfold as a horde of zombies begin banging on his car doors?", "Theo Kremer"],
                                ["kL0yIGepPMQ", "Lego Dog Walk", "Walking your dog should be a straightforward and easy thing to do. Not for this man though, watch as he is stuck in what seems to be an endless cycle of disasterous events to occur with one man and his dog.", "Theo Kremer"],
                                ["lbNMRrSJE8w", "Lego Ghostbusters Trailer Parody", "A short trailer for a upcoming large oscar winning film: Lego Ghostbusters!", "Theo Kremer"],
                            ]
                        } />
                    <Category clickHandler={this.props.clickHandler}
                        title="Watch Again"
                        description="movies that are worth watching for another time"
                        image="/images/highlights/"
                        imageWidth={30}
                        imageHeight={440}
                        right={true}
                        max={17}
                        movies={
                            [
                                ["9KzbALXlDwQ", "Project X"],
                                ["5RcNwlq7JSw", "Wall-E"],
                                ["iYtlAcyalWs", "Wreck it Ralph"],
                                ["hUikYic751Q", "Batman"],
                                ["WAq0hksGGVE", "Up"],
                                ["Lan7rVoUnC0", "Minions 2"],
                                ["yJX7CFNQRBg", "Cars"],
                            ]
                        } />
                    <Category clickHandler={this.props.clickHandler}
                        title="Long Distance"
                        description="movies perfect for watching when miles away from one another "
                        imageWidth={30}
                        right={true}
                        movies={
                            [
                                ["Q1z8OVfAUCI", "Percy Jackson & the Lightning Thief"],
                                ["4V_idYJoMnM", "Percy Jackson Sea of Monsters"],
                                ["At7cvl420Qc", "Waco"],
                                ["po5B_elq7p8", "Bachelorette Chad"],
                                ["qRsb3UuvpTc", "Bullet Train"],
                                ["hxaaAoI57fk", "Holidate"],
                                ["abY1UfGBpqQ", "Call me by your Name"],
                                ["7ZtRnIwv_FY", "You"],
                                ["7rI56NmD33Y", "Sweet Home"]
                            ]
                        } />
                    <Category clickHandler={this.props.clickHandler}
                        title="Next to Watch"
                        description="here are our recommendations for your next watch based on your previous watches"
                        movies={
                            [
                                ["MqRqfjIjUxc", "Pride & Prejudice"],
                                ["9odI5vkYXqA", "Barbie: Princess Charm School"],
                                ["-HjOEfPURCg", "Whiplash"],
                                ["JXqgN-a1N7g", "Pearl"],
                                ["49_44FFKZ1M", "Alice in Borderland"]
                            ]
                        } />

                    <Polaroids
                        dir="/images/photobooth/"
                        count="14">
                    </Polaroids>

                    <Category clickHandler={this.props.clickHandler}
                        title="Horror"
                        description="scary movies we might never want to watch again"
                        image="/images/polaroids/option1/"
                        imageWidth={30}
                        imageHeight={440}
                        right={false}
                        max={8}
                        movies={
                            [
                                ["YPGkXSsz3-w", "X"],
                                ["ph5Lw0JDmyA", "Gonjiam"],
                                ["-ZjUo4iLsEM", "Smile"],
                                ["qfSTiAw1rkM", "Eli"],
                                ["2Umlo9hHKnA", "Terrifier"],
                            ]
                        } />

                    <Category clickHandler={this.props.clickHandler}
                        imageWidth={30}
                        right={false}
                        movies={
                            [
                                ["IN5TD4VRcSM", "All of Us are Dead"],
                                ["H-ez5on5wHU", "Blaire Witch Project"],
                                ["NVHHs-xllqo", "Dahmer"]
                            ]
                        } />

                    <Category id="tmations" clickHandler={this.props.clickHandler}
                        title="Tmations"
                        description="videos taken straight from the Tmations youtube channel"
                        movies={
                            [
                                ["1jNuVkH4xjU", "How to be a Director", "A step by step tutorial on how to be a professional level director taught by the infamous Theodore Thanksgiving Kremer", "Theo Kremer"],
                                ["Wc85wTQ1cJo", "Rainbow Six Siege"],
                                ["_aiZ9AJoHuI", "Fortnite"],
                                ["IxGQmpDdiso", "Rainbow Six Siege"],
                            ]
                        }
                    />

                    <Category clickHandler={this.props.clickHandler}
                        title="Tmations Premium"
                        image="/images/polaroids/option2/"
                        imageWidth={30}
                        imageHeight={440}
                        right={true}
                        max={5}
                        description="the most premium videos Tmations offers"
                        movies={

                            [
                                ["mk4ySBcqwlI", "Fortnite", "This video was my most popular, raking in 75,000 views! That is insane!", "not Theo Kremer"],
                                ["pODAAFdk8sE", "Fortnite", "This video was my second most popular with 3,000 views! Woah, thats somewhat mindblowing!", "not theodore"],
                                ["FOYOCoALLI0", "LEGO Player Unknown Battlegrounds", "i don't even wanna talk about this one..."]
                            ]
                        }
                    />

                    <div className="fade ending">
                        <a className="rubikSBF">Thank you</a>
                        <p className="rubikf">Hi Liz, Merry Christmas<br/>
                            <br/>
                            I've been working on this website for you since early November<br/>
                           I made it to give homeage to us spending our time watching movies through Netflix while 600 miles apart<br/>
                           Although it took some time, you're a person who is worth the effort to see smile<br/>
                           I look foward to our many winter wonderland Christmas seasons we'll share in the future<br/>
                           <br/>
                           I love you forever my beautiful angel,<br/>
                           Theo</p>
                    </div>




                    <footer>
                        <div className="container footerContainer">
                            <div className="footer-nav flex flex-around flex-start flex-g-1">
                                <div className="col flex flex-column flex-start flex-g-1">
                                    <span className="rubikSBF logo-holder">
                                        <p>LizFlix</p>
                                    </span>
                                    <p className="rubikf site-decription">
                                        1007 Batcave Ave, <br />Gotham, New York <br />(510) BAT - CAVE
                                    </p>
                                    <div className="social-medias flex flex-g-1">
                                        <a href="#" className="social-media flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(163,163,163)" className="bi bi-instagram" viewBox="0 0 16 16">
                                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                            </svg>
                                        </a>
                                        <a href="#" className="social-media flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(163,163,163)" className="bi bi-twitter" viewBox="0 0 16 16">
                                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                            </svg>
                                        </a>
                                        <a href="#" className="social-media flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(163,163,163)" className="bi bi-github" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                            </svg>
                                        </a>
                                        <a href="#" className="social-media flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(163,163,163)" className="bi bi-linkedin" viewBox="0 0 16 16">
                                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="col flex flex-column flex-g-1 flex-start">
                                    <h3 className="rubikBF col-title">Info</h3>
                                    <nav className="rubikf col-list">
                                        <ul>
                                            <li><a href="#">FAQ</a></li>
                                            <li><a href="#">Status</a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="col flex flex-column flex-g-1 flex-start">
                                    <h3 className="rubikBF col-title">Resources</h3>
                                    <nav className="rubikf col-list">
                                        <ul>
                                            <li><a href="#">Developer API</a></li>
                                            <li><a href="#">Tools</a></li>
                                            <li><a href="#">Blog</a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="col flex flex-column flex-g-1 flex-start"><h3 className="rubikBF col-title">Company</h3>
                                    <nav className="rubikf col-list">
                                        <ul>
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Sustainability</a></li>
                                            <li><a href="#">Terms of Service</a></li>
                                            <li><a href="#">Privacy</a></li>
                                        </ul>
                                    </nav></div>

                            </div>
                            <div className="copyright rubikf">© 2022 – All Rights Reserved. (Not real)</div>
                        </div>
                    </footer>


                </div>

            </div>
        )
    }
}