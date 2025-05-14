'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MicrophoneIcon, PlayIcon, StopIcon } from '@heroicons/react/24/solid'
import toast from 'react-hot-toast'

export default function Home() {
  const [topic, setTopic] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleGenerate = async () => {
    if (!topic.trim()) {
      toast.error('Please enter a topic')
      return
    }

    setIsGenerating(true)
    try {
      // TODO: Implement AI script generation and voice synthesis
      toast.success('Podcast generated successfully!')
    } catch (error) {
      toast.error('Failed to generate podcast')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-700">
            AI Podcast Generator
          </h1>
          <p className="text-xl text-gray-600">
            Transform your ideas into professional podcasts with AI
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <div className="mb-6">
            <label htmlFor="topic" className="block text-lg font-medium text-gray-700 mb-2">
              Enter your podcast topic
            </label>
            <textarea
              id="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g., The future of artificial intelligence in healthcare..."
              className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
            />
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className={`flex items-center px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-200 ${
                isGenerating
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-primary-500 to-primary-700 hover:from-primary-600 hover:to-primary-800'
              }`}
            >
              {isGenerating ? (
                <>
                  <MicrophoneIcon className="w-6 h-6 mr-2 animate-pulse" />
                  Generating...
                </>
              ) : (
                <>
                  <MicrophoneIcon className="w-6 h-6 mr-2" />
                  Generate Podcast
                </>
              )}
            </button>
          </div>
        </motion.div>

        {audioUrl && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-semibold mb-4">Your Generated Podcast</h2>
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-4 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors"
              >
                {isPlaying ? (
                  <StopIcon className="w-8 h-8" />
                ) : (
                  <PlayIcon className="w-8 h-8" />
                )}
              </button>
              <audio
                src={audioUrl}
                controls
                className="w-full"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
            </div>
          </motion.div>
        )}
      </div>
    </main>
  )
} 