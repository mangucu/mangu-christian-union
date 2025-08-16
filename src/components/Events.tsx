import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, Star } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Christmas Celebration Service",
      date: "December 25, 2024",
      time: "9:00 AM - 12:00 PM",
      location: "Main Sanctuary",
      description:
        "Join us for a special Christmas service celebrating the birth of our Lord and Savior Jesus Christ.",
      attendees: "500+ Expected",
      featured: true,
      category: "Special Service",
    },
    {
      title: "New Year Prayer Service",
      date: "January 1, 2025",
      time: "6:00 AM - 8:00 AM",
      location: "Main Sanctuary",
      description:
        "Start the new year with prayer, worship, and dedication to God's will for our lives.",
      attendees: "300+ Expected",
      featured: true,
      category: "Prayer Meeting",
    },
    {
      title: "Community Health Fair",
      date: "January 15, 2025",
      time: "8:00 AM - 4:00 PM",
      location: "Church Grounds",
      description:
        "Free health screenings and medical consultations for our community members.",
      attendees: "200+ Expected",
      featured: false,
      category: "Outreach",
    },
    {
      title: "Church Annual General Meeting",
      date: "February 2, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Main Sanctuary",
      description:
        "Annual review of church activities, financial reports, and planning for the coming year.",
      attendees: "All Members",
      featured: false,
      category: "Meeting",
    },
    {
      title: "Easter Sunday Celebration",
      date: "April 20, 2025",
      time: "9:00 AM - 12:00 PM",
      location: "Main Sanctuary",
      description:
        "Celebrate the resurrection of Jesus Christ with special worship and communion.",
      attendees: "600+ Expected",
      featured: true,
      category: "Special Service",
    },
    {
      title: "Children's Day Celebration",
      date: "May 10, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Church Grounds",
      description:
        "A fun-filled day celebrating our children with games, performances, and activities.",
      attendees: "150+ Children",
      featured: false,
      category: "Children's Event",
    },
  ];

  const regularActivities = [
    {
      title: "Sunday Worship Service",
      schedule: "Every Sunday, 9:00 AM - 11:00 AM",
      description:
        "Weekly worship service with preaching, music, and fellowship",
    },
    {
      title: "Midweek Prayer Meeting",
      schedule: "Every Wednesday, 7:00 PM - 8:30 PM",
      description: "Corporate prayer time for church and community needs",
    },
    {
      title: "Sunday School",
      schedule: "Every Sunday, 8:00 AM - 8:45 AM",
      description: "Educational programs for all age groups",
    },
  ];

  return (
    <section id="events" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
            Church Events
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay connected with our church community through our upcoming events
            and regular activities. Everyone is welcome to join us in worship,
            fellowship, and service.
          </p>
        </div>

        {/* Featured Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Featured Upcoming Events
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents
              .filter((event) => event.featured)
              .map((event, index) => (
                <Card
                  key={index}
                  className="gradient-card border-border/50 shadow-spiritual hover:shadow-golden transition-spiritual"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full font-medium">
                        {event.category}
                      </span>
                      <Star className="w-4 h-4 text-secondary" />
                    </div>
                    <CardTitle className="text-xl text-foreground">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Clock className="w-4 h-4 mr-2 text-primary" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Users className="w-4 h-4 mr-2 text-primary" />
                        {event.attendees}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {event.description}
                    </p>
                    <Button className="w-full bg-gradient-hero hover:opacity-90 transition-spiritual shadow-golden">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* All Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            All Upcoming Events
          </h3>
          <div className="grid lg:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="gradient-card border-border/50 shadow-gentle hover:shadow-spiritual transition-spiritual"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0 shadow-golden">
                      <Calendar className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-semibold text-foreground">
                          {event.title}
                        </h4>
                        {event.featured && (
                          <Star className="w-4 h-4 text-secondary" />
                        )}
                      </div>
                      <div className="space-y-1 mb-3">
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Clock className="w-3 h-3 mr-2" />
                          {event.date} • {event.time}
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <MapPin className="w-3 h-3 mr-2" />
                          {event.location}
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Regular Activities */}
        <div className="bg-gradient-section rounded-2xl p-8 shadow-gentle">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Regular Church Activities
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {regularActivities.map((activity, index) => (
              <Card
                key={index}
                className="gradient-card border-border/50 shadow-gentle"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4 shadow-golden">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {activity.title}
                  </h4>
                  <p className="text-secondary text-sm font-medium mb-3">
                    {activity.schedule}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact for Events */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Want to Get Involved?
            </h3>
            <p className="text-muted-foreground mb-6">
              Interested in helping with events or have questions about upcoming
              activities? We'd love to hear from you and welcome your
              participation.
            </p>
            <Button className="bg-gradient-hero hover:opacity-90 transition-spiritual shadow-golden">
              Contact Event Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
