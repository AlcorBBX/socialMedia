import { AuthContext } from "@/providers/AurhProvider";
import { useContext } from "react";

export const useAuth = () => useContext(AuthContext)