import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, User, Loader2, AlertCircle } from "lucide-react";

const Leadership = () => {
  const [leaders, setLeaders] = useState([]);
  const [selectedYear, setSelectedYear] = useState(
    new Date().getFullYear().toString()
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [availableYears, setAvailableYears] = useState([]);

  // Generate available years (current year and past 5 years)
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = 0; i < 6; i++) {
      years.push((currentYear - i).toString());
    }
    setAvailableYears(years);
  }, []);

  // Fetch leaders data from server
  const fetchLeaders = async (year) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://cu-web-server.com/api/leaders?year=${year}`
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch leaders: ${response.status}`);
      }

      const data = await response.json();
      setLeaders(data.leaders || data || []);
    } catch (err) {
      console.error("Error fetching leaders:", err);
      setError(err.message);
      // Fallback to static data if API fails
      setLeaders([
        {
          name: "Rev. John Kamau",
          position: "Senior Pastor",
          description:
            "Rev. Kamau has been serving our congregation for over 10 years, bringing wisdom, compassion, and strong biblical teaching to our community.",
          email: "pastor@mangucu.org",
          phone: "+254 700 100 200",
        },
        {
          name: "Rev. Grace Wanjiku",
          position: "Associate Pastor",
          description:
            "Rev. Wanjiku leads our community outreach programs and provides pastoral care to church members and families.",
          email: "grace@mangucu.org",
          phone: "+254 700 100 201",
        },
        {
          name: "Elder David Mwangi",
          position: "Church Elder",
          description:
            "Elder Mwangi serves on the church board and leads our administrative functions, ensuring smooth church operations.",
          email: "david@mangucu.org",
          phone: "+254 700 100 202",
        },
        {
          name: "Deacon Mary Njeri",
          position: "Deacon",
          description:
            "Deacon Njeri coordinates our worship services and manages church activities, bringing excellent organizational skills.",
          email: "mary@mangucu.org",
          phone: "+254 700 100 203",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch leaders when component mounts or year changes
  useEffect(() => {
    fetchLeaders(selectedYear);
  }, [selectedYear]);

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const boardMembers = [
    { name: "Peter Kariuki", position: "Board Chairman" },
    { name: "Ruth Wangari", position: "Secretary" },
    { name: "James Muthomi", position: "Treasurer" },
    { name: "Sarah Nyambura", position: "Board Member" },
    { name: "Samuel Kimani", position: "Board Member" },
  ];

  return (
    <section id="leadership" className="py-20 gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Year Selector */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
            Church Leadership
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8">
            Meet our dedicated church leaders who are committed to serving God
            and guiding our congregation with wisdom, love, and biblical truth.
          </p>

          {/* Year Selector */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <label className="text-foreground font-medium">
              View leaders from:
            </label>
            <Select value={selectedYear} onValueChange={handleYearChange}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent>
                {availableYears.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              size="sm"
              onClick={() => fetchLeaders(selectedYear)}
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                "Refresh"
              )}
            </Button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="flex items-center justify-center gap-2 text-destructive bg-destructive/10 p-3 rounded-lg max-w-md mx-auto mb-6">
              <AlertCircle className="w-4 h-4" />
              <span className="text-sm">
                Failed to load leaders. Showing cached data.
              </span>
            </div>
          )}
        </div>

        {/* Main Leadership Team */}
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <span className="ml-2 text-muted-foreground">
              Loading leaders...
            </span>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {leaders.map((leader, index) => (
              <Card
                key={index}
                className="gradient-card border-border/50 shadow-gentle hover:shadow-spiritual transition-spiritual"
              >
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center shadow-golden">
                      <User className="w-12 h-12 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {leader.name}
                    </h3>
                    <p className="text-secondary font-semibold mb-4">
                      {leader.position}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {leader.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{leader.email}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{leader.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Church Board */}
        <div className="bg-card rounded-2xl p-8 shadow-gentle">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Church Board
            </h3>
            <p className="text-muted-foreground">
              Our church board provides governance and strategic direction for
              our ministry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {boardMembers.map((member, index) => (
              <Card
                key={index}
                className="gradient-card border-border/50 shadow-gentle text-center"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center shadow-golden">
                    <User className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">
                    {member.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {member.position}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership Mission */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Our Leadership Mission
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Our leadership team is committed to shepherding our congregation
            with integrity, biblical wisdom, and servant hearts. We strive to
            create an environment where every member can grow in faith, discover
            their purpose, and experience God's love.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
