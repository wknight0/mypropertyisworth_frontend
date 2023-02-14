function card_column()
{
    var cards = document.getElementById("inner-card-container");
    cards.classList.remove("small-up-3", "medium-up-3");
    cards.classList.add("small-up-1", "medium-up-1");
}

function card_row()
{
    var cards = document.getElementById("inner-card-container");
    cards.classList.remove("small-up-1", "medium-up-1");
    cards.classList.add("small-up-3", "medium-up-3");
}

initial_width = window.innerWidth;
{
    if (initial_width <= 639)
    {
        card_column();
    }
    else
    {
        card_row();
    }
}

$(window).resize(function()
{
    width = window.innerWidth;
    
    if (width <= 639)
    {
        card_column();
    }
    else
    {
        card_row();
    }
});