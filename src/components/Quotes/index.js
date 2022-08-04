import React from 'react';
import '../../styles/quotes.css';
import '../../styles/general.css';
import styled from 'styled-components';

const Background = styled.div`
    text-align: center;
    height: 100vh;
    background-color: black;
    background-image: url("https://images.pottermore.com/bxd3o8b291gf/6RvTzHvJn2eIeW6gcg6WsE/4e2cf595a8cb5369d1972e6fd2e31f0e/GryffindorCommonRoom_PM_B1C13M1_GryffindorCommonRoomFireplace_Moment.jpg?w=1450&h=635&fit=thumb&f=center&q=85");
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.7;
`;

const Content = styled.div`
    padding-top:20%;
`;

const H1 = styled.h1`
    color: white;
    text-align: center;
    font-family: "Amatic SC", cursive;
    font-size: 70px;
    font-weight: 800;
`;

const Quotes = () => {
    var quotes = [
        "You're a wizard, Harry. - Hagrid",
        "We could all have been killed - or worse, expelled. - Hermione Granger",
        "Not my daughter, you bitch! - Mrs. Weasley",
        "Never trust anything that can think for itself if you can't see where it keeps its brain. -Mrs. Weasley",
        "There is no need to call me Sir, Professor. - Harry Potter",
        "Have a biscuit, Potter. - Professor McGonagall",
        "I solemnly swear I am up to no good. - Harry Potter",
        "We did it, we bashed them, wee Potter's the one, and Voldy's gone moldy so now let's have fun! - Peeves",
        "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends. - Albus Dumbledore",
        "One can never have enough socks. - Albus Dumbledore",
        "Eat Slugs! - Ron Weasley",
        "It does not do to dwell on dreams and forget to live. - Dumbledore",
        "But you know, happiness can be found even in the darkest of times, if one only remembers to turn on the light. - Dumbledore",
        "Words are, in my not-so-humble opinion, our most inexhaustible source of magic. - Dumbledore",
        "It's wingardium leviOsa, not leviosAH. - Hermione Granger",
        "We've all got both light and dark inside us. What matters is the part we choose to act on. That's who we really are. -Sirius Black",
        "Oculus Reparo! -Hermione Granger"
    ]

    const newQuote = () => {
        var randomNumber = Math.floor(Math.random() * (quotes.length));
        document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
    }

    return (
        <Background>
            <Content>
                <H1>Harry Potter Quote Generator</H1>
                <div id="quoteDisplay">
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="text-center">
                            <button className="btn btn-1" id="singlebutton" onClick={newQuote}>
                                New Quote
                        </button>
                        </div>
                    </div>
                </div>
            </Content>
        </Background>
    )
}

export default Quotes;