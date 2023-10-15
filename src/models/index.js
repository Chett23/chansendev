// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ProjectImage, Project, test } = initSchema(schema);

export {
  ProjectImage,
  Project,
  test
};