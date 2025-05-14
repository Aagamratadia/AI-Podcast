import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
  try {
    const { topic } = await req.json()

    // Generate podcast script using OpenAI
    const scriptResponse = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        {
          role: "system",
          content: "You are a professional podcast script writer. Create an engaging and informative podcast script based on the given topic. Include an introduction, main content, and conclusion. Make it conversational and natural."
        },
        {
          role: "user",
          content: `Create a podcast script about: ${topic}`
        }
      ],
      temperature: 0.7,
      max_tokens: 1000,
    })

    const script = scriptResponse.choices[0].message.content

    // TODO: Implement voice synthesis using ElevenLabs or Deepgram
    // For now, we'll return the script
    return NextResponse.json({ script })
  } catch (error) {
    console.error('Error generating podcast:', error)
    return NextResponse.json(
      { error: 'Failed to generate podcast' },
      { status: 500 }
    )
  }
} 