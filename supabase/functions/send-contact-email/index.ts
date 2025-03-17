import { serve } from 'https://deno.fresh.dev/std@0.177.0/http/server.ts';
import { SmtpClient } from 'https://deno.land/x/smtp@v0.7.0/mod.ts';

interface FormData {
  fullName: string;
  email: string;
  role: string;
  interest: string;
  message: string;
}

interface EmailRequest {
  to: string;
  subject: string;
  formData: FormData;
}

serve(async (req) => {
  try {
    const { to, subject, formData } = await req.json() as EmailRequest;

    const client = new SmtpClient();

    await client.connectTLS({
      hostname: Deno.env.get('SMTP_HOSTNAME') || '',
      port: parseInt(Deno.env.get('SMTP_PORT') || '587'),
      username: Deno.env.get('SMTP_USERNAME') || '',
      password: Deno.env.get('SMTP_PASSWORD') || '',
    });

    const emailBody = `
      New Contact Form Submission

      Full Name: ${formData.fullName}
      Email: ${formData.email}
      Role: ${formData.role}
      Interest: ${formData.interest}
      Message: ${formData.message}
    `;

    await client.send({
      from: Deno.env.get('SMTP_FROM') || '',
      to,
      subject,
      content: emailBody,
    });

    await client.close();

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});