/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: hubs
 * Interface for Hubs
 */
export interface Hubs {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  name?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  image?: string;
  /** @wixFieldType text */
  slug?: string;
  /** @wixFieldType number */
  displayOrder?: number;
  /** @wixFieldType boolean */
  isActive?: boolean;
}


/**
 * Collection ID: lecons
 * Interface for Leons
 */
export interface Leons {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  relatedLinks?: string;
  /** @wixFieldType text */
  relatedLessons?: string;
  /** @wixFieldType text */
  lessonTitle?: string;
  /** @wixFieldType text */
  hub?: string;
  /** @wixFieldType text */
  shortDescription?: string;
  /** @wixFieldType text */
  lessonContent?: string;
  /** @wixFieldType text */
  difficultyLevel?: string;
  /** @wixFieldType number */
  estimatedDurationMinutes?: number;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  lessonCoverImage?: string;
  /** @wixFieldType url */
  videoLink?: string;
}


/**
 * Collection ID: podcasts
 * Interface for Podcasts
 */
export interface Podcasts {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  hub?: string;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType url */
  audioLink?: string;
  /** @wixFieldType number */
  episodeNumber?: number;
  /** @wixFieldType date */
  releaseDate?: Date | string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  thumbnail?: string;
}


/**
 * Collection ID: songs
 * Interface for Songs
 */
export interface Songs {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  hub?: string;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  artist?: string;
  /** @wixFieldType url */
  videoUrl?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  thumbnail?: string;
  /** @wixFieldType number */
  duration?: number;
  /** @wixFieldType number */
  releaseYear?: number;
}
