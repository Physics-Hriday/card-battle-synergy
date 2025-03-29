
import React from "react";
import GameLayout from "@/components/layout/GameLayout";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQPage = () => {
  const faqs = [
    {
      id: 1,
      question: "What is Poki War?",
      answer: "Poki War is a strategic card battle game with unique elemental synergies and competitive gameplay. Players can collect cards, build decks, and compete against others in thrilling battles."
    },
    {
      id: 2,
      question: "How do I get started?",
      answer: "When you first join, you'll receive a starter deck. You can then start battling other players, earning rewards, and expanding your collection through the shop or by completing quests."
    },
    {
      id: 3,
      question: "How does the battle system work?",
      answer: "Battles are turn-based. On your turn, you use energy to play cards from your hand. Each card has attack and defense values, as well as special abilities. Cards with elemental synergies can combine for powerful effects."
    },
    {
      id: 4,
      question: "What are the different card elements?",
      answer: "There are six elements: Fire, Water, Earth, Air, Light, and Dark. Each has strengths and weaknesses against others, creating a strategic layer to deck building and battles."
    },
    {
      id: 5,
      question: "How do I earn new cards?",
      answer: "You can earn new cards by winning battles, completing daily and weekly quests, purchasing card packs in the shop, or participating in special events and tournaments."
    },
    {
      id: 6,
      question: "What are the different card rarities?",
      answer: "Cards come in five rarities: Common, Uncommon, Rare, Epic, and Legendary. Higher rarity cards are more powerful and have more unique abilities."
    },
    {
      id: 7,
      question: "How do I build a good deck?",
      answer: "A good deck has a balance of card costs, a focus on specific elements for synergy, and a strategy (aggressive, defensive, or combo-based). Experiment with different combinations to find what works for you."
    },
    {
      id: 8,
      question: "Are there tournaments or competitive play?",
      answer: "Yes! We have a ranked ladder system, weekly tournaments, and special seasonal events with exclusive rewards for top performers."
    },
    {
      id: 9,
      question: "Is the game free to play?",
      answer: "Yes, Poki War is completely free to play. While you can purchase gems to buy card packs faster, everything in the game can be earned through regular play."
    },
    {
      id: 10,
      question: "How do I report bugs or get help?",
      answer: "You can contact our support team through the Contact Us page, or join our community Discord server where our team actively helps players."
    }
  ];

  return (
    <GameLayout>
      <div className="max-w-3xl mx-auto">
        <div className="glass-panel mb-8">
          <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-gray-300">
            Find answers to the most common questions about Poki War. Can't find what you're looking for? 
            Feel free to <a href="/contact" className="text-game-primary hover:underline">contact us</a>.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq) => (
            <AccordionItem 
              key={faq.id} 
              value={`item-${faq.id}`}
              className="glass-panel overflow-hidden border-none"
            >
              <AccordionTrigger className="text-xl font-medium px-6 py-4 hover:no-underline hover:bg-white/5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </GameLayout>
  );
};

export default FAQPage;
