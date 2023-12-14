/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProjectImage = /* GraphQL */ `
  mutation CreateProjectImage(
    $input: CreateProjectImageInput!
    $condition: ModelProjectImageConditionInput
  ) {
    createProjectImage(input: $input, condition: $condition) {
      id
      url
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateProjectImage = /* GraphQL */ `
  mutation UpdateProjectImage(
    $input: UpdateProjectImageInput!
    $condition: ModelProjectImageConditionInput
  ) {
    updateProjectImage(input: $input, condition: $condition) {
      id
      url
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteProjectImage = /* GraphQL */ `
  mutation DeleteProjectImage(
    $input: DeleteProjectImageInput!
    $condition: ModelProjectImageConditionInput
  ) {
    deleteProjectImage(input: $input, condition: $condition) {
      id
      url
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
