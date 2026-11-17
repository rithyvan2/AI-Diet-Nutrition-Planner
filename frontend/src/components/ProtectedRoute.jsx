// ProtectedRoute — allows dashboard-first access without forcing login
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  // If user is not available, still allow the page to render in this dashboard-first mode.
  return children;
}
