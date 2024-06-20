import { PaperClipIcon } from "@heroicons/react/24/outline"

interface CertificationCardProps {
    title: string,
    description: string,
    bgUrl: string,
    certificationUrl: string
}

export function CertificationCard({ title, description, bgUrl, certificationUrl }: CertificationCardProps) {
    return (
        <div className="rounded-xl relative group border border-[#33353F]" style={{ background: `url(${bgUrl})`, backgroundSize: "cover" }}>
            <div className="absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center">
                <a
                    href={certificationUrl} target="_blank"
                    className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                >
                    <PaperClipIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
                </a>
            </div>
            <div className="flex flex-col text-white rounded-b-xl mt-3 bg-[#181818] py-3 px-4 overflow-hidden">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className="text-[#ADB7BE] break-words">{description}</p>
            </div>
        </div>
    )
}