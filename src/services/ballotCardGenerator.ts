import QRCode from 'qrcode';
import { ElectionYear, PartyScore } from '../types.ts';

export interface BallotCardData {
  year: ElectionYear;
  quizMode: 'standard' | 'expanded';
  scores: PartyScore[];
  shareUrl?: string;
}

// Pomocná metoda pro zaoblený obdélník na canvasu
function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
): void {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

/**
 * Převede hex barvu na RGBA řetězec s danou průhledností pro pastelové podbarvení.
 */
function hexToRgba(hex: string, alpha: number): string {
  let c = hex.replace('#', '');
  if (c.length === 3) {
    c = c.split('').map(x => x + x).join('');
  }
  const num = parseInt(c, 16);
  if (isNaN(num)) return `rgba(200, 200, 200, ${alpha})`;
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * Vykreslí víceřádkový text bez oříznutí nebo tří teček.
 * Celý název strany je vždy 100% zobrazen.
 */
function drawWrappedText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
): number {
  const words = text.split(/\s+/);
  let line = '';
  let currentY = y;

  for (let n = 0; n < words.length; n++) {
    const testLine = line ? `${line} ${words[n]}` : words[n];
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && n > 0) {
      ctx.fillText(line, x, currentY);
      line = words[n];
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }
  if (line) {
    ctx.fillText(line, x, currentY);
  }
  return currentY;
}

/**
 * Vykreslí minimalistický výsledek v sympatické krémové/béžové paletě
 * s barevnou linkou vítězné strany, pastelovými akcenty a pouze nezbytnými informacemi.
 * Názvy stran jsou zobrazeny celé (bez oříznutí), vymazána pole "Směr:" i citace,
 * a u QR kódu není žádná zbytečná URL adresa.
 */
export async function generateBallotCardCanvas(data: BallotCardData): Promise<HTMLCanvasElement> {
  const width = 1080;
  const height = 1240;

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Nelze inicializovat 2D kontext pro generování karty výsledku');
  }

  const topMatch = data.scores[0];
  const secondMatch = data.scores[1];
  const thirdMatch = data.scores[2];
  const partyColor = topMatch ? topMatch.party.color : '#B45309';

  // 1. Podklad: Sympatická, teplá krémová/béžová barva
  ctx.fillStyle = '#FAF7F2';
  ctx.fillRect(0, 0, width, height);

  // Vnější decentní orámování
  ctx.strokeStyle = '#E8E1D5';
  ctx.lineWidth = 2;
  drawRoundedRect(ctx, 36, 36, width - 72, height - 72, 32);
  ctx.stroke();

  // 2. VÝRAZNÁ BAREVNÁ LINKA ODKAZUJÍCÍ NA BARVU VÍTĚZNÉ STRANY (nahoře)
  ctx.fillStyle = partyColor;
  drawRoundedRect(ctx, 70, 52, width - 140, 10, 5);
  ctx.fill();

  const startX = 70;
  const contentWidth = width - startX * 2; // 940 px

  // -------------------------------------------------------------
  // HLAVIČKA
  // -------------------------------------------------------------
  ctx.fillStyle = '#8C827A';
  ctx.font = '700 17px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText('HISTORICKÁ VOLEBNÍ KALKULAČKA', startX, 118);

  ctx.fillStyle = '#1C1917';
  ctx.font = '800 48px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText(`VÝSLEDEK · VOLBY ${data.year}`, startX, 175);

  // Jemná pastelová oddělovací linka pod hlavičkou
  ctx.strokeStyle = '#EAE3D8';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(startX, 205);
  ctx.lineTo(startX + contentWidth, 205);
  ctx.stroke();

  // -------------------------------------------------------------
  // 1. MÍSTO (VÍTĚZNÁ STRANA) - ČISTÝ, PROSTORNÝ BLOK
  // -------------------------------------------------------------
  if (topMatch) {
    const cardY = 230;
    const cardHeight = 350;

    // Čistá bílá karta na krémovém podkladu
    ctx.fillStyle = '#FFFFFF';
    drawRoundedRect(ctx, startX, cardY, contentWidth, cardHeight, 26);
    ctx.fill();

    ctx.strokeStyle = '#E8E1D5';
    ctx.lineWidth = 1.5;
    drawRoundedRect(ctx, startX, cardY, contentWidth, cardHeight, 26);
    ctx.stroke();

    // Barevná linka / proužek strany uvnitř karty
    ctx.fillStyle = partyColor;
    drawRoundedRect(ctx, startX + 44, cardY + 44, 10, 80, 5);
    ctx.fill();

    // Malý pastelový štítek "1. MÍSTO · NEJVYŠŠÍ SHODA"
    const pillBg = hexToRgba(partyColor, 0.12);
    ctx.fillStyle = pillBg;
    drawRoundedRect(ctx, startX + 70, cardY + 44, 255, 30, 8);
    ctx.fill();

    ctx.fillStyle = partyColor;
    ctx.font = '700 14px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('1. MÍSTO · NEJVYŠŠÍ SHODA', startX + 84, cardY + 64);

    // Velké procento shody
    ctx.fillStyle = '#1C1917';
    ctx.font = '800 74px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText(`${topMatch.matchPercentage} %`, startX + 70, cardY + 128);

    // Zkratka strany (velká, výrazná)
    ctx.fillStyle = '#1C1917';
    ctx.font = '800 40px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText(topMatch.party.shortName, startX + 44, cardY + 195);

    // Celý název strany bez ořezání (víceřádkově zalomený, 100% kompletní)
    ctx.fillStyle = '#44403C';
    ctx.font = '600 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    drawWrappedText(ctx, topMatch.party.fullName, startX + 44, cardY + 238, contentWidth - 88, 34);
  }

  // -------------------------------------------------------------
  // 2. A 3. MÍSTO (TOP 3) - DVĚ ČISTÉ KARTY BEZ OŘEZÁNÍ NÁZVŮ
  // -------------------------------------------------------------
  const podiumY = 615;
  const podiumHeight = 270;
  ctx.fillStyle = '#8C827A';
  ctx.font = '700 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText('DALŠÍ POŘADÍ SHODY', startX, podiumY - 12);

  const colGap = 20;
  const colWidth = (contentWidth - colGap) / 2; // 460 px

  const renderPodiumBox = (score: PartyScore | undefined, rank: number, x: number) => {
    if (!score) return;

    ctx.fillStyle = '#FFFFFF';
    drawRoundedRect(ctx, x, podiumY, colWidth, podiumHeight, 22);
    ctx.fill();

    ctx.strokeStyle = '#E8E1D5';
    ctx.lineWidth = 1.5;
    drawRoundedRect(ctx, x, podiumY, colWidth, podiumHeight, 22);
    ctx.stroke();

    // Horní řádek: Pořadí a procenta
    ctx.fillStyle = '#8C827A';
    ctx.font = '700 15px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText(`${rank}. MÍSTO`, x + 24, podiumY + 44);

    ctx.fillStyle = '#1C1917';
    ctx.font = '800 36px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText(`${score.matchPercentage} %`, x + colWidth - 110, podiumY + 48);

    // Barevná pastelová značka a zkratka strany
    ctx.fillStyle = score.party.color;
    drawRoundedRect(ctx, x + 24, podiumY + 68, 8, 26, 4);
    ctx.fill();

    ctx.fillStyle = '#1C1917';
    ctx.font = '800 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText(score.party.shortName, x + 42, podiumY + 90);

    // Celý název strany bez ořezání (víceřádkově zalomený, 100% kompletní)
    ctx.fillStyle = '#57534E';
    ctx.font = '500 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    drawWrappedText(ctx, score.party.fullName, x + 24, podiumY + 126, colWidth - 48, 24);

    // Pastelový ukazatel shody dole v kartě
    const barWidth = colWidth - 48;
    ctx.fillStyle = '#F2ECE4';
    drawRoundedRect(ctx, x + 24, podiumY + 225, barWidth, 10, 5);
    ctx.fill();

    ctx.fillStyle = score.party.color;
    const progressWidth = Math.max(10, (barWidth * score.matchPercentage) / 100);
    drawRoundedRect(ctx, x + 24, podiumY + 225, progressWidth, 10, 5);
    ctx.fill();
  };

  renderPodiumBox(secondMatch, 2, startX);
  renderPodiumBox(thirdMatch, 3, startX + colWidth + colGap);

  // -------------------------------------------------------------
  // SPODNÍ BLOK: ČISTÝ QR KÓD (BEZ JAKÉKOLIV DIVNÉ URL ADRESY!)
  // -------------------------------------------------------------
  const footerY = 920;
  const footerHeight = 250;

  ctx.fillStyle = '#FFFFFF';
  drawRoundedRect(ctx, startX, footerY, contentWidth, footerHeight, 26);
  ctx.fill();

  ctx.strokeStyle = '#E8E1D5';
  ctx.lineWidth = 1.5;
  drawRoundedRect(ctx, startX, footerY, contentWidth, footerHeight, 26);
  ctx.stroke();

  // QR kód
  const currentUrl = data.shareUrl || (typeof window !== 'undefined' ? window.location.href : 'https://kalkulacka.cz');
  const qrSize = 170;
  const qrCanvas = document.createElement('canvas');

  try {
    await QRCode.toCanvas(qrCanvas, currentUrl, {
      width: qrSize,
      margin: 1,
      color: {
        dark: '#1C1917',
        light: '#FFFFFF'
      },
      errorCorrectionLevel: 'M'
    });

    const qrX = startX + 40;
    const qrY = footerY + 40;
    ctx.drawImage(qrCanvas, qrX, qrY, qrSize, qrSize);
  } catch (err) {
    console.error('Chyba při kreslení QR kódu:', err);
  }

  // Text vedle QR kódu – minimalistický, pouze to nutné, ŽÁDNÁ URL adresa!
  const infoX = startX + qrSize + 76;

  ctx.fillStyle = '#8C827A';
  ctx.font = '700 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText('HISTORICKÁ VOLEBNÍ KALKULAČKA', infoX, footerY + 80);

  ctx.fillStyle = '#1C1917';
  ctx.font = '800 36px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText('Koho byste volili vy?', infoX, footerY + 130);

  ctx.fillStyle = '#57534E';
  ctx.font = '500 20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText('Naskenujte kód a zjistěte svou shodu v historii.', infoX, footerY + 172);

  return canvas;
}

/**
 * Převede canvas s výsledkem na PNG Blob.
 */
export async function generateBallotCardBlob(data: BallotCardData): Promise<Blob> {
  const canvas = await generateBallotCardCanvas(data);
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
      } else {
        reject(new Error('Chyba při exportu canvasu do PNG blobu'));
      }
    }, 'image/png');
  });
}

/**
 * Převede canvas s výsledkem na Data URL pro okamžitý náhled v `<img>`.
 */
export async function generateBallotCardDataUrl(data: BallotCardData): Promise<string> {
  const canvas = await generateBallotCardCanvas(data);
  return canvas.toDataURL('image/png');
}

/**
 * Stáhne vygenerovaný výsledek jako soubor PNG do počítače nebo mobilu.
 */
export async function downloadBallotCard(data: BallotCardData, filename?: string): Promise<void> {
  const blob = await generateBallotCardBlob(data);
  const name = filename || `vysledek-${data.year}.png`;
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = name;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
}

/**
 * Otevře systémový sdílecí dialog (Web Share API) na mobilu s přiloženým souborem PNG,
 * případně provede fallback na stažení.
 */
export async function shareBallotCard(
  data: BallotCardData
): Promise<{ success: boolean; method: 'share' | 'download' }> {
  const topMatch = data.scores[0];
  const shareTitle = `Můj výsledek – Volby ${data.year}`;
  const shareText = topMatch
    ? `V Historické volební kalkulačce pro rok ${data.year} mi vyšla nejvyšší shoda s: ${topMatch.party.fullName} (${topMatch.matchPercentage} %)!`
    : `Vyzkoušejte Historickou volební kalkulačku (${data.year})!`;

  const blob = await generateBallotCardBlob(data);
  const fileName = `vysledek-${data.year}.png`;
  const file = new File([blob], fileName, { type: 'image/png' });

  // 1. Zkusíme Web Share API se souborem (Safari na iOS, Chrome na Androidu)
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({
        title: shareTitle,
        text: shareText,
        files: [file]
      });
      return { success: true, method: 'share' };
    } catch (err: unknown) {
      if (err instanceof Error && err.name === 'AbortError') {
        return { success: false, method: 'share' };
      }
    }
  }

  // 2. Fallback: Přímé stažení PNG do zařízení
  await downloadBallotCard(data, fileName);
  return { success: true, method: 'download' };
}
