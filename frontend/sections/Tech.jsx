import { LuCodesandbox } from "react-icons/lu";

const Tech = () => {
    return (
        <section className="flex flex-col bg-white pt-10">
            <div className="ml-30 w-2/5">
                <h1 className="text-black font-bold text-4xl">Technologies I Work With</h1>
                <h1 className="text-black font-medium text-1xl mt-4"> I am proficient in a variety of programming languages and frameworks.My toolkit includes modern technologies that enhance my development capabilities.</h1>
            </div>
    
            <div className="flex justify-between mt-10 mx-30">
                <div className="flex flex-col w-3/10 space-y-3 border-1 border-black rounded-sm p-5">
                    <LuCodesandbox className="text-black text-5xl" />
                    <h1 className="text-black font-semibold text-1xl">Programming Languages</h1>
                    <h1 className="text-black font-medium text-1xl">JavaScript,Python,Java and C++ are my primary languages</h1>
                </div>
                <div className="flex flex-col w-3/10 space-y-3 border-1 border-black rounded-sm p-5">
                    <LuCodesandbox className="text-black text-5xl" />
                    <h1 className="text-black font-semibold text-1xl">Frameworks & Libraries</h1>
                    <h1 className="text-black font-medium text-1xl">I utilize React and Node.js for my projects</h1>
                </div>
                <div className="flex flex-col w-3/10 space-y-3 border-1 border-black rounded-sm p-5">
                    <LuCodesandbox className="text-black text-5xl" />
                    <h1 className="text-black font-semibold text-1xl">Tools & Technologies</h1>
                    <h1 className="text-black font-medium text-1xl">Git,Docker and GCP are intregal to my workflow</h1>
                </div>
       

            </div>

        </section>
    );
};

export default Tech;