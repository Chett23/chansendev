/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProjectImage = /* GraphQL */ `
  subscription OnCreateProjectImage(
    $filter: ModelSubscriptionProjectImageFilterInput
  ) {
    onCreateProjectImage(filter: $filter) {
      id
      url
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateProjectImage = /* GraphQL */ `
  subscription OnUpdateProjectImage(
    $filter: ModelSubscriptionProjectImageFilterInput
  ) {
    onUpdateProjectImage(filter: $filter) {
      id
      url
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteProjectImage = /* GraphQL */ `
  subscription OnDeleteProjectImage(
    $filter: ModelSubscriptionProjectImageFilterInput
  ) {
    onDeleteProjectImage(filter: $filter) {
      id
      url
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
    onCreateProject(filter: $filter) {
      id
      name
      description
      stack
      priority
      url
      ProjectImage {
        id
        url
        name
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      projectProjectImageId
      __typename
    }
  }
`;
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
    onUpdateProject(filter: $filter) {
      id
      name
      description
      stack
      priority
      url
      ProjectImage {
        id
        url
        name
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      projectProjectImageId
      __typename
    }
  }
`;
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
    onDeleteProject(filter: $filter) {
      id
      name
      description
      stack
      priority
      url
      ProjectImage {
        id
        url
        name
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      projectProjectImageId
      __typename
    }
  }
`;
