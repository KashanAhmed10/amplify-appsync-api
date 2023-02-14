/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      post {
        items {
          id
          title
          content
          createdAt
          updatedAt
          userPostId
        }
        nextToken
      }
      comment {
        items {
          id
          content
          createdAt
          updatedAt
          userCommentId
          postCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      post {
        items {
          id
          title
          content
          createdAt
          updatedAt
          userPostId
        }
        nextToken
      }
      comment {
        items {
          id
          content
          createdAt
          updatedAt
          userCommentId
          postCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      post {
        items {
          id
          title
          content
          createdAt
          updatedAt
          userPostId
        }
        nextToken
      }
      comment {
        items {
          id
          content
          createdAt
          updatedAt
          userCommentId
          postCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      title
      content
      tags {
        items {
          id
          postId
          tagId
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          userCommentId
          postCommentsId
        }
        nextToken
      }
      user {
        id
        name
        post {
          nextToken
        }
        comment {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userPostId
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      title
      content
      tags {
        items {
          id
          postId
          tagId
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          userCommentId
          postCommentsId
        }
        nextToken
      }
      user {
        id
        name
        post {
          nextToken
        }
        comment {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userPostId
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      title
      content
      tags {
        items {
          id
          postId
          tagId
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          userCommentId
          postCommentsId
        }
        nextToken
      }
      user {
        id
        name
        post {
          nextToken
        }
        comment {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userPostId
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      content
      post {
        id
        title
        content
        tags {
          nextToken
        }
        comments {
          nextToken
        }
        user {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userPostId
      }
      createdAt
      updatedAt
      userCommentId
      postCommentsId
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      content
      post {
        id
        title
        content
        tags {
          nextToken
        }
        comments {
          nextToken
        }
        user {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userPostId
      }
      createdAt
      updatedAt
      userCommentId
      postCommentsId
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      content
      post {
        id
        title
        content
        tags {
          nextToken
        }
        comments {
          nextToken
        }
        user {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userPostId
      }
      createdAt
      updatedAt
      userCommentId
      postCommentsId
    }
  }
`;
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      id
      label
      posts {
        items {
          id
          postId
          tagId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      id
      label
      posts {
        items {
          id
          postId
          tagId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      id
      label
      posts {
        items {
          id
          postId
          tagId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPostTags = /* GraphQL */ `
  mutation CreatePostTags(
    $input: CreatePostTagsInput!
    $condition: ModelPostTagsConditionInput
  ) {
    createPostTags(input: $input, condition: $condition) {
      id
      postId
      tagId
      post {
        id
        title
        content
        tags {
          nextToken
        }
        comments {
          nextToken
        }
        user {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userPostId
      }
      tag {
        id
        label
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePostTags = /* GraphQL */ `
  mutation UpdatePostTags(
    $input: UpdatePostTagsInput!
    $condition: ModelPostTagsConditionInput
  ) {
    updatePostTags(input: $input, condition: $condition) {
      id
      postId
      tagId
      post {
        id
        title
        content
        tags {
          nextToken
        }
        comments {
          nextToken
        }
        user {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userPostId
      }
      tag {
        id
        label
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePostTags = /* GraphQL */ `
  mutation DeletePostTags(
    $input: DeletePostTagsInput!
    $condition: ModelPostTagsConditionInput
  ) {
    deletePostTags(input: $input, condition: $condition) {
      id
      postId
      tagId
      post {
        id
        title
        content
        tags {
          nextToken
        }
        comments {
          nextToken
        }
        user {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userPostId
      }
      tag {
        id
        label
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
