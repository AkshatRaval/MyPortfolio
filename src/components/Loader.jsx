import { Html, useProgress } from "@react-three/drei"

const Loader = () => {
    const { progress } = useProgress();
    return (
        <Html center className="backdrop-blur-3xl text-2xl w-screen h-screen text-center flex flex-col justify-center items-center">
            {progress}% Loaded
        </Html>
    )
}

export default Loader