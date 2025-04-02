import Image from "next/image";
import Navbar from "../app/components/Navbar";
import ParticleAnimation from "../app/components/ParticleAnimation/ParticleAnimation";
import BlogCard from "./components/cards/BlogCard";
import Contact from "./components/Contato/Contact";
import Footer from "./components/Footer/Footer";
import FloatingChatbot from "./components/FloatingChatbot/FloatingChatbot";

export default function Home() {
  return (
    <>
    <Navbar />
    <ParticleAnimation />
    <BlogCard title={""} description={""} image={""} author={""} date={""} />
    <Contact />
    <Footer />
    <FloatingChatbot />
    
    </>
  );
}
