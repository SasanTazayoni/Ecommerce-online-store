import items from "./items.json";
import { addToCart } from "./shoppingCart";
import addGlobalListener from "./utils/addGlobalEventListener.js";
import formatCurrency from "./utils/fomatCurrency.js";

console.log(items);

const storeItemTemplate = document.querySelector('#store-item-template');
const storeItemContainer = document.querySelector('[data-store-container]');
const IMAGE_URL = "https://dummyimage.com/210x130/"

export function setupStore() {
    if (storeItemContainer == null) return;
    addGlobalListener('click', '[data-add-to-cart-button]', e => {
        const id = e.target.closest('[data-store-item]').dataset.itemId;
        addToCart(parseInt(id));
    });

    items.forEach(renderStoreItem);
}

function renderStoreItem(item) {
    const storeItem = storeItemTemplate.content.cloneNode(true);

    const container = storeItem.querySelector('[data-store-item]');
    container.dataset.itemId = item.id;

    const name = storeItem.querySelector('[data-name]');
    name.innerText = item.name;

    const category = storeItem.querySelector('[data-category]');
    category.innerText = item.category;

    const image = storeItem.querySelector('[data-image]');
    image.src = `${IMAGE_URL}${item.imageColor}/${item.imageColor}`;

    const price = storeItem.querySelector('[data-price]');
    price.innerText = formatCurrency(item.pricePounds / 100);

    storeItemContainer.appendChild(storeItem);
}