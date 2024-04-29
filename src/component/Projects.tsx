
interface Projects {
  id: number;
  title: string;
  description: string;
  link: string;
   image: string;
}

const Projects = () => {
  const projects = [
    { id: 1, image: '/src/assets/tdxapp.png', title: 'TDX APP', description: 'A Commodity Trading Platform designed to revolutionize how sellers and buyers interact in the marketplace. It serves as a digital marketplace where commodities are listed for sale.', link: 'https://tdxapp.ai/' },
    { id: 2, image: '/src/assets/stickynotes.png', title: 'STICKY NOTES APP', description: 'A sticky notes app that helps you capture, organize, and prioritize your thoughts, tasks, and ideas with ease and efficiency.', link: 'https://sticky-notes-seven-rosy.vercel.app/' },
    { id: 3, image: '../assets/easybank.png', title: 'EASY BANKING LANDING PAGE', description: 'The Easy Banking App simplifies your banking tasks with balance checks, transfers, investment management, and more, all securely accessible from your laptop smartphone or tablet. ', link: 'https://easybank-landing-page-master-kappa.vercel.app/' },
  ];


  return (
<div id='projects' className=" cursive-font bg-rose-200 mx-auto px-16 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-rose-500">My Projects</h1>
      <div className="grid grid-cols-3 gap-16">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2 text-rose-500">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn bg-rose-200 hover:bg-rose-300 shadow-lg text-rose-500 font-bold hover:text-white px-4 py-2 rounded-md inline-block">Visit Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
