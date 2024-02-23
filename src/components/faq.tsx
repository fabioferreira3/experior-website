import React, { useState } from 'react';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questionsAnswers = [
    {
      question: 'What is Experior?',
      answer:
        'In a nutshell, Experior.ai provides multiples AI tools to help content creators to generate any sort of text and audio with the aid of Artificial Intelligence. That includes (but are not limited to) social media posts, blog articles, converting text to audio, paraphrase chunks of text of entire documents, summarization, audio transcription, and query data from uploaded documents.',
    },
    {
      question: 'Why Experior?',
      answer:
        'Experior is boosted by 5 different powerful LLM model, each one of them trained specifically to generate content that are very close to ones generated purely by humans. And we were able to merge all of them into a single platform with a very reduced cost, making it affordable to everyone. So, forget about purchasing multiple AI tools to generate different types of content. With Experior you won\'t need anything else',
    },
    {
      question: 'How much does it cost to use Experior?',
      answer:
        'Experior uses the concept of "units" that are consumed when using our services. When creating a new account, you receive 100 units for free to test out platform the way you choose. If you run out of units, you can either purchase more units or subscribe to our monthly plans, which would grant you a certain amount of units per month with a reduced price.',
    },
    {
      question: 'Can I upgrade or switch to a different plan whenever I want?',
      answer:
        'Absolutely! You can switch to another plan whenever you want. Generally, you\'ll need to move to the new pricing for most plan changes.',
    },
    {
      question: "How many users can I have on my Experior account?",
      answer:
        "In the Starter plan you can have up to 2 users. In the Pro plan up to 10 users, and in the Enterprise plan you can add up to 30 users. If you need more than 30 users, the cost would be 5 USD per/user/month.",
    },
    {
        question: "What payment methods are currently supported?",
        answer: "We accept all major credit and debit cards, ensuring your payment is protected with 3D secure authentication for your privacy and security. Currently, Experior does not accept PayPal, prepaid cards, or other cash apps."
    },
    {
        question: "Do you have a cancelation policy?",
        answer: "You can cancel your subscription anytime and stop future charges. Even after canceling, you can still generate content using your remaining units and access your account until your current billing cycle ends. No strings attached!"
    },
    {
        question: "How does Experior handle my data?",
        answer: "Experior uses strong access controls, ensuring that only users within your workspace can access your data. Our service has been independently tested and audited to confirm the effectiveness of these protections. Experior will only share your data with our trusted partners who assist in providing our service. We will never sell, share or re-use your data in any way. Everything you generate through our platform is yours and yours alone."
    },
    {
        question: "Do you have a fair use policy?",
        answer: "Experior uses strong access controls, ensuring that only users within your workspace can access your data. Independent third parties have tested and audited our service to confirm that your data is well-protected. Experior will only share your data with our trusted partners who assist in providing our service."
    },
  ];

  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions</h2>
      <div className="flex flex-col space-y-3">
        {questionsAnswers.map((qa, index) => (
          <div key={index} className="bg-white rounded-xl overflow-hidden">
            <button
              className="w-full text-left text-3xl p-4 font-bold text-secondary"
              onClick={() => toggleAccordion(index)}
            >
              {qa.question}
            </button>
            <div
              className={`transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              } overflow-hidden`}
            >
              <p className="px-4 pb-4 text-gray-700 text-xl">{qa.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8 text-4xl font-bold">Have other questions?</div>
      <div className="text-center text-xl">Reach us at <span className="text-white font-bold">contact@experior.ai</span></div>
    </div>
  );
};

export default FaqSection;
