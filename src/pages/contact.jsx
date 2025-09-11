import React from 'react'
import { Mail, Linkedin } from 'lucide-react'

const ContactPage = () => {
  const handleEmailClick = () => {
    window.location.href =
      'mailto:cj@codifymate.com?subject=Hello from CodifyMate'
  }

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/cj-luo/', '_blank')
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-base-content mb-4">
              Contact
            </h1>
            <p className="text-lg text-base-content/70">Get in touch with me</p>
          </div>

          {/* Contact Options */}
          <div className="space-y-4">
            {/* Email */}
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body items-center text-center py-8">
                <Mail className="w-8 h-8 text-primary mb-4" />
                <button
                  onClick={handleEmailClick}
                  className="btn btn-primary btn-lg"
                >
                  cj@codifymate.com
                </button>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body items-center text-center py-8">
                <Linkedin className="w-8 h-8 text-info mb-4" />
                <button
                  onClick={handleLinkedInClick}
                  className="btn btn-info btn-lg"
                >
                  LinkedIn Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
