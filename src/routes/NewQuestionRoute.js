import Card from '../components/Card';
import { Link } from "react-router-dom";
import { useCreateQuestionMutation } from "../reducers/questionsApi";
import './NewQuestionRoute.css';

export default function NewQuestionRoute() {
  const [createPost] = useCreateQuestionMutation();

  const onSubmit = (e) => {
    console.log(e.target.elements)
    e.preventDefault();
    const {title, body} = e.target.elements;
    let formData = {
      title_text: title.value,
      question_text: body.value,
    }
    createPost(formData);
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
        <div class="NewQuestionRoute-buttons">
          <input type="submit" class="button"/>
        </div>
      </form>
    </Card>
  )
}
