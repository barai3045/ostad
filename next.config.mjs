/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers(){
        return [
            {source:"/:path*", headers:[{key:'app-auth-key', value:'123XYZ'}]}
        ]
    }
};

export default nextConfig;
