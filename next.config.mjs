/** @type {import('next').NextConfig} */
const nextConfig = {

    async headers(){
        return [
            {source:'/', headers:[{key:'x-index', value: 'index page'}]}
        ]
    }

};

export default nextConfig;
