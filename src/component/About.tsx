
import myPhoto from '../assets/bg2.png'; // Import your image

const About = () => {
  return (
    <div id='about' className="container cursive-font mx-auto px-4 py-8 grid grid-cols-2 gap-8 items-center">
      <div>
        <img src={myPhoto} alt="My Photo" className="w-3/4 h-auto rounded-full shadow-lg" />
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4 text-rose-500">About Me</h1>
        <p className="text-lg mb-4">
         Hi there! 👋 I'm Catherine, a passionate and creative software developer based in Ghana. 
         My journey into the world of technology began out of sheer curiosity when I decided to venture into coding on my own. 
         Without a formal background in computer science,I embarked on a self-learning journey to master the art of software development.
        </p>
        <p className="text-lg mb-4">
          Through countless hours of online tutorials, coding bootcamps, and hands-on projects, I honed my skills in building web applications. 
          What started as a hobby quickly turned into a full-fledged career as I discovered my passion for creating innovative solutions through code.
        </p>
        <p className="text-lg">
        One of the most rewarding experiences in my journey so far has been contributing to the development of an app that empowered small-scale farmers 
        in rural areas by providing them with real-time access to market prices for their produce. Witnessing the tangible impact of technology on improving the 
        livelihoods of people has ignited my passion and motivation to continue exploring innovative solutions in the field.

        </p>
      </div>
    </div>
  );
}

export default About;
