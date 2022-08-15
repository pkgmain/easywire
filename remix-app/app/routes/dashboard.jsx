import ProfileHeader from "~/components/ProfileHeader";
import AccountOverview from "~/components/AccountOverview";
import RecentActivity from "~/components/RecentActivity";

export default function Dashboard() {
  return (
    <div>
      <ProfileHeader />

      <div className="mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AccountOverview />
        </div>

        <RecentActivity />

      </div>
    </div>
  );
}
