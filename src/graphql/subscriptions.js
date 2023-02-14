/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag($filter: ModelSubscriptionTagFilterInput) {
    onCreateTag(filter: $filter) {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag($filter: ModelSubscriptionTagFilterInput) {
    onUpdateTag(filter: $filter) {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag($filter: ModelSubscriptionTagFilterInput) {
    onDeleteTag(filter: $filter) {
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
export const onCreatePostTags = /* GraphQL */ `
  subscription OnCreatePostTags($filter: ModelSubscriptionPostTagsFilterInput) {
    onCreatePostTags(filter: $filter) {
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
export const onUpdatePostTags = /* GraphQL */ `
  subscription OnUpdatePostTags($filter: ModelSubscriptionPostTagsFilterInput) {
    onUpdatePostTags(filter: $filter) {
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
export const onDeletePostTags = /* GraphQL */ `
  subscription OnDeletePostTags($filter: ModelSubscriptionPostTagsFilterInput) {
    onDeletePostTags(filter: $filter) {
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
