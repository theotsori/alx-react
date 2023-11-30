// schema/notifications.js

import { schema } from 'normalizr';

// Define the notification schema
export const notificationSchema = new schema.Entity('notifications');

// Create a function to normalize notifications data
export const notificationsNormalizer = data => normalize(data, [notificationSchema]);

