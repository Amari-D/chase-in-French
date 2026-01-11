/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: hubs
 * Interface for HubsThmatiques
 */
export interface HubsThmatiques {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  name?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType text */
  summary?: string;
  /** @wixFieldType text */
  slug?: string;
  /** @wixFieldType number */
  displayOrder?: number;
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
  title?: string;
  /** @wixFieldType text */
  content?: string;
  /** @wixFieldType text */
  hubName?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType text */
  slug?: string;
  /** @wixFieldType text */
  topic?: string;
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
  title?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType url */
  audioUrl?: string;
  /** @wixFieldType number */
  duration?: number;
  /** @wixFieldType date */
  releaseDate?: Date;
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
  title?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType url */
  videoUrl?: string;
  /** @wixFieldType number */
  duration?: number;
  /** @wixFieldType text */
  artist?: string;
  /** @wixFieldType image */
  thumbnail?: {
    url?: string;
    height?: number;
    width?: number;
  };
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
  title?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType url */
  audioUrl?: string;
  /** @wixFieldType number */
  duration?: number;
  /** @wixFieldType date */
  releaseDate?: Date | string;
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
  title?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType url */
  videoUrl?: string;
  /** @wixFieldType number */
  duration?: number;
  /** @wixFieldType text */
  artist?: string;
  /** @wixFieldType image */
  thumbnail?: string;
}
