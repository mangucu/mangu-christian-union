import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users } from "lucide-react";
import heroImage from "@/assets/hero-church.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Mang'u Christian Union Church Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70 bg-gradient-to-br from-primary/80 via-primary-light/60 to-secondary/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 sm:pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Badge */}
          <div className="inline-flex items-center space-x-1 sm:space-x-2 bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
            <span className="text-sm sm:text-base text-primary-foreground font-medium">
              Welcome to Our Spiritual Family
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight">
            Mang'u
            <span className="block bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent">
              Christian Union
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Join our vibrant community of faith where every heart finds hope,
            every soul discovers purpose, and every life is transformed by God's
            amazing grace.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center">
            <Button
              size="md"
              className="bg-secondary hover:bg-secondary-light text-secondary-foreground font-semibold px-6 py-3 rounded-xl shadow-golden transition-spiritual group sm:px-8 sm:py-4 sm:text-lg"
            >
              Join Our Fellowship
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform sm:w-5 sm:h-5" />
            </Button>
            <Button
              variant="outline"
              size="md"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm px-6 py-3 rounded-xl transition-spiritual group sm:px-8 sm:py-4 sm:text-lg"
            >
              <Users className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              Visit This Sunday
            </Button>
          </div>

          {/* Service Time */}
          <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-card/10 backdrop-blur-sm rounded-2xl border border-primary-foreground/20 inline-block">
            <h3 className="text-base sm:text-lg font-semibold text-primary-foreground mb-1 sm:mb-2">
              Sunday Worship Service
            </h3>
            <p className="text-base sm:text-lg text-primary-foreground/80">
              Every Sunday at 9:00 AM
            </p>
            <p className="text-xs sm:text-sm text-secondary mt-1">
              All are welcome to join us in worship
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
    </section>
  );
};

export default Hero;
