import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t-2">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">
              Aakash Mokani
            </h3>
            <p className="text-muted-foreground">
              Building the future, one line of code at a time
            </p>
          </div>
          
          <div className="flex gap-4">
            <a
              href="https://github.com/mokanichokani"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/mokanichokani"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/mokanichokani"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all hover:scale-110"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="mailto:contact@mokanichokani.me"
              className="p-3 rounded-full border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all hover:scale-110"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground text-sm">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Aakash Mokani. Made with{" "}
            <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" />{" "}
            and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};
