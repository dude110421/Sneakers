// --- 1. SETUP AND DATA ---
const SNEAKER_DB = [{
    id: 1,
    name: "Air Jordan 1 'Chicago'",
    colors: ['Red', 'White', 'Black'],
    occasions: ['casual'],
    imageUrl: 'https://placehold.co/100x100/FEE2E2/B91C1C?text=AJ1+Chicago'
}, {
    id: 2,
    name: "Nike Air Force 1 '07",
    colors: ['White'],
    occasions: ['casual', 'work'],
    imageUrl: 'https://placehold.co/100x100/FFFFFF/1F2937?text=AF1'
}, {
    id: 3,
    name: "Nike Dunk Low 'Panda'",
    colors: ['Black', 'White'],
    occasions: ['casual'],
    imageUrl: 'https://placehold.co/100x100/000000/FFFFFF?text=Panda+Dunk'
}, {
    id: 4,
    name: "Adidas Ultraboost 'Triple White'",
    colors: ['White'],
    occasions: ['casual', 'athleisure'],
    imageUrl: 'https://placehold.co/100x100/FFFFFF/111827?text=Ultraboost'
}, {
    id: 5,
    name: "Yeezy 700 'Wave Runner'",
    colors: ['Grey', 'Teal', 'Black', 'Orange'],
    occasions: ['casual'],
    imageUrl: 'https://placehold.co/100x100/9CA3AF/0284C7?text=Wave+Runner'
}, {
    id: 6,
    name: "New Balance 990v5 'Grey'",
    colors: ['Grey', 'White'],
    occasions: ['casual', 'athleisure', 'work'],
    imageUrl: 'https://placehold.co/100x100/D1D5DB/111827?text=NB+990v5'
}, {
    id: 7,
    name: "Adidas Samba OG",
    colors: ['White', 'Black', 'Grey'],
    occasions: ['casual'],
    imageUrl: 'https://placehold.co/100x100/FFFFFF/111827?text=Samba'
}, {
    id: 8,
    name: "Converse Chuck 70 High",
    colors: ['Black', 'Sail'],
    occasions: ['casual'],
    imageUrl: 'https://placehold.co/100x100/111827/FFFFFF?text=Chuck+70'
}, {
    id: 9,
    name: "Salomon XT-6",
    colors: ['Black', 'White', 'Grey'],
    occasions: ['casual', 'athleisure'],
    imageUrl: 'https://placehold.co/100x100/4B5563/F9FAFB?text=XT-6'
}, {
    id: 10,
    name: "Common Projects Achilles Low 'White'",
    colors: ['White'],
    occasions: ['casual', 'work'],
    imageUrl: 'https://placehold.co/100x100/FFFFFF/4B5563?text=CP+Achilles'
}, {
    id: 11,
    name: "Travis Scott x AJ1 'Mocha'",
    colors: ['Mocha', 'Sail', 'Black'],
    occasions: ['casual'],
    imageUrl: 'https://placehold.co/100x100/854d27/f5f5f4?text=Mocha+AJ1'
}, {
    id: 12,
    name: "Nike Dunk Low 'University Blue'",
    colors: ['University Blue', 'White'],
    occasions: ['casual'],
    imageUrl: 'https://placehold.co/100x100/60a5fa/FFFFFF?text=UNC+Dunk'
}];

const CLOTHING_DB = [{
    id: 101,
    type: 'top',
    name: 'White T-Shirt',
    colors: ['White', 'Sail'],
    occasions: ['casual', 'athleisure', 'work'],
    imageUrl: 'https://placehold.co/150x150/FFFFFF/333333?text=White+Tee'
}, {
    id: 102,
    type: 'top',
    name: 'Black Hoodie',
    colors: ['Black'],
    occasions: ['casual', 'athleisure'],
    imageUrl: 'https://placehold.co/150x150/111827/FFFFFF?text=Black+Hoodie'
}, {
    id: 103,
    type: 'top',
    name: 'Grey Sweatshirt',
    colors: ['Grey'],
    occasions: ['casual', 'athleisure'],
    imageUrl: 'https://placehold.co/150x150/9CA3AF/FFFFFF?text=Grey+Sweatshirt'
}, {
    id: 104,
    type: 'top',
    name: 'Blue Oxford Shirt',
    colors: ['University Blue', 'Blue'],
    occasions: ['work', 'casual'],
    imageUrl: 'https://placehold.co/150x150/60a5fa/FFFFFF?text=Blue+Shirt'
}, {
    id: 105,
    type: 'top',
    name: 'Red Flannel',
    colors: ['Red', 'Black'],
    occasions: ['casual'],
    imageUrl: 'https://placehold.co/150x150/DC2626/111827?text=Red+Flannel'
}, {
    id: 201,
    type: 'bottom',
    name: 'Black Jeans',
    colors: ['Black'],
    occasions: ['casual', 'work'],
    imageUrl: 'https://placehold.co/150x150/1F2937/FFFFFF?text=Black+Jeans'
}, {
    id: 202,
    type: 'bottom',
    name: 'Light Wash Jeans',
    colors: ['University Blue', 'Blue'],
    occasions: ['casual'],
    imageUrl: 'https://placehold.co/150x150/A5B4FC/111827?text=Light+Jeans'
}, {
    id: 203,
    type: 'bottom',
    name: 'Grey Sweatpants',
    colors: ['Grey'],
    occasions: ['casual', 'athleisure'],
    imageUrl: 'https://placehold.co/150x150/B0B0B0/111827?text=Grey+Sweats'
}, {
    id: 204,
    type: 'bottom',
    name: 'Khaki Chinos',
    colors: ['Mocha', 'Sail'],
    occasions: ['casual', 'work'],
    imageUrl: 'https://placehold.co/150x150/D2B48C/111827?text=Khakis'
}, {
    id: 205,
    type: 'bottom',
    name: 'Black Tech Shorts',
    colors: ['Black'],
    occasions: ['athleisure'],
    imageUrl: 'https://placehold.co/150x150/222222/FFFFFF?text=Black+Shorts'
}];

const COLOR_MAP = {
    'Black': [20, 20, 20],
    'White': [250, 250, 250],
    'Sail': [245, 245, 235],
    'Red': [215, 30, 45],
    'Green': [0, 128, 0],
    'Blue': [0, 0, 255],
    'Royal Blue': [65, 105, 225],
    'University Blue': [96, 165, 250],
    'Grey': [128, 128, 128],
    'Yellow': [255, 255, 0],
    'Mocha': [133, 77, 39],
    'Teal': [0, 128, 128],
    'Orange': [255, 165, 0]
};
const OCCASIONS = ['casual', 'athleisure', 'work'];

// DOM Element References
const allViews = {
    stylist: document.getElementById('stylist-view'),
    closet: document.getElementById('closet-view'),
    outfitBuilder: document.getElementById('outfit-builder-view'),
    browse: document.getElementById('browse-view')
};
const closetItemsContainer = document.getElementById('closet-items-container');
const imageUpload = document.getElementById('image-upload');
const imagePreview = document.getElementById('image-preview');
const imagePlaceholder = document.getElementById('image-placeholder');
const imagePreviewContainer = document.getElementById('image-preview-container');
const analyzeButton = document.getElementById('analyze-button');
const resultsContainer = document.getElementById('results-container');
const occasionFilters = document.getElementById('occasion-filters');
const addSneakerModal = document.getElementById('add-sneaker-modal');
const modalTitle = document.getElementById('modal-title');
const modalImagePreview = document.getElementById('modal-image-preview');
const sneakerImageUpload = document.getElementById('sneaker-image-upload');
const sneakerIdInput = document.getElementById('sneaker-id');

const colorThief = new ColorThief();
let uploadedImage = null;
let selectedOccasion = 'casual';
let myCloset = [];
let customSneakers = [];
let resizedSneakerImageUrl = null;

// --- 2. AI & APP LOGIC ---

function resizeImage(file, maxWidth, maxHeight) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;
                if (width > height) {
                    if (width > maxWidth) {
                        height *= maxWidth / width;
                        width = maxWidth;
                    }
                } else {
                    if (height > maxHeight) {
                        width *= maxHeight / height;
                        height = maxHeight;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                resolve(canvas.toDataURL('image/jpeg', 0.8));
            };
            img.onerror = reject;
            img.src = event.target.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

function loadData() {
    myCloset = JSON.parse(localStorage.getItem('mySneakerCloset') || '[]');
    customSneakers = JSON.parse(localStorage.getItem('myCustomSneakers') || '[]');
}

function saveData() {
    localStorage.setItem('mySneakerCloset', JSON.stringify(myCloset));
    localStorage.setItem('myCustomSneakers', JSON.stringify(customSneakers));
}

function getFullSneakerList() {
    return [...SNEAKER_DB, ...customSneakers];
}

function addToCloset(sneakerId) {
    if (!myCloset.includes(sneakerId)) {
        myCloset.push(sneakerId);
    }
}

function removeFromCloset(sneakerId) {
    myCloset = myCloset.filter(id => id !== sneakerId);
    customSneakers = customSneakers.filter(s => s.id !== sneakerId);
    saveData();
    renderCloset();
    renderOutfitBuilderSelection();
}

function renderCloset() {
    closetItemsContainer.innerHTML = '';
    const allClosetItems = getFullSneakerList().filter(s => myCloset.includes(s.id));
    if (allClosetItems.length === 0) {
        closetItemsContainer.innerHTML = `<p class="text-center text-gray-500">Your closet is empty.</p>`;
        return;
    }
    allClosetItems.forEach(sneaker => {
        closetItemsContainer.innerHTML += `
            <div class="bg-gray-50 p-3 rounded-lg flex items-center justify-between">
                <div class="flex items-center space-x-4">
                    <img src="${sneaker.imageUrl}" alt="${sneaker.name}" class="w-12 h-12 rounded-md object-cover bg-gray-200">
                    <span class="font-medium">${sneaker.name}</span>
                </div>
                <div class="flex space-x-2">
                    <button class="edit-btn text-blue-500 hover:text-blue-700 font-semibold text-sm" data-id="${sneaker.id}">Edit</button>
                    <button class="remove-btn text-red-500 hover:text-red-700 font-semibold text-sm" data-id="${sneaker.id}">Remove</button>
                </div>
            </div>`;
    });
}

function openEditModal(sneakerId) {
    const sneaker = getFullSneakerList().find(s => s.id === sneakerId);
    if (!sneaker) return;
    modalTitle.textContent = 'Edit Sneaker';
    sneakerIdInput.value = sneaker.id;
    document.getElementById('sneaker-name').value = sneaker.name;
    document.querySelectorAll('#color-checkboxes input, #occasion-checkboxes input').forEach(box => box.checked = false);
    sneaker.colors.forEach(color => {
        const cb = document.querySelector(`#color-checkboxes input[value="${color}"]`);
        if (cb) cb.checked = true;
    });
    sneaker.occasions.forEach(occ => {
        const cb = document.querySelector(`#occasion-checkboxes input[value="${occ}"]`);
        if (cb) cb.checked = true;
    });
    modalImagePreview.src = sneaker.imageUrl;
    modalImagePreview.classList.remove('hidden');
    resizedSneakerImageUrl = sneaker.imageUrl;
    sneakerImageUpload.required = false;
    addSneakerModal.classList.remove('hidden');
}

function getColorDistance(rgb1, rgb2) {
    let [r1, g1, b1] = rgb1;
    let [r2, g2, b2] = rgb2;
    return Math.sqrt(Math.pow(r1 - r2, 2) + Math.pow(g1 - g2, 2) + Math.pow(b1 - b2, 2));
}

function getColorName(rgbArray) {
    let closestColorName = '';
    let minDistance = Infinity;
    for (const colorName in COLOR_MAP) {
        const distance = getColorDistance(rgbArray, COLOR_MAP[colorName]);
        if (distance < minDistance) {
            minDistance = distance;
            closestColorName = colorName;
        }
    }
    return closestColorName;
}

function findSneakers(colorNames, occasion) {
    const recs = new Set();
    const lowerCaseColors = colorNames.map(n => n.toLowerCase());
    const filteredDB = getFullSneakerList().filter(s => s.occasions.includes(occasion));
    filteredDB.forEach(sneaker => {
        if (sneaker.colors.some(sc => lowerCaseColors.includes(sc.toLowerCase()))) recs.add(sneaker);
    });
    return Array.from(recs);
}

function displayResults(recommendations, detectedPaletteRgb) {
    resultsContainer.innerHTML = '';
    sessionStorage.setItem('lastResults', JSON.stringify(recommendations));
    sessionStorage.setItem('lastPalette', JSON.stringify(detectedPaletteRgb));
    resultsContainer.innerHTML = `<h2 class="text-lg font-semibold text-gray-800 mb-2 text-center">Detected Palette</h2>`;
    const paletteDiv = document.createElement('div');
    paletteDiv.className = 'flex justify-center items-center space-x-2 mb-4';
    detectedPaletteRgb.forEach(rgb => {
        paletteDiv.innerHTML += `<div class="w-8 h-8 rounded-full border-2 border-white shadow" style="background-color: rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})"></div>`;
    });
    resultsContainer.appendChild(paletteDiv);
    if (recommendations.length > 0) {
        const list = document.createElement('ul');
        list.className = 'space-y-3';
        recommendations.forEach(sneaker => {
            const inCloset = myCloset.includes(sneaker.id);
            const badge = inCloset ? `<span class="ml-2 text-xs font-semibold bg-green-100 text-green-800 px-2 py-1 rounded-full">In Closet</span>` : '';
            list.innerHTML += `<li class="bg-gray-50 p-3 rounded-lg flex items-center justify-between transition hover:bg-gray-100">
                <div class="flex items-center space-x-4">
                    <img src="${sneaker.imageUrl}" alt="${sneaker.name}" class="w-16 h-16 rounded-md object-cover bg-gray-200">
                    <div><span class="font-medium">${sneaker.name}</span>${badge}</div>
                </div>
                <button class="add-btn bg-blue-100 text-blue-700 hover:bg-blue-200 font-bold text-lg w-8 h-8 rounded-full disabled:opacity-50 disabled:cursor-not-allowed" data-id="${sneaker.id}" ${inCloset ? 'disabled' : ''}>+</button>
            </li>`;
        });
        resultsContainer.appendChild(list);
    } else {
        resultsContainer.innerHTML += `<p class="text-center text-gray-500 bg-gray-50 p-3 rounded-lg">No sneakers found.</p>`;
    }
}

function populateModalCheckboxes() {
    document.getElementById('color-checkboxes').innerHTML = Object.keys(COLOR_MAP).sort().map(c => `<label class="flex items-center space-x-2"><input type="checkbox" name="colors" value="${c}" class="rounded border-gray-300"><span>${c}</span></label>`).join('');
    document.getElementById('occasion-checkboxes').innerHTML = OCCASIONS.map(o => `<label class="flex items-center space-x-2"><input type="checkbox" name="occasions" value="${o}" class="rounded border-gray-300"><span class="capitalize">${o}</span></label>`).join('');
}

// --- BROWSE & OUTFIT BUILDER LOGIC ---
function renderBrowseView(searchTerm = '') {
    const container = document.getElementById('browse-items-container');
    container.innerHTML = '';
    const filteredSneakers = SNEAKER_DB.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()));

    if (filteredSneakers.length === 0) {
        container.innerHTML = `<p class="text-center text-gray-500">No sneakers found.</p>`;
        return;
    }

    filteredSneakers.forEach(sneaker => {
        const inCloset = myCloset.includes(sneaker.id);
        container.innerHTML += `
            <div class="bg-gray-50 p-3 rounded-lg flex items-center justify-between">
                <div class="flex items-center space-x-4">
                    <img src="${sneaker.imageUrl}" alt="${sneaker.name}" class="w-12 h-12 rounded-md object-cover bg-gray-200">
                    <span class="font-medium">${sneaker.name}</span>
                </div>
                <button class="add-btn bg-blue-100 text-blue-700 hover:bg-blue-200 font-bold text-lg w-8 h-8 rounded-full disabled:opacity-50 disabled:cursor-not-allowed" data-id="${sneaker.id}" ${inCloset ? 'disabled' : ''}>+</button>
            </div>`;
    });
}

function renderOutfitBuilderSelection() {
    const container = document.getElementById('outfit-builder-closet-items');
    container.innerHTML = '';
    const closetSneakers = getFullSneakerList().filter(s => myCloset.includes(s.id));
    if (closetSneakers.length === 0) {
        container.innerHTML = `<p class="text-center text-gray-500 col-span-3">Add sneakers to your closet to use this feature.</p>`;
        return;
    }
    closetSneakers.forEach(sneaker => {
        container.innerHTML += `
            <button class="outfit-sneaker-btn text-center" data-id="${sneaker.id}">
                <img src="${sneaker.imageUrl}" alt="${sneaker.name}" class="w-full h-auto rounded-lg object-cover aspect-square bg-gray-200">
                <p class="text-xs font-medium mt-1">${sneaker.name}</p>
            </button>
        `;
    });
}

function findOutfits(sneaker) {
    const outfits = [];
    const sneakerColors = sneaker.colors.map(c => c.toLowerCase());
    for (const occasion of sneaker.occasions) {
        const tops = CLOTHING_DB.filter(c => c.type === 'top' && c.occasions.includes(occasion) && c.colors.some(cc => sneakerColors.includes(cc.toLowerCase())));
        const bottoms = CLOTHING_DB.filter(c => c.type === 'bottom' && c.occasions.includes(occasion) && c.colors.some(cc => sneakerColors.includes(cc.toLowerCase())));
        if (tops.length > 0 && bottoms.length > 0) {
            outfits.push({
                occasion,
                top: tops[0],
                bottom: bottoms[0]
            });
        }
    }
    return outfits;
}

function displayOutfitResults(sneaker, outfits) {
    const container = document.getElementById('outfit-builder-results');
    container.innerHTML = `
        <div class="text-center mb-4">
            <button id="back-to-selection-btn" class="text-blue-600 font-semibold">&larr; Back to Selection</button>
            <h2 class="text-lg font-bold">Styling: ${sneaker.name}</h2>
        </div>`;
    if (outfits.length === 0) {
        container.innerHTML += `<p class="text-center text-gray-500">No outfit ideas found.</p>`;
        return;
    }
    outfits.forEach(outfit => {
        container.innerHTML += `
            <div class="bg-gray-50 rounded-lg p-4 mb-4">
                <h3 class="font-semibold text-center capitalize mb-2">${outfit.occasion} Look</h3>
                <div class="flex justify-center space-x-4">
                    <div class="text-center">
                        <img src="${outfit.top.imageUrl}" alt="${outfit.top.name}" class="w-24 h-24 rounded-md object-cover bg-gray-200">
                        <p class="text-xs mt-1">${outfit.top.name}</p>
                    </div>
                    <div class="text-center">
                        <img src="${outfit.bottom.imageUrl}" alt="${outfit.bottom.name}" class="w-24 h-24 rounded-md object-cover bg-gray-200">
                        <p class="text-xs mt-1">${outfit.bottom.name}</p>
                    </div>
                </div>
            </div>`;
    });
}

// --- 3. EVENT LISTENERS AND INITIALIZATION ---

document.addEventListener('DOMContentLoaded', () => {
    loadData();
    renderCloset();
    populateModalCheckboxes();
    analyzeButton.disabled = true;

    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.replace('active', 'inactive'));
            btn.classList.replace('inactive', 'active');
            Object.values(allViews).forEach(view => view.classList.add('hidden'));
            allViews[tab].classList.remove('hidden');

            if (tab === 'closet') renderCloset();
            if (tab === 'browse') renderBrowseView();
            if (tab === 'outfitBuilder') {
                document.getElementById('outfit-builder-selection').classList.remove('hidden');
                document.getElementById('outfit-builder-results').classList.add('hidden');
                renderOutfitBuilderSelection();
            }
        });
    });

    // Image upload
    imageUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                imagePreview.src = e.target.result;
                uploadedImage = imagePreview;
                imagePreviewContainer.classList.remove('hidden');
                imagePlaceholder.classList.add('hidden');
                analyzeButton.disabled = false;
                resultsContainer.innerHTML = '';
            };
            reader.readAsDataURL(file);
        }
    });

    // Occasion filter
    occasionFilters.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            selectedOccasion = event.target.dataset.occasion;
            document.querySelectorAll('#occasion-filters .filter-btn').forEach(btn => {
                btn.classList.replace('active', 'inactive');
                if (btn.dataset.occasion === selectedOccasion) btn.classList.add('active');
            });
        }
    });

    // Analyze button
    analyzeButton.addEventListener('click', () => {
        if (!uploadedImage) return;
        resultsContainer.innerHTML = `<div class="mx-auto loader"></div>`;
        analyzeButton.disabled = true;
        analyzeButton.textContent = 'Analyzing...';
        setTimeout(() => {
            try {
                const paletteRgb = colorThief.getPalette(uploadedImage, 3);
                const detectedColorNames = [...new Set(paletteRgb.map(rgb => getColorName(rgb)))];
                const recommendations = findSneakers(detectedColorNames, selectedOccasion);
                displayResults(recommendations, paletteRgb);
            } catch (error) {
                console.error("Error analyzing image:", error);
                resultsContainer.innerHTML = `<p class="text-center text-red-500">Could not analyze image.</p>`;
            } finally {
                analyzeButton.disabled = false;
                analyzeButton.textContent = '3. Analyze Outfit';
            }
        }, 100);
    });

    // Dynamic event listeners
    document.body.addEventListener('click', event => {
        const target = event.target;
        if (target.closest('.add-btn')) {
            const sneakerId = target.closest('.add-btn').dataset.id.startsWith('custom-') ? target.closest('.add-btn').dataset.id : parseInt(target.closest('.add-btn').dataset.id, 10);
            addToCloset(sneakerId);
            saveData();
            const lastResults = JSON.parse(sessionStorage.getItem('lastResults') || '[]');
            const lastPalette = JSON.parse(sessionStorage.getItem('lastPalette') || '[]');
            if (lastResults.length > 0 && !allViews.stylist.classList.contains('hidden')) displayResults(lastResults, lastPalette);
            if (!allViews.browse.classList.contains('hidden')) renderBrowseView(document.getElementById('browse-search').value);
        }
        if (target.closest('.remove-btn')) {
            const sneakerId = target.closest('.remove-btn').dataset.id.startsWith('custom-') ? target.closest('.remove-btn').dataset.id : parseInt(target.closest('.remove-btn').dataset.id, 10);
            removeFromCloset(sneakerId);
        }
        if (target.closest('.edit-btn')) {
            const sneakerId = target.closest('.edit-btn').dataset.id.startsWith('custom-') ? target.closest('.edit-btn').dataset.id : parseInt(target.closest('.edit-btn').dataset.id, 10);
            openEditModal(sneakerId);
        }
        if (target.closest('.outfit-sneaker-btn')) {
            const sneakerId = target.closest('.outfit-sneaker-btn').dataset.id.startsWith('custom-') ? target.closest('.outfit-sneaker-btn').dataset.id : parseInt(target.closest('.outfit-sneaker-btn').dataset.id, 10);
            const sneaker = getFullSneakerList().find(s => s.id === sneakerId);
            if (sneaker) {
                const outfits = findOutfits(sneaker);
                displayOutfitResults(sneaker, outfits);
                document.getElementById('outfit-builder-selection').classList.add('hidden');
                document.getElementById('outfit-builder-results').classList.remove('hidden');
            }
        }
        if (target.closest('#back-to-selection-btn')) {
            document.getElementById('outfit-builder-selection').classList.remove('hidden');
            document.getElementById('outfit-builder-results').classList.add('hidden');
        }
    });

    // Modal listeners
    document.getElementById('add-sneaker-btn').addEventListener('click', () => {
        modalTitle.textContent = 'Add a Custom Sneaker';
        document.getElementById('add-sneaker-form').reset();
        sneakerIdInput.value = '';
        modalImagePreview.classList.add('hidden');
        sneakerImageUpload.required = true;
        addSneakerModal.classList.remove('hidden');
    });

    document.getElementById('cancel-sneaker-btn').addEventListener('click', () => {
        document.getElementById('add-sneaker-form').reset();
        modalImagePreview.classList.add('hidden');
        addSneakerModal.classList.add('hidden');
        resizedSneakerImageUrl = null;
    });

    sneakerImageUpload.addEventListener('change', async (event) => {
        const file = event.target.files[0];
        if (file) {
            try {
                resizedSneakerImageUrl = await resizeImage(file, 200, 200);
                modalImagePreview.src = resizedSneakerImageUrl;
                modalImagePreview.classList.remove('hidden');
                const tempImg = new Image();
                tempImg.onload = () => {
                    const paletteRgb = colorThief.getPalette(tempImg, 4);
                    const detectedColorNames = [...new Set(paletteRgb.map(rgb => getColorName(rgb)))];
                    document.querySelectorAll('#color-checkboxes input').forEach(box => box.checked = false);
                    detectedColorNames.forEach(colorName => {
                        const cb = document.querySelector(`#color-checkboxes input[value="${colorName}"]`);
                        if (cb) cb.checked = true;
                    });
                };
                tempImg.src = resizedSneakerImageUrl;
            } catch (error) {
                console.error("Error processing sneaker image:", error);
                alert("Could not process image.");
                resizedSneakerImageUrl = null;
            }
        }
    });

    document.getElementById('save-sneaker-btn').addEventListener('click', () => {
        const form = document.getElementById('add-sneaker-form');
        const id = sneakerIdInput.value;
        const name = form.querySelector('#sneaker-name').value;
        const colors = Array.from(form.querySelectorAll('input[name="colors"]:checked')).map(el => el.value);
        const occasions = Array.from(form.querySelectorAll('input[name="occasions"]:checked')).map(el => el.value);
        const imageFile = form.querySelector('#sneaker-image-upload').files[0];

        if (name && colors.length > 0 && occasions.length > 0) {
            if (id) { // Editing
                const sneakerIndex = customSneakers.findIndex(s => s.id == id);
                if (sneakerIndex > -1) {
                    customSneakers[sneakerIndex].name = name;
                    customSneakers[sneakerIndex].colors = colors;
                    customSneakers[sneakerIndex].occasions = occasions;
                    if (resizedSneakerImageUrl && resizedSneakerImageUrl !== customSneakers[sneakerIndex].imageUrl) {
                        customSneakers[sneakerIndex].imageUrl = resizedSneakerImageUrl;
                    }
                }
            } else { // Adding
                if (!imageFile && !resizedSneakerImageUrl) {
                    alert('Please upload an image.');
                    return;
                }
                const newSneaker = {
                    id: `custom-${Date.now()}`,
                    name,
                    colors,
                    occasions,
                    imageUrl: resizedSneakerImageUrl
                };
                customSneakers.push(newSneaker);
                addToCloset(newSneaker.id);
            }
            saveData();
            renderCloset();
            addSneakerModal.classList.add('hidden');
            form.reset();
            modalImagePreview.classList.add('hidden');
            resizedSneakerImageUrl = null;
        } else {
            alert('Please fill out all fields.');
        }
    });

    document.getElementById('browse-search').addEventListener('input', (e) => {
        renderBrowseView(e.target.value);
    });
});