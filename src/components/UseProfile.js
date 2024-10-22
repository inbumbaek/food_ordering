import { useEffect, useState } from "react";

export default function UseProfile() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch('/api/profile').then(response => {
      response.json().then(data => {
        setIsAdmin(data.admin);
        setLoading(false);
      })
    })
  }, []);
}