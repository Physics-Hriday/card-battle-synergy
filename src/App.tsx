
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet, Navigate, useRouteError } from "react-router-dom";
import Home from "./pages/Home";
import BattlePage from "./pages/BattlePage";
import CollectionPage from "./pages/CollectionPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import ShopPage from "./pages/ShopPage";
import AboutPage from "./pages/AboutPage";
import FAQPage from "./pages/FAQPage";
import GuidesPage from "./pages/GuidesPage";
import UpdatesPage from "./pages/UpdatesPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import CookiesPage from "./pages/CookiesPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

// Error boundary to catch routing errors
const ErrorBoundary = () => {
  const error = useRouteError();
  console.error("Route error:", error);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-game-background text-white p-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
        <p className="mb-6 text-gray-300">
          We've encountered an unexpected error. Please try refreshing the page or return to the home page.
        </p>
        <a 
          href="/" 
          className="inline-block px-6 py-3 bg-game-primary text-white rounded-lg hover:bg-game-primary/90 transition-colors"
        >
          Return Home
        </a>
      </div>
    </div>
  );
};

// App layout wrapper
const AppLayout = () => (
  <>
    <Outlet />
    <Toaster />
    <Sonner />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />} errorElement={<ErrorBoundary />}>
            <Route path="/" element={<Home />} />
            <Route path="/battle" element={<BattlePage />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/guides" element={<GuidesPage />} />
            <Route path="/updates" element={<UpdatesPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Catch-all route for 404s */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
