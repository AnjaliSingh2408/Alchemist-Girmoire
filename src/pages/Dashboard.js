import React from "react";
import { useAuth } from "../hooks/useAuth";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold text-primary mb-4">
        Welcome, {user?.name || "User"}!
      </h1>
      <p className="text-gray-600 text-lg">
        You have successfully logged in to your ChronoAlchemists dashboard.
      </p>
    </div>
  );
}
