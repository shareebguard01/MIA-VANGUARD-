export const WHATSAPP_NUMBER = '27835546348';
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;
export const BUSINESS_EMAIL = 'Miavanguard01@gmail.com';
export const BUSINESS_ADDRESS = '298 De Deur Estates, De Deur, Johannesburg, Gauteng, South Africa';
export const BUSINESS_PHONE_DISPLAY = '+27 83 554 6348';

export function buildWhatsAppLink(message: string): string {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}
