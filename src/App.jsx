import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import ServiceTitle from "./Components/Service Title/ServiceTitle";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import ContactTitle from "./Components/Contact Title/ContactTitle";
import TarotSpread from "./Components/TarotReader/TarotSpread";

import CardBack from "./assets/Card_Back.png";
import Empress from "./assets/Empress.png";
import Fool from "./assets/Fool.png";
import Hermit from "./assets/Hermit.png";
import Lovers from "./assets/Lovers.png";
import Magician from "./assets/Magician.png";
import Moon from "./assets/Moon.png";
import Star from "./assets/Star.png";
import Sun from "./assets/Sun.png";
import World from "./assets/World.png";
import TarotTitle from "./Components/Tarot Title/TarotTitle";
import Footer from "./Components/Footer/Footer";

const tarotImages = [
  Empress,
  Fool,
  Hermit,
  Lovers,
  Magician,
  Moon,
  Star,
  Sun,
  World,
];

const meanings = [
  {
    title: "Empress",
    description:
      "The Empress signifies nurturing, fertility, abundance, and the powerful influence of the feminine. Drawing this card often indicates a period of blossoming creativity and growth, whether in relationships, projects, or even literal birth. She encourages you to embrace compassion, self-love, and the pleasures of nature. The Empress suggests that your future holds opportunities for caring relationships or the fulfillment of your deepest desires, if you open your heart and trust in the process of giving and receiving love."
  },
  {
    title: "Fool",
    description:
      "The Fool represents new beginnings, innocence, and a spirit of adventure. This card encourages you to take a leap of faith, embrace the unknown, and trust in your instincts. The Fool's journey is one of possibility and risk, reminding you that personal growth often requires courage and an open mind. When the Fool appears, it may signal that a transformative opportunity is on the horizon—just be brave, stay curious, and let go of past fears that might hold you back from a promising future."
  },
  {
    title: "Hermit",
    description:
      "The Hermit represents solitude, introspection, and the search for inner guidance. This card asks you to retreat from external distractions and seek wisdom within. Through self-reflection, meditation, or quiet study, the Hermit encourages you to trust your own counsel and illuminate your personal truth. In terms of future influence, the Hermit may suggest a need for patience, soul-searching, or strategic withdrawal in order to see your path forward more clearly and avoid hasty decisions."
  },
  {
    title: "Lovers",
    description:
      "The Lovers symbolize deep bonds, harmony, and important choices—often in relationships or moral dilemmas. This card is about more than romantic love; it’s also about the integration of opposites, mutual respect, and the value of connection. When the Lovers appear, you may be faced with a crucial choice that tests your integrity and alignment with your values. The card suggests that coming times will highlight partnerships, unity, or decisions that profoundly shape your life's direction."
  },
  {
    title: "Magician",
    description:
      "The Magician embodies personal power, resourcefulness, and the ability to manifest your desires. With all the tools on the table, this card urges you to align thought, intention, and action. The Magician's appearance predicts a period where your skills, focus, and willpower can create extraordinary results. Your future holds great potential if you seize every opportunity, trust your abilities, and channel energy positively—you are poised to turn ideas into reality."
  },
  {
    title: "Moon",
    description:
      "The Moon brings forth intuition, dreams, and hidden truths, but also confusion and illusion. Things may not be as they seem, and subconscious fears or anxiety might cloud your judgement. The Moon urges you to listen closely to your instincts and decipher signs from your inner world. As a future influence, this card warns of potential deception, misunderstandings, or emotional uncertainty; yet it also reminds you that, with patience, the shadows will lift and clarity will return."
  },
  {
    title: "Star",
    description:
      "The Star is a card of hope, renewal, and spiritual inspiration. After hardship or struggle, the Star provides comfort and assurance that healing is underway. This card encourages faith in yourself and the universe, trusting that a brighter future is unfolding. When the Star appears, it signals an optimistic new phase in your life, imbued with a sense of possibility, creativity, and guidance from a higher source. It's a sign to keep your dreams alive and your heart open."
  },
  {
    title: "Sun",
    description:
      "The Sun radiates positivity, success, and joy. It is one of the most auspicious cards, promising clarity, vitality, and achievement after difficulties. The Sun invites you to celebrate your strengths, share happiness freely, and bask in the abundance that life offers. As for the future, the Sun predicts favorable outcomes, renewed energy, and uplifting experiences—now is the time to step confidently into the spotlight and let your inner light shine."
  },
  {
    title: "World",
    description:
      "The World represents completion, fulfillment, and wholeness. This card marks the successful achievement of your goals, a cycle coming full circle, and integration of all life’s lessons. The World suggests that you will soon enjoy a period of reward, recognition, or travel. In your future, expect closure of old chapters and the opening of new, promising opportunities—inviting you to move forward with confidence, wisdom, and a sense of belonging in the universe."
  }
];


const App = () => (
  <div>
    <Navbar />
    <Hero />
    <div className="container">
      <About />
      <ServiceTitle />
      <Services />
      <TarotTitle/>
      <div style={{ marginTop: 40, marginBottom: 40 }}>
        <TarotSpread tarotImages={tarotImages} cardBackImg={CardBack} meanings={meanings} />
      </div>

      <ContactTitle/>
      <Contact/>
      <Footer/>
    </div>
  </div>
);

export default App;
