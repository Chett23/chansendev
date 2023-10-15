import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

type ProjectImageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type testMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerProjectImage = {
  readonly id: string;
  readonly url?: string | null;
  readonly name?: string | null;
  readonly projectID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProjectImage = {
  readonly id: string;
  readonly url?: string | null;
  readonly name?: string | null;
  readonly projectID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProjectImage = LazyLoading extends LazyLoadingDisabled ? EagerProjectImage : LazyProjectImage

export declare const ProjectImage: (new (init: ModelInit<ProjectImage, ProjectImageMetaData>) => ProjectImage) & {
  copyOf(source: ProjectImage, mutator: (draft: MutableModel<ProjectImage, ProjectImageMetaData>) => MutableModel<ProjectImage, ProjectImageMetaData> | void): ProjectImage;
}

type EagerProject = {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly stack?: string | null;
  readonly ProjectImages?: (ProjectImage | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProject = {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly stack?: string | null;
  readonly ProjectImages: AsyncCollection<ProjectImage>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Project = LazyLoading extends LazyLoadingDisabled ? EagerProject : LazyProject

export declare const Project: (new (init: ModelInit<Project, ProjectMetaData>) => Project) & {
  copyOf(source: Project, mutator: (draft: MutableModel<Project, ProjectMetaData>) => MutableModel<Project, ProjectMetaData> | void): Project;
}

type Eagertest = {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly stack?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type Lazytest = {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly stack?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type test = LazyLoading extends LazyLoadingDisabled ? Eagertest : Lazytest

export declare const test: (new (init: ModelInit<test, testMetaData>) => test) & {
  copyOf(source: test, mutator: (draft: MutableModel<test, testMetaData>) => MutableModel<test, testMetaData> | void): test;
}