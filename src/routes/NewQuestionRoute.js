import Card from '../components/Card';
import { Link, useNavigate } from "react-router-dom";
import { useCreateQuestionMutation } from "../reducers/questionsApi";
import './NewQuestionRoute.css';

export default function NewQuestionRoute() {
  const [createPost] = useCreateQuestionMutation();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    console.log(e.target.elements)
    e.preventDefault();
    const {title, body} = e.target.elements;
    let formData = {
      title_text: title.value,
      question_text: body.value,
    }
    createPost(formData)
      .then(() => navigate('/'));
  }

  return (
    <Card className="NewQuestionRoute">
      <div className='NewQuestionRoute-header'>
        <h2>New Question</h2>
        <Link to="/" className="close-button">&#x2717;</Link>
      </div>

      <hr/>

      <form onSubmit={onSubmit}>
        <input type="text" name="title" placeholder="Enter the question title" required />
        <textarea name="body" placeholder="Write your question here" rows="15" required />
        <div className="NewQuestionRoute-buttons">
          <input type="submit" className="button"/>
        </div>
      </form>
    </Card>
  )
}
