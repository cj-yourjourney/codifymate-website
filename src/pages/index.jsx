import React, { useState } from 'react'
import Link from 'next/link'

// Working placeholder URLs
const LOGO_URL =
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&h=200&fit=crop&crop=center'
const STEP_1_IMG =
  'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=500&h=300&fit=crop'
const STEP_2_IMG =
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop'
const STEP_3_IMG =
  'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop'

const LandingPage = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setEmail('')
  }

  const handleDownload = () => {
    window.open(
      'https://github.com/cj-yourjourney/codifymate-desktop/releases/latest/download/CodifyMate-arm64.dmg',
      '_blank'
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <img
            src={LOGO_URL}
            alt="CodifyMate"
            className="w-16 h-16 mx-auto mb-6 rounded-lg"
          />

          <h1 className="text-5xl font-bold mb-4 text-gray-900">CodifyMate</h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            AI Code Assistant for Frontend Developers
          </p>

          <p className="text-gray-500 mb-12 max-w-xl mx-auto">
            Desktop app that helps you refine prompts, find relevant files, and
            generate better code with AI
          </p>

          <div className="space-x-4">
            <button
              onClick={handleDownload}
              className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Download Beta
            </button>
            <Link
              href="/about"
              className="border border-gray-300 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              How It Works
            </h2>
            <p className="text-gray-600">Three simple steps to better code</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
                <img
                  src={STEP_1_IMG}
                  alt="Prompt Refinement"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Refine Your Prompt
                </h3>
                <p className="text-gray-600 text-sm">
                  Get AI feedback to improve your prompt clarity and detail
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
                <img
                  src={STEP_2_IMG}
                  alt="File Suggestions"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Select Files</h3>
                <p className="text-gray-600 text-sm">
                  AI suggests relevant files to include for better context
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
                <img
                  src={STEP_3_IMG}
                  alt="Generate Code"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Generate & Refine
                </h3>
                <p className="text-gray-600 text-sm">
                  Get high-quality code and iterate until perfect
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Why Choose CodifyMate
            </h2>
          </div>

          <div className="space-y-16">
            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4">
                  Smart Prompt Enhancement
                </h3>
                <p className="text-gray-600 mb-4">
                  Transform vague ideas into clear, detailed prompts that
                  generate exactly the code you need.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <p className="text-sm">
                    <span className="font-semibold">Before:</span> "Make a
                    button"
                    <br />
                    <span className="font-semibold">After:</span> "Create a
                    React button with TypeScript, variants, and accessibility"
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <img
                  src={STEP_1_IMG}
                  alt="Prompt Enhancement"
                  className="w-full h-64 object-cover rounded-lg shadow-sm"
                />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4">
                  Context-Aware Suggestions
                </h3>
                <p className="text-gray-600 mb-4">
                  AI automatically suggests which project files to include for
                  better code generation.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-400">
                  <p className="text-sm">
                    <span className="font-semibold">Smart detection:</span>{' '}
                    Components, styles, types, and config files
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <img
                  src={STEP_2_IMG}
                  alt="File Suggestions"
                  className="w-full h-64 object-cover rounded-lg shadow-sm"
                />
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4">
                  Continuous Refinement
                </h3>
                <p className="text-gray-600 mb-4">
                  Iterate and improve your code through AI feedback until it
                  meets your standards.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-400">
                  <p className="text-sm">
                    <span className="font-semibold">Improvements:</span>{' '}
                    Performance, accessibility, and best practices
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <img
                  src={STEP_3_IMG}
                  alt="Code Refinement"
                  className="w-full h-64 object-cover rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-8">
            Join the beta and start generating better code today
          </p>

          <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
            <a
              href="https://github.com/cj-yourjourney/codifymate-desktop/releases/latest/download/CodifyMate-arm64.dmg"
              download
              className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors block text-center mb-4"
            >
              Download for macOS
            </a>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Updates
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center">
              🍎 macOS only • 🔑 Invite code required • Windows & Linux coming
              soon
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
