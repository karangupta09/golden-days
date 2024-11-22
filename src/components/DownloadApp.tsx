import { Phone } from "lucide-react";

const DownloadApp = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Download GoldenDays App</h2>
            <p className="text-lg mb-8">Take your wellness journey with you everywhere you go</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#"
                className="inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on the App Store"
                  className="h-12"
                />
              </a>
              <a
                href="#"
                className="inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-12"
                />
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <Phone className="w-48 h-48 text-white opacity-80" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;