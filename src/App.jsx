import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react'
import AppShell from './components/layout/AppShell'
import HomeScreen from './screens/HomeScreen'
import DiscoverScreen from './screens/DiscoverScreen'
import MembershipScreen from './screens/MembershipScreen'
import RewardsScreen from './screens/RewardsScreen'
import ProfileScreen from './screens/ProfileScreen'
import SignInScreen from './screens/SignInScreen'

function ProtectedRoute({ children }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignInScreen />} />
        <Route
          element={
            <ProtectedRoute>
              <AppShell />
            </ProtectedRoute>
          }
        >
          <Route index element={<HomeScreen />} />
          <Route path="discover" element={<DiscoverScreen />} />
          <Route path="membership" element={<MembershipScreen />} />
          <Route path="rewards" element={<RewardsScreen />} />
          <Route path="profile" element={<ProfileScreen />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
