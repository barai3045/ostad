parent component should be server component

reactive component should be client component i.e element that has user reactivity that should be client component

parent component should not be client component, then we should not get server rendering benefit

# CSR -> react:
client download all of the javascript code and assets
entre application is rendered on client site

# CSR -> nextjs
pre render on server and hydrated on the client
1. Rendere the react application on the server before sent to cleint
2. client only has to download the initial HTML, CSS for the application
3. Hydration is the process of taking prerender html and attaching the event listener, state to it on the client side


# master layout
root layout work as master layout
# shared layout
individual directory work for its own directory/subdirecoty only

# Directory file Conventions
## layout.js 
a layout is UI that is shared between routes.
It can be used to render common components or functionality across multiple pages in your application
For example, you could used a layout to render a header and footer on every page in your application

## not-found.js
The not-found file is used to render UI when the notFound function is thrown a route segment
Along eith serving a custom UI, Nextjs will also return a 404 HTTP status code.
The root app/not-found.js file handles any unmatched URLs for your whole application.
not-found.js components do not accept any props.

## error.js
An error file defines an error UI boundary for a route segment
It is useful for catching unexpected errors that occur in Server Components and Client Components and displaying a fallback UI
error.js boundaries must be Client Components.
In Production builds, error forwareded from Server Components will be stripper of specific error details to avoid leaking sensitive information.

## loading.js
A loading file can create instant loading states build 
By default this file is a Server Component
Can also be used as a Client Component through the "use client" directive
Loading UI components don= not accept any parameters. 


chank file name extention change : chech busting  
