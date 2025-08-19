import {Header, StatsCard, TripCard} from "../../../components";

const Dashboard = () => {
    const user = {
        name: "Singh"
    };
    const dashboardStats = {
        totalUsers: 12450,
        usersJoined: { currentMonth: 218, lastMonth: 176 },
        totalTrips: 3210,
        tripsCreated: { currentMonth: 150, lastMonth: 250 },
        userRole: { total: 62, currentMonth: 25, lastMonth: 15 },
    }

    return (
        <main className="dashboard wrapper">
            <Header
                title={`Welcome ${user?.name ?? 'Guest'} 👋🏻`}
                description="Track activity, trends and popular destinations in real time"
            />

            <section className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    <StatsCard
                        headerTitle="Total Users"
                        total={dashboardStats.totalUsers}
                        currentMonthCount={dashboardStats.usersJoined.currentMonth}
                        lastMonthCount={dashboardStats.usersJoined.lastMonth}
                    />
                    <StatsCard
                        headerTitle="Total Trips"
                        total={dashboardStats.totalTrips}
                        currentMonthCount={dashboardStats.tripsCreated.currentMonth}
                        lastMonthCount={dashboardStats.tripsCreated.lastMonth}
                    />
                    <StatsCard
                        headerTitle="Active Users Today"
                        total={dashboardStats.userRole.total}
                        currentMonthCount={dashboardStats.userRole.currentMonth}
                        lastMonthCount={dashboardStats.userRole.lastMonth}
                    />
                </div>
            </section>
            <TripCard />
        </main>
    )
}
export default Dashboard
