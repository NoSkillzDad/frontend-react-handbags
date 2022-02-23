import React from 'react';
import './App.css';
import Button from "./Button";
import Product from "./Product";

import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import ourStory from './assets/our_story.png';


import Tile from "./Tile";

function App() {

    return (
        <div className={"main"}>
            <h1>Handbags & Purses</h1>
            <nav className={"top-nav"}>
                <Button
                    buttonText={"to the collection"}
                />
                <Button
                    buttonText={"shop all bags"}
                />
                <Button
                    disabled={true}
                    buttonText={"pre-orders"}
                />
            </nav>
            <main className={"shop-main"}>
                <Product
                    label={"Best seller"}
                    title={"The handy bag"}
                    price={400}
                    image={bag1}
                />
                <Product
                    label={"Best seller"}
                    title={"The stylish bag"}
                    price={250}
                    image={bag2}
                />
                <Product
                    label={"New Collection"}
                    title={"The simple bag"}
                    price={300}
                    image={bag3}
                />
                <Product
                    label={"New Collection"}
                    title={"The trendy bag"}
                    price={150}
                    image={bag4}
                />
            </main>
            <footer>
                <section className={"Tile"}>
                    <Tile
                        title="The brand"

                        text = {["Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
                        "Deleniti deserunt dolores et fuga fugiat fugit nisi porro quam sapiente vero? " +
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
                            "Deleniti deserunt dolores et fuga fugiat fugit nisi porro quam sapiente vero? " +
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit."]}
                    />
                </section>
                <section>
                    <Tile
                        image={brand}
                        altText="Our Brand"
                    />
                </section>
                <section>
                    <Tile
                        image={ourStory}
                        altText="Our Story"
                    />
                </section>
                <section>
                    <Tile
                        title="Our Story"
                        text = {["Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
                        "A corporis doloribus fugit illum nemo nesciunt perferendis placeat quibusdam similique tempore. " +
                        "Alias cum id ipsum non perferendis voluptate. " +
                        "Asperiores dolor earum explicabo molestias mollitia nulla soluta veritatis. Animi ipsam magni vel?"]}
                    />
                </section>
            </footer>
        </div>
    );
}

export default App;



