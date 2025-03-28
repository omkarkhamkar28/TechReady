import { useState, useEffect } from "react";
import axios from "axios";

export default function useUser(userId) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!userId) return;

    const getUser = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3001/auth/user/${userId}`);
        setUser(data?.user);
      } catch (err) {
        setError(err.response?.data?.message || "Error fetching user");
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, [userId]);

}
