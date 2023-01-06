import Card from './Card';
import usersIcon from '../images/users-solid.svg';
import questionsIcon from '../images/comment-solid.svg';
import upvotesIcon from '../images/circle-up-solid.svg';
import tokensIcon from '../images/coins-solid.svg';
import avatar from '../images/avatar.png';
import './Sidebar.css';

const Sidebar = () => (
  <div className="Sidebar">
    <Card className="Sidebar-card">
      <h2>About</h2>
      <p>
        <img src={usersIcon} alt="" className="card-icon" width="25"></img>
        246 Experts
      </p>
      <p>
        <img src={questionsIcon} alt="" className="card-icon" width="25"></img>
        100k Questions and Answers
      </p>
      <p>
        <img src={upvotesIcon} alt="" className="card-icon" width="25"></img>
        50k Upvotes
      </p>
      <p>
        <img src={tokensIcon} alt="" className="card-icon" width="25"></img>
        145 Tokens Awarded
      </p>
    </Card>

    <Card>
      <h2>Top Experts</h2>

      {
        ['Psuedo Near Expert', 'Near Expert', 'Bitcoin Maxi', 'Ethereum Maxi'].map((name, index) => {
          return (
            <div className='user' key={index}>
              <img className='user-avatar' alt={`${name}'s avatar`} src={avatar} width="50" height="50"/>
              <div className='user-info'>
                <span className="user-name">{name}</span>
                <span className="user-stats"> 
                  47
                  <img src={upvotesIcon} alt="upvotes" width={15}/>
                  collected
                </span>
              </div>
            </div>
          )
        })
      }
    </Card>
  </div>
)

export default Sidebar;
