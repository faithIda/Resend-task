'use client';

import React from 'react';
import { useState } from 'react';

type EmailResult = {
  id?: string;
  error?: string;
} | null;

export default function Page() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [emailResult, setEmailResult] = useState<EmailResult>(null);

  async function sendEmail() {
    try {
      setStatus('loading');
      const response = await fetch('/api/send', {
        method: 'POST',
      });
      const data = await response.json();
      setEmailResult(data);
      setStatus('success');
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">
          Test Billing Failure Email
        </h1>
        
        <div className="space-y-4">
          <button
            onClick={sendEmail}
            disabled={status === 'loading'}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            {status === 'loading' ? 'Sending...' : 'Send Test Email'}
          </button>

          {status === 'success' && emailResult && (
            <div className="p-4 bg-green-100 text-green-700 rounded">
              Email sent successfully! Check your inbox.
              <pre className="mt-2 text-sm">
                {JSON.stringify(emailResult, null, 2)}
              </pre>
            </div>
          )}

          {status === 'error' && (
            <div className="p-4 bg-red-100 text-red-700 rounded">
              Failed to send email. Check console for details.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}