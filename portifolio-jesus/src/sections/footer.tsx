import { useTranslation } from "react-i18next";
import LogoJp from "../assets/LogoJP.png";

export function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="container p-12 flex justify-between">
                <img src={LogoJp} alt="Bia Logo" width={40} height={40} />
                <p className="text-slate-600">{t('app.footer')}</p>
            </div>
        </footer>
    )
}