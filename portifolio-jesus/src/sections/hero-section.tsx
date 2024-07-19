import { motion } from "framer-motion";
import fotoJp from "../assets/fotoJP.jpeg";
import { TypeAnimation } from "react-type-animation";
import { AppButton } from "../components/app-button";
import { useTranslation } from "react-i18next";
import jpCVPt from "../assets/CurriculoJesusIA.pdf";
import jpCVEn from "../assets/JESUS-English.pdf";
import i18n from "../i18n";

export function HeroSection() {
    const { t } = useTranslation();

    const jpCV = i18n.language === 'en-US' ? jpCVEn : jpCVPt

    return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 flex flex-col justify-center text-center sm:text-left lg:justify-self-start"
                >
                    <h1 className="mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-black">
                            {t('app.presentation')}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={["Jesus Pastorini", 3000, t('app.carreer'), 1000]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <div>
                        <a href="/#contact">
                            <AppButton>{t('app.hire_me')}</AppButton>
                        </a>
                        <a
                            href={jpCV} target="_blank"
                            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-500 to-black hover:bg-slate-800 mt-3 lg:text-lg cursor-pointer transition-all duration-100 ease-in transform hover:scale-105"
                        >
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-6 py-2 cursor-pointer transition-all duration-100 ease-in transform hover:scale-100">
                                {t('app.cv')}
                            </span>
                        </a>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] relative ">
                        <img
                            src={fotoJp}
                            alt="minhaFoto"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
                            width={350}
                            height={350}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
