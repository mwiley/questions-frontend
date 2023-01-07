import Card from "../components/Card";
import { useGetQuestionsQuery } from "../reducers/questionsApi";
import avatar from '../images/avatar.png';
import './QuestionsRoute.css';

export default function QuestionsRoute() {
  const {data, error, isLoading} = useGetQuestionsQuery();

  if (isLoading) {
    return <p>Loading questions...</p>
  } else if (error) {
    return <p>Sorry, something went wrong! Please try again.</p>
  } else {
    return data.map(question => (
      <Card key={question.id} className="question-row">
        <p className="question-title">{question.title_text}</p>
        <p className="question-text">{question.question_text}</p>

        <hr/>

        <p className="question-user-label">Asked by:</p>

        <div className="question-user">
          <img className='question-user-avatar' alt={`Pseudo Near Expert's avatar`} src={avatar} width="50" height="50"/>
          <div className="question-user-info">
            <span className="question-user-name">Pseudo Near Expert</span>
            <span className="question-user-stats">2 Answers &middot; 1 question</span>
          </div>
        </div>
      </Card>
    ))
  }
}
