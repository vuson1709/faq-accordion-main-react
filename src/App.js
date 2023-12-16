import { useEffect, useCallback, useState } from "react";
import IconPlus from "./assets/images/icon-plus.svg";
import IconMinus from "./assets/images/icon-minus.svg";
import IconStar from "./assets/images/icon-star.svg";
import { useKey } from "./useKey";

const faqs = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

export default function App() {
  return (
    <div className="App">
      <Accordions />
    </div>
  );
}

function Accordions() {
  return (
    <div className="accordions">
      <Header />
      <Items />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <img src={IconStar} alt="Star Icon" className="icon-star" />
      <h1>FAQs</h1>
    </header>
  );
}

function Items() {
  const [selectedId, setSelectedId] = useState(null);

  function handleSelectId(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  const setTabId = useKey(handleSelectId);

  return (
    <ul>
      {faqs.map((faq, i) => (
        <Item
          faq={faq}
          key={i}
          id={i + 1}
          onSelectedId={handleSelectId}
          selectedId={selectedId}
          setTabId={setTabId}
        />
      ))}
    </ul>
  );
}
function Item({ faq, id, selectedId, onSelectedId, setTabId }) {
  const isOpen = id === selectedId;

  return (
    <li className="item">
      <div
        onFocus={() => setTabId(id)}
        onClick={() => onSelectedId(id)}
        className="question"
        tabIndex="0"
      >
        <h4>{faq.question}</h4>
        <div>
          {isOpen ? (
            <img src={IconMinus} alt="Minus Icon" />
          ) : (
            <img src={IconPlus} alt="Plus Icon" />
          )}
        </div>
      </div>
      <p className="answer">{isOpen && faq.answer}</p>
    </li>
  );
}
