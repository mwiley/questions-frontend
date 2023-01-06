import { useCreateQuestionMutation } from "../reducers/questionsApi";

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
    <div>
      <h2>New Question</h2>
      <form onSubmit={onSubmit}>
        <input type="text" name="title" placeholder="Enter the question title" /><br/>
        <textarea name="body" placeholder="Write your question here"/><br/>
        <input type="submit"/>
      </form>
    </div>
  )
}
