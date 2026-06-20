export const NAME_RESERVED = new Set([
  // infrastructure & protocol
  'admin', 'administrator', 'api', 'check', 'claim', 'contact',
  'help', 'info', 'mail', 'me', 'nip05', 'nostru', 'nostr',
  'postmaster', 'root', 'security', 'support', 'system',
  'webmaster', 'well-known', 'www', '_', '__',
  // additional infra endpoints
  'health', 'status', 'cdn', 'static', 'assets', 'media', 'monitor', 'test', 'demo',
  // team / brand
  'i2dor', 'i2dor2', 'official', 'team', 'staff', 'dev', 'mod', 'moderator', 'bot',
  // nostr protocol identifiers
  'nip', 'nip352', 'relay', 'nsec', 'npub', 'nrelay', 'nevent', 'naddr', 'nprofile',
  // anti-squatting
  'satoshi', 'nakamoto', 'satoshinakamoto', 'bitcoin', 'btc',
]);

const NAME_RE = /^[a-z0-9][a-z0-9_-]{0,28}[a-z0-9]$|^[a-z0-9]$/;
const HEX64_RE = /^[0-9a-f]{64}$/;

export function validateName(name: string): string | null {
  if (!name) return 'Name is required';
  if (name.length > 30) return 'Name must be 30 characters or fewer';
  if (!NAME_RE.test(name)) return 'Name must be lowercase letters, digits, hyphens, or underscores; cannot start or end with a hyphen or underscore';
  if (NAME_RESERVED.has(name)) return `"${name}" is reserved`;
  return null;
}

export function validatePubkey(pubkey: string): string | null {
  if (!HEX64_RE.test(pubkey)) return 'Pubkey must be a 64-character lowercase hex string';
  if (pubkey === '0'.repeat(64)) return 'Pubkey must not be the zero key';
  return null;
}
