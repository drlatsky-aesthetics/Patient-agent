import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AppShell from './components/layout/AppShell'
import HomeScreen from './screens/HomeScreen'
import DiscoverScreen from './screens/DiscoverScreen'
import MembershipScreen from './screens/MembershipScreen'
import RewardsScreen from './screens/RewardsScreen'
import ProfileScreen from './screens/ProfileScreen'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
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
