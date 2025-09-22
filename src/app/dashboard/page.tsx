"use client"

import { useRouter } from "next/navigation"

export default function Dashboard() {
    const router = useRouter()

    const handleLogout = () => {
        // For now just redirect back to login
        // (you can replace this with proper auth/session clearing later)
        router.push("/")
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    Dashboard
                </h1>
                <p className="text-gray-600 text-center mb-6">
                    Welcome to BitFactory!
                </p>
                <button
                    onClick={handleLogout}
                    className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
                >
                    Logout
                </button>
            </div>
        </div>
    )
}
