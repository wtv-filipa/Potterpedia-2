import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/cardsHome.css';


const CardsHome = () => {
    return (
        <div id="cardsHome" className="pt-5">

            <div className="blog-card">
                <div className="meta">
                    <div className="photo quotes" />
                </div>
                <div className="description">
                    <h1>Quotes</h1>
                    <p> "I am what I am, an' I'm not ashamed. 'Never be ashamed,' my ol' dad used ter say, 'there's some who'll hold it against you, but they're not worth botherin' with." — Rubeus Hagrid</p>
                    <p className="read-more">
                        <Link to="/quotes">Read More</Link>
                    </p>
                </div>
            </div>

            <div className="blog-card alt">
                <div className="meta">
                    <div className="photo characters" />
                </div>
                <div className="description">
                    <h1>Characters</h1>
                    <p>The wizarding world is filled with memorable characters. Some, like Severus Snape, are complex and mysterious. Their stories span the decades, the whole saga and beyond. There are witches and wizards, hags and giants, house-elves and Muggles, werewolves and vampires, good people and bad. Here you can discover some of them.</p>
                    <p className="read-more">
                        <Link to="/characters">Read More</Link>
                    </p>
                </div>
            </div>

            <div className="blog-card">
                <div className="meta">
                    <div className="photo houses" />
                </div>
                <div className="description">
                    <h1>Houses</h1>
                    <p> "The four Houses are called Gryffindor, Hufflepuff, Ravenclaw, and Slytherin. Each House has its own noble history and each has produced outstanding witches and wizards. While you are at Hogwarts, your triumphs will earn your House points, while any rule breaking will lose House points. At the end of the year, the House with the most points is awarded the House Cup, a great honour." - Minerva McGonagall</p>
                    <p className="read-more">
                        <Link to="/houses">Read More</Link>
                    </p>
                </div>
            </div>

            <div className="blog-card alt">
                <div className="meta">
                    <div className="photo spell" />
                </div>
                <div className="description">
                    <h1>Spells </h1>
                    <p>A spell is a controlled manifestation of magic that affects the world in a supernatural fashion, such as levitating objects, conjuring fire or water, or stunning an individual. Generally cast by a witch or a wizard, spells are often produced with an incantation, and may appear as jets of light. Because of this spells can usually miss, be dodged, or blocked, either with an object or another spell. The action of performing a spell is referred to as casting or spellwork.</p>
                    <p className="read-more">
                        <Link to="/spells">Learn Spells</Link>
                    </p>
                </div>
            </div>

            <div className="blog-card">
                <div className="meta">
                    <div className="photo hat" />
                </div>
                <div className="description">
                    <h1>Sorting Hat </h1>
                    <p>In the early days of Hogwarts, the four founders handpicked students for their Houses. When the founders worried how students would be selected after their deaths, Godric Gryffindor took his hat off and each "put some brains" in it, creating the Sorting Hat to choose future students for each House. Get sorted into one house!</p>
                    <p className="read-more">
                        <Link to="/sortinghat">Get sorted</Link>
                    </p>
                </div>
            </div>

            <div className="blog-card alt mb-5">
                <div className="meta">
                    <div className="photo forum" />
                </div>
                <div className="description">
                    <h1>Hogwarts Community </h1>
                    <p>An easy way to interact with other Potterheads!</p>
                    <p style={{color: "white"}}>Publish a new message whenever you want and get to know new people that like Harry Potter. </p>
                    <p className="read-more">
                        <Link to="/forum">Publish a message</Link>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default CardsHome;