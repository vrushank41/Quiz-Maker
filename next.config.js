/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
      },
    images: {
        domains: ['tmdb.org', 'themoviedb.org','avatars.githubusercontent.com'],
      },
}

module.exports = nextConfig
