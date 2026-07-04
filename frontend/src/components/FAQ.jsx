import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: "Is Equity Plus free?",
      answer:
        "Yes. Most educational resources and calculators are available free of cost.",
    },
    {
      question: "Can beginners use Equity Plus?",
      answer:
        "Absolutely. The platform is designed for users of all experience levels.",
    },
    {
      question: "Does Equity Plus provide investment advice?",
      answer:
        "No. Equity Plus provides educational content, market information, and financial tools to help users make informed decisions.",
    },
    {
      question: "Which calculators are available?",
      answer:
        "SIP, EMI, Brokerage, CAGR, GST, Retirement Planner, and more.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl text-sky-700 font-semibold text-center my-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-md overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-5 text-left font-semibold text-lg hover:bg-gray-100 transition"
            >
              {faq.question}

              {open === index ? (
                <FaMinus className="text-indigo-600" />
              ) : (
                <FaPlus className="text-indigo-600" />
              )}
            </button>

            {open === index && (
              <div className="px-5 pb-5 text-gray-600 leading-7">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;