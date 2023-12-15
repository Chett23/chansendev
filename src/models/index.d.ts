import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";

type TextMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ExperienceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjectImageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerText = {
  readonly id: string;
  readonly description?: string | null;
  readonly text?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyText = {
  readonly id: string;
  readonly description?: string | null;
  readonly text?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Text = LazyLoading extends LazyLoadingDisabled ? EagerText : LazyText

export declare const Text: (new (init: ModelInit<Text, TextMetaData>) => Text) & {
  copyOf(source: Text, mutator: (draft: MutableModel<Text, TextMetaData>) => MutableModel<Text, TextMetaData> | void): Text;
}

type EagerExperience = {
  readonly id: string;
  readonly timeFrame?: string | null;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly tags?: (string | null)[] | null;
  readonly subTitles?: (string | null)[] | null;
  readonly url?: string | null;
  readonly company?: string | null;
  readonly priority?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyExperience = {
  readonly id: string;
  readonly timeFrame?: string | null;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly tags?: (string | null)[] | null;
  readonly subTitles?: (string | null)[] | null;
  readonly url?: string | null;
  readonly company?: string | null;
  readonly priority?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Experience = LazyLoading extends LazyLoadingDisabled ? EagerExperience : LazyExperience

export declare const Experience: (new (init: ModelInit<Experience, ExperienceMetaData>) => Experience) & {
  copyOf(source: Experience, mutator: (draft: MutableModel<Experience, ExperienceMetaData>) => MutableModel<Experience, ExperienceMetaData> | void): Experience;
}

type EagerProjectImage = {
  readonly id: string;
  readonly url?: string | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProjectImage = {
  readonly id: string;
  readonly url?: string | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProjectImage = LazyLoading extends LazyLoadingDisabled ? EagerProjectImage : LazyProjectImage

export declare const ProjectImage: (new (init: ModelInit<ProjectImage, ProjectImageMetaData>) => ProjectImage) & {
  copyOf(source: ProjectImage, mutator: (draft: MutableModel<ProjectImage, ProjectImageMetaData>) => MutableModel<ProjectImage, ProjectImageMetaData> | void): ProjectImage;
}

type EagerProject = {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly stack?: string | null;
  readonly priority?: string | null;
  readonly url?: string | null;
  readonly ProjectImage?: ProjectImage | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly projectProjectImageId?: string | null;
}

type LazyProject = {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly stack?: string | null;
  readonly priority?: string | null;
  readonly url?: string | null;
  readonly ProjectImage: AsyncItem<ProjectImage | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly projectProjectImageId?: string | null;
}

export declare type Project = LazyLoading extends LazyLoadingDisabled ? EagerProject : LazyProject

export declare const Project: (new (init: ModelInit<Project, ProjectMetaData>) => Project) & {
  copyOf(source: Project, mutator: (draft: MutableModel<Project, ProjectMetaData>) => MutableModel<Project, ProjectMetaData> | void): Project;
}