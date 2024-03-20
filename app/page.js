import Image from "next/image";
import "./page.css";
import HeroSection from "@/src/hero-section/hero-section";
import ArticleContainer from "@/src/article-container/article-container";

export default function Home() {
  return (
    <>
      <HeroSection />

      <hr className="hidden-hr" />
      <h2>How it works.</h2>
      <hr />

      <ArticleContainer />
    </>
  );
}
