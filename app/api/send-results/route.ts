import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { TestResults } from '@/lib/types';
import { languageDescriptions } from '@/lib/languageDescriptions';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { results, gender } = await request.json();

    if (!results) {
      return NextResponse.json(
        { error: 'Chýbajú výsledky' },
        { status: 400 }
      );
    }

    // Find dominant language
    const sortedResults = (Object.entries(results) as [string, number][])
      .sort((a, b) => b[1] - a[1]);

    const dominantLanguage = sortedResults[0][0];
    const dominantInfo = languageDescriptions[dominantLanguage as keyof typeof languageDescriptions];

    // Create email HTML
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #8B7355 0%, #D4A574 100%);
              color: white;
              padding: 30px;
              border-radius: 10px;
              text-align: center;
              margin-bottom: 30px;
            }
            .header h1 {
              margin: 0;
              font-size: 28px;
            }
            .result-card {
              background: #f8f9fa;
              border-left: 4px solid #8B7355;
              padding: 20px;
              margin: 20px 0;
              border-radius: 8px;
            }
            .result-card h2 {
              margin-top: 0;
              color: #8B7355;
              font-size: 24px;
            }
            .result-item {
              background: white;
              padding: 15px;
              margin: 10px 0;
              border-radius: 8px;
              border: 1px solid #e0e0e0;
            }
            .result-item strong {
              color: #8B7355;
            }
            .score {
              float: right;
              background: #8B7355;
              color: white;
              padding: 5px 15px;
              border-radius: 20px;
              font-weight: bold;
            }
            .footer {
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #e0e0e0;
              text-align: center;
              color: #666;
              font-size: 12px;
            }
            .icon {
              font-size: 40px;
              margin: 10px 0;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="icon">🦫</div>
            <h1>Výsledky testu: Zisti o sebe viac</h1>
            <p style="margin: 5px 0; opacity: 0.9;">
              ${new Date().toLocaleDateString('sk-SK', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
            <p style="margin: 5px 0; opacity: 0.9;">
              Pohlavie: ${gender === 'male' ? 'Muž' : 'Žena'}
            </p>
          </div>

          <div class="result-card">
            <div class="icon">${dominantInfo.icon}</div>
            <h2>Dominantný jazyk: ${dominantInfo.name}</h2>
            <p>${dominantInfo.description}</p>
            <p><strong>Skóre: ${results[dominantLanguage]} z 30 bodov</strong></p>
          </div>

          <h3 style="color: #8B7355; margin-top: 30px;">Kompletné výsledky:</h3>

          ${sortedResults.map(([lang, score]) => {
            const info = languageDescriptions[lang as keyof typeof languageDescriptions];
            const percentage = Math.round((score / 30) * 100);
            return `
              <div class="result-item">
                <span style="font-size: 24px;">${info.icon}</span>
                <strong>${info.name}</strong>
                <span class="score">${score}/30 (${percentage}%)</span>
              </div>
            `;
          }).join('')}

          <div class="footer">
            <p>🦫 Tento e-mail bol automaticky vygenerovaný z aplikácie "Zisti o sebe viac"</p>
            <p>Test 5 jazykov lásky - <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}" style="color: #8B7355;">zistiosebeviac.vercel.app</a></p>
          </div>
        </body>
      </html>
    `;

    // Send email
    const data = await resend.emails.send({
      from: 'Test 5 Jazykov Lásky <onboarding@resend.dev>',
      to: [process.env.RECIPIENT_EMAIL || 'your-email@example.com'],
      subject: `Nový výsledok testu: ${dominantInfo.name} 🦫`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Nepodarilo sa odoslať e-mail' },
      { status: 500 }
    );
  }
}
