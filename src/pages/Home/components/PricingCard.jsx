import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const PricingCard = ({ plan, isYearly }) => {
  const isPlanFree = plan.name === "Free";
  const discountedPrice = Math.floor(plan.price.monthly * 12 * 0.17);
  return (
    <div
      className={`relative rounded-2xl border p-8 transition duration-300 hover:-translate-y-1 dark:border-gray-800 dark:bg-gray-900 ${plan.highlighted ? "border-primary-400 bg-primary-100 shadow-lg dark:border-primary-600 dark:bg-primary-950/50" : "border-gray-300 hover:shadow-sm"}`}
    >
      {plan.highlighted && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary-600 px-4 py-1 text-sm font-semibold text-gray-50">
          {plan.badge}
        </span>
      )}
      <h3 className="font-display text-2xl font-bold">{plan.name}</h3>
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        {plan.description}
      </p>
      <h4 className="font-display mt-6 text-5xl font-bold">
        {isPlanFree
          ? plan.name
          : isYearly
            ? `$${plan.price.yearly}`
            : `$${plan.price.monthly}`}
        <span className="text-lg text-gray-400">
          {isYearly && !isPlanFree ? "/yearly" : plan.period}
        </span>
      </h4>
      {isYearly && !isPlanFree && (
        <span className="mt-4 block text-sm font-medium text-accent-700 dark:text-accent-400">{`Save $${discountedPrice}/year`}</span>
      )}
      <ul className="mt-6 space-y-4">
        {plan.features.map((f, i) => (
          <li key={`${plan.name}-${i}`} className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faCheck}
              size="sm"
              className="text-accent-600"
            />
            <span className="text-gray-700 dark:text-gray-300">{f}</span>
          </li>
        ))}
      </ul>
      <button
        className={`mt-8 w-full cursor-pointer rounded-full py-4 font-semibold transition ${plan.highlighted ? "primary-btn" : "border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-200/50 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-800"}`}
      >
        {plan.buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
