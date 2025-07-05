import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const faqs = [
 
  {
    question: "Can I apply with no credit score?",
    answer:
      "Yes. We don’t check credit scores.",
  },
  {
    question: " How fast is approval?",
    answer:
      "Within minutes of applying.",
  },
  {
    question: "Which cryptocurrencies are accepted?",
    answer:
      "Bitcoin, Ethereum, USDT, and more.",
  },
 
];

const FAQ = ({ onTriggerPopup }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Create refs for each question
  const questionRefs = useRef([]);
  questionRefs.current = faqs.map(
    (_, i) => questionRefs.current[i] ?? React.createRef()
  );

  // Create ref for heading
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { amount: 0.3, once: false });

  // Track which questions are in view
  const [questionsInView, setQuestionsInView] = useState(
    Array(faqs.length).fill(false)
  );

  useEffect(() => {
    const observers = questionRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          setQuestionsInView((prev) => {
            const newState = [...prev];
            newState[index] = entry.isIntersecting;
            return newState;
          });
        },
        { threshold: 0.3 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (questionRefs.current[index].current) {
          observer.unobserve(questionRefs.current[index].current);
        }
      });
    };
  }, []);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="h-auto sssssmt-16 px-6 md:px-20 py-16 bg-white">
      <motion.h2
        ref={headingRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isHeadingInView ? 0 : -100,
          opacity: isHeadingInView ? 1 : 0,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl md:text-5xl font-bold text-center mb-8 text-[#9810fa]"
      >
        FREQUENTLY ASKED QUESTIONS
      </motion.h2>
        <div className="flex justify-center space-x-1 mb-8">
            <div className="w-6 h-1 bg-purple-600 rounded-full"></div>
            <div className="w-6 h-1" style={{ backgroundColor: "#000000" }}></div>
            <div className="w-6 h-1" style={{ backgroundColor: "#9810fa" }}></div>
            <div className="w-6 h-1 bg-[#000000] rounded-full"></div>
          </div>

      <div className="space-y-4 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            ref={(el) => (questionRefs.current[index].current = el)}
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: questionsInView[index] ? 0 : 100,
              opacity: questionsInView[index] ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
            className=" bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 cursor-pointer"
            onClick={() => toggleIndex(index)}
          >
            <div className="flex justify-between items-center bg-gradient">
              <p className="text-lg font-medium">{faq.question}</p>
              <span className="text-xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: activeIndex === index ? "auto" : 0,
                opacity: activeIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-2 pt-2 text-gray-700">{faq.answer}</div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 text-center">
     
          <button  onClick={onTriggerPopup} 
          className="text-purple-800   font-semibold border-2 border-purple-600 cursor-pointer px-4 py-2  inline-flex items-center gap-1">
            Read All FAQ <span className="text-xl">→</span>
          </button>
  
      </div>
    </section>
  );
};

export default FAQ;