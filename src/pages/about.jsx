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
              The AI assistant built specifically for React developers
            </p>
          </div>

          {/* Team Section */}
          <div className="card bg-base-200 shadow-sm mb-12">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-6">The Team: Just Me</h2>

              <div className="space-y-6">
                <p className="text-base-content/80">
                  Hi, I'm CJ—a self-taught full-stack developer building
                  CodifyMate as a one-person show. No VC money, no fancy office,
                  just me solving problems I face every day as a React
                  developer.
                </p>

                <div className="card bg-base-100 border">
                  <div className="card-body">
                    <p className="text-sm text-base-content/80">
                      I started coding because I loved building things.
                      CodifyMate came from my own frustration with AI tools that
                      either dumped unusable code or required perfect prompts. I
                      wanted something that actually helped me code better, not
                      replaced my thinking.
                    </p>
                  </div>
                </div>

                <p className="text-base-content/80">
                  Being a solo developer means I can stay close to what actually
                  matters: building a tool that React developers genuinely want
                  to use. Every feature comes from real coding sessions, not
                  boardroom meetings.
                </p>
              </div>
            </div>
          </div>

          {/* Approach Section */}
          <div className="card bg-base-200 shadow-sm mb-12">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-6">
                Our Approach: Component-by-Component Development
              </h2>

              <div className="space-y-6">
                <p className="text-base-content/80">
                  There are two main paradigms in AI-assisted React development.
                  CodifyMate deliberately chooses the approach that works best
                  for real-world React applications:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="card bg-base-100 border">
                    <div className="card-body">
                      <div className="flex items-center mb-3">
                        <span className="text-lg mr-2">❌</span>
                        <h3 className="card-title">Full-App Generation</h3>
                      </div>
                      <ul className="text-sm space-y-2 text-base-content/70">
                        <li>• "Create an entire React e-commerce app"</li>
                        <li>• Massive, hard-to-customize codebases</li>
                        <li>• Good for demos, not production</li>
                        <li>• Breaks your existing architecture</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card bg-base-100 border-2 border-primary">
                    <div className="card-body">
                      <div className="flex items-center mb-3">
                        <span className="text-lg mr-2">✅</span>
                        <h3 className="card-title text-primary">
                          CodifyMate's Component-by-Component
                        </h3>
                      </div>
                      <ul className="text-sm space-y-2 text-base-content/70">
                        <li>• Build React components systematically</li>
                        <li>• Full control over your codebase</li>
                        <li>• Perfect for production React apps</li>
                        <li>• Integrates with your existing project</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="card bg-base-100 border-l-4 border-l-primary">
                  <div className="card-body">
                    <p>
                      <span className="font-semibold">
                        Why component-by-component wins for React:
                      </span>{' '}
                      React applications are built around reusable components.
                      CodifyMate respects this architecture, helping you build
                      thoughtfully—one component at a time—just like
                      professional React development teams do.
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
                Why I Built CodifyMate for React Developers
              </h2>

              <div className="space-y-6">
                <p className="text-base-content/80">
                  As a React developer, I was frustrated with AI tools that
                  either generated massive, unusable codebases or required
                  perfect prompts to get decent components. The breakthrough
                  came when I realized great React component generation requires
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
                        <h3 className="font-bold mb-2">
                          React-Focused Prompts
                        </h3>
                        <p className="text-sm text-base-content/70">
                          Transform vague ideas into precise React component
                          requests
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="avatar placeholder mb-3">
                          <div className="bg-base-200 rounded-full w-16">
                            <span className="text-2xl">🎯</span>
                          </div>
                        </div>
                        <h3 className="font-bold mb-2">Smart File Selection</h3>
                        <p className="text-sm text-base-content/70">
                          Only include relevant React components and hooks
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="avatar placeholder mb-3">
                          <div className="bg-base-200 rounded-full w-16">
                            <span className="text-2xl">🔄</span>
                          </div>
                        </div>
                        <h3 className="font-bold mb-2">Component Refinement</h3>
                        <p className="text-sm text-base-content/70">
                          Iterate until your React component is perfect
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-base-content/80">
                  CodifyMate automates this entire React workflow, transforming
                  how I build React applications.
                  <strong>
                    {' '}
                    The result? Production-ready React components 3x faster
                  </strong>{' '}
                  with better consistency and proper React patterns.
                </p>
              </div>
            </div>
          </div>

          {/* React Component Examples */}
          <div className="card bg-base-200 shadow-sm mb-12">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-6">
                Perfect for Building React Components
              </h2>

              <div className="space-y-6">
                <p className="text-base-content/80">
                  CodifyMate excels at generating the React components you build
                  every day:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold">UI Components</h3>
                    <ul className="text-sm space-y-1 text-base-content/70 ml-4">
                      <li>• Button, Input, Modal components</li>
                      <li>• Card, Badge, Avatar layouts</li>
                      <li>• Navigation, Sidebar, Header</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold">Interactive Components</h3>
                    <ul className="text-sm space-y-1 text-base-content/70 ml-4">
                      <li>• Forms with validation hooks</li>
                      <li>• Data tables with sorting</li>
                      <li>• Search and filter components</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold">Page Components</h3>
                    <ul className="text-sm space-y-1 text-base-content/70 ml-4">
                      <li>• Login, Signup, Profile pages</li>
                      <li>• Dashboard, Settings layouts</li>
                      <li>• Product, User detail pages</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold">Advanced Patterns</h3>
                    <ul className="text-sm space-y-1 text-base-content/70 ml-4">
                      <li>• Custom hooks and context</li>
                      <li>• HOCs and render props</li>
                      <li>• TypeScript component props</li>
                    </ul>
                  </div>
                </div>
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
                  • <strong>Beta Phase:</strong> macOS version available now for
                  React developers
                </p>
                <p>
                  • <strong>Invite Only:</strong> Contact me for beta access
                </p>
                <p>
                  • <strong>Coming Soon:</strong> Windows and Linux versions
                </p>
                <p>
                  • <strong>Weekly Meetups:</strong> Join our Smart Vibe Coding
                  sessions to see CodifyMate in action
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-3">Get in Touch</h2>

            <p className="text-base-content/70 mb-6">
              Have questions about CodifyMate? Need a beta invite? Want to join
              our weekly React component building sessions?
            </p>

            <div className="card bg-base-100 border max-w-md mx-auto">
              <div className="card-body items-center text-center">
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="w-4 h-4" />
                  <a
                    href="mailto:cj@codifymate.com?subject=CodifyMate Beta Access - React Developer"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    cj@codifymate.com
                  </a>
                </div>
                <p className="text-xs text-base-content/50">
                  Click to send me an email about CodifyMate or joining our
                  React meetups
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
