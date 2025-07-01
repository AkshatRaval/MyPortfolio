import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
    const coreSkills = [
        "java",
        "python",
        "javascript",
        "react",
        "nodejs",
        "android",
        "tailwind-css"
    ]
    const semiCoreSkills = [
        "c",
        "css",
        "html",
        "django",
        "typescript",
        "git",
    ]
    const appSkills = [
        "github",
        "vscode",
        "google"
    ]


    return (
        <div className="relative flex h-[15rem] w-full flex-col items-center justify-center overflow-hidden">
            <OrbitingCircles iconSize={50} radius={150}>
                {coreSkills.map((skill) => (
                    <Icon key={skill} src={`assets/logos/coreSkills/${skill}.svg`} />
                ))}
            </OrbitingCircles>
            <OrbitingCircles iconSize={40} radius={100} reverse speed={2}>
                {semiCoreSkills.map((skill) => (
                    <Icon key={skill} src={`assets/logos/semiCoreSkills/${skill}.svg`} />
                ))}
            </OrbitingCircles>
            <OrbitingCircles iconSize={30} radius={50} speed={4}>
                {appSkills.map((skill) => (
                    <Icon key={skill} src={`assets/logos/Appslogos/${skill}.svg`} />
                ))}
            </OrbitingCircles>
        </div>
    );
}

const Icon = ({ src }) => {
    return <img src={src} className="duration-200 rounded-sm hover:scale-110" />
}