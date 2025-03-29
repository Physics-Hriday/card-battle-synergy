
import React from "react";
import GameLayout from "@/components/layout/GameLayout";
import { Separator } from "@/components/ui/separator";

const PrivacyPage = () => {
  return (
    <GameLayout>
      <div className="glass-panel mb-8">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-300">
          This Privacy Policy describes how your personal information is collected, used, and shared when you use Poki War.
        </p>
        <p className="text-gray-400 text-sm mt-2">Last updated: July 1, 2023</p>
      </div>

      <div className="glass-panel space-y-6">
        <div>
          <h2 className="text-xl font-bold mb-3">1. Information We Collect</h2>
          <p className="text-gray-300 mb-4">
            When you use Poki War, we collect several types of information:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 pl-4">
            <li><span className="font-bold">Account Information:</span> When you create an account, we collect your username, email address, and password.</li>
            <li><span className="font-bold">Game Data:</span> We collect data about your in-game activities, including your progress, achievements, purchases, and interaction with other players.</li>
            <li><span className="font-bold">Device Information:</span> We collect information about the device you use to access Poki War, including device type, operating system, unique device identifiers, and mobile network information.</li>
            <li><span className="font-bold">Log Data:</span> Our servers automatically record certain information when you use Poki War, including your IP address, access times, pages viewed, and system activity.</li>
          </ul>
        </div>

        <Separator className="bg-white/10" />

        <div>
          <h2 className="text-xl font-bold mb-3">2. How We Use Your Information</h2>
          <p className="text-gray-300 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 pl-4">
            <li>Provide, maintain, and improve Poki War;</li>
            <li>Create and maintain your account;</li>
            <li>Process transactions and send related information;</li>
            <li>Send technical notices, updates, security alerts, and support messages;</li>
            <li>Respond to your comments, questions, and customer service requests;</li>
            <li>Monitor and analyze trends, usage, and activities in connection with Poki War;</li>
            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities;</li>
            <li>Personalize your experience and provide content and features that match your profile and interests.</li>
          </ul>
        </div>

        <Separator className="bg-white/10" />

        <div>
          <h2 className="text-xl font-bold mb-3">3. Sharing Your Information</h2>
          <p className="text-gray-300 mb-4">
            We may share your personal information in the following situations:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 pl-4">
            <li><span className="font-bold">With Service Providers:</span> We may share your information with third-party vendors, service providers, and contractors who perform services for us.</li>
            <li><span className="font-bold">With Other Users:</span> Information such as your username, profile picture, and game statistics may be visible to other users of Poki War.</li>
            <li><span className="font-bold">For Legal Reasons:</span> We may disclose your information if we believe it is necessary to comply with a legal obligation, protect and defend our rights or property, or protect the safety of our users or the public.</li>
            <li><span className="font-bold">Business Transfers:</span> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
          </ul>
        </div>

        <Separator className="bg-white/10" />

        <div>
          <h2 className="text-xl font-bold mb-3">4. Data Security</h2>
          <p className="text-gray-300">
            We take reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. However, no security system is impenetrable, and we cannot guarantee the security of our systems or your information.
          </p>
        </div>

        <Separator className="bg-white/10" />

        <div>
          <h2 className="text-xl font-bold mb-3">5. Your Rights and Choices</h2>
          <p className="text-gray-300 mb-4">
            You have certain rights regarding your personal information:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 pl-4">
            <li><span className="font-bold">Account Information:</span> You can review and change your account information by logging into your account settings.</li>
            <li><span className="font-bold">Marketing Communications:</span> You can opt out of receiving promotional emails from us by following the instructions in those emails.</li>
            <li><span className="font-bold">Data Access and Portability:</span> You can request a copy of the personal information we hold about you.</li>
            <li><span className="font-bold">Deletion:</span> You can request that we delete your account and personal information.</li>
          </ul>
        </div>

        <Separator className="bg-white/10" />

        <div>
          <h2 className="text-xl font-bold mb-3">6. Children's Privacy</h2>
          <p className="text-gray-300">
            Poki War is not intended for children under the age of 13, and we do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will promptly delete that information.
          </p>
        </div>

        <Separator className="bg-white/10" />

        <div>
          <h2 className="text-xl font-bold mb-3">7. Changes to This Privacy Policy</h2>
          <p className="text-gray-300">
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
        </div>

        <Separator className="bg-white/10" />

        <div>
          <h2 className="text-xl font-bold mb-3">8. Contact Us</h2>
          <p className="text-gray-300">
            If you have any questions about this Privacy Policy, please contact us at privacy@pokiwar.com.
          </p>
        </div>
      </div>
    </GameLayout>
  );
};

export default PrivacyPage;
