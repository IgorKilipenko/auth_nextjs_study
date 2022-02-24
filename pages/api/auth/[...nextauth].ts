/* eslint-disable @typescript-eslint/require-await */
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import GithubProvider from 'next-auth/providers/github'
import TwitterProvider from 'next-auth/providers/twitter'
import Auth0Provider from 'next-auth/providers/auth0'
// import AppleProvider from "next-auth/providers/apple"
import EmailProvider from 'next-auth/providers/email'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default NextAuth({
    // https://next-auth.js.org/configuration/providers/oauth
    adapter: PrismaAdapter(prisma),
    providers: [
        /* 
    // Temporarily removing the Apple provider from the demo site as the
    // callback URL for it needs updating due to Vercel changing domains
      
    Providers.Apple({
      clientId: process.env.APPLE_ID,
      clientSecret: {
        appleId: process.env.APPLE_ID,
        teamId: process.env.APPLE_TEAM_ID,
        privateKey: process.env.APPLE_PRIVATE_KEY,
        keyId: process.env.APPLE_KEY_ID,
      },
    }),
    */

        EmailProvider({
            server: {
                host: process.env.EMAIL_SMTP_HOST,
                port: process.env.EMAIL_SMTP_PORT,
                secure: process.env.EMAIL_SMTP_SECURE,
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD,
                },
            },
            from: process.env.EMAIL_FROM,
        }),

        FacebookProvider({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        TwitterProvider({
            clientId: process.env.TWITTER_ID,
            clientSecret: process.env.TWITTER_SECRET,
        }),
        Auth0Provider({
            clientId: process.env.AUTH0_ID,
            clientSecret: process.env.AUTH0_SECRET,
            issuer: process.env.AUTH0_ISSUER,
        }),
    ],
    theme: {
        colorScheme: 'light',
    },
    secret: process.env.SECRET,
    pages: {
        signIn: '/login', // Displays signin buttons
        // signOut: '/auth/signout', // Displays form with sign out button
        // error: '/auth/error', // Error code passed in query string as ?error=
        // verifyRequest: '/auth/verify-request', // Used for check email page
        // newUser: null // If set, new users will be directed here on first sign in
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            console.debug('SIGN IN', {
                user,
                account,
                profile,
                email,
                credentials,
            })
            return true
        },
        // async redirect({ url, baseUrl }) { return baseUrl },
        async session({ session, token, user }) {
            console.debug('SESSION CALLED', { session, token, user })
            return session
        },
        // async jwt({ token, user, account, profile, isNewUser }) { return token }
        async jwt({ token, user, account, profile, isNewUser }) {
            console.debug('JWT CALLED', {
                token,
                user,
                account,
                profile,
                isNewUser,
            })
            token.userRole = 'admin'
            return token
        },
    },
    events: {
        async signIn(message) {
            console.debug('on successful sign in', message)
        },
        async signOut(message) {
            console.debug(' on signout', message)
        },
        async createUser(message) {
            console.debug('user created', message)
        },
        async updateUser(message) {
            console.debug(
                'user updated - e.g. their email was verified',
                message
            )
        },
        async linkAccount(message) {
            console.debug('account (e.g. Twitter) linked to a user', message)
        },
        async session(message) {
            console.debug('session is active', message)
        },
        //async error(message) { /* error in authentication flow */ }
    },
    debug: true,
})
