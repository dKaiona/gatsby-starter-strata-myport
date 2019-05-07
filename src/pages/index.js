import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'
import homeThumb from '../assets/images/thumbs/home.png'
import disThumb from '../assets/images/thumbs/dis.png'
import addInThumb from '../assets/images/thumbs/addIn.png'
import driverThumb from '../assets/images/thumbs/driver.png'


import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'
import home from '../assets/images/fulls/home.png'
import dis from '../assets/images/fulls/dis.png'
import addIn from '../assets/images/fulls/addIn.png'
import driver from '../assets/images/fulls/driver.png'

const DEFAULT_IMAGES = [
    { id: '1', src: home, thumbnail: homeThumb, caption: 'Git It Thur', description: 'Landing page and login form.'},
    { id: '2', src: dis, thumbnail: disThumb, caption: 'Git It Thur', description: 'Admin or dispatcher main page.'},
    { id: '3', src: addIn, thumbnail: addInThumb, caption: 'Git It Thur', description: 'The add inventory page.'},
    { id: '4', src: driver, thumbnail: driverThumb, caption: 'Git It Thur', description: 'User or driver main page.'},
    
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
        const siteTitle = "Gatsby Starter - Strata"
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
                        <p>I am a team-player, that loves the feeling of accomplishing a project. I bring with me creative problem solving skills, a great attitude, and a programming skill set. Plus I am a huge Ron Swanson fan. You can contact me at 14drob35@gmail.com.</p>
                        <h2>Tech Skills:</h2><br/>
                        <p>JavaScript | ReactJS | CSS | HTML | SQL | Express | Redux | Styled Components | NodeJS</p>
                    </section>

                    <section id="two">
                        <h2>Projects</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
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