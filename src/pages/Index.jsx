import { useState, useEffect } from 'react';
import { Paw, Heart, Info, Search, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const DogBreeds = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const breeds = ['Labrador Retriever', 'German Shepherd', 'Golden Retriever', 'French Bulldog', 'Bulldog', 'Poodle', 'Beagle', 'Rottweiler', 'Boxer', 'Dachshund'];
  
  const filteredBreeds = breeds.filter(breed => 
    breed.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Input
          type="text"
          placeholder="Search breeds..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Button variant="outline"><Search className="h-4 w-4" /></Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBreeds.map((breed) => (
          <motion.div key={breed} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>{breed}</CardTitle>
              </CardHeader>
              <CardContent>
                <img src={`https://source.unsplash.com/400x300/?${breed.replace(' ', '-')}`} alt={breed} className="mx-auto object-cover w-full h-48 rounded-md transition-transform duration-300 hover:scale-105" />
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const FunFacts = () => {
  const facts = [
    { id: 1, text: "Dogs have a sense of time and can tell how long you've been gone." },
    { id: 2, text: "A dog's nose print is unique, much like a human's fingerprint." },
    { id: 3, text: "Dalmatians are born completely white and develop their spots as they grow older." },
    { id: 4, text: "The Basenji is the only breed of dog that can't bark, but they can yodel!" },
    { id: 5, text: "A dog's average body temperature is 101.2°F (38.4°C)." },
  ];

  return (
    <div className="space-y-4">
      {facts.map((fact, index) => (
        <motion.div
          key={fact.id}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card>
            <CardContent className="flex items-center p-4">
              <Badge variant="secondary" className="mr-4">{fact.id}</Badge>
              <p>{fact.text}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

const CareTips = () => {
  const tips = [
    { icon: "🍖", text: "Provide a balanced diet appropriate for your dog's age and size." },
    { icon: "🏃‍♂️", text: "Ensure your dog gets regular exercise and mental stimulation." },
    { icon: "👨‍⚕️", text: "Schedule regular check-ups with your veterinarian." },
    { icon: "💉", text: "Keep up with vaccinations and parasite prevention." },
    { icon: "🛁", text: "Groom your dog regularly, including brushing teeth and trimming nails." },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold mb-4">Essential Dog Care Tips:</h3>
      {tips.map((tip, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card>
            <CardContent className="flex items-center p-4">
              <span className="text-3xl mr-4">{tip.icon}</span>
              <p>{tip.text}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

const Index = () => {
  const [activeTab, setActiveTab] = useState("breeds");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Paw className="h-16 w-16 text-primary" />
          </motion.div>
          <p className="mt-4 text-lg font-semibold">Loading pawsome content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">All About Dogs</h1>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="breeds"><Paw className="mr-2 h-4 w-4" /> Dog Breeds</TabsTrigger>
            <TabsTrigger value="facts"><Info className="mr-2 h-4 w-4" /> Fun Facts</TabsTrigger>
            <TabsTrigger value="care"><Heart className="mr-2 h-4 w-4" /> Care Tips</TabsTrigger>
          </TabsList>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <TabsContent value="breeds" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Popular Dog Breeds</CardTitle>
                  <CardDescription>Explore some of the most beloved dog breeds.</CardDescription>
                </CardHeader>
                <CardContent>
                  <DogBreeds />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="facts" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Fun Dog Facts</CardTitle>
                  <CardDescription>Discover interesting facts about our canine companions.</CardDescription>
                </CardHeader>
                <CardContent>
                  <FunFacts />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="care" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dog Care Tips</CardTitle>
                  <CardDescription>Learn how to keep your furry friend happy and healthy.</CardDescription>
                </CardHeader>
                <CardContent>
                  <CareTips />
                </CardContent>
              </Card>
            </TabsContent>
          </motion.div>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Index;
