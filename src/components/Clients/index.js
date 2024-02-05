import React from 'react'
import {
	ClientsCarouselContainer,
	ClientsContainer, ClientsHeading,
	ClientsBgImage, ClientsBgImage2,
	ClientImage, ClientImageLink, ClientsContent
} from './ClientsElements';
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Loading } from '../Loading/LoadingComponent';
import { useSelector } from 'react-redux';

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
		slidesToSlide: 1 // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1024, min: 560 },
		items: 1,
		slidesToSlide: 1 // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 560, min: 0 },
		items: 1,
		slidesToSlide: 1 // optional, default to 1.
	}
};


const Clients = () => {

	const clientsState = useSelector(state => state.clients);

	// const CustomLeftArrow = ({ onClick }) => (
	// 	<i onClick={() => onClick()} className="custom-left-arrow" />
	// );
	// const CustomRightArrow = ({ onClick }) => {
	// 	return <i className="custom-right-arrow" onClick={() => onClick()} />;
	// };

	const clients = clientsState.clients.map((client, index) => {
		// console.log(client, index);
		return (<div style={{ zIndex: "10" }}><ClientImageLink target="_blank" rel="noopener noreferrer" href={client.link}><ClientImage src={client.image} /></ClientImageLink></div>);

	});


	if (clientsState.isLoading) {
		return (
			<Loading />
		);
	}
	else if (clientsState.errMess) {
		return (<h4>{clientsState.errMess}</h4>);
	}
	else {
		return (
			<ClientsContainer>
				<ClientsHeading>Clients</ClientsHeading>
				<ClientsContent>Click on the images to checkout the podcasts.</ClientsContent>
				{/* <ClientsBgImage src='assets/images/clients_pattern_2_crop.png' /> */}
				{/* <ClientsBgImage2 src='assets/images/clients_pattern_1_crop2.png' /> */}

				<ClientsCarouselContainer>
					{clients}
					{/* <Carousel
						swipeable={true}
						draggable={true}
						showDots={false}
						responsive={responsive}
						ssr={true} // means to render carousel on server-side.
						infinite={true}
						autoPlay={true}
						autoPlaySpeed={3500}
						keyBoardControl={true}
						customTransition="all .7s"
						transitionDuration={700}
						containerClass="carousel-container"
						// deviceType={this.props.deviceType}
						dotListClass="custom-dot-list-style"
						itemClass="carousel-item-padding-40-px"
					>

						{clients}
					</Carousel> */}
				</ClientsCarouselContainer>

			</ClientsContainer>
		)
	}

}

export default Clients


