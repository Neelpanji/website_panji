import HTMLFlipBook from 'react-pageflip';
import React,{useRef} from 'react';
import {  BookContainer, BookPageContainer, BookCoverPageContainer, BookPageLogoContainer, BookPageLogo, BookPageContentContainer, BookPageHeader, BookPageFeatures, BookCoverPageImg, BookInquireContainer, BookInquireLink, BookFlipContainer, BookCoverBackContainer, BookKnowMoreContainer, BookKnowMoreLink,
  BookPage2Number, BookPage2MainHeading, BookPage2NumberContainer,BookPage2Container, BookPage2MainHeadingContainer, BookPage2MainHeadingSmallContainer, BookPage2MainHeadingSmall, BookPage2SubHeadingContainer, BookPage2SubHeading, BookPage2MainContainer,
  BookPage2Features,BookInquireContainer2,BookKnowMoreContainer2, BookContainerMobile,BookPage2FeatureLi,BookFlipPageInfo, ButtonService
} from './ServicesElements';
import {Row, Container, Col} from 'reactstrap';
import { Link } from 'react-router-dom';

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
          <BookFlipPageInfo>
          Please flip through my booklet to Know More<br/><br/>
          Customizable packages for your own needs always availabe as each podcast is unique.
          </BookFlipPageInfo>
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

const Page2 = React.forwardRef((props,ref) =>{
  // console.log(props.service.features.length);

  const KnowMoreLink = () => {
    if(props.service.link === ""){
      return(
            <span></span>

      );
    } else {
      return(
        // <BookKnowMoreLink href={props.service.link}>Recent Projects</BookKnowMoreLink>
        <a target="_blank" rel="noopener noreferrer" href={props.service.link}><ButtonService >Recent Projects</ButtonService></a>
      );
    }
  };

  const features = props.service.features.map((feature) => {
    return(<BookPage2FeatureLi>{feature}</BookPage2FeatureLi>);
  });

  if(props.service.features.length === 0){
    return(
      <div className="page-content" ref={ref} >
        <BookPage2Container id = {props.service.id + 1}>
          <BookPage2NumberContainer id = {props.service.id + 1}>
            <BookPage2Number>{props.service.number}</BookPage2Number>
          </BookPage2NumberContainer>
          <BookPage2MainHeadingContainer id = {props.service.id + 1}>
            <BookPage2MainHeading>{props.service.name}</BookPage2MainHeading>
          </BookPage2MainHeadingContainer>
        </BookPage2Container>
      </div>
    );
  }
  else {
    return(
      <div className="page-content" ref={ref} >
      <BookPage2Container id = {props.service.id + 1}>
        <BookPage2MainHeadingSmallContainer id = {props.service.id + 1}>
          <BookPage2MainHeadingSmall>{props.service.name}</BookPage2MainHeadingSmall>
        </BookPage2MainHeadingSmallContainer>
        <BookPage2SubHeadingContainer id = {props.service.id + 1}>
          <BookPage2SubHeading>{props.service.sub_name}</BookPage2SubHeading>
        </BookPage2SubHeadingContainer>
        <BookPage2MainContainer id = {props.service.id + 1}>
          <BookPage2Features>
            {features} 
          </BookPage2Features>
          <BookInquireContainer2>
            Not satisfied? Ask for more - 
            {/* <BookInquireLink to="/enquiry#top">Reach Me</BookInquireLink> */}
            <Link to="/enquiry#top"><ButtonService>Reach Me</ButtonService></Link>
          </BookInquireContainer2>
          <BookKnowMoreContainer2>
            <KnowMoreLink />
          </BookKnowMoreContainer2>
              
        </BookPage2MainContainer>
      </BookPage2Container>
      </div>
    );
  }
});

const Page = React.forwardRef((props, ref) => {
  // console.log(props.service.link);

  const KnowMoreLink = () => {
    if(props.service.link === ""){
      return(
            <span></span>

      );
    } else {
      return(
        <BookKnowMoreLink href={props.service.link}>Recent Projects</BookKnowMoreLink>
      );
    }
  };

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
                <KnowMoreLink />
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

  // console.log(Object.keys(props.services).length);

  const page = props.services.map((service)=>{
    
    return(<Page2 service = {service}/>);
      // return(<div><img height='253px' width='253px' src={service.name}/></div>);
      
  });

  const book = useRef();
  const book2 = useRef();

    return (
      <span>
      <ScrollAnimation animateIn="animate__slideInRight" duration="2.5" animateOnce="true" delay="500"
      afterAnimatedIn={() =>
        book.current.pageFlip().flipNext()}>
        <BookContainer>
        <HTMLFlipBook 
          width={550}
          height={620}
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
      <ScrollAnimation animateIn="animate__slideInRight" duration="2.5" animateOnce="true" delay="500"
      afterAnimatedIn={() =>
        book2.current.pageFlip().flipNext()}>
        <BookContainerMobile>
        <HTMLFlipBook 
          width={320}
          height={480}
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
          ref={book2}
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
        </BookContainerMobile>

        </ScrollAnimation>
      </span>
    )
}





export default Book;

