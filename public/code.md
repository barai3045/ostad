## base path
for changing base path
#### root directory
`const nextConfig = {
    basePath:"/"
};
` 
#### for changing root directory
`const nextConfig = {
basePath:"/subfolder"
};
` 
## Environment variable
secret credential dont keeping in application source file
we can put EV in configuration file or .env file

#### in configuration file
`env: {
API_KEY:"XYZ-123-ABC"
}`

#### in page 
`
const Page = async () => { 
    return (
        <div>
           <h1>Home page</h1>
            {process.env.API_KEY}
        </div>
    );
};
`