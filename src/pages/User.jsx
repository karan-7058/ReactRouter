import { useParams } from "react-router-dom";

export default function User(){
      const { id } = useParams();


      const users = {
        1: {
      name: "Karan Aghav",
      role: "Frontend Developer",
      location: "Pune, India",
      linkedin: "http://linkedin.com/in/karan-aghav",
      github: "https://github.com/karan-7058",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      about:
        "Passionate about building responsive web apps using React, Tailwind CSS, and modern JavaScript. Focused on clean UI and smooth user experience.",
      },
        2: {
      name: "Priya Sharma",
      role: "UI/UX Designer",
      location: "Mumbai, India",
      linkedin: "https://linkedin.com/in/priyasharma",
      github: "https://github.com/priyasharma",
      photo: "https://randomuser.me/api/portraits/women/45.jpg",
      about:
        "Creative designer specializing in user experience and digital product design. Loves turning complex problems into elegant visual solutions.",
      },
  };

  const user=users[id];


  if(!user){
    return <div>user not found</div>
  }

    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden mt-10">
             <img src={user.photo} alt={user.name} className="w-full h-48 object-cover" />
             <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-600">{user.name}</h2>
                <p className="text-gray-600">{user.role}</p>
                <p className="text-gray-500"> {user.location}</p>
                <p className="text-gray-400">{user.about}</p>
                <a href={user.linkedin} className="text-blue-500 hover:underline">LinkedIn</a>
                
                

             </div>


        </div>
      
    )
}