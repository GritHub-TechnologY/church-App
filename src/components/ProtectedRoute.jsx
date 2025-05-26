import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ roles }) {
  const { user, loading } = useAuth();

  if (loading) return <div className="text-center mt-10">Loading…</div>;
  if (!user) return <Navigate to="/signin" replace />;
  if (roles && !roles.includes(user.primaryRole?.name || user.primaryRole))
    return <Navigate to="/" replace />;

  return <Outlet />;
}