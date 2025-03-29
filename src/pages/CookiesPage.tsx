
import React from "react";
import GameLayout from "@/components/layout/GameLayout";
import { Separator } from "@/components/ui/separator";

const CookiesPage = () => {
  return (
    <GameLayout>
      <div className="glass-panel mb-8">
        <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
        <p className="text-gray-300">
          This Cookie Policy explains how Poki War uses cookies and similar technologies to recognize you when you visit our website and game.
        </p>
        <p className="text-gray-400 text-sm mt-2">Last updated: July 1, 2023</p>
      </div>

      <div className="glass-panel space-y-6">
        <div>
          <h2 className="text-xl font-bold mb-3">1. What are Cookies?</h2>
          <p className="text-gray-300">
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information. Cookies set by the website owner (in this case, Poki War) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
          </p>
        </div>

        <Separator className="bg-white/10" />

        <div>
          <h2 className="text-xl font-bold mb-3">2. Types of Cookies We Use</h2>
          <p className="text-gray-300 mb-4">
            We use the following types of cookies:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 pl-4">
            <li><span className="font-bold">Essential Cookies:</span> These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.</li>
            <li><span className="font-bold">Performance and Analytics Cookies:</span> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.</li>
            <li><span className="font-bold">Functionality Cookies:</span> These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.</li>
            <li><span className="font-bold">Targeting Cookies:</span> These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites.</li>
          </ul>
        </div>

        <Separator className="bg-white/10" />

        <div>
          <h2 className="text-xl font-bold mb-3">3. How We Use Cookies</h2>
          <p className="text-gray-300 mb-4">
            We use cookies for several reasons:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 pl-4">
            <li>To enable certain functions of the game</li>
            <li>To provide analytics</li>
            <li>To store your preferences</li>
            <li>To enable ad delivery and behavioral targeting</li>
          </ul>
        </div>

        <Separator className="bg-white/10" />

        <div>
          <h2 className="text-xl font-bold mb-3">4. Your Cookie Choices and Controls</h2>
          <p className="text-gray-300 mb-4">
            Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove or reject cookies. Please note that if you choose to remove or reject cookies, this could affect the availability and functionality of our game.
          </p>
          <p className="text-gray-300">
            In addition to browser controls, you can exercise cookie choices by using our cookie consent tool when you first visit our website.
          </p>
        </div>

        <Separator className="bg-white/10" />

        <div>
          <h2 className="text-xl font-bold mb-3">5. Third-Party Cookies</h2>
          <p className="text-gray-300">
            Some cookies are placed by third parties on our website. These third parties may include analytics providers, advertising networks, social media platforms, and video service providers. These third parties may use cookies, alone or in conjunction with web beacons or other tracking technologies, to collect information about you when you use our website.
          </p>
        </div>

        <Separator className="bg-white/10" />

        <div>
          <h2 className="text-xl font-bold mb-3">6. Updates to This Cookie Policy</h2>
          <p className="text-gray-300">
            We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will become effective when we post the revised policy. If we make any material changes, we will notify you by email or through a notice on our website prior to the change becoming effective.
          </p>
        </div>

        <Separator className="bg-white/10" />

        <div>
          <h2 className="text-xl font-bold mb-3">7. Contact Us</h2>
          <p className="text-gray-300">
            If you have any questions about our use of cookies or this Cookie Policy, please contact us at cookies@pokiwar.com.
          </p>
        </div>
      </div>
    </GameLayout>
  );
};

export default CookiesPage;
