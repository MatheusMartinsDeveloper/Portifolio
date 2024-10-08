import { MdOutlineFileDownload } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";

export default function SectionHero() {
    return (
        <section data-aos="fade-up" className="section-hero">
            <span>Olá Mundo - essa é a minha página de portifólio</span>
            <h1>Meu  nome é <span>Matheus</span> <br /> Eu sou Desenvolvedor FullStack Jr</h1>
            <p>Mesclar os melhores elementos de frontend e backend para forjar <br /> experiências inovadoras para o usuário.</p>
            <div>
                <button><span>Download CV <MdOutlineFileDownload /></span></button>
                <a href="#contato">Contato <FaArrowUp /></a>
            </div>
            <div className="line"></div>
        </section>
    );
}