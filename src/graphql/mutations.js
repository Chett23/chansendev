/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createText = /* GraphQL */ `
  mutation CreateText(
    $input: CreateTextInput!
    $condition: ModelTextConditionInput
  ) {
    createText(input: $input, condition: $condition) {
      id
      description
      text
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateText = /* GraphQL */ `
  mutation UpdateText(
    $input: UpdateTextInput!
    $condition: ModelTextConditionInput
  ) {
    updateText(input: $input, condition: $condition) {
      id
      description
      text
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteText = /* GraphQL */ `
  mutation DeleteText(
    $input: DeleteTextInput!
    $condition: ModelTextConditionInput
  ) {
    deleteText(input: $input, condition: $condition) {
      id
      description
      text
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createExperience = /* GraphQL */ `
  mutation CreateExperience(
    $input: CreateExperienceInput!
    $condition: ModelExperienceConditionInput
  ) {
    createExperience(input: $input, condition: $condition) {
      id
      timeFrame
      title
      description
      tags
      subTitles
      url
      company
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateExperience = /* GraphQL */ `
  mutation UpdateExperience(
    $input: UpdateExperienceInput!
    $condition: ModelExperienceConditionInput
  ) {
    updateExperience(input: $input, condition: $condition) {
      id
      timeFrame
      title
      description
      tags
      subTitles
      url
      company
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteExperience = /* GraphQL */ `
  mutation DeleteExperience(
    $input: DeleteExperienceInput!
    $condition: ModelExperienceConditionInput
  ) {
    deleteExperience(input: $input, condition: $condition) {
      id
      timeFrame
      title
      description
      tags
      subTitles
      url
      company
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      projectProjectImageId
      __typename
    }
  }
`;
