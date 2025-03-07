import React from 'react';
import Button from './Button';

const Card = (props) => {
  
function getorder(){
     alert('order done')
}
  return (
    <div style={cardStyle}>
      <img  src={props.image}  alt="Placeholder"  style={imageStyle} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <Button title="purchase" click={getorder} />
    </div>
  );
};

export default Card;

// card Styling 

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  width: '250px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '16px',
  textAlign: 'center',
  backgroundColor: '#fff'
};


const imageStyle = {
  width: "100%",
  aspectRatio: "16 / 9",
  objectFit: "contain"
};
