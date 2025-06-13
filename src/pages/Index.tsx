
import { ArrowRight, Heart, Users, Zap, Star, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const features = [
    {
      icon: "🎨",
      title: "Interactive Symptom Selector",
      description: "Cartoon-style human body interface where kids tap on where they feel pain with simple, visual prompts."
    },
    {
      icon: "😊",
      title: "Emotion Expression Panel",
      description: "Large emojis and facial animations help children express their moods with voice-over prompts for support."
    },
    {
      icon: "📅",
      title: "Daily Health Check-In",
      description: "Gamified morning & evening check-ins with playful questions and reward systems to build healthy habits."
    },
    {
      icon: "👨‍👩‍👧",
      title: "Parent Dashboard",
      description: "Comprehensive view for parents to see health logs, mood charts, and receive alerts about concerning symptoms."
    },
    {
      icon: "📚",
      title: "Mini Health Lessons",
      description: "Interactive stories, videos, and quizzes teaching kids about hygiene, emotions, and basic health concepts."
    },
    {
      icon: "🛌",
      title: "Sleep & Hygiene Tracker",
      description: "Visual tracking for sleep hours, tooth brushing, and water intake with engaging animations and sounds."
    }
  ];

  const techStack = [
    { name: "Flutter", description: "Cross-platform mobile development" },
    { name: "Firebase", description: "Authentication & Real-time database" },
    { name: "Google ML Kit", description: "Optional emotion detection" },
    { name: "Firebase Analytics", description: "User behavior insights" },
    { name: "Firebase Storage", description: "Images & health reports" },
    { name: "Firebase Messaging", description: "Push notifications" }
  ];

  const benefits = [
    "Supports early detection of health issues",
    "Encourages emotional awareness in children",
    "Builds daily wellness routines",
    "Reduces parental stress and anxiety",
    "Improves doctor-patient communication",
    "Creates better health outcomes for families"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="animate-bounce mb-8">
            <div className="text-8xl mb-4">🧒</div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Kiddocare
          </h1>
          <p className="text-2xl md:text-3xl mb-8 font-light">
            Helping Kids Speak Health
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto opacity-90">
            Bridging the communication gap between children and caregivers through interactive, 
            child-friendly health tracking and emotional expression tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3">
              <Heart className="mr-2 h-5 w-5" />
              Learn More
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-3">
              <ArrowRight className="mr-2 h-5 w-5" />
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">The Challenge We're Solving</h2>
            <div className="bg-red-50 border-l-4 border-red-400 p-8 text-left rounded-lg">
              <p className="text-lg text-gray-700 mb-6">
                Children often struggle to effectively communicate their physical discomfort or emotional well-being, 
                especially when they are sick or experiencing unfamiliar symptoms. This communication gap can delay 
                diagnosis, lead to misinterpretation of symptoms by caregivers, and increase anxiety for both children and parents.
              </p>
              <p className="text-lg text-gray-700">
                Young children may lack the vocabulary or confidence to describe their pain or discomfort accurately, 
                making it difficult for parents and healthcare providers to understand what the child is experiencing. 
                Additionally, most existing health tracking tools are designed for adults and do not engage children 
                in a friendly or age-appropriate manner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Core Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Interactive, engaging tools designed specifically for children to express their health and emotions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-purple-200">
                <CardHeader className="text-center">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl text-gray-800">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Technology Stack</h2>
            <p className="text-xl text-gray-600">Built with modern, reliable technologies for optimal performance</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border-2 border-gray-100 hover:border-purple-200 transition-colors">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">{tech.name}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Impact & Benefits</h2>
            <p className="text-xl text-gray-600">Creating positive outcomes for children, parents, and healthcare providers</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Star className="h-6 w-6 text-yellow-500 mr-4 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Development Approach</h2>
            <p className="text-xl text-gray-600">Step-by-step process to bring Kiddocare to life</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { step: "1", title: "MVP Development", description: "Focus on symptom selection, emotion picker, daily check-in, and parent summary features" },
                { step: "2", title: "User Testing", description: "Test with children aged 4-10 and gather feedback from parents and pediatricians" },
                { step: "3", title: "UI/UX Enhancement", description: "Implement bright colors, large buttons, cartoon characters, and voice support" },
                { step: "4", title: "Advanced Features", description: "Add doctor connect, habit tracker, emergency alerts, and reward systems" },
                { step: "5", title: "AI Integration", description: "Optional emotion detection and voice assistant features" },
                { step: "6", title: "Multi-language Support", description: "Expand accessibility for diverse communities" }
              ].map((phase, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0">
                    {phase.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{phase.title}</h3>
                    <p className="text-gray-600">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Kiddocare</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Empowering children to communicate their health needs while giving parents the tools to understand and respond effectively.
              </p>
              <div className="flex space-x-4">
                <Badge variant="secondary" className="bg-blue-600 hover:bg-blue-700">
                  Buildthon 2024
                </Badge>
                <Badge variant="secondary" className="bg-green-600 hover:bg-green-700">
                  Healthcare Innovation
                </Badge>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-gray-400" />
                  <span className="text-gray-300">team@kiddocare.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-gray-400" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-gray-400" />
                  <span className="text-gray-300">Healthcare Innovation Lab</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Project Status</h4>
              <div className="space-y-2">
                <p className="text-gray-300">🚀 In Development</p>
                <p className="text-gray-300">📱 Mobile App Coming Soon</p>
                <p className="text-gray-300">🏥 Healthcare Partnership Ready</p>
                <p className="text-gray-300">👨‍👩‍👧‍👦 Family-Tested Design</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Kiddocare. Built with ❤️ for children and families everywhere.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
