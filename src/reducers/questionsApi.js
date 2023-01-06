import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const questionsApi = createApi({
  reducerPath: 'questionsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
  endpoints: (builder) => ({
    getQuestions: builder.query({
      query: () => 'questions/',
    }),
    createQuestion: builder.mutation({
      query(question) {
        return {
          url: 'questions/',
          method: 'POST',
          body: question,
        }
      }
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetQuestionsQuery, useCreateQuestionMutation } = questionsApi;
