export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded shadow text-sm">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>

        <p className="mb-2">
          <strong>Phone:</strong>{" "}
          <a href="tel:+1234567890" className="text-blue-600 hover:underline">
            +1 (234) 567-890
          </a>
        </p>

        <p className="mb-2">
          <strong>Email:</strong>{" "}
          <a href="mailto:info@example.com" className="text-blue-600 hover:underline">
            info@example.com
          </a>
        </p>

        <p className="mb-4">
          <strong>Address:</strong>
          <br />
          123 Main Street
          <br />
          City, State ZIP
        </p>

        <p className="text-gray-600">Office hours: Mon–Fri, 9:00 AM – 5:00 PM</p>
      </div>
    </div>
  );
}