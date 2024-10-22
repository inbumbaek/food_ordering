import { useEffect, useState } from "react";

export default function UseProfile() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminInfoLoading, setAdminInfoLoading] = useState(true);
  useEffect(() => {
    setAdminInfoLoading(true);
    fetch('/api/profile').then(response => {
      response.json().then(data => {
        setIsAdmin(data.admin);
        setAdminInfoLoading(false);
      })
    })
  }, []);
}