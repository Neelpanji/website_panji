import React from 'react'
import { useSelector } from 'react-redux'
import { FaqAccordion, FaqAccordionItem, FaqAccordionItemButton, FaqAccordionItemHeading, FaqAccordionItemPanel, FaqHeading, FaqSubHeading, FaqsContainer } from './FaqsElements';
import {

} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Faq = () => {

	const faqState = useSelector(state => state.faqs);

	const faqLists = faqState.faqs.map((faqList, index) => {

		const faqsAccordian = faqList.faqs.map((faq, index) => {
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
			<>
				<FaqSubHeading>{faqList.title}</FaqSubHeading>
				<FaqAccordion allowZeroExpanded>
					{faqsAccordian}
				</FaqAccordion>
			</>
		);
	})



	return (

		<FaqsContainer>
			<FaqHeading>FAQs</FaqHeading>
			{faqLists}
		</FaqsContainer>

	)
}

export default Faq