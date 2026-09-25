export const codeExamples = {
    "App.jsx":`
    import {useState} from "react;
    import {SplashCode} from "@splashcode/ai";
    
    function App() {
    const [code,setCode] =useState("");
    const handleAICompletion = async () => {
        const suggestion = await SplashCode.complete(code);
        setCode(suggestion);
    }
        
    return (
    <div className="app">
        <CodeEditor 
            onChange={setCode}
            onAI={handleAICompletion}
        />
    </div>
    );
    }`,
    "Hero.jsx":`
    import {useState} from "react";
    import {SplashCode} from "@splashcode/ai";

    function Hero() {
    const [message,setMessage] = useState("");
    const handleGenerate = async () => {
        const suggestion = await SplashCode.complete(message);
        setMessage(suggestion);
    }

    return (
    <section className="hero">
        <div className="hero-content">
            <h1>Build faster with AI</h1>
            <p>Write better code with intelligent suggestions.</p>
            <button onClick={handleGenerate}>
                Generate Code
            </button>
        </div>
    </section>
    );
    }`,
   "Navbar.jsx":`
    import {useState} from "react";
    import {Link} from "react-router-dom";

    function Navbar() {
    const [menuOpen,setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
    <nav className="navbar">
        <Link to="/" className="logo">SplashCode</Link>
        <button onClick={toggleMenu}>
            Menu
        </button>
        <div className={menuOpen ? "nav-links open" : "nav-links"}>
            <Link to="/">Home</Link>
            <Link to="/features">Features</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </nav>
    );
    }`,
}

export const floatingCards = {
    "App.jsx": {
        bgColor: "bg-blue-500/20",
        iconColor: "text-blue-400",
        textColor: "text-blue-200",
        contentColor: "text-blue-300",
        icon: "AI",
        title: "Smart Completion",
        content: "AI-powered code suggestions in real-time",
    },
     "Hero.jsx": {
        bgColor: "bg-purple-500/20",
        iconColor: "text-purple-400",
        textColor: "text-purple-200",
        contentColor: "text-purple-300",
        icon: "AI",
        title: "Auto Animation",
        content: "Dynamic typing effects generated automatically",
    },
     "Navbar.jsx": {
        bgColor: "bg-emerald-500/20",
        iconColor: "text-emerald-400",
        textColor: "text-emerald-200",
        contentColor: "text-emerald-300",
        icon: "AI",
        title: "Smart Search",
        content: "Intelligent code search across your website",
    },
}