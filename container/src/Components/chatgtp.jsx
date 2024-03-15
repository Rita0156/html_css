import React, { useState } from 'react';
import Card from './Card';
const ArrayDisplay = ({props}) => {
  const myArray = props
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextComponents = (index) => {
    setCurrentIndex(index);
  };

  const updateDisplay = () => {
    return myArray.slice(currentIndex, currentIndex + 2);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '300px', margin: '20px' }}>
        {updateDisplay().map((item, index) => (
        //   <div
        //     key={index}
        //     style={{ width: '80px', height: '80px', backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
        //     onClick={() => showNextComponents(index)}
        //   >
        //     {item}
        //   </div>
        <Card onClick={() => showNextComponents(index)} style={{ width: '80px', height: '80px', backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}  key={index} children={item.btn_text} details={item.details} title={item.title} avatar={item.image} />
        ))}
      </div>
      
    </div>
  );
};

export default ArrayDisplay;
