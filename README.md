# ZeroOpsAI - AI Agents as a Service

A modern website for ZeroOpsAI, an AI agency offering modular AI agents and service bundles for B2B businesses. Built with Next.js and Tailwind CSS.

## Features

- Modern, responsive design
- Lead generation focused
- SEO optimized
- Fast page loads
- Mobile-first approach
- **Telegram integration for contact form notifications**

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

3. Set up Telegram Bot (for contact form notifications):

   ### Step 1: Create Your Telegram Bot

   1. Open Telegram and search for `@BotFather`
   2. Send `/start`, then `/newbot`
   3. Follow prompts to create a bot and get your **bot token**
   4. Save the bot token (format: `123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11`)

   ### Step 2: Get Your Chat ID

   1. Start a chat with your bot (send "Hi")
   2. Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
   3. Find your `chat_id` in the response (e.g., `123456789`)
   4. Save this `chat_id`

   ### Step 3: Configure Environment Variables

   Create a `.env.local` file in the root directory:

   ```env
   TELEGRAM_BOT_TOKEN=your_bot_token_here
   TELEGRAM_CHAT_ID=your_chat_id_here
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── agents/            # AI agents page
│   ├── solutions/         # Solution bundles page
│   ├── use-cases/         # Use cases page
│   ├── industries/        # Industry solutions page
│   ├── contact/           # Contact/demo request page
│   ├── api/               # API routes
│   │   └── contact/       # Contact form API with Telegram integration
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
3. Add environment variables in Vercel dashboard:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
4. Deploy

### Option 2: Coolify

To deploy on Coolify:

1. Create a new service in Coolify
2. Select "Application" as the service type
3. Connect your GitHub repository
4. Configure the following settings:
   - Build Command: `npm run build`
   - Start Command: `npm start`
   - Node.js version: 18 (or higher)
   - Environment Variables:
     ```
     NODE_ENV=production
     TELEGRAM_BOT_TOKEN=your_bot_token_here
     TELEGRAM_CHAT_ID=your_chat_id_here
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

Secret SaaS OÜ - [param@learnwithparam.com](mailto:param@learnwithparam.com)

Project Link: [https://github.com/yourusername/zero-ops-ai](https://github.com/Param-Harrison/zero-ops-ai)
