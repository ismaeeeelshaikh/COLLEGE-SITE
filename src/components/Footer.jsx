import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="mt-16 bg-gray-900 text-gray-300">
      <div className="container-fluid py-10 grid md:grid-cols-3 gap-8">
        {/* Contact Details */}
        <div>
          <h3 className="text-white font-semibold">A.P. Shah Institute of Technology</h3>
          <p className="text-sm mt-2">Ghodbunder Road, Kasarvadavli, Thane — Maharashtra, India</p>
          <p className="text-sm">Phone: +91-98765-43210</p>
          <p className="text-sm">Email: info@example.edu</p>
        </div>

        {/* Quick Links (optional) */}
        <div>
          <h4 className="text-white font-semibold">Quick Links</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a className="hover:text-white" href="/">Home</a></li>
            <li><a className="hover:text-white" href="/departments">Departments</a></li>
            <li><a className="hover:text-white" href="/admissions">Admissions</a></li>
            <li><a className="hover:text-white" href="/gallery">Gallery</a></li>
          </ul>
        </div>

        {/* Map */}
        <div>
          <h4 className="text-white font-semibold">Find Us</h4>
          <div className="mt-2 overflow-hidden rounded-xl border">
            <iframe
              title="College Location Map"
              className="w-full h-40 md:h-60"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.3293740495037!2d72.96466957374219!3d19.268037545918613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bba2e15f6c7b%3A0x20e1357d640bef7e!2sA.%20P.%20Shah%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1756228410022!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-fluid py-4 text-xs flex flex-col sm:flex-row gap-2 justify-between">
          <p>© 2025 A.P. Shah Institute of Technology. All rights reserved.</p>
          <p>Made with React + Tailwind.</p>
        </div>
      </div>
    </footer>
  );
}
