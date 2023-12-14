/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getText = /* GraphQL */ `
  query GetText($id: ID!) {
    getText(id: $id) {
      id
      description
      text
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTexts = /* GraphQL */ `
  query ListTexts(
    $filter: ModelTextFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTexts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        text
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getExperience = /* GraphQL */ `
  query GetExperience($id: ID!) {
    getExperience(id: $id) {
      id
      timeFrame
      title
      description
      tags
      subTitles
      company
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listExperiences = /* GraphQL */ `
  query ListExperiences(
    $filter: ModelExperienceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExperiences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        timeFrame
        title
        description
        tags
	url
        priority
        subTitles
        company
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProjectImage = /* GraphQL */ `
  query GetProjectImage($id: ID!) {
    getProjectImage(id: $id) {
      id
      url
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProjectImages = /* GraphQL */ `
  query ListProjectImages(
    $filter: ModelProjectImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        url
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
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
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        stack
        priority
        url
        createdAt
        updatedAt
        projectProjectImageId
        ProjectImage {
          id
          url
          name
          createdAt
          updatedAt
          __typename
        }
        __typename
      }
      nextToken
      __typename
    }
  }
`;
