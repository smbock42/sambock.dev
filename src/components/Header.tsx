import Link from "next/link";
import { Button } from "./ui/button";


export default function Header() {
    return (
        <div className="text-center mb-12">
            <header className="text-5xl font-bold">Sam Bock</header>
            <p className="mt-4 text-xl text-gray-600">Software Engineer specializing in AI/ML and Full-Stack Development</p>
            <div className="mt-6 space-x-4">
                <Button variant={"link"}>
                    <Link href={'https://linkedin.com/in/smbock42'} target="_blank">
                        LinkedIn
                    </Link>
                </Button>
                <Button variant={"link"}>
                    <Link href={'https://linkedin.com/in/smbock42'} target="_blank">
                        GitHub
                    </Link>
                </Button>
                <Button variant={"link"}>
                    <Link href={'https://linkedin.com/in/smbock42'} target="_blank">
                        Resume
                    </Link>
                </Button>
            </div>
        </div>
    )
}