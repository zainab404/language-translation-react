import React, {useState} from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';
import Convert from './Convert';

const items = [
  {title: 'What is React?', content: 'React is a front end javascript framework'}, // 0
  {title: "Why use React?", content: "React is a favorite JS library amongst engineers"}, // 1
  {title: "How do you use React?", content: "You use React by creating components"}
];
// ^^^ how come this list is in this file and not the accordion file?
// look at other projects to see which component the actual data is

const options = [
  {
    label: "Crimson",
    value: 'red'
  },

  {
    label: "Emerald",
    value: 'green'
  },

  {
    label: "Saphire",
    value: 'blue'
  }
];

// *******************************************

const App = () => {
  return (
    <div>
     <Translate/>
    </div>
   
  )
}

export default App;