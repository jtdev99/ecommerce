import { Outlet } from "react-router-dom";

const AdminWrapper = () => {
    return (
        <div>
            {/* Sidebar */}
            <p>Sidebar</p>
            {/* Main */}
            <main>
                {/* Header */}
                <p>Header</p>
                {/* Section */}
                <Outlet />
            </main>
        </div>
    );
};

export default AdminWrapper;
