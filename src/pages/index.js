import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'


import homeThumb from '../assets/images/thumbs/home.png'
import disThumb from '../assets/images/thumbs/dis.png'
import addInThumb from '../assets/images/thumbs/addIn.png'
import driverThumb from '../assets/images/thumbs/driver.png'
import deskThumb from '../assets/images/thumbs/Desk.png'
import codeThumb from '../assets/images/thumbs/Code.png'
import bombFrameThumb from '../assets/images/thumbs/BombFrame.png'
import failThumb from '../assets/images/thumbs/Fail.png'



import home from '../assets/images/fulls/home.png'
import dis from '../assets/images/fulls/dis.png'
import addIn from '../assets/images/fulls/addIn.png'
import driver from '../assets/images/fulls/driver.png'
import desk from '../assets/images/fulls/Desk.png'
import code from '../assets/images/fulls/Code.png'
import bombFrame from '../assets/images/fulls/BombFrame.png'
import fail from '../assets/images/fulls/Fail.png'

const DEFAULT_IMAGES = [
    { id: '1', src: home, thumbnail: homeThumb, caption: <a href="https://danielrdev.tech/#/">Live Site</a>, description:<a href='https://github.com/dKaiona/Personal-Project.Two'>Landing page and login form. Handle: Dan, Password: dan. You can find the Github repo by clicking here</a>},
    { id: '2', src: dis, thumbnail: disThumb, caption: 'Admin or dispatcher main page', description: 'Worked a lot with styled components on this view.  Also one of the tougher pages to make responsive'},
    { id: '3', src: addIn, thumbnail: addInThumb, caption: 'The add inventory page', description: 'Clean and simple inputs and AWS S3 file uploader to allow pictures of the inventory to be uploaded'},
    { id: '4', src: driver, thumbnail: driverThumb, caption: 'User or driver main page', description: 'Allows the dvier to see their orders and check them off as they go along'},  
];

const MY_IMAGES = [
    { id: '5', src: desk, thumbnail: deskThumb, caption: <a href="http://157.230.168.81:3200/#/">Live Site</a>, description: <a href='https://github.com/code-bomb-com/code-or-explode/tree/master/code-or-explode'>The main hub of the game you can get to any view from here. Used Figma and sketch.io to create it. You can find the Github repo by click here.</a>},
    { id: '6', src: code, thumbnail: codeThumb, caption: 'Info-Tech Page', description: 'One of the toughest parts of the project implementing a code editor. To be used to solve code challanges to help the Bomb-Tech defuse the bomb.'},
    { id: '7', src: bombFrame, thumbnail: bombFrameThumb, caption: 'Bomb-Tech Page', description: 'Here the Bomb-Tech will relay information to the Info-Tech to help him identify the correct code challenge so that he can defuse the bomb.'},
    { id: '8', src: fail, thumbnail: failThumb, caption: 'Failure Page', description: 'What happens if your team fails to defuse the bomb in time.'}
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "Daniel's Protfolio"
        const siteDescription = "Site description"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>About Me:</h2>
                        </header>
                        <p>I am a web developer with a passion for creating new projects and solving unique problems. I am team player that brings to the workplace a positive attitude and a love for learning new technologies.<br/>

In the past I have done work in construction, and I’ve found that the skills I’ve developed building physical projects has been crucial in helping me visualize and build web projects as well. Whether it’s a greenhouse or a website, I love taking a new idea from its conception on paper to a finished product.<br/>

I’m looking forward to using these new skills to help a company solve their problems and achieve their goals. I’m currently seeking opportunities that will allow me to do that while continuing to develop my skill set as a developer.<br/>

In my free time you can find me advancing my career as an amateur fisherman, or learning from the legendary Ron Swanson on Netflix.</p>
                        <h4>Feel free to connect with me on <a href="https://www.linkedin.com/in/daniel-roberts-k/"><span>LinkedIn</span></a> or email at 14drob35@gmail.com</h4>
                        <h2>Tech Skills:</h2>
                        <p>JavaScript | ReactJS | CSS | HTML | SQL | Express | Redux | Styled Components | NodeJS</p>
                    </section>

                    <section id="two">
                        <h2>Projects</h2>
                        <h4>Git It Thur</h4>
                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />
                        <h4>Keep Coding and Nobody Explodes</h4>
                        <Gallery images={MY_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <ul className="actions">
                            <li><a href="#" className="button">Top</a></li>
                        </ul>
                    </section>

                   
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
                        // <ul className="actions">
                        //     <li><a href="#" className="button">Learn More</a></li>
                        // </ul>