// This file will automatically generated if you use the Supabase CLI in your dev environment. 

// The below types is an example of following SQL table:
// create table public.tasks (
//     id bigint generated always as identity primary key,
//     name text not null,
//     user_id text not null default requesting_user_id()
//   );

export interface Database {
    public: {
      Tables: {
        tasks: {
          Row: {
            // the data expected from .select()
            id: number
            name: string
            user_id: string
          }
          Insert: {
            // the data to be passed to .insert()
            id?: never // generated columns must not be supplied
            name: string // `not null` columns with no default must be supplied
            user_id?: never // `not null` columns with a default are optional  
          }
        }
      }
    }
  }