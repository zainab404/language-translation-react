import React, {useState} from 'react';

const Accordion = ({items}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  // ^^^ this syntax is called "array destructuring"

  console.log("==== here =====")

  const onTitleClick = (index) => {
    setActiveIndex(index);
  }

  const renderedItems = items.map((item, index) => {
    const active = (index === activeIndex) ? "active" : "";
  

    return (
      <React.Fragment key={item.title}>
            <div 
            className={"title" + active}
            onClick={() => onTitleClick(index)}
            >
              <i className="dropdown icon"></i>
              {item.title}

              <div className={"content" + active}>
                <p>{item.content}</p>
              </div>
              
            </div>
      </React.Fragment>
    ) 
  });

  return <div className="ui styled accordion">{renderedItems}</div>
}

export default Accordion;