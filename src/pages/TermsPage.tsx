
import React from "react";
import GameLayout from "@/components/layout/GameLayout";
import { Separator } from "@/components/ui/separator";

const TermsPage = () => {
  return (
    <GameLayout>
      <div className="glass-panel mb-8">
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
        <p className="text-gray-300">
          Please read these terms of service carefully before using Poki War.
        </p>
        <p className="text-gray-400 text-sm mt-2">Last updated: July 1, 2023</p>
      </div>

      <div className="glass-panel space-y-6">
        <div>
          <h2 className="text-xl font-bold mb-3">1. Acceptance of Terms</h2>
          <p className="text-gray-300">
            By accessing or using Poki War, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>
        </div>

        <Separator className="bg-white/10" />

        <div>
          <h2 className="text-xl font-bold mb-3">2. Use License</h2>
          <p className="text-gray-300 mb-4">
            Permission is granted to temporarily download one copy of the materials (information or software) on Poki War for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 pl-4">
            <li>Modify or copy the materials;</li>
            <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>Attempt to decompile or reverse engineer any software contained on Poki War;</li>
            <li>Remove any copyright or other proprietary notations from the materials; or</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>
        </div>

        <Separator className="bg-white/10" />

        <div>
          <h2 className="text-xl font-bold mb-3">3. Account Creation and Usage</h2>
          <p className="text-gray-300 mb-4">
            To access certain features of Poki War, you may be required to create an account. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account.
          </p>
          <p className="text-gray-300">
            You must provide accurate and complete information when creating your account. You may not use a username that is offensive, vulgar, or infringes upon someone else's rights. We reserve the right to reject any username or to terminate any account that violates these conditions.
          </p>
        </div>

        <Separator className="bg-white/10" />

        <div>
          <h2 className="text-xl font-bold mb-3">4. User Content</h2>
          <p className="text-gray-300">
            Certain features of Poki War may allow users to contribute content. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute it in any media. You represent and warrant that you own or control all rights to the content you post.
          </p>
        </div>

        <Separator className="bg-white/10" />

        <div>
          <h2 className="text-xl font-bold mb-3">5. Virtual Currency and Items</h2>
          <p className="text-gray-300">
            Poki War may include virtual currencies and items that can be purchased with real money. These virtual goods are licensed to you, not sold. You do not own these virtual items; you purchase a limited license to use them within the game. We reserve the right to manage, control, modify, or eliminate virtual goods at any time.
          </p>
        </div>

        <Separator className="bg-white/10" />

        <div>
          <h2 className="text-xl font-bold mb-3">6. Termination</h2>
          <p className="text-gray-300">
            We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use Poki War will immediately cease.
          </p>
        </div>

        <Separator className="bg-white/10" />

        <div>
          <h2 className="text-xl font-bold mb-3">7. Changes to Terms</h2>
          <p className="text-gray-300">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. It is your responsibility to check our Terms periodically for changes. Your continued use of Poki War following the posting of any changes to these Terms constitutes acceptance of those changes.
          </p>
        </div>

        <Separator className="bg-white/10" />

        <div>
          <h2 className="text-xl font-bold mb-3">8. Contact Us</h2>
          <p className="text-gray-300">
            If you have any questions about these Terms, please contact us at support@pokiwar.com.
          </p>
        </div>
      </div>
    </GameLayout>
  );
};

export default TermsPage;
