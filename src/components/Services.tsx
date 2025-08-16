import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Users, Calendar, Music, BookOpen } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Sunday Worship Service",
      time: "9:00 AM - 11:00 AM",
      description:
        "Join us for inspiring worship, powerful preaching, and meaningful fellowship with our church family.",
      features: [
        "Contemporary Worship",
        "Biblical Teaching",
        "Prayer & Fellowship",
      ],
      icon: Music,
      highlight: true,
    },
    {
      title: "Midweek Prayer Meeting",
      time: "Wednesday 7:00 PM",
      description:
        "Come together for corporate prayer, spiritual growth, and community fellowship.",
      features: ["Community Prayer", "Spiritual Meditation", "Fellowship"],
      icon: BookOpen,
      highlight: false,
    },
    {
      title: "Sunday School",
      time: "8:00 AM - 8:45 AM",
      description:
        "Educational programs for all ages to learn and grow in faith together.",
      features: [
        "Age-Appropriate Learning",
        "Interactive Teaching",
        "Character Building",
      ],
      icon: Users,
      highlight: false,
    },
  ];

  const upcomingEvents = [
    {
      date: "Dec 25",
      title: "Christmas Celebration",
      time: "9:00 AM",
    },
    {
      date: "Jan 1",
      title: "New Year Prayer Service",
      time: "6:00 AM",
    },
    {
      date: "Jan 15",
      title: "Community Outreach",
      time: "10:00 AM",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
            Our Services & Events
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Join us as we worship together, grow in faith, and build community.
            Everyone is welcome to be part of our church family.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Services Cards */}
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className={`gradient-card border-border/50 transition-spiritual hover:shadow-spiritual ${
                  service.highlight
                    ? "ring-2 ring-secondary/30 shadow-golden"
                    : "shadow-gentle"
                }`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        service.highlight
                          ? "bg-gradient-hero shadow-golden"
                          : "bg-muted"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          service.highlight
                            ? "text-primary-foreground"
                            : "text-primary"
                        }`}
                      />
                    </div>
                    {service.highlight && (
                      <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full font-medium">
                        Main Service
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {service.title}
                  </CardTitle>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    {service.time}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={service.highlight ? "default" : "outline"}
                    className={
                      service.highlight
                        ? "bg-gradient-hero hover:opacity-90 transition-spiritual shadow-golden w-full"
                        : "w-full"
                    }
                  >
                    {service.highlight ? "Learn More" : "Join Us"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Upcoming Events */}
        <div className="bg-gradient-section rounded-2xl p-8 shadow-gentle">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Upcoming Events
              </h3>
              <p className="text-muted-foreground">
                Don't miss these special occasions
              </p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0">
              <Calendar className="w-4 h-4 mr-2" />
              View All Events
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="gradient-card border-border/50 shadow-gentle hover:shadow-spiritual transition-spiritual"
              >
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4 shadow-golden">
                      <span className="text-primary-foreground font-bold text-sm">
                        {event.date}
                      </span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {event.title}
                    </h4>
                    <div className="flex items-center justify-center text-muted-foreground text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {event.time}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Location Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-card rounded-full px-6 py-3 shadow-gentle">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">
              Mang'u School, Thika
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
