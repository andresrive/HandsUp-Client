import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ plans, setFilteredPlans }) {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearch(value);

    const searchPlans = plans.filter(
      (plan) =>
        plan.title.toLowerCase().includes(value) ||
        plan.destination.toLowerCase().includes(value)
    );
    setFilteredPlans(searchPlans);
  };

  return (
    <>
      <div className="Search-Bar-title">
        <h1>Search for a plan that suits you</h1>
      </div>
      <div>
        <input
          className="Search-Bar"
          value={search}
          type="text"
          placeholder="Search..."
          onChange={handleSearch}
        />
      </div>
    </>
  );
}
