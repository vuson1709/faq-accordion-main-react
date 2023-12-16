# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

  - [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

In this challenge, you'll build an FAQ accordion. This is an extremely common front-end pattern, so it's an excellent opportunity to get some practice in!

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./public/design/desktop-preview.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with
- JavaScript
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library

### What I learned

- I created a custom hook. This function allow me to navigate on sections on website using Tab (must include ``` tabIndex="0"``` in element).
- On my website, there are 4 questions, when select a question using tab, press Enter/Arrow Down to display answer and press again or Arrow Up to hide it.

Here is my code for the custom useKey hook:

```
import { useState, useEffect } from "react";

export function useKey(handleSelectId) {
  const [tabId, setTabId] = useState(null);

  useEffect(
    function () {
      function callback(e) {
        if (e.key === "ArrowUp") {
          handleSelectId(null);
        }
        if (e.key === "ArrowDown" || e.key === "Enter") {
          handleSelectId(tabId);
        }
      }

      document.addEventListener("keydown", callback);

      return () => document.removeEventListener("keydown", callback);
    },
    [tabId, handleSelectId]
  );

  return setTabId;
}
```
