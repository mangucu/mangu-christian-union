import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Mang'u School Campus", "Thika, Kiambu County", "Kenya"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+254 700 000 000", "+254 722 000 000"],
      color: "from-green-500 to-green-600",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@mangucu.org", "pastor@mangucu.org"],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Mon - Fri: 9:00 AM - 5:00 PM",
        "Sat: 10:00 AM - 2:00 PM",
        "Sunday: After Service",
      ],
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have questions about our
            church, want to join our community, or need prayer, don't hesitate
            to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-8">
                We're here to serve you and answer any questions you may have
                about our church family and faith community.
              </p>
            </div>

            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="gradient-card border-border/50 shadow-gentle hover:shadow-spiritual transition-spiritual"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          {info.title}
                        </h4>
                        {info.details.map((detail, idx) => (
                          <p
                            key={idx}
                            className="text-sm text-muted-foreground"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Quick Actions */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Quick Actions</h4>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="w-4 h-4 mr-2" />
                  Call for Prayer Request
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Mail className="w-4 h-4 mr-2" />
                  Subscribe to Newsletter
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="gradient-card border-border/50 shadow-spiritual">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Send Us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <Input
                      placeholder="Enter your first name"
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <Input
                      placeholder="Enter your last name"
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      placeholder="+254 700 000 000"
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input
                    placeholder="What is this message about?"
                    className="bg-background/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    placeholder="Tell us how we can help you..."
                    className="min-h-[120px] bg-background/50"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-hero hover:opacity-90 transition-spiritual shadow-golden flex-1">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Schedule a Visit
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground">
                  * Required fields. We respect your privacy and will never
                  share your information.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="gradient-card border-border/50 shadow-spiritual overflow-hidden">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground">
                Visit Us
              </CardTitle>
              <p className="text-muted-foreground">
                We're located at Mang'u School campus in Thika. Come and be part
                of our church family!
              </p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-64 bg-gradient-section flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Mang'u School Campus
                  </h3>
                  <p className="text-muted-foreground">
                    Thika, Kiambu County, Kenya
                  </p>
                  <Button variant="outline" className="mt-4">
                    Get Directions
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
