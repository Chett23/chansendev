// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Text, Experience, ProjectImage, Project } = initSchema(schema);

export {
  Text,
  Experience,
  ProjectImage,
  Project
};