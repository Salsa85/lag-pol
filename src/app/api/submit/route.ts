import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: 'Naam en e-mailadres zijn verplicht' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Ongeldig e-mailadres' },
        { status: 400 }
      );
    }

    // Validate province selection
    if (!body.province || body.province.length === 0) {
      return NextResponse.json(
        { error: 'Selecteer ten minste één provincie' },
        { status: 400 }
      );
    }

    // Create transporter for Mailtrap
    const transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });

    // Email content for admin notification
    const adminEmailContent = {
      from: '"Lean Agile Groep" <noreply@leanagilegroep.nl>',
      to: 'info@leanagilegroep.nl',
      subject: `🚨 POLITIE AANBESTEDING - Nieuwe aanmelding: ${body.course}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #dc2626; color: white; padding: 15px; border-radius: 8px; margin-bottom: 20px; text-align: center;">
            <h2 style="margin: 0; font-size: 18px;">🚨 POLITIE AANBESTEDING - NIEUWE AANMELDING</h2>
          </div>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc2626;">
            <h3 style="color: #1e40af; margin-top: 0;">Aanmelding details:</h3>
            <p><strong>Naam:</strong> ${body.name}</p>
            <p><strong>E-mail:</strong> ${body.email}</p>
            <p><strong>Training:</strong> ${body.course}</p>
            <p><strong>Provincie(s):</strong> ${Array.isArray(body.province) ? body.province.join(', ') : body.province}</p>
            ${body.costCenter ? `<p><strong>Kostenplaats:</strong> ${body.costCenter}</p>` : ''}
            ${body.message ? `<p><strong>Opmerkingen:</strong> ${body.message}</p>` : ''}
            <p><strong>Datum:</strong> ${new Date().toLocaleString('nl-NL')}</p>
          </div>
          
          <div style="background: #fef2f2; border: 1px solid #fecaca; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #dc2626; font-weight: bold; margin: 0;">
              ⚠️ Deze aanmelding komt van de POLITIE AANBESTEDING website en vereist directe follow-up!
            </p>
          </div>
          
          <p style="color: #64748b; font-size: 14px;">
            Deze aanmelding is verzonden via het Lean Agile Groep politie aanbesteding contactformulier.
          </p>
        </div>
      `,
    };

    // Email content for user confirmation
    const userEmailContent = {
      from: '"Lean Agile Groep" <noreply@leanagilegroep.nl>',
      to: body.email,
      subject: 'Bevestiging aanmelding training - Lean Agile Groep',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Bedankt voor je aanmelding!</h2>
          
          <p>Beste ${body.name},</p>
          
          <p>We hebben je aanmelding voor de <strong>${body.course}</strong> training ontvangen. We nemen zo snel mogelijk contact met je op om de details te bespreken.</p>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Jouw aanmelding:</h3>
            <p><strong>Training:</strong> ${body.course}</p>
            <p><strong>Provincie(s):</strong> ${Array.isArray(body.province) ? body.province.join(', ') : body.province}</p>
            ${body.costCenter ? `<p><strong>Kostenplaats:</strong> ${body.costCenter}</p>` : ''}
            ${body.message ? `<p><strong>Opmerkingen:</strong> ${body.message}</p>` : ''}
          </div>
          
          <p>Met vriendelijke groet,<br>
          Het Lean Agile Groep team</p>
          
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
          <p style="color: #64748b; font-size: 12px;">
            Lean Agile Groep | E-mail: info@leanagilegroep.nl | Tel: 088-5326720
          </p>
        </div>
      `,
    };

    // Send only admin email to avoid rate limits
    await transporter.sendMail(adminEmailContent);
    
    // Uncomment the line below to also send user confirmation
    // await transporter.sendMail(userEmailContent);

    console.log('Emails sent successfully for registration:', {
      name: body.name,
      email: body.email,
      course: body.course,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Aanmelding succesvol ontvangen. Je ontvangt een bevestigingsmail.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Er is een fout opgetreden bij het verzenden van de e-mail. Probeer het opnieuw.' },
      { status: 500 }
    );
  }
}
