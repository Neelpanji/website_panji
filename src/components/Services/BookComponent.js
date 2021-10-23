import HTMLFlipBook from 'react-pageflip';
import React,{useRef} from 'react';
import {  BookContainer, BookPageContainer, BookCoverPageContainer, BookPageLogoContainer, BookPageLogo, BookPageContentContainer, BookPageHeader, BookPageFeatures, BookCoverPageImg, BookInquireContainer, BookInquireLink, BookFlipContainer, BookCoverBackContainer, BookKnowMoreContainer, BookKnowMoreLink } from './ServicesElements';
import {Row, Container, Col} from 'reactstrap';

import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const PageCover = React.forwardRef((props, ref) => {
    return (
      // <div className="demoPage" ref={ref} data-density="hard">
      <div className="page page-cover" ref={ref}>
        <BookCoverPageContainer>
          
        <BookCoverPageImg />
          {/* <div className="page-content">
            <h2>{props.children}</h2>
          </div> */}
          {/* <BookFlipContainer>Flip to know more!</BookFlipContainer> */}
        </BookCoverPageContainer>
      </div>
    );
  });

  const PageCoverBack = React.forwardRef((props, ref) => {
    return (
      // <div className="demoPage" ref={ref} data-density="hard">
      <div className="page page-cover" ref={ref}>
        <BookPageContainer id = {0}>
          
          <BookCoverBackContainer>
          Please flip through my booklet to Know More
          </BookCoverBackContainer>
          {/* <div className="page-content">
            <h2>{props.children}</h2>
          </div> */}
          {/* <BookFlipContainer>Flip to know more!</BookFlipContainer> */}
        </BookPageContainer>
      </div>
    );
  });

  const EndPage = React.forwardRef((props, ref) => {
    return (
      // <div className="demoPage" ref={ref} data-density="hard">
      <div className="page page-cover" ref={ref}>
        <BookPageContainer id={props.pageNum + 1} pageNum={props.pageNum}>
          
          <BookCoverBackContainer>
          Thank You
          </BookCoverBackContainer>
          {/* <div className="page-content">
            <h2>{props.children}</h2>
          </div> */}
          {/* <BookFlipContainer>Flip to know more!</BookFlipContainer> */}
        </BookPageContainer>
      </div>
    );
  });

  

const Page = React.forwardRef((props, ref) => {
  // console.log(props.service);


  const features = props.service.features.map((feature) => {
    return(<li>{feature}</li>);
  });
    return (
        <div className="page-content" ref={ref} >
            <BookPageContainer id = {props.service.id + 1}>
            <BookPageLogoContainer  id = {props.service.id + 1}>
              <BookPageLogo src={props.service.image}/>
            </BookPageLogoContainer>
            <BookPageContentContainer id = {props.service.id + 1}>
              <BookPageHeader>
                {props.service.name}
              </BookPageHeader>
              <BookPageFeatures>
                {features} 
              </BookPageFeatures>
              <BookKnowMoreContainer>
                <BookKnowMoreLink href={props.service.link}>Recent Projects</BookKnowMoreLink>
              </BookKnowMoreContainer>
              <BookInquireContainer>
                <BookInquireLink to="/enquiry#top">Inquire</BookInquireLink>
              </BookInquireContainer>
            </BookPageContentContainer>
            {/* <h1>Page Header</h1>
            <p>{props.children}</p>
            <p>Page number: {props.number}</p> */}
            </BookPageContainer>
        </div>
    );
});

const Book = (props) => {

  console.log(Object.keys(props.services).length);

  const page = props.services.map((service)=>{
    
    return(<Page service = {service}/>);
      // return(<div><img height='253px' width='253px' src={service.name}/></div>);
      
  });

  const book = useRef();

    return (
      <ScrollAnimation animateIn="animate__slideInRight" duration="2.5" animateOnce="true" delay="500"
      afterAnimatedIn={() =>
        book.current.pageFlip().flipNext()}>
        <BookContainer>
        <HTMLFlipBook 
          width={550}
          height={650}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={243}
          maxHeight={1533}
          maxShadowOpacity={0.6}
          showCover={true}
          mobileScrollSupport={true}
          // onFlip={this.onPage}
          // onChangeOrientation={this.onChangeOrientation}
          // onChangeState={this.onChangeState}
          className="demo-book"
          // ref={(el) => (this.flipBook = el)}
          ref={book}
        >
            <PageCover></PageCover>
            <PageCoverBack/>
            {page}
            {/* <Page number="1">Page text</Page>
            <Page number="2">Page text</Page>
            <Page number="3">Page text</Page>
            <Page number="4">Page text</Page>
            <Page number="5">Page text</Page>
            <Page number="6">Page text</Page> */}
            <EndPage pageNum={Object.keys(props.services).length}/>
        </HTMLFlipBook>
        </BookContainer>
        </ScrollAnimation>
    )
}





export default Book;

