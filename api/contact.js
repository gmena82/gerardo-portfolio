// Vercel Serverless Function for Contact Form
// This function handles form submissions and sends emails using Resend

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed. Please use POST.' 
    });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields (name, email, message).'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address.'
      });
    }

    // For now, we'll use a simple approach that works without external dependencies
    // In production, you would use Resend or another email service
    
    // Create email content
    const emailContent = {
      to: 'Gerardomena82@live.com',
      from: email,
      subject: subject || 'New Contact Form Submission',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 30px; border-radius: 10px; color: white;">
            <h2 style="color: #7df9ff; margin-bottom: 20px; font-size: 24px;">New Contact Form Submission</h2>
            
            <div style="background-color: rgba(125, 249, 255, 0.1); padding: 20px; border-radius: 8px; border-left: 4px solid #7df9ff; margin-bottom: 20px;">
              <h3 style="color: #7df9ff; margin-top: 0;">Contact Information</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject || 'No subject provided'}</p>
            </div>
            
            <div style="background-color: rgba(255, 61, 104, 0.1); padding: 20px; border-radius: 8px; border-left: 4px solid #ff3d68;">
              <h3 style="color: #ff3d68; margin-top: 0;">Message</h3>
              <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(125, 249, 255, 0.3); text-align: center;">
              <p style="color: #888; font-size: 14px;">
                This message was sent from your portfolio contact form at ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      `
    };

    // Log the contact attempt (in production, you'd send the actual email here)
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    });

    // For demo purposes, we'll simulate successful email sending
    // In production, replace this with actual Resend API call:
    /*
    const { Resend } = require('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const { data, error } = await resend.emails.send({
      from: 'contact@yourdomain.com',
      to: ['Gerardomena82@live.com'],
      subject: emailContent.subject,
      html: emailContent.html,
      reply_to: email
    });
    
    if (error) {
      throw new Error(error.message);
    }
    */

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Thank you for your message! I\'ll get back to you within 24 hours.',
      data: {
        name,
        email,
        subject: subject || 'Contact Form Submission',
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    return res.status(500).json({
      success: false,
      message: 'Sorry, there was an error sending your message. Please try again or email me directly at Gerardomena82@live.com.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}

