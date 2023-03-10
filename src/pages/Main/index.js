import React,{Component} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/SidebarComponent';
import Footer from '../../components/Footer';
// import Hero from '../components/Hero';
import About from '../../components/About';
// import Services from '../components/Services';
// import Why from '../components/WhyMe';
// import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import {
    Switch,
    Route,
    withRouter
  } from "react-router-dom";
import Home from '../../components/Home';
import { fetchClients, fetchServices, fetchTestimonials } from '../../redux/ActionCreators';
import { connect } from 'react-redux';
import FloatingContact from '../../components/FloatingContact';
import Contact from '../../components/Contact';
import Enquiry from '../../components/Inquiry';


import { withController } from "react-scroll-parallax";
import PropTypes from 'prop-types'; 
import PopupModal from '../../components/PopupModal';
import Services from '../../components/ServicesPage';

const mapStateToProps = state => {
    return {
        services: state.services,
        clients: state.clients,
        testimonials: state.testimonials
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchServices : () => {dispatch(fetchServices())},
    fetchClients : () => {dispatch(fetchClients())},
    fetchTestimonials: () => {dispatch(fetchTestimonials())}
  
});

class Main extends Component{
    
    constructor(props) {
        super(props);
        this.state = { 
          open: 0,
          // to make rerender on every screen size change, but seemed to increase further design complexity, hence commented
          // width: window.innerWidth
       };
       this.setOpen= this.setOpen.bind(this);
    }

    setOpen(opn){
        this.setState({open : !opn});
    }

    
    
    componentDidMount(){
        this.props.fetchServices();
        this.props.fetchClients();
        this.props.fetchTestimonials();
        // window.addEventListener("resize",this.handleResize);
        this.props.parallaxController.update();
    }

    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => {
    //     setIsOpen(!isOpen)
    // }

    static propTypes = {
        parallaxController: PropTypes.object,
    }
    
    // TODO- should remove this parallax stuff
    componentDidUpdate(prevProps) {
        // console.log(prevProps.location,this.props.location);
        if (prevProps.location !== this.props.location) {
            this.props.parallaxController.update();
        // console.log("gg");
        }
    }


    render(){
        // console.log(this.props.clients);

        const HomeComponent = () => {
            return(
                <Home/>
            );
        }

        return (
            <div >
                <Sidebar open={this.state.open} toggle={this.setOpen}/>
                <Navbar open={this.state.open} toggle={this.setOpen}/>
                <PopupModal />
                <Switch>
                    <Route exact path="/" component={HomeComponent}>
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/enquiry">
                        <Enquiry />
                    </Route>
                    <Route path="/services">
                        <Services />
                    </Route>
                </Switch>
                <FloatingContact />
                
                <Footer />
            </div>
        )
    }
    
}

export default withController(withRouter(connect(mapStateToProps, mapDispatchToProps)(Main)));
