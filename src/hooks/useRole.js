import useAuth from "./useAuth";

export default function useRole() {
  const { role } = useAuth();
  return {
    role,
    isAdmin: role === "admin",
    isCouple: role === "couple",
    isShop: role === "shop",
    isGuest: role === "guest"
  };
}
