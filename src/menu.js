const renderMenuPage = (() => {
    return `
        <div class="drinks">
            <h1 class="red">Drinks</h1>
            <div class="items">
                <div class="group">
                    <h2>Non-alcoholic</h2>
                    <div class="item">
                        <div class="name">Water</div>
                        <div class="price">€2.50</div>
                    </div>
                    <div class="item">
                        <div class="name">Coke</div>
                        <div class="price">€3.50</div>
                    </div>
                    <div class="item">
                        <div class="name">Orange Juice</div>
                        <div class="price">€4.00</div>
                    </div>
                    <div class="item">
                        <div class="name">Apple Juice</div>
                        <div class="price">€3.80</div>
                    </div>
                </div>

                <div class="group">
                    <h2>Alcoholic</h2>
                    <div class="item">
                        <div class="name">Beer</div>
                        <div class="price">€5.50</div>
                    </div>
                    <div class="item">
                        <div class="name">Cider</div>
                        <div class="price">€5.70</div>
                    </div>
                    <div class="item">
                        <div class="name">Red Wine</div>
                        <div class="price">€7.00</div>
                    </div>
                    <div class="item">
                        <div class="name">White Wine</div>
                        <div class="price">€7.00</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="food">
            <h1 class="red">Food</h1>
            <div class="items">
                <div class="group">
                    <h2>Starters</h2>
                    <div class="item">
                        <div class="name">Olives</div>
                        <div class="price">€2.40</div>
                    </div>
                    <div class="item">
                        <div class="name">Toast</div>
                        <div class="price">€3.50</div>
                    </div>
                    <div class="item">
                        <div class="name">Peanuts</div>
                        <div class="price">€2.00</div>
                    </div>
                    <div class="item">
                        <div class="name">Chips</div>
                        <div class="price">€4.50</div>
                    </div>
                </div>

                <div class="group">
                    <h2>Burgers</h2>
                    <div class="item">
                        <div class="name">Hamburger</div>
                        <div class="price">€12.30</div>
                    </div>
                    <div class="item">
                        <div class="name">Cheeseburger</div>
                        <div class="price">€13.50</div>
                    </div>
                    <div class="item">
                        <div class="name">Baconburger</div>
                        <div class="price">€15.00</div>
                    </div>
                    <div class="item">
                        <div class="name">Double cheeseburger</div>
                        <div class="price">€16.00</div>
                    </div>
                </div>

                <div class="group">
                    <h2>Pizza</h2>
                    <div class="item">
                        <div class="name">Margherita</div>
                        <div class="price">€8.50</div>
                    </div>
                    <div class="item">
                        <div class="name">Quattro formaggi</div>
                        <div class="price">€13.00</div>
                    </div>
                    <div class="item">
                        <div class="name">Neapolitan</div>
                        <div class="price">€12.00</div>
                    </div>
                    <div class="item">
                        <div class="name">Olive</div>
                        <div class="price">€11.00</div>
                    </div>
                </div>

                <div class="group">
                    <h2>Sides</h2>
                    <div class="item">
                        <div class="name">Fries</div>
                        <div class="price">€4.00</div>
                    </div>
                    <div class="item">
                        <div class="name">Potatoes</div>
                        <div class="price">€3.50</div>
                    </div>
                    <div class="item">
                        <div class="name">Rice</div>
                        <div class="price">€2.80</div>
                    </div>
                    <div class="item">
                        <div class="name">Salad</div>
                        <div class="price">€4.60</div>
                    </div>
                </div>
            </div>

        </div>
        <div class="small red">
            * information about allergens shall be provided on request
        </div>`;
    });


export { renderMenuPage };