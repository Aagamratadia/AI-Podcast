# AI Podcast Generator

A modern web application that generates professional podcasts using AI. Enter a topic, and the application will create an engaging podcast script and convert it to audio using AI voice synthesis.

## Features

- Beautiful, modern UI with smooth animations
- AI-powered script generation using OpenAI GPT-4
- Voice synthesis using ElevenLabs/Deepgram (coming soon)
- Real-time audio playback
- Responsive design

## Prerequisites

- Node.js 18+ and npm
- OpenAI API key
- ElevenLabs/Deepgram API key (for voice synthesis)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-podcast-generator
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your API keys:
```
OPENAI_API_KEY=your_openai_api_key
ELEVENLABS_API_KEY=your_elevenlabs_api_key  # Optional
DEEPGRAM_API_KEY=your_deepgram_api_key      # Optional
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Enter a topic or idea for your podcast
2. Click "Generate Podcast"
3. Wait for the AI to generate the script and audio
4. Play the generated podcast using the audio player

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- OpenAI API
- ElevenLabs/Deepgram API (coming soon)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 