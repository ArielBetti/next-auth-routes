import React from "react";

// page-component
import UserBadge from "./components/userBadge";

// ::
export default function Profile() {
  return (
    <div className="w-full">
      {/** @ts-expect-error */}
      <UserBadge />
    </div>
  );
}
