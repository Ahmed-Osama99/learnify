import { useState } from "react";
import PricingCard from "../components/PricingCard";

const plansData = [
  {
    name: "Free",
    description: "Get started with free courses",
    price: "Free",
    period: null,
    badge: null,

    features: [
      "Access to 50+ free courses",
      "Basic course completion certificates",
      "Community forum access",
      "Mobile app access",
    ],
    buttonText: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    description: "Perfect for serious learners",
    price: { monthly: 29, yearly: 290 },
    period: "/month",
    badge: "Most Popular",
    features: [
      "Unlimited access to all courses",
      "Verified certificates",
      "Offline viewing",
      "Priority support",
      "Course downloads",
      "Ad-free experience",
    ],
    buttonText: "Start Pro Trial",
    highlighted: true,
  },
  {
    name: "Team",
    description: "For teams and organizations",
    price: { monthly: 49, yearly: 470 },
    period: "/month",
    yearlyOff: "17%",
    badge: null,
    features: [
      "Everything in Pro",
      "Team management dashboard",
      "Progress tracking & analytics",
      "Custom learning paths",
      "SSO integration",
      "Dedicated account manager",
    ],
    buttonText: "Contact Sales",
    highlighted: false,
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const togglePlan = () => {
    setIsYearly((p) => !p);
  };
  return (
    <section id="pricing">
      <div className="container text-center">
        <div>
          <h3 className="font-semibold text-primary-600 uppercase">
            Pricing Plans
          </h3>
          <p className="font-display mt-6 text-3xl font-bold lg:text-4xl">
            Choose Your Learning Path
          </p>
          <p className="mt-6 text-gray-600 dark:text-gray-500">
            Start free and upgrade when you're ready. All plans include a 30-day
            money-back guarantee.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 text-sm font-medium">
            <p className={`${isYearly && "text-gray-500 dark:text-gray-400"}`}>
              Monthly
            </p>
            <label
              htmlFor="plan"
              className={`relative inline-block cursor-pointer`}
            >
              <span
                className={`absolute top-1 left-1 h-5 w-5 transform rounded-full bg-gray-100 transition ${isYearly ? "translate-x-7" : "translate-x-0"}`}
              ></span>
              <input
                type="checkbox"
                name="plan"
                id="plan"
                className="peer sr-only"
                checked={isYearly}
                onChange={togglePlan}
              />
              <div
                className={`h-7 w-14 rounded-full bg-gray-300 transition-colors peer-focus:ring-2 peer-focus:ring-primary-700 peer-focus:ring-offset-2 dark:bg-gray-700 ${isYearly && "!bg-primary-700"}`}
              ></div>
            </label>
            <p
              className={`flex items-center gap-2 ${!isYearly && "text-gray-500 dark:text-gray-400"}`}
            >
              Yearly{" "}
              <span className="rounded-full bg-accent-400/50 px-2 py-0.5 text-xs font-semibold text-accent-700 dark:bg-accent-900/30 dark:text-accent-400">
                Save 17%
              </span>
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {plansData.map((plan) => (
            <PricingCard key={plan.name} plan={plan} isYearly={isYearly} />
          ))}
        </div>
        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          All plans include a 30-day money-back guarantee. No questions asked.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
