import React from "react";
import { Route, Routes } from "react-router-dom";

// ✅ Public Pages
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";

// ✅ Customer Pages
import BookingHistory from "./pages/customer/BookingHistory";
import CustomerDashboard from "./pages/customer/CustomerDashboard";
import CustomerProfile from "./pages/customer/CustomerProfile";

// ✅ Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageBookings from "./pages/admin/ManageBookings";
import ManageGyms from "./pages/admin/ManageGyms";
import ManageUsers from "./pages/admin/ManageUsers";

function App() {
  return (
    <Routes>
      {/* ✅ Public Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* ✅ Customer Routes */}
      <Route path="/customer/dashboard" element={<CustomerDashboard />} />
      <Route path="/customer/profile" element={<CustomerProfile />} />
      <Route path="/customer/bookings" element={<BookingHistory />} />

      {/* ✅ Admin Routes */}
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/users" element={<ManageUsers />} />
      <Route path="/admin/gyms" element={<ManageGyms />} />
      <Route path="/admin/bookings" element={<ManageBookings />} />

      {/* ✅ 404 Page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
