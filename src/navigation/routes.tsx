import { Route, Routes } from "react-router-dom";
import LoginPage from "../features/auth/screens/login";
import MainLayout from "../layout/mainLayout";
import HomePage from "../features/dashboard/screens/homePage";
import SignupPage from "../features/auth/screens/signup";
import ProtectedRoute from "../components/protectedRoute/protectedRoute";
import AboutPage from "../features/about/screens/about";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={ <MainLayout />}>
                <Route index element={ 
                    <ProtectedRoute>
                        <HomePage/>
                    </ProtectedRoute>
                } />
                <Route path="/login" element={ <LoginPage /> }/>
                <Route path="/signup" element={ <SignupPage />}/>
                <Route path="/about" element={ <AboutPage /> }/>
            </Route>
        </Routes>
    )
}