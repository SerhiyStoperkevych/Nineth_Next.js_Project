// Define your custom user type
interface CustomUser {
    id: string; // Ensure this type matches what NextAuth expects
    name: string;
    email: string;
  }
  
  // Update your `authorize` function to return this type
  import NextAuth from "next-auth";
  import CredentialsProvider from "next-auth/providers/credentials";
  import { NextAuthOptions } from "next-auth";
  
  export const authOptions: NextAuthOptions = {
    providers: [
      CredentialsProvider({
        credentials: {
          username: { label: "Username", type: "text" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
          // Implement your custom authentication logic here
          // Example user object; adjust `id` to be a string if necessary
          const user: CustomUser = { id: "1", name: "John Doe", email: "john.doe@example.com" };
  
          // Example of checking credentials (replace with your own logic)
          if (credentials?.username === "john.doe" && credentials?.password === "password123") {
            return user;
          } else {
            return null;
          }
        },
      }),
    ],
    // Optional: Add additional options like callbacks or custom pages if needed
  };
  
  const handler = NextAuth(authOptions);
  
  export { handler as GET, handler as POST };
  