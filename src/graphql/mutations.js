/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      first_name
      last_name
      email
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
      first_name
      last_name
      email
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
      first_name
      last_name
      email
      createdAt
      updatedAt
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      title
      description
      image
      gifts {
        items {
          id
          title
          description
          image
          event_id
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      title
      description
      image
      gifts {
        items {
          id
          title
          description
          image
          event_id
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      title
      description
      image
      gifts {
        items {
          id
          title
          description
          image
          event_id
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
export const createGift = /* GraphQL */ `
  mutation CreateGift(
    $input: CreateGiftInput!
    $condition: ModelGiftConditionInput
  ) {
    createGift(input: $input, condition: $condition) {
      id
      title
      description
      image
      event_id
      event {
        id
        title
        description
        image
        gifts {
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
export const updateGift = /* GraphQL */ `
  mutation UpdateGift(
    $input: UpdateGiftInput!
    $condition: ModelGiftConditionInput
  ) {
    updateGift(input: $input, condition: $condition) {
      id
      title
      description
      image
      event_id
      event {
        id
        title
        description
        image
        gifts {
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
export const deleteGift = /* GraphQL */ `
  mutation DeleteGift(
    $input: DeleteGiftInput!
    $condition: ModelGiftConditionInput
  ) {
    deleteGift(input: $input, condition: $condition) {
      id
      title
      description
      image
      event_id
      event {
        id
        title
        description
        image
        gifts {
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
