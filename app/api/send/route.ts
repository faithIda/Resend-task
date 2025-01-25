// app/api/send/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import BillingFailureEmail from '@/emails/BillingFailureEmail';
import fs from 'fs';
import path from 'path';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    // Read the sample invoice PDF file
    const attachmentPath = path.join(process.cwd(), 'public', 'invoice-attachment.pdf');
    const attachmentContent = fs.readFileSync(attachmentPath).toString('base64'); // Base64 encode the file content

    // Send the email to your personal email address
    const data = await resend.emails.send({
      from: 'Faith <onboarding@resend.dev>', // Replace with your verified sender address
      to: ['faith.e.ida@gmail.com'], // Replace with your actual email address
      subject: 'Payment Failed - Action Required',
      react: BillingFailureEmail({
        companyName: 'Faith Ida',
        dueAmount: '£59.00',
        dueDate: 'January 25, 2024',
      }),
      attachments: [
        {
          filename: 'invoice.pdf',
          content: attachmentContent, // Use Base64-encoded content
          contentType: 'application/pdf', // Specify MIME type
        },
      ],
    });

    // Return the Resend API response
    return NextResponse.json(data);
  } catch (error) {
    // Log and return error details for debugging
    console.error('Error sending email:', error);
    return NextResponse.json({ error: error.message });
  }
}
