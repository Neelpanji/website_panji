import React from 'react'
import { useSelector } from 'react-redux'
import { FaqAccordion, FaqAccordionItem, FaqAccordionItemButton, FaqAccordionItemHeading, FaqAccordionItemPanel, FaqHeading, FaqsContainer } from './FaqsElements';
import {
	
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Faq = () => {

	const faqState = useSelector(state => state.faqs);

	const faqsAccordian = faqState.faqs.map((faq, index) => {
		return (
			<FaqAccordionItem key={index}>
				<FaqAccordionItemHeading>
					<FaqAccordionItemButton>
						{faq.question}
					</FaqAccordionItemButton>
				</FaqAccordionItemHeading>

				<FaqAccordionItemPanel>
					{faq.answer}
				</FaqAccordionItemPanel>
			</FaqAccordionItem>
		);
	});

	return (

		<FaqsContainer>
			<FaqHeading>FAQs</FaqHeading>
			<FaqAccordion allowZeroExpanded>
				{faqsAccordian}
			</FaqAccordion>
		</FaqsContainer>

	)
}

export default Faq