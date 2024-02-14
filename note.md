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