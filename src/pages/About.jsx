export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-2xl text-center bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 leading-relaxed mb-6">
          Welcome to <span className="font-semibold text-blue-600">Our Website</span>! 
          We are passionate about building web applications that are fast, 
          responsive, and user-friendly. Our goal is to deliver beautiful 
          experiences powered by modern technologies like React and Tailwind CSS.
        </p>
        <p className="text-gray-600 leading-relaxed">
          This About page is just a small example — you can customize it with 
          your own mission, values, or team information. 🚀
        </p>
      </div>
    </div>
  );
}
