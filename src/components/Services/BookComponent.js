import HTMLFlipBook from 'react-pageflip';
import React from 'react';
import {  BookContainer, BookPageContainer, BookCoverPageContainer, BookPageLogoContainer, BookPageLogo, BookPageContentContainer, BookPageHeader, BookPageFeatures, BookCoverPageImg, BookInquireContainer, BookInquireLink, BookFlipContainer } from './ServicesElements';
import {Row, Container, Col} from 'reactstrap';

const PageCover = React.forwardRef((props, ref) => {
    return (
      // <div className="demoPage" ref={ref} data-density="hard">
      <div className="demoPage" ref={ref}>
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

  

const Page = React.forwardRef((props, ref) => {
  // console.log(props.service);

  const features = props.service.features.map((feature) => {
    return(<li>{feature}</li>);
  });
    return (
        <div className="page-content" ref={ref} >
            <BookPageContainer id = {props.service.id}>
            <BookPageLogoContainer  id = {props.service.id}>
              <BookPageLogo src={props.service.image}/>
            </BookPageLogoContainer>
            <BookPageContentContainer id = {props.service.id}>
              <BookPageHeader>
                {props.service.name}
              </BookPageHeader>
              <BookPageFeatures>
                {features} 
              </BookPageFeatures>
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

  // console.log(props);

  const page = props.services.map((service)=>{
    // console.log(service);
    return(<Page service = {service}/>);
      // return(<div><img height='253px' width='253px' src={service.name}/></div>);
      
  });

    return (
        <BookContainer>
        <HTMLFlipBook 
          width={550}
          height={600}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={250}
          maxHeight={1533}
          maxShadowOpacity={0.6}
          showCover={true}
          mobileScrollSupport={true}
          // onFlip={this.onPage}
          // onChangeOrientation={this.onChangeOrientation}
          // onChangeState={this.onChangeState}
          className="demo-book"
          // ref={(el) => (this.flipBook = el)}
        >
            <PageCover></PageCover>
            {page}
            {/* <Page number="1">Page text</Page>
            <Page number="2">Page text</Page>
            <Page number="3">Page text</Page>
            <Page number="4">Page text</Page>
            <Page number="5">Page text</Page>
            <Page number="6">Page text</Page> */}

        </HTMLFlipBook>
        </BookContainer>
    )
}





export default Book;

