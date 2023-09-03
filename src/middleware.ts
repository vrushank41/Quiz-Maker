// This one line prevents the app to directly get to /api/auth/signin if the session is not authenticated
export {default} from "next-auth/middleware"

// Applies next-auth only to matching routes - can be regex
// Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = { matcher: ["/", "/client"] }

