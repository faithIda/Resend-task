# Billing Failure Email Notification System

This tutorial demonstrates how to create and send automated billing failure notifications using Next.js and Resend. We'll build a complete system that sends professionally styled emails with attachments when payment issues occur.

## Project Overview

Our billing notification system will:
- Send beautifully styled HTML emails using React components
- Include dynamic content like company name and payment amounts
- Attach relevant documents (like invoices)
- Handle the sending process through a Next.js API route
- Provide a testing interface for easy verification

## Prerequisites

Before starting, ensure you have:
- Node.js 16.8 or later installed
- A free Resend account (sign up at https://resend.com)
- Basic familiarity with React and Next.js
- A code editor of your choice

## Getting Started

First, create a new Next.js project with TypeScript and Tailwind CSS:

```bash
npx create-next-app@latest billing-email-tutorial
cd billing-email-tutorial
```

When prompted, select these options:
```
√ Would you like to use TypeScript? Yes
√ Would you like to use ESLint? Yes
√ Would you like to use Tailwind CSS? Yes
√ Would you like to use the `src/` directory? No
√ Would you like to use App Router? Yes
```

Install the Resend SDK:
```bash
npm install resend
```

## Project Structure

Your project should have the following structure:

```
billing-email-tutorial/
├── app/
│   ├── api/
│   │   └── send/
│   │       └── route.ts    # API endpoint for sending emails
│   └── page.tsx            # Test interface
├── emails/
│   └── BillingFailureEmail.tsx  # Email template
├── public/
│   └── invoice-attachment.pdf   # Sample attachment
└── README.md
```

## Creating the Email Template

The email template uses React components with Tailwind CSS for styling. Create `emails/BillingFailureEmail.tsx`:

```tsx
import React from 'react';

interface BillingFailureEmailProps {
  companyName?: string;
  dueAmount?: string;
  dueDate?: string;
}

export default function BillingFailureEmail({
  companyName = 'Your Company',
  dueAmount = '$49.99',
  dueDate = 'January 25, 2024'
}: BillingFailureEmailProps) {
  // Component code here (see email template file)
}
```

The template uses props to allow customization of key details while maintaining a consistent design. We're using Tailwind's utility classes for styling, ensuring the email looks great across different email clients.

## Setting Up the API Route

Create `app/api/send/route.ts` to handle email sending:

```typescript
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import BillingFailureEmail from '../../../emails/BillingFailureEmail';
import fs from 'fs';
import path from 'path';

// API route code here (see api route file)
```

This API route:
- Initializes the Resend client with your API key
- Reads the attachment file from the public directory
- Sends the email with the React template and attachment
- Returns the response or error to the client

## Creating the Test Interface

The test interface (`app/page.tsx`) provides a simple way to trigger test emails:

```typescript
'use client';
import { useState } from 'react';

// Test interface code here (see page file)
```

This interface provides visual feedback about the email sending process and handles errors gracefully.

## Configuration

1. Create a `.env.local` file in your project root:
```
RESEND_API_KEY=your_api_key
```

2. Add a sample PDF file named `invoice-attachment.pdf` to your `public` folder.

## Testing the System

1. Start the development server:
```bash
npm run dev
```

2. Visit http://localhost:3000 in your browser

3. Click the "Send Test Email" button

4. Check your inbox for the test email

## Deployment

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin your-repository-url
git push -u origin main
```

2. Deploy to your preferred hosting platform (Vercel, Netlify, etc.)

3. Set up the `RESEND_API_KEY` environment variable in your deployment platform

## Production Considerations

When moving to production:
- Add error logging and monitoring
- Implement rate limiting
- Add authentication to the API route
- Use environment-specific email templates
- Set up email analytics

## Common Issues and Solutions

### Email Not Sending
- Verify your Resend API key is correct
- Ensure the recipient email is verified in test mode
- Check the Resend dashboard for error messages

### Attachment Issues
- Verify the file exists in the public directory
- Check file permissions
- Ensure the file size is within limits

### Styling Problems
- Test across different email clients
- Use email-safe CSS properties
- Consider adding fallback styles

