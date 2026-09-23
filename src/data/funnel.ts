import { OFFER } from "@/data/offer";

/** Server-side funnel copy. Do not import from client components. */
export const funnel = {
  name: "Fume.Fit - Ultimate Metabolic Reset Formula",
  currency: "INR",
  primaryOffer: {
    name: "1:1 Root-Cause Consultation",
    price: OFFER.price,
    originalPrice: OFFER.originalPrice,
  },
  pricing: {
    consultationPrice: OFFER.price,
    displayedOriginalPrice: OFFER.originalPrice,
    bonusTotalValue: 30000,
    urgencySeconds: OFFER.urgencySeconds,
  },
  cta: {
    primary: "BOOK YOUR 1:1 ROOT-CAUSE CONSULTATION @ ₹198",
    register: "REGISTER NOW",
    bookShort: "BOOK YOUR 1:1 ROOT-CAUSE CONSULTATION",
  },
  refund:
    "If you feel the session wasn't useful, we'll refund the fee. No questions asked.",
} as const;

export const heroContent = {
  eyebrow: "VIDEO UNLOCKED",
  headline: "Ultimate Metabolic Reset Formula For Busy Professionals!",
  subheadline:
    "Fix The Root Cause of Diabetes, Thyroid & Belly Fat with FUME Science-Backed Metabolic Reset Framework. Without Diets, Gym, or Lifelong Medicines.",
  socialProof:
    "Trusted by 4,000+ busy professionals with diabetes, thyroid & fertility challenges",
  videoLabel: "Click Play",
};

export const bonuses = [
  {
    number: 1,
    name: "50 Delicious Templates for Hormone Balance",
    description:
      "Enjoy guilt-free, tasty recipes designed to naturally balance your hormones and shed stubborn belly fat.",
    valueLabel: "Bonus",
  },
  {
    number: 2,
    name: "Meal Planning Made Simple",
    description:
      "Master meal planning with practical tips and proven strategies that fit seamlessly into your busy lifestyle.",
    valueLabel: "Bonus",
  },
  {
    number: 3,
    name: "5 Secrets to Boost Your Metabolism",
    description: "Discover natural techniques to ignite your metabolism.",
    valueLabel: "Bonus",
  },
  {
    number: 4,
    name: "5 Proven Ways to Trim Your Waist",
    description: "Get actionable strategies to achieve a flat belly effortlessly.",
    valueLabel: "Bonus",
  },
  {
    number: 5,
    name: "Exclusive One-on-One Consultation Call",
    description:
      "Receive a customized health game plan tailored to your unique goals and lifestyle.",
    valueLabel: "Bonus",
  },
] as const;

export const valueStack = {
  totalValue: 30000,
  offerPrice: 198,
  headline: "Total Value: ₹30,000. Yours Today for Just ₹198!",
  condition: "Only when you claim your call",
};

export const guarantee = {
  headline: "Our Bold Promise: 100% Satisfaction or Your Money Back!",
  description:
    "We are so confident in the transformative value of our program that we're willing to guarantee it. During your one-on-one consultation, you'll receive actionable, personalized steps to help you achieve your health and fitness goals faster than ever before.",
  guarantee:
    "If you follow the strategies we provide and don't see real, measurable results, we'll refund your consultation fee in full. No questions asked.",
  closing:
    "Your success is our priority, and with our proven system, you've got nothing to lose and everything to gain!",
};

export const benefits = {
  headline: "Here's What You'll Gain From This 1:1 Call",
  items: [
    "Clarity on why previous attempts at weight loss haven't worked, and how to fix it permanently.",
    "A step-by-step action plan tailored to your unique health and fitness goals.",
    "Strategies to maximize results with minimal time investment.",
    "Renewed energy, confidence, and control over your health.",
  ],
  closing: "This isn't just a consultation. It's the first step to a healthier, happier you.",
};

export const socialProofIntro = {
  headline: "4,000+ Busy Professionals Have Transformed Their Lives!",
  brand: "FUME",
};

export const transformations = [
  { person: "Anjana", result: "Reduced 11 kg & reversed PCOS" },
  { person: "Smita", result: "Lost 20 kg & reversed PCOS" },
  { person: "Ramdas Jagtap", result: "51 yrs young. Transformation" },
  { person: "Vinayak", result: "Reduced 7 inches & reversed metabolic distress" },
  { person: "Deepak", result: "Lost 26 kgs & 11 inch from waist" },
  { person: "FUME Client", result: "Reduced liver markers and cholesterol" },
] as const;

export const videoTestimonials = [
  {
    person: "Dr. Paramita Mishra",
    headline: "Dr. Paramita Mishra Shares her Fitness Journey",
  },
  {
    person: "Arun",
    headline: "At 80, He Looks 50!",
    description: "Arun Credits Fume.Fit for His Unbelievable Transformation",
  },
  {
    person: "Vandana",
    headline: "Vandana shares how she lost 6.5 kg in a short time.",
  },
  {
    person: "FUME Client",
    headline: "Nothing Worked. Until Fume!",
  },
  {
    person: "FUME Client",
    headline:
      "This One Call Could Save You Lakhs in Healthcare Costs and Help You Avoid Serious Health Risks.",
  },
] as const;

export const founder = {
  person: "Dr. Uma",
  role: "Hormonal Health and Transformational Coach and Founder of FUME",
  introHeadline: "Meet Dr. Uma, the Creator of the Metabolic Reset Formula",
  story:
    "Like many of you, I faced severe health challenges that seemed impossible to overcome: diabetes, high cholesterol, Hypothyroid, and constant fatigue from working in a high-stress corporate job for 17 years.",
  previousAttempts:
    "I tried every diet and intense workout routine I could find, but nothing worked.",
  startingWeight: "75 kg",
  personalResult: "Lost 19 kgs, reversed chronic conditions, and regained energy.",
  createdSystem: "Metabolic Reset Formula",
  claimedReach: "Has helped over 10,000 individuals",
  mission: "Help one million people transform their health and reclaim their youthfulness.",
  philosophy: "Science-backed, sustainable solutions that work for busy professionals.",
  closing: "If I can do it, so can you!",
};

export const decision = {
  headline:
    "Let's Be Honest. This Proven Method Works, and Now It's Your Moment to Decide!",
  options: [
    {
      option: 1,
      title: "Stick With Old Habits",
      description:
        "You can choose to stick with your old habits, but chances are, nothing will change.",
      tone: "negative" as const,
    },
    {
      option: 2,
      title: "Take Action Today",
      description:
        "Take action today. Book a call and receive a personalized game plan from an expert with a proven track record of transforming the lives of thousands of professionals like you!",
      tone: "positive" as const,
    },
  ],
  closing:
    "The choice is yours. But remember, every journey starts with a single step. Make today the day you take that step toward a healthier, happier you.",
};

export const footer = {
  copyright: "Copyright © 2025 Fume | All Rights Reserved",
  facebookDisclaimer:
    "This site is not a part of Meta or Facebook Inc. Additionally this site is not endorsed by Facebook in any way. Facebook is a trademark of Meta Inc.",
  links: ["Disclaimer", "Privacy Policy"] as const,
};

export { OFFER };
export const CONSULTATION_ANCHOR = OFFER.href;
