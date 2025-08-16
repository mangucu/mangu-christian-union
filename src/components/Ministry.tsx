import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Baby, HandHeart } from "lucide-react";
import bibleStudyImage from "@/assets/bible-study.jpg";

const Ministry = () => {
  const ministries = [
    {
      icon: Music,
      title: "Worship Team",
      description:
        "Leading our congregation in heartfelt worship through music, helping create an atmosphere where God is glorified.",
      members: "25+ Musicians",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Baby,
      title: "Children's Ministry",
      description:
        "Nurturing children in their faith journey through age-appropriate lessons, activities, and care in a safe environment.",
      members: "40+ Children",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: HandHeart,
      title: "Talents Ministry",
      description:
        "Discovering and developing God-given talents and gifts within our congregation for ministry and service to the church.",
      members: "30+ Members",
      color: "from-green-500 to-green-600",
    },
    {
      icon: HandHeart,
      title: "Follow Up Ministry (Discipleship)",
      description:
        "Supporting new believers and members through discipleship, mentoring, and spiritual growth programs.",
      members: "20+ Mentors",
      color: "from-blue-500 to-blue-600",
    },
  ];

  return (
    <section id="ministry" className="py-20 gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
            Our Ministries
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover your place in our church family. Whether you're looking to
            grow spiritually, serve others, or connect with fellow believers, we
            have a ministry for you.
          </p>
        </div>

        {/* Featured Ministry */}
        <div className="mb-16">
          <Card className="gradient-card border-border/50 shadow-spiritual overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={bibleStudyImage}
                  alt="Church Community Fellowship"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent"></div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="bg-secondary text-secondary-foreground text-sm px-3 py-1 rounded-full font-medium">
                    Featured Ministry
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Talents Ministry
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Join our Talents Ministry where we help discover and develop
                  the God-given talents and gifts within our congregation. We
                  believe every member has unique abilities that can be used for
                  ministry and service to the church and community.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Talent discovery workshops
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Skill development programs
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Ministry placement and mentoring
                  </div>
                </div>
                <Button className="bg-gradient-hero hover:opacity-90 transition-spiritual shadow-golden w-fit">
                  Learn More
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Ministry Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ministries.map((ministry, index) => {
            const Icon = ministry.icon;
            return (
              <Card
                key={index}
                className="gradient-card border-border/50 shadow-gentle hover:shadow-spiritual transition-spiritual group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-2">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${ministry.color} rounded-xl flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                        {ministry.title}
                      </CardTitle>
                      <p className="text-sm text-secondary font-medium">
                        {ministry.members}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {ministry.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Get Involved?
            </h3>
            <p className="text-muted-foreground mb-6">
              Whether you're new to our church or looking to deepen your
              involvement, we'd love to help you find the perfect ministry to
              call home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-hero hover:opacity-90 transition-spiritual shadow-golden">
                Speak with Our Pastor
              </Button>
              <Button variant="outline">Ministry Application</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ministry;
