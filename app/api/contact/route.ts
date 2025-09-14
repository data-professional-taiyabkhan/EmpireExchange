import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log('New enquiry:', data);

    // Send email using Resend
    const { data: emailData, error } = await resend.emails.send({
      from: 'Empire Exchange Website <onboarding@resend.dev>', // You'll need to verify this domain
      to: ['info@empireexchange.co.uk'], // Your business email
      subject: `New Enquiry from ${data.name} - Empire Exchange`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #059669, #10b981); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New Enquiry - Empire Exchange</h1>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb;">
            <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #059669; margin-top: 0; margin-bottom: 20px;">Contact Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">Name:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${data.name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                  <td style="padding: 8px 0; color: #6b7280;"><a href="mailto:${data.email}" style="color: #059669; text-decoration: none;">${data.email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
                  <td style="padding: 8px 0; color: #6b7280;"><a href="tel:${data.phone}" style="color: #059669; text-decoration: none;">${data.phone}</a></td>
                </tr>
              </table>
            </div>
            
            <div style="background: white; padding: 25px; border-radius: 8px;">
              <h2 style="color: #059669; margin-top: 0; margin-bottom: 15px;">Message</h2>
              <div style="background: #f3f4f6; padding: 15px; border-radius: 6px; border-left: 4px solid #059669;">
                <p style="margin: 0; color: #374151; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
              </div>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background: #ecfdf5; border-radius: 8px; border: 1px solid #d1fae5;">
              <p style="margin: 0; color: #065f46; font-size: 14px;">
                <strong>📧 Reply directly to this email to respond to the customer</strong><br>
                <strong>📅 Enquiry received:</strong> ${new Date().toLocaleString('en-GB', { 
                  timeZone: 'Europe/London',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Email sending failed:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    console.log('Email sent successfully:', emailData);
    return NextResponse.json({ ok: true, messageId: emailData?.id });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
