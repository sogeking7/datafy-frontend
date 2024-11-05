"use client";

import { useState } from "react";
import { AccountPasswordForm } from "./AccountPasswordForm";
import { AccountDataForm } from "./AccountDataForm";

export const AccountForm = () => {
  const [changePassword, setChangePassword] = useState(false);

  if (changePassword) {
    return <AccountPasswordForm setChangePassword={setChangePassword} />;
  } else {
    return <AccountDataForm setChangePassword={setChangePassword} />;
  }
};
