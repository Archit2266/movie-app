import React, { useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
import styles from "./searchbar.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieCard from "../../Landingpage/moviecard/moviecard";
import Navbar from "../Navbar/Menubar";

export default function DropdownBar() {
    const [selectedLanguage, setSelectedLanguage] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("");
    const [selectedRating, setSelectedRating] = useState("");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .get(
                `http://127.0.0.1:8000/api/movies/?genre=${selectedGenre}&language=${selectedLanguage}&altrating=${selectedRating}`
            )
            .then((response) => {
                console.log(response);
                setMovies(response.data);
            })
            .catch((error) => {
                console.error("Error fetching movies:", error);
            });
    }, [selectedLanguage, selectedGenre, selectedRating]);

    const genreOptions = [
        { label: "Select a Genre", value: "" },
        { label: "Action", value: "Action" },
        { label: "Crime", value: "Crime" },
        { label: "Comedy", value: "Comedy" },
        { label: "Family", value: "Family" },
        { label: "Biography", value: "Biography" }
    ];

    const languageOptions = [
        { label: "Select a Language", value: "" },
        { label: "Hindi", value: "Hindi" },
        { label: "English", value: "English" },
        { label: "Marathi", value: "Marathi" },
        { label: "Tamil", value: "Tamil" },
        { label: "Kannad", value: "Kannad" }
    ];

    const ratingOptions = [
        { label: "Select a Rating", value: "" },
        { label: "A", value: "A" },
        { label: "U", value: "U" },
        { label: "UA", value: "UA" }
    ];

    return (
        <>
            <Navbar />
            <div className={styles.backgroundcontainer}>
                <div className={styles.tabb}>
                    <span className="p-float-label">
                        <Dropdown
                            value={selectedGenre}
                            options={genreOptions}
                            onChange={(e) => setSelectedGenre(e.value)}
                            className={styles.boxx}
                        />
                    </span>

                    <span className="p-float-label">
                        <Dropdown
                            value={selectedLanguage}
                            options={languageOptions}
                            onChange={(e) => setSelectedLanguage(e.value)}
                            className={styles.boxx}
                        />
                    </span>

                    <span className="p-float-label">
                        <Dropdown
                            value={selectedRating}
                            options={ratingOptions}
                            onChange={(e) => setSelectedRating(e.value)}
                            className={styles.boxx}
                        />
                    </span>
                </div>
                <div className={`${styles.moviesSection}`}>
                    {movies.map((m) => (
                        <div key={m.id} className={styles.movieCard}>
                            <Link to={`/movie/${m.id}`}>
                                <MovieCard key={m.id} movie={m} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
