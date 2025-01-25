// emails/BillingFailureEmail.tsx
import React from 'react';

// Define the properties our email template can accept
interface BillingFailureEmailProps {
  companyName?: string;
  dueAmount?: string;
  dueDate?: string;
}

export default function BillingFailureEmail({
  companyName = 'Faith Ida',
  dueAmount = '£59.00',
  dueDate = 'January 25, 2024'
}: BillingFailureEmailProps) {
  // The main container uses a white background and standard email width
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-2xl mx-auto p-8">
        {/* Email header with company branding */}
        <div className="mb-8">
          <img 
            src="https://your-company-logo.com/logo.png" 
            alt={`${companyName} Logo`}
            className="h-8 w-auto mb-4"
          />
        </div>

        {/* Main content section */}
        <div className="space-y-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Payment Failed for {companyName}
          </h1>
          
          <p className="text-gray-600">
            We were unable to process your payment of {dueAmount} due on {dueDate}.
          </p>
          
          <p className="text-gray-600">
            To ensure uninterrupted service, please update your payment information immediately.
            A copy of the invoice has been attached to this email for your records.
          </p>
          
          {/* Call to action button */}
          <div className="my-8">
            <a 
              href="https://example.com/billing"
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors"
            >
              Update Payment Method
            </a>
          </div>

          {/* Additional information */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              If you need assistance, please contact our support team at support@example.com
            </p>

            <p className="text-sm text-gray-500 mt-4">
              Best regards,<br />
              The {companyName} Team
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}