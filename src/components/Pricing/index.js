import { Col, Container, Row } from "reactstrap";
import { CardCost, CardFeature, CardFeaturesContainer, CardHeading, PriceCardWrapper, PricingComponentContainer, PricingHeading } from "./PricingElements";
import { useSelector } from "react-redux";
import { Loading } from "../Loading/LoadingComponent";
import { GreenHr, Link, PrimaryButton } from "../../common/CommonElements";


const PricingComponent = () => {

    const pricingState = useSelector(state => state.services);

    console.log(pricingState);

    const prices = pricingState.services.map(({
        title,
        sub_title,
        features
    }) => {

        const featureList = features.map((feature) => {
            return (
                <CardFeature>{feature?.feature_info}</CardFeature>
            );
        });

        return (
            <Col lg="4" style={{margin:"1rem 0"}}>
                <PriceCardWrapper>
                    <CardHeading>{title}</CardHeading>
                    <CardCost>{sub_title}</CardCost>
                    <GreenHr />
                    {/* <CardSubHeading>{sub_title}</CardSubHeading> */}
                    <CardFeaturesContainer>
                        {featureList}
                    </CardFeaturesContainer>
                    <Link to={"/contact"}>
                    <PrimaryButton>Know More</PrimaryButton>
                    </Link>
                </PriceCardWrapper>
            </Col>
        );
    })

    if (pricingState.isLoading) {
        return (
            <Loading />
        );
    }
    else if (pricingState.errMess) {
        return (<h4>{pricingState.errMess}</h4>);
    }
    else {
        return (

            <PricingComponentContainer>
                <PricingHeading>Pricing</PricingHeading>
                <Container >
                    <Row className="justify-content-md-center">
                        {prices}
                    </Row>
                </Container>
            </PricingComponentContainer>

        );
    }
};

export default PricingComponent