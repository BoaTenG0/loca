/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const nextConfig = {
  transpilePackages: ['mui-one-time-password-input'],
}

export default withNextIntl(nextConfig)
