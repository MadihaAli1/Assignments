export type Country = {
    name: string;
    population: string;
    capital: string;
    language: string;
    description: string;
  };
  
  export const countriesData: Record<string, Country> = {
    pakistan: {
      name: "Pakistan",
      population: "240 million",
      capital: "Islamabad",
      language: "Urdu",
      description:
        "Culture, Heritage, Mountains, Cuisine, Hospitality, History, Traditions, Festivals, Landscapes, Diversity",
    },
    india: {
      name: "India",
      population: "1.4 billion",
      capital: "New Delhi",
      language: "Hindi",
      description:
        "Diversity, Culture, Traditions, Languages, Festivals, Cuisine, History, Art, Spirituality, Hospitality",
    },
    china: {
      name: "China",
      population: "1.4 billion",
      capital: "Beijing",
      language: "Chinese",
      description:
        "Ancient, Modern, Culture, History, Economy, Great Wall, Cuisine, Innovation, Diversity, Traditions",
    },
    japan: {
      name: "Japan",
      population: "126 million",
      capital: "Tokyo",
      language: "Japanese",
      description:
        "Tradition, Innovation, Technology, Cuisine, Art, Nature, Festivals, Architecture, Respect, Harmony",
    },
    italy: {
      name: "Italy",
      population: "60 million",
      capital: "Rome",
      language: "Italian",
      description:
        "Art, Architecture, Cuisine, History, Fashion, Culture, Renaissance, Landscapes, Wine, Romance",
    },
  };
  