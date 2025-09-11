import React from 'react'

const DownloadPage = () => {
  const handleDownload = () => {
    window.open(
      'https://github.com/cj-yourjourney/codifymate-desktop/releases/latest',
      '_blank'
    )
  }

  const handleEmailClick = () => {
    window.location.href =
      'mailto:cj@codifymate.com?subject=CodifyMate Desktop Invite Code Request'
  }

  return (
    <div className="min-h-screen bg-base-200" data-theme="light">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-base-content mb-4">
              CodifyMate Desktop
            </h1>
            <p className="text-xl text-base-content/70">
              Download the desktop application
            </p>
          </div>

          {/* Download Card */}
          <div className="card bg-base-100 shadow-xl mb-8">
            <div className="card-body">
              <div className="flex flex-col items-center gap-6">
                {/* macOS Download */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <svg
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.82 1.48-2.94 1.42-.14-1.06.34-2.23 1.04-3.11" />
                    </svg>
                    <span className="text-2xl font-semibold">macOS</span>
                  </div>

                  <button
                    onClick={handleDownload}
                    className="btn btn-primary btn-lg mb-4"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download for macOS
                  </button>

                  <p className="text-sm text-base-content/60">
                    Available for macOS only
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Invite Code Alert */}
          <div className="alert alert-info mb-8">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 7a2 2 0 012 2m0 0a2 2 0 012 2m-2-2a2 2 0 00-2-2m2 2V9a2 2 0 00-2-2m2 2a2 2 0 002 2M9 7a2 2 0 012 2m0 0a2 2 0 012 2M9 9a2 2 0 00-2-2m2 2a2 2 0 002 2M9 9V7a2 2 0 00-2-2M9 9a2 2 0 012 2m0 0V9a2 2 0 012-2"
              />
            </svg>
            <div>
              <h3 className="font-bold">🔑 Invite code required</h3>
              <div className="text-sm">
                Email me at
                <button
                  onClick={handleEmailClick}
                  className="link link-primary font-medium"
                >
                  cj@codifymate.com
                </button>
                for an invite code
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h3 className="card-title justify-center text-base-content/70">
                Coming Soon
              </h3>
              <div className="flex justify-center gap-8 mt-4">
                <div className="flex flex-col items-center">
                  <svg
                    className="w-8 h-8 mb-2 text-base-content/40"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="text-base-content/60">Windows</span>
                </div>
                <div className="flex flex-col items-center">
                  <svg
                    className="w-8 h-8 mb-2 text-base-content/40"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span className="text-base-content/60">Linux</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadPage
