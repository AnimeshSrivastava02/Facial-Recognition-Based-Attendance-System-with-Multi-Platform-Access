import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

// Correct connection string for Neon
const sql = neon('postgresql://teacher:mE1SoYy8tZvH@ep-gentle-frog-a597xz92.us-east-2.aws.neon.tech/student%20attendance?sslmode=require');
const db = drizzle(sql, { schema });

export { db };
        