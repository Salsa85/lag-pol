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

    // Create transporter - use production SMTP if available, otherwise fall back to Mailtrap for development
    let transporter;
    
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      // Production SMTP configuration
      const port = parseInt(process.env.SMTP_PORT || '587');
      const isSecure = process.env.SMTP_SECURE === 'true';
      
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: port,
        secure: isSecure, // true for 465, false for other ports
        requireTLS: !isSecure && (port === 587 || port === 8025), // Require TLS for TLS ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        connectionTimeout: 30000, // 30 seconds
        greetingTimeout: 30000, // 30 seconds
        socketTimeout: 30000, // 30 seconds
        tls: {
          rejectUnauthorized: false, // Allow self-signed certificates if needed
          minVersion: 'TLSv1.2',
        },
        pool: false, // Disable connection pooling
        maxConnections: 1,
        maxMessages: 1,
      });
      console.log('Using production SMTP:', process.env.SMTP_HOST, 'port:', port, 'secure:', isSecure);
    } else if (process.env.MAILTRAP_USER && process.env.MAILTRAP_PASS) {
      // Development Mailtrap configuration
      transporter = nodemailer.createTransport({
        host: 'sandbox.smtp.mailtrap.io',
        port: 2525,
        auth: {
          user: process.env.MAILTRAP_USER,
          pass: process.env.MAILTRAP_PASS,
        },
      });
      console.log('Using Mailtrap for development');
    } else {
      throw new Error('No email configuration found. Please set SMTP_HOST, SMTP_USER, SMTP_PASS or MAILTRAP_USER, MAILTRAP_PASS environment variables.');
    }

    // Email content for admin notification
    const adminEmailContent = {
      from: '"Lean Agile Groep" <noreply@leanagilegroep.nl>',
      to: ['info@leanagilegroep.nl', 'office@lssg.nl', 'info@zencule.com'],
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
            ${body.phone ? `<p><strong>Telefoon:</strong> ${body.phone}</p>` : ''}
            <p><strong>Training:</strong> ${body.course}</p>
            ${body.trainingDate ? `<p><strong>Voorkeursdata:</strong> ${body.trainingDate}</p>` : ''}
            <p><strong>Provincie(s):</strong> ${Array.isArray(body.province) ? body.province.join(', ') : body.province}</p>
            ${body.costCenter ? `<p><strong>Besluitnummer studiefaciliteiten:</strong> ${body.costCenter}</p>` : ''}
            ${body.eenheid ? `<p><strong>Eenheid:</strong> ${body.eenheid}</p>` : ''}
            ${body.team ? `<p><strong>Team:</strong> ${body.team}</p>` : ''}
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

    // Email content for user confirmation (currently disabled to avoid rate limits)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
            ${body.phone ? `<p><strong>Telefoon:</strong> ${body.phone}</p>` : ''}
            ${body.trainingDate ? `<p><strong>Voorkeursdata:</strong> ${body.trainingDate}</p>` : ''}
            ${body.costCenter ? `<p><strong>Besluitnummer studiefaciliteiten:</strong> ${body.costCenter}</p>` : ''}
            ${body.eenheid ? `<p><strong>Eenheid:</strong> ${body.eenheid}</p>` : ''}
            ${body.team ? `<p><strong>Team:</strong> ${body.team}</p>` : ''}
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
    // Try alternative ports if the default fails (Railway may block certain ports)
    const alternativePorts = [8025, 25, 80]; // SMTP2Go alternative ports
    let emailSent = false;
    let lastError: Error | null = null;
    
    try {
      await transporter.sendMail(adminEmailContent);
      console.log('Admin email sent successfully');
      emailSent = true;
    } catch (emailError) {
      console.error('Failed to send email on primary port:', emailError);
      lastError = emailError instanceof Error ? emailError : new Error(String(emailError));
      
      // Try alternative ports if connection timeout
      if (lastError.message.includes('timeout') || lastError.message.includes('ETIMEDOUT')) {
        const currentPort = parseInt(process.env.SMTP_PORT || '587');
        console.log('Connection timeout detected, trying alternative ports...');
        
        for (const altPort of alternativePorts) {
          if (altPort === currentPort) continue; // Skip if already tried
          
          try {
            console.log(`Trying alternative port ${altPort}...`);
            const altTransporter = nodemailer.createTransport({
              host: process.env.SMTP_HOST,
              port: altPort,
              secure: altPort === 465,
              requireTLS: altPort === 587 || altPort === 8025,
              auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
              },
              connectionTimeout: 30000,
              greetingTimeout: 30000,
              socketTimeout: 30000,
              tls: {
                rejectUnauthorized: false,
                minVersion: 'TLSv1.2',
              },
            });
            
            await altTransporter.sendMail(adminEmailContent);
            console.log(`Admin email sent successfully on port ${altPort}`);
            emailSent = true;
            break;
          } catch (altError) {
            console.error(`Failed on port ${altPort}:`, altError);
            lastError = altError instanceof Error ? altError : new Error(String(altError));
          }
        }
      }
      
      if (!emailSent) {
        throw new Error(`Email sending failed on all ports: ${lastError?.message || 'Unknown error'}`);
      }
    }
    
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
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorDetails = error instanceof Error ? error.stack : String(error);
    
    console.error('Form submission error:', {
      message: errorMessage,
      details: errorDetails,
      env: {
        hasSmtpHost: !!process.env.SMTP_HOST,
        hasSmtpUser: !!process.env.SMTP_USER,
        hasSmtpPass: !!process.env.SMTP_PASS,
        hasMailtrapUser: !!process.env.MAILTRAP_USER,
        hasMailtrapPass: !!process.env.MAILTRAP_PASS,
      }
    });
    
    return NextResponse.json(
      { 
        error: 'Er is een fout opgetreden bij het verzenden van de e-mail. Probeer het opnieuw.',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      },
      { status: 500 }
    );
  }
}
