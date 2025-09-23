import React, { useState } from 'react'
import Link from 'next/link'
import { LOGO_400_URL } from '@/shared/constants'

// Working placeholder URLs
const LOGO_URL = LOGO_400_URL
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
            className="w-20 h-20 mx-auto mb-6 rounded-lg"
          />

          <h1 className="text-5xl font-bold mb-8 text-gray-900">CodifyMate</h1>

          <div className="mb-10">
            <div className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 rounded-full px-6 py-2 mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                Smart Vibe Coding
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              For React Developers — Build Component by Component
            </p>
          </div>

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

      {/* Approach Explanation */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            The Smart Way to Build React Applications
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg border-l-4 border-red-400">
              <h3 className="font-semibold text-red-700 mb-2">
                ❌ Other AI Tools
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                "Build me a complete React e-commerce app"
              </p>
              <p className="text-xs text-gray-500">
                Get massive, hard-to-customize codebases with hundreds of
                components at once
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-green-400">
              <h3 className="font-semibold text-green-700 mb-2">
                ✅ CodifyMate Way
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                "Create LoginForm component" → "Build ProductCard" → "Add
                ShoppingCart component"
              </p>
              <p className="text-xs text-gray-500">
                Build React components step-by-step that fit your existing
                codebase and design system
              </p>
            </div>
          </div>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Perfect for React developers who want each component to integrate
            seamlessly with their existing project architecture and state
            management.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              How It Works
            </h2>
            <p className="text-gray-600">
              Three simple steps to better React components, one at a time
            </p>
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
                  Refine Your React Component Request
                </h3>
                <p className="text-gray-600 text-sm">
                  Transform vague ideas like "make a button component" into
                  precise prompts for production-ready React components with
                  proper props and state management
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
                <h3 className="text-xl font-semibold mb-2">
                  Select Relevant React Files
                </h3>
                <p className="text-gray-600 text-sm">
                  AI intelligently suggests only the React components, hooks,
                  context files, and stylesheets relevant to your current
                  component scope
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
                  Generate Clean React Components
                </h3>
                <p className="text-gray-600 text-sm">
                  Get clean, focused React code with proper hooks, state
                  management, TypeScript support, and modern React patterns
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
              Why React Developers Choose CodifyMate
            </h2>
            <p className="text-gray-600">
              Built specifically for React developers who build component by
              component
            </p>
          </div>

          <div className="space-y-16">
            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4">
                  React-Focused Component Prompting
                </h3>
                <p className="text-gray-600 mb-4">
                  Transform basic ideas into detailed prompts for React
                  components with proper props, hooks, and state management
                  patterns.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <p className="text-sm">
                    <span className="font-semibold">Before:</span> "Make a
                    signup form"
                    <br />
                    <span className="font-semibold">After:</span> "Create a
                    SignupForm component with validation hooks, error states,
                    and TypeScript props"
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
                  React-Aware File Detection
                </h3>
                <p className="text-gray-600 mb-4">
                  AI automatically suggests relevant React components, custom
                  hooks, context providers, and CSS modules to ensure seamless
                  integration.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-400">
                  <p className="text-sm">
                    <span className="font-semibold">Smart detection:</span>{' '}
                    React components, custom hooks, context files, CSS/SCSS
                    modules, TypeScript types
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
                  Production-Ready React Components
                </h3>
                <p className="text-gray-600 mb-4">
                  Generate clean, maintainable React components with modern
                  hooks, proper TypeScript types, accessibility features, and
                  responsive styling.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-400">
                  <p className="text-sm">
                    <span className="font-semibold">Includes:</span> React
                    hooks, TypeScript support, ARIA attributes, responsive CSS,
                    modern React patterns
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

      {/* Component Examples */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Build React Components Step-by-Step
            </h2>
            <p className="text-gray-600">
              From simple UI elements to complex interactive components
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Authentication Components</h3>
              <p className="text-sm text-gray-600">
                LoginForm, SignupForm, ProtectedRoute
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Navigation Components</h3>
              <p className="text-sm text-gray-600">
                Navbar, Sidebar, BreadCrumbs
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Data Display</h3>
              <p className="text-sm text-gray-600">
                DataTable, ProductCard, UserProfile
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Interactive Elements</h3>
              <p className="text-sm text-gray-600">
                SearchBar, Pagination, Modal
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Form Components</h3>
              <p className="text-sm text-gray-600">
                ContactForm, FileUpload, FormValidation
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Layout Components</h3>
              <p className="text-sm text-gray-600">
                Dashboard, Grid, CardLayout
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Ready to Build React Components the Smart Way?
          </h2>
          <p className="text-gray-300 mb-8">
            Join React developers who build component by component with
            CodifyMate—keeping complete control while leveraging AI assistance.
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
