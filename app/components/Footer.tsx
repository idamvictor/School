import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaTwitter, FaGithub, FaPaperPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Us Section */}
          <div className="space-y-4">
            <h3 className="text-primary font-bold text-lg">About Us!</h3>
            <p>
              We are driven to provide world class education in a secure,
              disciplined and academic stimulating environment.
            </p>
            <address className=" not-italic space-y-2">
              <p>Modern Ideal College,</p>
              <p>Abakpa Nike Rd, Abakpa, Enugu 400103, Enugu</p>
              <p>Enugu, Enugu State.</p>
              <p className="mt-4">📞 +2348178877878</p>
              <p>
                ✉️{" "}
                <a
                  href="mailto:info@modernidealcollege.com"
                  className="hover:text-primary transition-colors"
                >
                  info@modernidealcollege.com
                </a>
              </p>
            </address>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-primary font-bold text-lg">Newsletter</h3>
            <p >
              You can trust us, we only send relevant information
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your Email Address"
                className="bg-background"
              />
              <Button
                size="icon"
                className="bg-primary hover:bg-primary/80"
              >
                <FaPaperPlane className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-primary font-bold text-lg">Quick Links</h3>
            <nav className="space-y-2">
              <a
                href="#"
                className="block hover:text-primary transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="block hover:text-primary transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="block hover:text-primary transition-colors"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="block hover:text-primary transition-colors"
              >
                Admissions
              </a>
              <a
                href="#"
                className="block hover:text-primary transition-colors"
              >
                Staff Login
              </a>
              <a
                href="#"
                className="block hover:text-primary transition-colors"
              >
                Check Results
              </a>
            </nav>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-primary flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            Copyright ©2025 Developed by{" "}
            <a href="#" className="text-primary hover:text-primary/70">
              Vice Technology
            </a>
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FaFacebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FaTwitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
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
