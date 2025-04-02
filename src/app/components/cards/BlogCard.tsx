"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const BlogCard = ({ title, description, image, author, date }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl p-4 max-w-xs">
      <img className="h-40 w-full object-cover rounded-md" src={image} alt={title} />
      <div className="mt-3">
        <div className="uppercase tracking-wide text-xs text-blue-600 font-semibold">Blog</div>
        <a href="#" className="block mt-1 text-sm font-medium text-gray-900 hover:underline">{title}</a>
        <p className="mt-2 text-gray-600 text-xs">{description}</p>
        <div className="mt-3 text-xs text-gray-500">
          <p className="font-semibold text-gray-900">{author}</p>
          <p>{date}</p>
        </div>
        <button className="mt-3 w-full bg-blue-600 text-white py-1.5 rounded-lg text-xs hover:bg-blue-700 transition">
          Leia mais
        </button>
      </div>
    </div>
  );
};

export default function BlogCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const itemsPerPage = 3;

  const blogs = [
    { title: "A Revolução da IA no Direito", description: "Lorem ipsum dolor sit amet...", image: "https://source.unsplash.com/400x300/?law,technology", author: "Larissa Corrêa", date: "2 de Abril de 2025" },
    { title: "Proteção de Dados na Advocacia", description: "Praesent libero. Sed cursus ante dapibus diam.", image: "https://source.unsplash.com/400x300/?cybersecurity,law", author: "Ana Beatriz", date: "10 de Março de 2025" },
    { title: "Blockchain e Contratos Inteligentes", description: "Donec aliquet. Lorem ipsum dolor sit amet.", image: "https://source.unsplash.com/400x300/?blockchain,law", author: "Carlos Eduardo", date: "15 de Fevereiro de 2025" },
    { title: "O Futuro da Advocacia Digital", description: "Suspendisse potenti. Etiam feugiat lorem non metus.", image: "https://source.unsplash.com/400x300/?digital,law", author: "Mariana Silva", date: "5 de Janeiro de 2025" },
    { title: "Automação Jurídica e Riscos Éticos", description: "Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.", image: "https://source.unsplash.com/400x300/?automation,law", author: "João Pedro", date: "22 de Dezembro de 2024" }
  ];

  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalPages]);

  return (
    <div className="w-full flex flex-col items-center overflow-hidden px-4 mt-12">
      {/* Grid de Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogs.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage).map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>

      {/* Bolinhas Indicadoras */}
      <div className="flex space-x-2 mt-6">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-blue-600 scale-125" : "bg-gray-300"}`}
          />
        ))}
      </div>

      {/* Botão "Ver Todas" */}
      <button
        onClick={() => router.push("/artigos")}
        className="mt-6 px-6 py-2 space-x-2 bg-blue-600 text-white text-sm rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Ver Todas
      </button>
    </div>
  );
}
