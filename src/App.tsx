import Login from "@/components/login";

function App() {
    console.log(process.env.NODE_ENV); // 输出：development
    console.log(process.env.VITE_API_URL); // 输出：http://localhost:3000
    return (
        <>
            <Login/>
        </>
    )
}

export default App
