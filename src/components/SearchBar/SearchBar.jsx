import { useState } from 'react';

export default function SearchBar({ plans, setFilteredPlans }) {


    const [search, setSearch] = useState("");

    const handleSearch = (event) => {
        const value = event.target.value.toLowerCase();
        setSearch(value)

        const searchPlans = plans.filter((plan) => plan.title.toLowerCase().includes(value) || plan.destination.toLowerCase().includes(value))
        setFilteredPlans(searchPlans)
    }

    return (
        <>
            <div>Search for a plan that suits you</div>

            <label>Search</label>
            <input value={search} type="text" onChange={handleSearch} />
        </>
    )
}