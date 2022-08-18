import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import {
	ClientsCarouselContainer,
	ClientsContainer, ClientsHeading,
	ClientsBgImage, ClientsBgImage2,
	ClientImage, ClientImageLink
} from './ClientsElements';
import useSound from 'use-sound';
import Carousel from "react-multi-carousel";
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
		items: 2,
		slidesToSlide: 1 // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 560, min: 0 },
		items: 1,
		slidesToSlide: 1 // optional, default to 1.
	}
};


// import boopSfx from '/assets/sounds/mixkit-dog-barking-twice-1.wav';
const SoundButton = () => {
	const boopSfx = '/assets/sounds/mixkit-dog-barking-twice-1.wav';
	const [play] = useSound(boopSfx);
	return <button onClick={play}>Sound</button>;
};

const Clients = () => {

	const clientsState = useSelector(state => state.clients);

	// function Demo() {
	//     const soundUrl = '/assets/sounds/mixkit-dog-barking-twice-1.wav';

	//     const [play, { stop, isPlaying }] = useSound(soundUrl);

	//     return (
	//       <PlayButton
	//         active={isPlaying}
	//         size={60}
	//         iconColor="var(--color-background)"
	//         idleBackgroundColor="var(--color-text)"
	//         activeBackgroundColor="var(--color-primary)"
	//         play={play}
	//         stop={stop}
	//       />
	//     );
	//   }
	const CustomLeftArrow = ({ onClick }) => (
		<i onClick={() => onClick()} className="custom-left-arrow" />
	);
	const CustomRightArrow = ({ onClick }) => {
		return <i className="custom-right-arrow" onClick={() => onClick()} />;
	};

	const clients = clientsState.clients.map((client) => {
		// console.log(client);
		return (<div><ClientImageLink target="_blank" rel="noopener noreferrer" href={client.link}><ClientImage src={client.image} /></ClientImageLink></div>);

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
				<ClientsBgImage src='assets/images/clients_pattern_2_crop.png' />
				<ClientsBgImage2 src='assets/images/clients_pattern_1_crop2.png' />
				<ClientsCarouselContainer>
					<Carousel
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
					</Carousel>
				</ClientsCarouselContainer>

			</ClientsContainer>
		)
	}

}

export default Clients


