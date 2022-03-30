import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "../../models/postModel";

const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<Post[], void>({
      query: () => {
        return {
          url: "/posts",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllPostsQuery, useLazyGetAllPostsQuery } = postApi;

export default postApi;
