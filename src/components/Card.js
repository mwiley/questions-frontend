import './Card.css';

const Card = ({children, className}) => (
  <div className={`Card ${className ? className : ''}`}>
    {children}
  </div>
)

export default Card;