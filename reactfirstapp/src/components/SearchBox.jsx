import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authContextValue";

const languages = [
  {
    id: 1,
    name: "JavaScript",
    type: "Scripting language",
    use: "Web development and interactive websites",
  },
  {
    id: 2,
    name: "Python",
    type: "General-purpose language",
    use: "Data science, automation, and web development",
  },
  {
    id: 3,
    name: "Java",
    type: "Object-oriented language",
    use: "Enterprise applications and Android development",
  },
  {
    id: 4,
    name: "C++",
    type: "Compiled language",
    use: "Games, systems, and high-performance applications",
  },
  {
    id: 5,
    name: "C#",
    type: "Object-oriented language",
    use: ".NET applications and game development with Unity",
  },
];

const SearchBox = () => {
  const { user } = useContext(AuthContext);
  const [query, setQuery] = useState("");
  const [filteredLanguages, setFilteredLanguages] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const results = query.trim()
      ? languages.filter((language) =>
          language.name.toLowerCase().includes(query.toLowerCase())
        )
      : []

    const timer = setTimeout(() => setFilteredLanguages(results), 0);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <main className="container py-4 position-relative">
      <div className="position-absolute top-0 end-0">
        {currentTime.toLocaleTimeString()}
      </div>

      <p>Welcome, {user}</p>
      <h2>Search Languages</h2>

      <input
        className="form-control mb-3"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search languages..."
        aria-label="Search programming languages"
      />

      {filteredLanguages.length === 0 && <p>No languages found.</p>}

      <div className="list-group">
        {filteredLanguages.map((language) => (
          <div className="list-group-item" key={language.id}>
            <h5>{language.name}</h5>
            <p className="mb-1">Type: {language.type}</p>
            <small>Used for: {language.use}</small>
          </div>
        ))}
      </div>
    </main>
  );
};

export default SearchBox;
