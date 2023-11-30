// schema/courses.js

import { schema } from 'normalizr';

// Define the course schema
export const courseSchema = new schema.Entity('courses');

// Create a function to normalize courses data
export const coursesNormalizer = data => normalize(data, [courseSchema]);

