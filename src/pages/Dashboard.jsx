const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Dashboard</h1>
        <p className="text-gray-600 text-center mb-6">Welcome to BitFactory!</p>
        <button
          onClick={() => {
            // Add logout logic here
            window.location.reload()
          }}
          className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Dashboard
