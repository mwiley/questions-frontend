import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const questionsApi = createApi({
  reducerPath: 'questionsApi',
  tagTypes: ['Questions'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
  endpoints: (builder) => ({
    getQuestions: builder.query({
      query: () => 'questions/',
      providesTags: ['Questions'],
    }),
    createQuestion: builder.mutation({
      query(question) {
        return {
          url: 'questions/',
          method: 'POST',
          body: question,
        }
      },
      invalidatesTags: ['Questions'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetQuestionsQuery, useCreateQuestionMutation } = questionsApi;
