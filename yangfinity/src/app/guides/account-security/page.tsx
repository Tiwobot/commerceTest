import { Metadata } from 'next';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: "Account Security Guide - Yangfinity",
  description: "Protect your Metin2 account when buying Yang & Won. Learn about password security, 2FA, and avoiding account bans."
};

export default function AccountSecurityPage() {
  const t = useTranslations('guides.items.account-security');
  const tc = useTranslations('guides.content');
  
  return (
    <div className="mx-auto w-full max-w-4xl px-4 md:px-8 py-12">
      <article className="prose prose-invert prose-lg max-w-none">
        <div className="mb-8">
          <Link href="/guides" className="text-sm text-[#b6e700] hover:underline mb-4 inline-block">
            {tc('backToGuides')}
          </Link>
          <h1 className="text-4xl font-bold text-white mb-4">{t('title')}</h1>
          <p className="text-lg text-neutral-400">{t('description')}</p>
        </div>

        <div className="text-neutral-300 space-y-6">
          <p className="text-lg text-neutral-200">
            Protecting your Metin2 account is crucial - losing your account means losing all your Yang & Won, gear, and progress. 
            This comprehensive guide covers everything from password security to two-factor authentication.
          </p>

          <div className="bg-red-900/20 border border-red-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-400 mb-3">⚠️ The Stakes Are High</h3>
            <p className="text-sm">
              Account theft is common in Metin2. Hackers target accounts with valuable items and Yang. A stolen account 
              can mean losing hundreds of euros in Yang & Won purchases plus months of progress. <strong>Prevention is essential.</strong>
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Password Security (Foundation)</h2>

          <div className="space-y-4">
            <div className="bg-neutral-900 border border-[#b6e700] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">Creating an Unbreakable Password</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div className="bg-red-900/20 border border-red-800 rounded-lg p-4">
                  <h4 className="font-bold text-red-400 mb-2">❌ Weak Passwords</h4>
                  <ul className="text-xs space-y-1">
                    <li>• metin2pass (common word)</li>
                    <li>• 123456789 (numbers only)</li>
                    <li>• password123 (dictionary word)</li>
                    <li>• CharacterName (game-related)</li>
                    <li>• BirthdayYear (personal info)</li>
                    <li>→ <strong>Hacked in seconds</strong></li>
                  </ul>
                </div>
                <div className="bg-green-900/20 border border-green-800 rounded-lg p-4">
                  <h4 className="font-bold text-green-400 mb-2">✅ Strong Passwords</h4>
                  <ul className="text-xs space-y-1">
                    <li>• tK9$mL2#pQ7@vN4 (random)</li>
                    <li>• Correct-Horse-Battery-7! (passphrase)</li>
                    <li>• 3w!Qp$9Zm&amp;8L (mixed chars)</li>
                    <li>→ <strong>12+ characters</strong></li>
                    <li>→ <strong>Mixed case, numbers, symbols</strong></li>
                    <li>→ <strong>Unhackable by brute force</strong></li>
                  </ul>
                </div>
              </div>

              <div className="bg-neutral-800 rounded-lg p-4">
                <h4 className="font-bold text-white mb-2">Password Requirements Checklist:</h4>
                <ul className="space-y-1 text-sm">
                  <li>☐ At least 12 characters long (16+ better)</li>
                  <li>☐ Uppercase letters (A-Z)</li>
                  <li>☐ Lowercase letters (a-z)</li>
                  <li>☐ Numbers (0-9)</li>
                  <li>☐ Special characters (!@#$%^&amp;*)</li>
                  <li>☐ Not used for any other account</li>
                  <li>☐ Not containing personal information</li>
                  <li>☐ Not a dictionary word or common phrase</li>
                </ul>
              </div>

              <div className="bg-green-900/20 border border-green-800 rounded-lg p-3 mt-3">
                <p className="text-sm"><strong>💡 Pro Tip:</strong> Use a password manager (LastPass, 1Password, Bitwarden) to generate 
                and store complex passwords. You only need to remember ONE master password.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Two-Factor Authentication (2FA)</h2>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Enable 2FA If Available:</h3>
            <p className="mb-4">2FA requires two forms of verification: password + phone/email code. Even if password is stolen, 
            hackers can&apos;t access account.</p>
            
            <div className="space-y-4">
              <div className="bg-neutral-800 rounded-lg p-4">
                <h4 className="font-bold text-[#b6e700] mb-2">Gameforge Servers:</h4>
                <ol className="text-sm space-y-1 list-decimal list-inside">
                  <li>Log into Gameforge website</li>
                  <li>Go to Account Settings → Security</li>
                  <li>Enable Two-Factor Authentication</li>
                  <li>Link your phone number or authenticator app</li>
                  <li>Save backup codes in safe place</li>
                </ol>
              </div>

              <div className="bg-neutral-800 rounded-lg p-4">
                <h4 className="font-bold text-[#b6e700] mb-2">Private Servers:</h4>
                <p className="text-sm">Check if server offers 2FA (email verification, SMS codes). Enable if available. 
                If not available, extra password security is critical.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Email Security</h2>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#b6e700] mb-3">Protect Your Email = Protect Your Account</h3>
            <p className="mb-4">Hackers target emails to reset game passwords. Secure your email:</p>
            
            <ul className="list-disc list-inside space-y-2 text-sm ml-4">
              <li><strong>Use Dedicated Email:</strong> Create gaming-only email (yourgaming@gmail.com)</li>
              <li><strong>Strong Email Password:</strong> Different from game password</li>
              <li><strong>Enable Email 2FA:</strong> Gmail/Outlook support authenticator apps</li>
              <li><strong>Recovery Options:</strong> Add backup phone and recovery email</li>
              <li><strong>Check Login Activity:</strong> Review recent logins monthly</li>
            </ul>

            <div className="bg-red-900/20 border border-red-800 rounded-lg p-3 mt-4">
              <p className="text-sm"><strong>⚠️ Critical:</strong> If email is compromised, hacker can reset all game passwords. 
              Email security = game security!</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Additional Security Layers</h2>

          <div className="space-y-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">1. Never Share Credentials</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li><strong>Password:</strong> Never share with anyone - friends, guild, &quot;support&quot;</li>
                <li><strong>Yang Sellers:</strong> Legitimate sellers NEVER need your password</li>
                <li><strong>Account Boosting:</strong> Sharing login = 90% chance of theft</li>
                <li><strong>Guild Leaders:</strong> Don&apos;t need access to your account</li>
              </ul>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">2. Secure Your Network</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li><strong>Public WiFi:</strong> Never login on public WiFi (Starbucks, airport) - hackers monitor these</li>
                <li><strong>Home WiFi:</strong> Use WPA2/WPA3 encryption with strong password</li>
                <li><strong>VPN:</strong> Consider VPN for extra security (optional but good)</li>
                <li><strong>HTTPS:</strong> Verify game website uses HTTPS (padlock icon)</li>
              </ul>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">3. Regular Security Maintenance</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-bold mb-1">Every 3 Months:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Change game password</li>
                    <li>• Review email login activity</li>
                    <li>• Update security questions</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold mb-1">Every 6 Months:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Change email password</li>
                    <li>• Scan PC for malware</li>
                    <li>• Review account permissions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">What to Do If Hacked</h2>

          <div className="bg-red-900/20 border border-red-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-400 mb-4">🚨 Immediate Actions (First 10 Minutes):</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Change Email Password:</strong> Immediately - before game password</li>
              <li><strong>Try Game Login:</strong> If you still can, change password NOW</li>
              <li><strong>Contact Support:</strong> Email/ticket to game support explaining situation</li>
              <li><strong>Scan for Malware:</strong> Run full antivirus scan on PC/phone</li>
              <li><strong>Alert Guild:</strong> Warn them if hacker is messaging people</li>
            </ol>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 mt-4">
              <h4 className="font-bold text-white mb-2">Evidence to Gather:</h4>
              <ul className="text-sm space-y-1">
                <li>• Screenshots of last known inventory</li>
                <li>• Transaction history (Yang purchases)</li>
                <li>• Previous login IPs (if available)</li>
                <li>• Character creation date</li>
              </ul>
              <p className="text-xs mt-2 text-neutral-400">Game support may recover account if you prove ownership</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Complete Security Checklist</h2>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Are You Fully Protected?</h3>
            <ul className="space-y-2">
              <li>☐ Password is 12+ characters with mixed case, numbers, symbols</li>
              <li>☐ Password is unique (not used for any other account)</li>
              <li>☐ Two-factor authentication enabled (if supported)</li>
              <li>☐ Using dedicated email for gaming only</li>
              <li>☐ Email has 2FA enabled</li>
              <li>☐ Never login on public WiFi</li>
              <li>☐ Never shared password with anyone</li>
              <li>☐ Antivirus active and updated</li>
              <li>☐ Password changed in last 3 months</li>
              <li>☐ Using password manager for secure storage</li>
            </ul>
            <p className="text-sm mt-4 text-[#b6e700]"><strong>10/10 checked?</strong> Your account is fortress-level secure!</p>
          </div>

          <div className="bg-[#b6e700]/10 border border-[#b6e700]/30 rounded-lg p-6 my-6">
            <h3 className="text-xl font-bold text-white mb-3">🛡️ Yangfinity&apos;s Commitment</h3>
            <p className="text-sm mb-3">
              When you buy Yang & Won from us, we NEVER ask for your password. Delivery via in-game trade or mail - 
              your credentials stay private. We&apos;ve operated 5+ years without a single security incident.
            </p>
            <p className="text-sm">
              If anyone claiming to be from Yangfinity asks for your password, it&apos;s a scam. Report it immediately to 
              our 24/7 support.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-neutral-900 border border-neutral-800 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Buy Yang & Won Safely</h3>
          <p className="text-neutral-300 mb-6">
            Secure your account, then invest in Yang & Won with confidence. Never share credentials!
          </p>
          <Link 
            href="/products"
            className="inline-block px-6 py-3 bg-[#b6e700] text-black rounded-lg font-semibold hover:bg-[#a5d600] transition-all shadow-lg hover:shadow-[#b6e700]/20"
          >
            {tc('browseProducts')}
          </Link>
        </div>
      </article>
    </div>
  );
}
