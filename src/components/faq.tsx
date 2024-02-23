import React, { useState } from 'react';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questionsAnswers = [
    {
      question: 'What is Experior.ai?',
      answer:
        'Experior.ai is a SaaS company that provides an AI tool to help content creators generate social media posts, blog articles, convert text to audio, paraphrase, summarize, transcribe audio, and query data in uploaded documents.',
    },
    {
      question: 'Can I use Experior for free?',
      answer:
        'Experior.ai offers a free trial for new users to explore its features. After the trial period, users can choose from various subscription plans based on their needs.',
    },
    {
      question: "How does Experior's text-to-audio feature work?",
      answer:
        "Experior.ai's text-to-audio feature uses advanced AI algorithms to convert written text into natural-sounding audio, making it easier for users to create audio content from their written material.",
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
              <p className="px-4 pb-4 text-main">{qa.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
