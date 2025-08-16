import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, BookOpen, Cross } from "lucide-react";
import communityImage from "@/assets/community-prayer.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Love & Compassion",
      description:
        "We believe in showing Christ's love through our actions and care for one another.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Building strong relationships and supporting each other in our spiritual journey.",
    },
    {
      icon: BookOpen,
      title: "Biblical Truth",
      description:
        "Grounded in Scripture and committed to teaching God's Word with clarity and passion.",
    },
    {
      icon: Cross,
      title: "Faith",
      description:
        "Deepening our relationship with Jesus Christ and living out our faith daily.",
    },
  ];

  return (
    <section id="about" className="py-20 gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
                About Our Church
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                Mang'u Christian Union has been a beacon of hope and faith in
                our community for years. We are more than just a church – we are
                a family united by our love for Christ and our commitment to
                serving others.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Our mission is to create a welcoming environment where people
                from all walks of life can experience God's transforming love,
                grow in their faith, and discover their purpose in God's
                kingdom.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card
                    key={index}
                    className="gradient-card border-border/50 shadow-gentle hover:shadow-spiritual transition-spiritual"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0 shadow-golden">
                          <Icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">
                            {value.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-spiritual">
              <img
                src={communityImage}
                alt="Church Community in Prayer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>

            {/* Stats Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-card/95 backdrop-blur-sm rounded-xl p-6 shadow-gentle">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">
                      Active Members
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">
                      Years Serving
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
