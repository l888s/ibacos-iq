
interface DashboardHeaderProps {
  userName: string;
}

const DashboardHeader = ({ userName }: DashboardHeaderProps) => {
  return (
    <div className="mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, {userName}
        </h1>
        <p className="text-gray-600">Here's your inspection overview for the last 90 days</p>
      </div>
    </div>
  );
};

export default DashboardHeader;
