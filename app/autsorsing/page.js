import About from "@/app/_components/autsorsing/About";
import AboutInterlab from "@/app/_components/autsorsing/AboutInterlab";
import Advantages from "@/app/_components/autsorsing/Advantages";
import BlockСontact from "@/app/_components/autsorsing/BlockContact";
import Counter from "@/app/_components/autsorsing/Counter";
import Form from "@/app/_components/autsorsing/ConnectForm";
import ReviewSlider from "../_components/autsorsing/ReviewsSlider";

export default function AboutPage() {
    return (
        <main className="w-full h-auto bg-white pb-24">
            <About />
            <div className="w-full max-w-[1440px] px-2 mx-auto">
                <AboutInterlab />
                <Advantages/>
                <BlockСontact/>
                <Counter/>
                <ReviewSlider/>
                <Form/>
            </div>
        </main>
    );
}
