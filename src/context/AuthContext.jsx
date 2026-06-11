import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import toast from "react-hot-toast";
import { auth } from "../firebase/firebase";
import { fetchUserRole, logoutUser } from "../firebase/authService";

const AuthContext = createContext(null);

const demoUsers = {
  admin: { uid: "demo-admin", email: "admin@example.com", role: "admin", displayName: "Demo Admin" },
  couple: { uid: "demo-couple", email: "couple@example.com", role: "couple", displayName: "Demo Couple" },
  shop: { uid: "demo-shop", email: "shop@example.com", role: "shop", displayName: "Demo Shop" },
  guest: { uid: "demo-guest", email: "guest@example.com", role: "guest", displayName: "Demo Guest" }
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedDemo = localStorage.getItem("demoUserRole");
    if (savedDemo && demoUsers[savedDemo]) {
      setUser(demoUsers[savedDemo]);
      setRole(savedDemo);
      setLoading(false);
      return;
    }

    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      setLoading(true);
      try {
        if (firebaseUser) {
          const loadedRole = await fetchUserRole(firebaseUser.uid);
          setUser(firebaseUser);
          setRole(loadedRole || "guest");
        } else {
          setUser(null);
          setRole(null);
        }
      } finally {
        setLoading(false);
      }
    });

    return () => unsub();
  }, []);

  function loginAsDemo(nextRole) {
    localStorage.setItem("demoUserRole", nextRole);
    setUser(demoUsers[nextRole]);
    setRole(nextRole);
    toast.success(`Logged in as demo ${nextRole}`);
  }

  async function logout() {
    localStorage.removeItem("demoUserRole");
    setUser(null);
    setRole(null);
    try {
      await logoutUser();
    } catch {
      // ignore if not logged in with Firebase
    }
    toast.success("Logged out");
  }

  const value = useMemo(() => ({
    user,
    role,
    loading,
    isAdmin: role === "admin",
    isCouple: role === "couple",
    isShop: role === "shop",
    isGuest: role === "guest",
    loginAsDemo,
    logout
  }), [user, role, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuthContext must be used inside AuthProvider");
  return ctx;
}
