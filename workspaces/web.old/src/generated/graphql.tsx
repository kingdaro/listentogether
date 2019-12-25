import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type AuthPayload = {
   __typename?: 'AuthPayload',
  token: Scalars['String'],
  user: User,
};

export type Mutation = {
   __typename?: 'Mutation',
  createDraft: Post,
  deletePost?: Maybe<Post>,
  login: AuthPayload,
  publish?: Maybe<Post>,
  signup: AuthPayload,
};


export type MutationCreateDraftArgs = {
  content?: Maybe<Scalars['String']>,
  title: Scalars['String']
};


export type MutationDeletePostArgs = {
  id?: Maybe<Scalars['ID']>
};


export type MutationLoginArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationPublishArgs = {
  id?: Maybe<Scalars['ID']>
};


export type MutationSignupArgs = {
  email: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  password: Scalars['String']
};

export type Post = {
   __typename?: 'Post',
  author?: Maybe<User>,
  content?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  published: Scalars['Boolean'],
  title: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  feed: Array<Post>,
  filterPosts: Array<Post>,
  me?: Maybe<User>,
  post?: Maybe<Post>,
};


export type QueryFilterPostsArgs = {
  searchString?: Maybe<Scalars['String']>
};


export type QueryPostArgs = {
  id?: Maybe<Scalars['ID']>
};

export type User = {
   __typename?: 'User',
  email: Scalars['String'],
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  posts: Array<Post>,
};

export type HomeFeedQueryVariables = {};


export type HomeFeedQuery = (
  { __typename?: 'Query' }
  & { feed: Array<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'content'>
    & { author: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'name'>
    )> }
  )> }
);

export type BasicUserInfoQueryVariables = {};


export type BasicUserInfoQuery = (
  { __typename?: 'Query' }
  & { me: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'name'>
  )> }
);

export type LoginMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'name'>
    ) }
  ) }
);


export const HomeFeedDocument = gql`
    query homeFeed {
  feed {
    id
    title
    content
    author {
      name
    }
  }
}
    `;

/**
 * __useHomeFeedQuery__
 *
 * To run a query within a React component, call `useHomeFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeFeedQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomeFeedQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HomeFeedQuery, HomeFeedQueryVariables>) {
        return ApolloReactHooks.useQuery<HomeFeedQuery, HomeFeedQueryVariables>(HomeFeedDocument, baseOptions);
      }
export function useHomeFeedLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HomeFeedQuery, HomeFeedQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<HomeFeedQuery, HomeFeedQueryVariables>(HomeFeedDocument, baseOptions);
        }
export type HomeFeedQueryHookResult = ReturnType<typeof useHomeFeedQuery>;
export type HomeFeedLazyQueryHookResult = ReturnType<typeof useHomeFeedLazyQuery>;
export type HomeFeedQueryResult = ApolloReactCommon.QueryResult<HomeFeedQuery, HomeFeedQueryVariables>;
export const BasicUserInfoDocument = gql`
    query basicUserInfo {
  me {
    name
  }
}
    `;

/**
 * __useBasicUserInfoQuery__
 *
 * To run a query within a React component, call `useBasicUserInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useBasicUserInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBasicUserInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useBasicUserInfoQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<BasicUserInfoQuery, BasicUserInfoQueryVariables>) {
        return ApolloReactHooks.useQuery<BasicUserInfoQuery, BasicUserInfoQueryVariables>(BasicUserInfoDocument, baseOptions);
      }
export function useBasicUserInfoLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BasicUserInfoQuery, BasicUserInfoQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<BasicUserInfoQuery, BasicUserInfoQueryVariables>(BasicUserInfoDocument, baseOptions);
        }
export type BasicUserInfoQueryHookResult = ReturnType<typeof useBasicUserInfoQuery>;
export type BasicUserInfoLazyQueryHookResult = ReturnType<typeof useBasicUserInfoLazyQuery>;
export type BasicUserInfoQueryResult = ApolloReactCommon.QueryResult<BasicUserInfoQuery, BasicUserInfoQueryVariables>;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      name
    }
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;