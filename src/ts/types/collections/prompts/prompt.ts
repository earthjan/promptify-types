import { DocumentBase } from '../../shared-types/main';

export interface PromptReferences {
  authorId: string;
}

export interface Prompt extends DocumentBase, PromptReferences {
  title: string;
  description: string;
  tags: string[];
}
