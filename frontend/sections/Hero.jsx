import me from "../images/me.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex bg-white justify-between">
      <div className="flex flex-col justify-center ml-40 w-2/5"> 
        <h1 className="text-black font-bold text-5xl">Meet Shanil Praveen : Your Future Tech Partner</h1>
        <h1 className="text-black font-medium text-1xl pt-10">I'm a Computer Science & Engineering undergraduate dedicated to creating innovative solutions through technology.<br></br>Join me in my journey as I explore the inersection of code and creativity.</h1>
        <div className="flex mt-10">
            <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-800">My Work</button>
            <button className="bg-green-500 text-white font-medium py-2 px-4 rounded hover:bg-green-700 ml-5">About Me</button>
        </div>
      </div>
      <Image src={me} alt="Picture of the author" width={500} height={500}
      className="mr-30"/>
    </section>
  );
};

export default Hero;