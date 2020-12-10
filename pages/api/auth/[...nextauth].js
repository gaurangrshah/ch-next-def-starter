/**
 * https://github.com/hexrcs/prisma-next-auth
 * https://www.youtube.com/watch?v=GPBD3acOx_M
*/

import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import Adapters from 'next-auth/adapters';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    Providers.Email({
      server: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD
        }
      },
      from: process.env.SMTP_FROM // The "from" address that you want to use
    })
  ],

  // A database is optional, but required to persist accounts in a database
  // ❌ database: process.env.DATABASE_URL

  // since our setup includes prisma as an adapter this is how it gets defined:
  adapter: Adapters.Prisma.Adapter({
    prisma
  }),
  secret: process.env.SECRET
};

export default (req, res) => NextAuth(req, res, options);
