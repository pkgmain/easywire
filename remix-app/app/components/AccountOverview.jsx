import { CheckCircleIcon, RefreshIcon, ScaleIcon } from "@heroicons/react/outline";
import AccountOverviewCard from "~/components/AccountOverviewCard";

export default function AccountOverview() {
  const cards = [
    { name: "Account balance", href: "#", icon: ScaleIcon, amount: "$30,659.45" },
    { name: "Pending", href: "#", icon: RefreshIcon, amount: "-$19,500.00" },
    { name: "Processed (last 30 days)", href: "#", icon: CheckCircleIcon, amount: "$20,000.00" }
  ];

  return (
    <>
      <h2 className="text-lg leading-6 font-medium text-gray-900">Overview</h2>

      <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) =>
          <AccountOverviewCard key={card.name} card={card} />
        )}
      </div>
    </>
  );
}
