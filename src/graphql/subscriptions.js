/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      first_name
      last_name
      email
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      first_name
      last_name
      email
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      first_name
      last_name
      email
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
    onCreateEvent(filter: $filter) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
    onUpdateEvent(filter: $filter) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
    onDeleteEvent(filter: $filter) {
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
export const onCreateGift = /* GraphQL */ `
  subscription OnCreateGift($filter: ModelSubscriptionGiftFilterInput) {
    onCreateGift(filter: $filter) {
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
export const onUpdateGift = /* GraphQL */ `
  subscription OnUpdateGift($filter: ModelSubscriptionGiftFilterInput) {
    onUpdateGift(filter: $filter) {
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
export const onDeleteGift = /* GraphQL */ `
  subscription OnDeleteGift($filter: ModelSubscriptionGiftFilterInput) {
    onDeleteGift(filter: $filter) {
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
