# ZeroOpsAI - AI Agents as a Service

A modern website for ZeroOpsAI, an AI agency offering modular AI agents and service bundles for B2B businesses. Built with Next.js and Tailwind CSS.

## Features

- Modern, responsive design
- Lead generation focused
- SEO optimized
- Fast page loads
- Mobile-first approach

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Param-Harrison/zero-ops-ai.git
   cd zero-ops-ai
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── agents/            # AI agents page
│   ├── solutions/         # Solution bundles page
│   ├── use-cases/         # Use cases page
│   ├── industries/        # Industry solutions page
│   ├── contact/           # Contact/demo request page
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── ui/               # UI components
│   └── home/             # Homepage components
└── lib/                  # Utility functions
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Deployment

### Option 1: Vercel (Recommended)

The site is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy

### Option 2: Coolify

To deploy on Coolify:

1. Create a new service in Coolify
2. Select "Application" as the service type
3. Connect your GitHub repository
4. Configure the following settings:
   - Build Command: `npm run build`
   - Start Command: `npm start`
   - Node.js version: 18 (or higher)
   - Environment Variables (if needed):
     ```
     NODE_ENV=production
     ```
5. Deploy the service

Note: Make sure your Coolify instance has sufficient resources allocated for the build process.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Contact

Secret SaaS OÜ - [contact@zeroopsai.com](mailto:contact@zeroopsai.com)

Project Link: [https://github.com/yourusername/zero-ops-ai](https://github.com/Param-Harrison/zero-ops-ai)
