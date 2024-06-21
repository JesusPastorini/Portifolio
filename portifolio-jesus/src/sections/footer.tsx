import { useTranslation } from "react-i18next";
import LogoJp from "../assets/Logo6.png";

export function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="container p-8 flex flex-col items-center">
                <img src={LogoJp} alt="Bia Logo" width={100} height={100} className="mb-4" />
                <div className="flex-grow flex items-end w-full">
                    <p className="text-slate-600">{t('app.footer')}</p>
                </div>
            </div>
        </footer>
    )
}