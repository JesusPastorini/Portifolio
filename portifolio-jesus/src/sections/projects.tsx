"use client";
import { useState, useRef } from "react";
import { ProjectCard } from "../components/project-card";
import { ProjectTag } from "../components/project-tag";
import { motion, useInView } from "framer-motion";
import { useTranslation } from 'react-i18next';
import Football from '../assets/Home.jpeg';
import CookBook from '../assets/cook.png';
import LinkTreeBia from '../assets/bonusDropdown.gif';
import MeuPortfolio from "../assets/portifolioJP.png";
import emConstrucao from "../assets/site-construcao.jpg";
import shoppingCart from "../assets/shoppingC.png";
import manosGrill from "../assets/manosgrill1.png";

export function Projects() {
    const { t } = useTranslation();
    const projectsData = [
        {
            id: 7,
            title: t('app.project7_title'),
            description: t('app.project7_description'),
            image: manosGrill,
            tag: [t('app.tag_projects')],
            gitUrl: "https://github.com/JesusPastorini/RestauranteManosGrill",
            previewUrl: "https://restaurante-manos-grill.vercel.app/",
        },
        {
            id: 1,
            title: t('app.project1_title'),
            description: t('app.project1_description'),
            image: CookBook,
            tag: [t('app.tag_projects')],
            gitUrl: "https://github.com/JesusPastorini/App-de-Receitas",
            previewUrl: "https://app-de-receitas-rosy.vercel.app/meals",
        },
        {
            id: 2,
            title: t('app.project2_title'),
            description: t('app.project2_description'),
            image: Football,
            tag: [t('app.tag_projects')],
            gitUrl: "https://github.com/JesusPastorini/processoseletivopagesaude",
            previewUrl: "https://processoseletivopagesaude.vercel.app/",
        },
        {
            id: 3,
            title: t('app.project3_title'),
            description: t('app.project3_description'),
            image: LinkTreeBia,
            tag: [t('app.tag_projects')],
            gitUrl: "https://github.com/JesusPastorini/TrybeWallet",
            previewUrl: "/",
        },
        {
            id: 4,
            title: t('app.project4_title'),
            description: t('app.project4_description'),
            image: MeuPortfolio,
            tag: [t('app.tag_projects')],
            gitUrl: "https://github.com/",
            previewUrl: "/",
        },
        {
            id: 5,
            title: t('app.project5_title'),
            description: t('app.project5_description'),
            image: shoppingCart,
            tag: [t('app.tag_projects')],
            gitUrl: "https://github.com/JesusPastorini/shopping-cart",
            previewUrl: "/",
        },
        {
            id: 6,
            title: t('app.project6_title'),
            description: t('app.project6_description'),
            image: emConstrucao,
            tag: [t('app.tag_contributions')],
            gitUrl: "",
            previewUrl: "/",
        },
    ]
    const [tag, setTag] = useState(t('app.tag_projects'));
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag: string) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-28 mb-8 md:mb-12">
                {t('app.my_projects')}
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    name={t('app.tag_projects')}
                    isSelected={tag === "Meus projetos"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name={t('app.tag_contributions')}
                    isSelected={tag === "Minhas contribuições"}
                />
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}