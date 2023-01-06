import { useGetQuestionsQuery } from "../reducers/questionsApi";

export default function QuestionsRoute() {
  const {data, error, isLoading} = useGetQuestionsQuery();

  if (isLoading) {
    return <p>Loading questions...</p>
  } else if (error) {
    return <p>Sorry, something went wrong! Please try again.</p>
  } else {
    return data.map(question => (
      <div key={question.id}>
        <p>{question.title_text}</p>
        <p>{question.question_text}</p>
      </div>
    ))
  }
}
