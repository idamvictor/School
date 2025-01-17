import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaTwitter, FaGithub, FaPaperPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Us Section */}
          <div className="space-y-4">
            <h3 className="text-yellow-400 font-bold text-lg">About Us!</h3>
            <p className="text-gray-300">
              We are driven to provide world class education in a secure,
              disciplined and academic stimulating environment.
            </p>
            <address className="text-gray-300 not-italic space-y-2">
              <p>Modern Ideal College,</p>
              <p>54/56 Jim Nwobodo Avenue Trans Ekulu</p>
              <p>Enugu, Enugu State.</p>
              <p className="mt-4">📞 +2349187065150</p>
              <p>
                ✉️{" "}
                <a
                  href="mailto:info@modernidealcollege.com"
                  className="hover:text-yellow-400 transition-colors"
                >
                  info@modernidealcollege.com
                </a>
              </p>
            </address>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-yellow-400 font-bold text-lg">Newsletter</h3>
            <p className="text-gray-300">
              You can trust us, we only send relevant information
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your Email Address"
                className="bg-slate-800 border-slate-700 text-white"
              />
              <Button
                size="icon"
                className="bg-yellow-400 hover:bg-yellow-500 text-slate-900"
              >
                <FaPaperPlane className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-yellow-400 font-bold text-lg">Quick Links</h3>
            <nav className="space-y-2">
              <a
                href="#"
                className="block text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-yellow-400 transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Admissions
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Staff Login
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Check Results
              </a>
            </nav>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            Copyright ©2025 Developed by{" "}
            <a href="#" className="text-yellow-400 hover:text-yellow-300">
              Digital Dreams
            </a>
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <FaFacebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <FaTwitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <FaGithub className="h-5 w-5" />
              <span className="sr-only">Github</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
