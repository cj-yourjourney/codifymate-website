import { Mail } from 'lucide-react'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Main Content */}
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">About CodifyMate</h1>
            <p className="text-xl text-base-content/70">
              The story behind your AI code assistant
            </p>
          </div>

          {/* Approach Section */}
          <div className="card bg-base-200 shadow-sm mb-12">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-6">
                Our Approach: Feature-by-Feature Development
              </h2>

              <div className="space-y-6">
                <p className="text-base-content/80">
                  There are two main paradigms in AI-assisted development.
                  CodifyMate deliberately chooses the approach that works best
                  for real-world applications:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="card bg-base-100 border">
                    <div className="card-body">
                      <div className="flex items-center mb-3">
                        <span className="text-lg mr-2">❌</span>
                        <h3 className="card-title">Full-App Generation</h3>
                      </div>
                      <ul className="text-sm space-y-2 text-base-content/70">
                        <li>• "Create an entire Airbnb clone"</li>
                        <li>• Fast but inflexible</li>
                        <li>• Good for demos, not production</li>
                        <li>• Hard to customize or maintain</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card bg-base-100 border-2 border-primary">
                    <div className="card-body">
                      <div className="flex items-center mb-3">
                        <span className="text-lg mr-2">✅</span>
                        <h3 className="card-title text-primary">
                          CodifyMate's Feature-by-Feature
                        </h3>
                      </div>
                      <ul className="text-sm space-y-2 text-base-content/70">
                        <li>• Build incrementally, feature-by-feature</li>
                        <li>• Full control and customization</li>
                        <li>• Perfect for production apps</li>
                        <li>• Easy to maintain and extend</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="card bg-base-100 border-l-4 border-l-primary">
                  <div className="card-body">
                    <p>
                      <span className="font-semibold">
                        Why feature-by-feature wins:
                      </span>{' '}
                      Real applications need careful architecture, specific
                      business logic, and ongoing maintenance. CodifyMate helps
                      you build thoughtfully, one feature at a time, just like
                      professional development teams do.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Story Content */}
          <div className="card bg-base-200 shadow-sm mb-12">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-6">
                Why I Built CodifyMate
              </h2>

              <div className="space-y-6">
                <p className="text-base-content/80">
                  As a full-stack developer, I was frustrated spending more time
                  crafting prompts than reviewing generated code. The
                  breakthrough came when I realized great code generation
                  requires
                  <strong> three key factors</strong>:
                </p>

                <div className="card bg-base-100 border">
                  <div className="card-body">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="avatar placeholder mb-3">
                          <div className="bg-base-200 rounded-full w-16">
                            <span className="text-2xl">✨</span>
                          </div>
                        </div>
                        <h3 className="font-bold mb-2">Clear Prompts</h3>
                        <p className="text-sm text-base-content/70">
                          AI-refined prompts for precise communication
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="avatar placeholder mb-3">
                          <div className="bg-base-200 rounded-full w-16">
                            <span className="text-2xl">🎯</span>
                          </div>
                        </div>
                        <h3 className="font-bold mb-2">Relevant Context</h3>
                        <p className="text-sm text-base-content/70">
                          Smart file selection based on your project
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="avatar placeholder mb-3">
                          <div className="bg-base-200 rounded-full w-16">
                            <span className="text-2xl">🔄</span>
                          </div>
                        </div>
                        <h3 className="font-bold mb-2">Iterative Refinement</h3>
                        <p className="text-sm text-base-content/70">
                          Continuous improvement until perfect
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-base-content/80">
                  CodifyMate automates this entire workflow, transforming how I
                  build software.
                  <strong>
                    {' '}
                    The result? Production-ready code 3x faster
                  </strong>{' '}
                  with better consistency.
                </p>
              </div>
            </div>
          </div>

          {/* Current Status */}
          <div className="card bg-base-200 shadow-sm mb-12">
            <div className="card-body">
              <h3 className="card-title mb-3 flex items-center gap-2">
                🚀 Current Status
              </h3>
              <div className="space-y-2 text-sm text-base-content/80">
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
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-3">Get in Touch</h2>

            <p className="text-base-content/70 mb-6">
              Have questions about CodifyMate? Need a beta invite? Want to share
              feedback?
            </p>

            <div className="card bg-base-100 border max-w-md mx-auto">
              <div className="card-body items-center text-center">
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="w-4 h-4" />
                  <a
                    href="mailto:cj@codifymate.com?subject=CodifyMate Beta Access"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    cj@codifymate.com
                  </a>
                </div>
                <p className="text-xs text-base-content/50">
                  Click to send me an email about CodifyMate
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AboutPage
