import { Mail } from 'lucide-react'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              About CodifyMate
            </h1>
            <p className="text-xl text-gray-600">
              The story behind your AI code assistant
            </p>
          </div>

          {/* Story Content */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">
                Why I Built CodifyMate
              </h2>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  As a full-stack developer, I was constantly frustrated with
                  writing prompts for AI coding assistants. I'd spend more time
                  crafting the perfect prompt than actually reviewing the
                  generated code.
                </p>

                <p>
                  The breakthrough came when I realized that great code
                  generation isn't just about the AI model—it's about
                  <strong> three key factors</strong>: clear prompts, relevant
                  context, and iterative refinement.
                </p>

                <p>
                  That's when I built CodifyMate. This desktop app automates the
                  entire workflow:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    AI helps refine your initial prompts for maximum clarity
                  </li>
                  <li>
                    Smart suggestions identify which project files to include
                  </li>
                  <li>
                    Continuous refinement until the code meets your standards
                  </li>
                </ul>

                <p>
                  The result? I now generate production-ready code 3x faster,
                  with fewer iterations and better consistency. It completely
                  transformed my development workflow.
                </p>

                <p>
                  Now I'm sharing CodifyMate with fellow developers who want to
                  level up their AI-assisted coding. Let's build better software
                  together!
                </p>
              </div>
            </div>
          </div>

          {/* Features Highlight */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-semibold mb-2">Smart Prompts</h3>
              <p className="text-sm text-gray-600">
                AI-powered prompt refinement for clearer communication
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold mb-2">Context Aware</h3>
              <p className="text-sm text-gray-600">
                Intelligent file suggestions based on your project
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="font-semibold mb-2">Iterative</h3>
              <p className="text-sm text-gray-600">
                Continuous refinement until code is perfect
              </p>
            </div>
          </div>

          {/* Current Status */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-12">
            <h3 className="font-semibold mb-3 text-yellow-800">
              🚀 Current Status
            </h3>
            <div className="space-y-2 text-sm text-yellow-700">
              <p>
                • <strong>Beta Phase:</strong> macOS version available now
              </p>
              <p>
                • <strong>Invite Only:</strong> Contact me for beta access
              </p>
              <p>
                • <strong>Coming Soon:</strong> Windows and Linux versions
              </p>
              <p>
                • <strong>Free:</strong> No cost during beta period
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-3 text-gray-900">
              Get in Touch
            </h2>

            <p className="text-gray-600 mb-6">
              Have questions about CodifyMate? Need a beta invite? Want to share
              feedback?
            </p>

            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Mail className="w-4 h-4 text-gray-600" />
                <a
                  href="mailto:cj@codifymate.com?subject=CodifyMate Beta Access"
                  className="font-medium text-gray-900 hover:text-blue-600 transition-colors"
                >
                  cj@codifymate.com
                </a>
              </div>
              <p className="text-xs text-gray-500">
                Click to send me an email about CodifyMate
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AboutPage
