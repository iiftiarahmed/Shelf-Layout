const translations = {
    en: {
        shelf_layout_manager: 'Shelf Layout',
        add_sku: 'Add SKU',
        edit_sku: 'Edit SKU',
        add_cabinet: 'Add Cabinet',
        search_skus: 'Search SKUs...',
        sku_details: 'SKU Details',
        jan_code: 'JAN Code',
        name: 'Name',
        size_ml: 'Size (ml)',
        shape: 'Shape',
        bottle: 'Bottle',
        can: 'Can',
        box: 'Box',
        image_url: 'Image URL',
        width_cm: 'Width (cm)',
        depth_cm: 'Depth (cm)',
        height_cm: 'Height (cm)',
        cabinet: 'Cabinet',
        row: 'Row',
        lane: 'Lane',
        quantity: 'Quantity',
        save_sku: 'Save',
        close: 'Close',
        remove_sku: 'Remove SKU',
        row_label: 'Row',
        height_label: 'Height',
        cabinet_label: 'Cabinet',
        remove: 'Remove',
        add_row: 'Add Row',
        add_lane: 'Add Lane',
        duplicate_jancode: 'JAN Code exists',
        required_fields_missing: 'Fill all required fields',
        duplicate_sku_in_shelf: 'SKU already in another lane',
        quantity_exceeds_capacity: 'Too many items for lane',
        sku_saved_success: 'SKU saved',
        cabinet_added_success: 'Cabinet added',
        cabinet_removed_success: 'Cabinet removed',
        row_added_success: 'Row added',
        row_removed_success: 'Row removed',
        lane_added_success: 'Lane added',
        lane_removed_success: 'Lane removed',
        quantity_updated_success: 'Quantity updated',
        sku_removed_success: 'SKU removed',
        minimum_cabinet_required: 'Need at least one cabinet',
        minimum_row_required: 'Need at least one row',
        minimum_lane_required: 'Need at least one lane'
    },
    ja: {
        shelf_layout_manager: '棚レイアウト',
        add_sku: 'SKU追加',
        edit_sku: 'SKU編集',
        add_cabinet: 'キャビネット追加',
        search_skus: 'SKU検索...',
        sku_details: 'SKU詳細',
        jan_code: 'JANコード',
        name: '名前',
        size_ml: 'サイズ（ml）',
        shape: '形状',
        bottle: 'ボトル',
        can: '缶',
        box: 'ボックス',
        image_url: '画像URL',
        width_cm: '幅（cm）',
        depth_cm: '奥行き（cm）',
        height_cm: '高さ（cm）',
        cabinet: 'キャビネット',
        row: '行',
        lane: 'レーン',
        quantity: '数量',
        save_sku: '保存',
        close: '閉じる',
        remove_sku: 'SKU削除',
        row_label: '行',
        height_label: '高さ',
        cabinet_label: 'キャビネット',
        remove: '削除',
        add_row: '行追加',
        add_lane: 'レーン追加',
        duplicate_jancode: 'JANコード重複',
        required_fields_missing: '必須項目を入力',
        duplicate_sku_in_shelf: 'SKUは他のレーンに割り当て済み',
        quantity_exceeds_capacity: 'レーン容量超過',
        sku_saved_success: 'SKU保存成功',
        cabinet_added_success: 'キャビネット追加成功',
        cabinet_removed_success: 'キャビネット削除成功',
        row_added_success: '行追加成功',
        row_removed_success: '行削除成功',
        lane_added_success: 'レーン追加成功',
        lane_removed_success: 'レーン削除成功',
        quantity_updated_success: '数量更新成功',
        sku_removed_success: 'SKU削除成功',
        minimum_cabinet_required: '最低1キャビネット必要',
        minimum_row_required: '最低1行必要',
        minimum_lane_required: '最低1レーン必要'
    }
};

const shelfData = {
    Cabinets: [
        {
            Number: 1,
            Rows: [
                {
                    Number: 1,
                    Lanes: [
                        { Number: 1, JanCode: '4902102112457', Quantity: 10, PositionX: 5 },
                        { Number: 2, JanCode: '4902102112464', Quantity: 15, PositionX: 10 },
                        { Number: 3, JanCode: '4902102112471', Quantity: 12, PositionX: 15 },
                        { Number: 4, JanCode: '4902102112488', Quantity: 8, PositionX: 20 },
                        { Number: 5, JanCode: '4902102112495', Quantity: 9, PositionX: 25 },
                        { Number: 6, JanCode: '4902102112501', Quantity: 11, PositionX: 30 }
                    ],
                    PositionZ: 50,
                    Size: { Height: 40 }
                },
                {
                    Number: 2,
                    Lanes: [
                        { Number: 7, JanCode: '4902102112518', Quantity: 13, PositionX: 5 },
                        { Number: 8, JanCode: '4902102112525', Quantity: 14, PositionX: 10 },
                        { Number: 9, JanCode: '4902102112532', Quantity: 10, PositionX: 15 },
                        { Number: 10, JanCode: '4902102112549', Quantity: 7, PositionX: 20 },
                        { Number: 11, JanCode: '4902102112556', Quantity: 6, PositionX: 25 },
                        { Number: 12, JanCode: '4902102112563', Quantity: 5, PositionX: 30 }
                    ],
                    PositionZ: 100,
                    Size: { Height: 40 }
                }
            ],
            Position: { X: 10, Y: 20, Z: 0 },
            Size: { Width: 100, Depth: 50, Height: 200 }
        },
        {
            Number: 2,
            Rows: [
                {
                    Number: 1,
                    Lanes: [
                        { Number: 1, JanCode: '4902102112693', Quantity: 23, PositionX: 5 },
                        { Number: 2, JanCode: '4902102112709', Quantity: 24, PositionX: 10 },
                        { Number: 3, JanCode: '4902102112716', Quantity: 25, PositionX: 15 },
                        { Number: 4, JanCode: '4902102112723', Quantity: 26, PositionX: 20 },
                        { Number: 5, JanCode: '4902102112730', Quantity: 27, PositionX: 25 },
                        { Number: 6, JanCode: '4902102112747', Quantity: 28, PositionX: 30 }
                    ],
                    PositionZ: 50,
                    Size: { Height: 40 }
                }
            ],
            Position: { X: 15, Y: 25, Z: 5 },
            Size: { Width: 105, Depth: 55, Height: 205 }
        }
    ]
};

const skuData = [
    { JanCode: '4902102112457', Name: 'おーいお茶緑茶/O-i green tea 2000ml', X: 0.091, Y: 0.107, Z: 0.311, ImageURL: 'https://operationmanagerstorage.blob.core.windows.net/skus/4901085614730_1659397571.jpg', Size: '2000', Shape: 'Bottle' },
    { JanCode: '4902102112464', Name: '伊右衛門/Iemon 2000ml', X: 0.106, Y: 0.092, Z: 0.312, ImageURL: 'https://operationmanagerstorage.blob.core.windows.net/skus/4901777238022_1677304245.jpg', Size: '2000', Shape: 'Bottle' },
    { JanCode: '4902102112471', Name: '新綾鷹抹茶グリーンティー/Ayaka Matcha Green Tea 370ml', X: 0.066, Y: 0.066, Z: 0.166, ImageURL: 'https://operationmanagerstorage.blob.core.windows.net/skus/4902102148160_1668652334.jpg', Size: '370', Shape: 'Bottle' },
    { JanCode: '4902102112488', Name: 'クラフトボス抹茶ラテ/Craft Boss Matcha Latte 500ml', X: 0.072, Y: 0.072, Z: 0.177, ImageURL: 'https://operationmanagerstorage.blob.core.windows.net/skus/4901777368798_1672288959.jpg', Size: '500', Shape: 'Bottle' },
    { JanCode: '4902102112495', Name: 'からだすこやか茶Ｗ/Fresh Body Tea W350ml', X: 0.067, Y: 0.067, Z: 0.158, ImageURL: 'https://operationmanagerstorage.blob.core.windows.net/skus/4902102108065_1659397570.jpg', Size: '350', Shape: 'Bottle' },
    { JanCode: '4902102112501', Name: '綾鷹カフェ抹茶ラテ/Ayataka Cafe Matcha Latte 440ml', X: 0.068, Y: 0.068, Z: 0.185, ImageURL: 'https://operationmanagerstorage.blob.core.windows.net/skus/4902102142885_1679809596.jpg', Size: '440', Shape: 'Bottle' },
    { JanCode: '4902102112518', Name: '爽健美茶/Sokenbicha 300ml', X: 0.06, Y: 0.06, Z: 0.167, ImageURL: 'https://operationmanagerstorage.blob.core.windows.net/skus/4902102103138_1684221171.jpg', Size: '300', Shape: 'Bottle' },
    { JanCode: '4902102112525', Name: '綾鷹/Ayataka 300ml', X: 0.06, Y: 0.06, Z: 0.167, ImageURL: 'https://operationmanagerstorage.blob.core.windows.net/skus/4902102101288_1678168301.jpg', Size: '300', Shape: 'Bottle' },
    { JanCode: '4902102112532', Name: '伊右衛門プラス血糖値対策/Iemon plus blood sugar level 350ml', X: 0.06, Y: 0.06, Z: 0.162, ImageURL: 'https://operationmanagerstorage.blob.core.windows.net/skus/4901777356658_1659397569.jpg', Size: '350', Shape: 'Bottle' },
    { JanCode: '4902102112549', Name: '胡麻麦茶/Sesame and barley tea 350ml', X: 0.06, Y: 0.06, Z: 0.158, ImageURL: 'https://operationmanagerstorage.blob.core.windows.net/skus/4901777235533_1673227712.jpg', Size: '350', Shape: 'Bottle' },
    { JanCode: '4902102112556', Name: '綾鷹カフェほうじ茶ラテ/Ayataka Cafe Hojicha Latte 440ml', X: 0.068, Y: 0.068, Z: 0.185, ImageURL: 'https://operationmanagerstorage.blob.core.windows.net/skus/4902102144124_1659397566.jpg', Size: '440', Shape: 'Bottle' },
    { JanCode: '4902102112563', Name: 'トマトジュース高リコピントマト使用/High on lycopene tomato juice265g', X: 0.053, Y: 0.053, Z: 0.166, ImageURL: 'https://operationmanagerstorage.blob.core.windows.net/skus/4901306024010_1659397565.jpg', Size: '265', Shape: 'Bottle' },
    { JanCode: '4902102112693', Name: '天然水きりっと果実オレンジ＆マンゴー/Dried fruit orange & mango Water600ml', X: 0.068, Y: 0.068, Z: 0.224, ImageURL: 'https://operationmanagerstorage.blob.core.windows.net/skus/4901777375901_1678168618.jpg', Size: '600', Shape: 'Bottle' },
    { JanCode: '4902102112709', Name: 'エビアン/Evian750ml', X: 0.082, Y: 0.082, Z: 0.21, ImageURL: 'https://operationmanagerstorage.blob.core.windows.net/skus/3068320116266_1659397561.jpg', Size: '750', Shape: 'Bottle' },
    { JanCode: '4902102112716', Name: 'サントリー天然水/Suntory Natural Water 2000ml', X: 0.091, Y: 0.106, Z: 0.311, ImageURL: 'https://operationmanagerstorage.blob.core.windows.net/skus/4901777018686_1679809773.jpg', Size: '2000', Shape: 'Bottle' },
    { JanCode: '4902102112723', Name: 'トロピカーナ100%オレンジ/Tropicana 100%orange 330ml', X: 0.06, Y: 0.06, Z: 0.184, ImageURL: 'https://operationmanagerstorage.blob.core.windows.net/skus/4909411073114_1659397561.jpg', Size: '330', Shape: 'Bottle' },
    { JanCode: '4902102112730', Name: 'ウェルチ１房分のぶどう/welch 1 bunch 470ml', X: 0.072, Y: 0.072, Z: 0.173, ImageURL: 'https://operationmanagerstorage.blob.core.windows.net/skus/4901340064041_1659397560.jpg', Size: '470', Shape: 'Bottle' },
    { JanCode: '4902102112747', Name: '伊右衛門カフェジャスミンティーラテ/Cafe Jasmine Tea latte 500ml', X: 0.072, Y: 0.072, Z: 0.177, ImageURL: 'https://operationmanagerstorage.blob.core.windows.net/skus/4901777381254_1659397560.jpg', Size: '500', Shape: 'Bottle' }
];

const MAX_QUANTITY = 30;
const LANE_WIDTH = 20;
const LANE_DEPTH = 50;

let selectedSku = null;
let editingSku = null;
let lang = 'en';

const $ = (id) => document.getElementById(id);
const skuList = $('skuList');
const shelf = $('shelf');
const detail = $('detail');
const detailContent = $('detailContent');
const modal = $('modal');
const alertBox = $('alert');

const init = () => {
    setLang(lang);
    renderSkus();
    renderShelves();
    setupEvents();
};

const setLang = (newLang) => {
    lang = newLang;
    document.querySelectorAll('.lang').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
    document.querySelectorAll('[data-i18n]').forEach(el => el.textContent = translations[lang][el.dataset.i18n] || el.textContent);
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => el.placeholder = translations[lang][el.dataset.i18nPlaceholder] || el.placeholder);
    document.querySelectorAll('#shape option').forEach(opt => opt.textContent = translations[lang][opt.dataset.i18n] || opt.textContent);
    renderSkus();
    renderShelves();
};

const showAlert = (msg, type = 'error') => {
    alertBox.textContent = translations[lang][msg] || msg;
    alertBox.className = `alert ${type} active`;
    setTimeout(() => alertBox.className = 'alert', 3000);
};

const isDuplicateSku = (jan, excludeIdx = -1) => skuData.some((s, i) => s.JanCode === jan && i !== excludeIdx);

const checkLaneCapacity = (sku, qty) => {
    const maxPerRow = Math.floor(LANE_WIDTH / (sku.X * 100));
    const maxPerDepth = Math.floor(LANE_DEPTH / (sku.Y * 100));
    return qty <= Math.min(maxPerRow * maxPerDepth, MAX_QUANTITY);
};

const isDuplicateInShelf = (jan, cab, row, lane, editingJan = null) =>
    shelfData.Cabinets.some(c =>
        c.Rows.some(r =>
            r.Lanes.some(l =>
                l.JanCode === jan &&
                (c.Number !== +cab || r.Number !== +row || l.Number !== +lane) &&
                !(editingJan && l.JanCode === editingJan && c.Number === +cab && r.Number === +row && l.Number === +lane)
            )
        )
    );

const findSkuLocation = (jan) => {
    for (const c of shelfData.Cabinets)
        for (const r of c.Rows)
            for (const l of r.Lanes)
                if (l.JanCode === jan)
                    return { cabinet: c.Number, row: r.Number, lane: l.Number, qty: l.Quantity };
    return null;
};

const renderSkus = () => {
    skuList.innerHTML = '';
    skuData.forEach((sku, i) => {
        const name = sku.Name.split('/')[lang === 'ja' ? 0 : 1] || sku.Name;
        const item = document.createElement('div');
        item.className = 'sku-item';
        item.dataset.jan = sku.JanCode;
        item.innerHTML = `
            <img src="${sku.ImageURL}" alt="${name}" onerror="this.src='https://via.placeholder.com/40?text=No+Image'">
            <div>
                <h4>${name}</h4>
                <p>${sku.Size}ml • ${translations[lang][sku.Shape.toLowerCase()]}</p>
            </div>
            <button class="outline" onclick="editSku(${i})">${translations[lang].edit || 'Edit'}</button>
        `;
        item.addEventListener('click', (e) => {
            if (e.target.tagName !== 'BUTTON') {
                selectedSku = sku;
                document.querySelectorAll('.sku-item').forEach(el => el.classList.toggle('active', el.dataset.jan === sku.JanCode));
            }
        });
        skuList.appendChild(item);
    });
};

const renderShelves = () => {
    shelf.innerHTML = '';
    shelfData.Cabinets.forEach(cab => {
        const cabEl = document.createElement('div');
        cabEl.className = 'cabinet';
        cabEl.innerHTML = `
            <div class="cabinet-header">
                <div class="cabinet-title">${translations[lang].cabinet_label} ${cab.Number}</div>
                <div class="cabinet-controls">
                    <button class="outline" onclick="addRow(${cab.Number})">${translations[lang].add_row}</button>
                    <button class="danger" onclick="removeCab(${cab.Number})">${translations[lang].remove}</button>
                </div>
                <div class="cabinet-dimensions">${cab.Size.Width}cm × ${cab.Size.Depth}cm × ${cab.Size.Height}cm</div>
            </div>
            <div class="rows" id="cab-${cab.Number}"></div>
        `;
        const rows = cabEl.querySelector(`#cab-${cab.Number}`);
        cab.Rows.forEach(row => {
            const rowEl = document.createElement('div');
            rowEl.className = 'row';
            rowEl.innerHTML = `
                <div class="row-header">
                    <span>${translations[lang].row_label} ${row.Number}</span>
                    <div class="row-controls">
                        <button class="outline" onclick="addLane(${cab.Number}, ${row.Number})">${translations[lang].add_lane}</button>
                        <button class="danger" onclick="removeRow(${cab.Number}, ${row.Number})">${translations[lang].remove}</button>
                    </div>
                    <span>${translations[lang].height_label}: ${row.Size.Height}cm</span>
                </div>
                <div class="lanes" id="cab-${cab.Number}-row-${row.Number}"></div>
            `;
            const lanes = rowEl.querySelector(`#cab-${cab.Number}-row-${row.Number}`);
            row.Lanes.forEach(lane => {
                const laneEl = document.createElement('div');
                laneEl.className = `lane${lane.JanCode ? '' : ' empty'}`;
                laneEl.dataset.cabinet = cab.Number;
                laneEl.dataset.row = row.Number;
                laneEl.dataset.lane = lane.Number;
                const sku = skuData.find(s => s.JanCode === lane.JanCode);
                laneEl.innerHTML = `
                    <span class="lane-number">${translations[lang].lane} ${lane.Number}</span>
                    <div class="lane-sku">
                        ${sku ? `
                            <img src="${sku.ImageURL}" alt="${sku.Name.split('/')[lang === 'ja' ? 0 : 1]}" onerror="this.src='https://via.placeholder.com/40?text=No+Image'">
                            <span class="quantity">${lane.Quantity}</span>
                        ` : translations[lang].empty || 'Empty'}
                    </div>
                `;
                laneEl.addEventListener('click', () => {
                    if (selectedSku) {
                        if (isDuplicateInShelf(selectedSku.JanCode, cab.Number, row.Number, lane.Number)) {
                            showAlert('duplicate_sku_in_shelf');
                            return;
                        }
                        if (!checkLaneCapacity(selectedSku, lane.Quantity || 1)) {
                            showAlert('quantity_exceeds_capacity');
                            return;
                        }
                        lane.JanCode = selectedSku.JanCode;
                        lane.Quantity = lane.Quantity || 1;
                        renderShelves();
                        showAlert('sku_saved_success', 'success');
                    } else if (sku) {
                        showDetail(sku, lane, cab, row);
                    }
                });
                lanes.appendChild(laneEl);
            });
            rows.appendChild(rowEl);
        });
        shelf.appendChild(cabEl);
    });
};

const showDetail = (sku, lane, cab, row) => {
    const name = sku.Name.split('/')[lang === 'ja' ? 0 : 1] || sku.Name;
    detailContent.innerHTML = `
        <div class="sku-image">
            <img src="${sku.ImageURL || 'https://via.placeholder.com/200?text=No+Image'}" alt="${name}">
        </div>
        <div class="sku-details">
            <div class="detail-group">
                <h4>${translations[lang].name}</h4>
                <p>${name}</p>
            </div>
            <div class="detail-group">
                <h4>${translations[lang].jan_code}</h4>
                <p>${sku.JanCode}</p>
            </div>
            <div class="detail-group">
                <h4>${translations[lang].size_ml}</h4>
                <p>${sku.Size}ml</p>
            </div>
            <div class="detail-group">
                <h4>${translations[lang].shape}</h4>
                <p>${translations[lang][sku.Shape.toLowerCase()] || sku.Shape}</p>
            </div>
            <div class="detail-group">
                <h4>${translations[lang].dimensions}</h4>
                <p>${(sku.X * 100).toFixed(1)} × ${(sku.Y * 100).toFixed(1)} × ${(sku.Z * 100).toFixed(1)} cm</p>
            </div>
        </div>
        <label for="qty">${translations[lang].quantity}</label>
        <input id="qty" type="number" value="${lane.Quantity || 1}" min="1">
        <div class="actions">
            <button id="saveLane" class="primary">${translations[lang].save}</button>
            <button id="removeSku" class="danger">${translations[lang].remove_sku}</button>
        </div>
    `;
    detail.classList.add('active');
    $('saveLane').addEventListener('click', () => {
        const qty = +$('qty').value;
        if (!checkLaneCapacity(sku, qty)) {
            showAlert('quantity_exceeds_capacity');
            return;
        }
        lane.Quantity = qty;
        renderShelves();
        detail.classList.remove('active');
        showAlert('quantity_updated_success', 'success');
    });
    $('removeSku').addEventListener('click', () => {
        lane.JanCode = null;
        lane.Quantity = null;
        renderShelves();
        detail.classList.remove('active');
        showAlert('sku_removed_success', 'success');
    });
};

const populateSelects = (cabNum = '', rowNum = '', laneNum = '') => {
    const cabSel = $('cabinet');
    const rowSel = $('row');
    const laneSel = $('lane');
    cabSel.innerHTML = `<option value="" disabled ${!cabNum ? 'selected' : ''}>${translations[lang].cabinet}</option>`;
    shelfData.Cabinets.forEach(c => {
        cabSel.innerHTML += `<option value="${c.Number}" ${c.Number == cabNum ? 'selected' : ''}>${translations[lang].cabinet_label} ${c.Number}</option>`;
    });
    rowSel.innerHTML = `<option value="" disabled ${!rowNum ? 'selected' : ''}>${translations[lang].row}</option>`;
    laneSel.innerHTML = `<option value="" disabled ${!laneNum ? 'selected' : ''}>${translations[lang].lane}</option>`;
    const cab = shelfData.Cabinets.find(c => c.Number === +cabNum || c.Number === +cabSel.value);
    if (cab) {
        cab.Rows.forEach(r => {
            rowSel.innerHTML += `<option value="${r.Number}" ${r.Number == rowNum ? 'selected' : ''}>${translations[lang].row_label} ${r.Number}</option>`;
        });
        const row = cab.Rows.find(r => r.Number === +rowNum || r.Number === +rowSel.value);
        if (row) {
            row.Lanes.forEach(l => {
                laneSel.innerHTML += `<option value="${l.Number}" ${l.Number == laneNum ? 'selected' : ''}>${translations[lang].lane} ${l.Number}</option>`;
            });
        }
    }
    cabSel.onchange = () => {
        rowSel.innerHTML = `<option value="" disabled selected>${translations[lang].row}</option>`;
        laneSel.innerHTML = `<option value="" disabled selected>${translations[lang].lane}</option>`;
        const c = shelfData.Cabinets.find(c => c.Number === +cabSel.value);
        if (c) c.Rows.forEach(r => rowSel.innerHTML += `<option value="${r.Number}">${translations[lang].row_label} ${r.Number}</option>`);
    };
    rowSel.onchange = () => {
        laneSel.innerHTML = `<option value="" disabled selected>${translations[lang].lane}</option>`;
        const c = shelfData.Cabinets.find(c => c.Number === +cabSel.value);
        if (c) {
            const r = c.Rows.find(r => r.Number === +rowSel.value);
            if (r) r.Lanes.forEach(l => laneSel.innerHTML += `<option value="${l.Number}">${translations[lang].lane} ${l.Number}</option>`);
        }
    };
};

const showModal = (sku = null) => {
    editingSku = sku;
    $('modalTitle').textContent = translations[lang][sku ? 'edit_sku' : 'add_sku'];
    $('janCode').value = sku ? sku.JanCode : '';
    $('skuName').value = sku ? sku.Name : '';
    $('size').value = sku ? sku.Size : '';
    $('shape').value = sku ? sku.Shape : 'Bottle';
    $('image').value = sku ? sku.ImageURL : '';
    $('x').value = sku ? (sku.X * 100).toFixed(2) : '';
    $('y').value = sku ? (sku.Y * 100).toFixed(2) : '';
    $('z').value = sku ? (sku.Z * 100).toFixed(2) : '';
    $('quantity').value = sku ? findSkuLocation(sku.JanCode)?.qty || 1 : 1;
    populateSelects(...(sku ? Object.values(findSkuLocation(sku.JanCode) || {}) : []));
    modal.classList.add('active');
};

const editSku = (i) => showModal(skuData[i]);

const saveSku = () => {
    const sku = {
        JanCode: $('janCode').value,
        Name: $('skuName').value,
        Size: $('size').value,
        Shape: $('shape').value,
        ImageURL: $('image').value || 'https://via.placeholder.com/40?text=No+Image',
        X: +$('x').value / 100,
        Y: +$('y').value / 100,
        Z: +$('z').value / 100
    };
    const cab = $('cabinet').value;
    const row = $('row').value;
    const lane = $('lane').value;
    const qty = +$('quantity').value;

    if (!sku.JanCode || !sku.Name || !sku.Size || !sku.Shape || !sku.X || !sku.Y || !sku.Z || !cab || !row || !lane || !qty) {
        showAlert('required_fields_missing');
        return;
    }

    if (isDuplicateSku(sku.JanCode, editingSku ? skuData.indexOf(editingSku) : -1)) {
        showAlert('duplicate_jancode');
        return;
    }

    const c = shelfData.Cabinets.find(c => c.Number === +cab);
    const r = c.Rows.find(r => r.Number === +row);
    const l = r.Lanes.find(l => l.Number === +lane);

    if (isDuplicateInShelf(sku.JanCode, cab, row, lane, editingSku?.JanCode)) {
        showAlert('duplicate_sku_in_shelf');
        return;
    }

    if (!checkLaneCapacity(sku, qty)) {
        showAlert('quantity_exceeds_capacity');
        return;
    }

    if (editingSku) {
        const loc = findSkuLocation(editingSku.JanCode);
        if (loc) {
            const oldCab = shelfData.Cabinets.find(c => c.Number === loc.cabinet);
            const oldRow = oldCab.Rows.find(r => r.Number === loc.row);
            const oldLane = oldRow.Lanes.find(l => l.Number === loc.lane);
            oldLane.JanCode = null;
            oldLane.Quantity = null;
        }
        skuData[skuData.indexOf(editingSku)] = sku;
    } else {
        skuData.push(sku);
    }

    l.JanCode = sku.JanCode;
    l.Quantity = qty;
    renderSkus();
    renderShelves();
    modal.classList.remove('active');
    showAlert('sku_saved_success', 'success');
};

const addCab = () => {
    const num = shelfData.Cabinets.length + 1;
    shelfData.Cabinets.push({
        Number: num,
        Rows: [{ Number: 1, Lanes: [{ Number: 1, JanCode: null, Quantity: null, PositionX: 5 }], PositionZ: 50, Size: { Height: 40 } }],
        Position: { X: 10, Y: 20, Z: 0 },
        Size: { Width: 100, Depth: 50, Height: 200 }
    });
    renderShelves();
    showAlert('cabinet_added_success', 'success');
};

const removeCab = (num) => {
    if (shelfData.Cabinets.length <= 1) {
        showAlert('minimum_cabinet_required');
        return;
    }
    shelfData.Cabinets = shelfData.Cabinets.filter(c => c.Number !== num).map((c, i) => ({ ...c, Number: i + 1 }));
    renderShelves();
    showAlert('cabinet_removed_success', 'success');
};

const addRow = (cabNum) => {
    const cab = shelfData.Cabinets.find(c => c.Number === cabNum);
    const num = cab.Rows.length + 1;
    cab.Rows.push({ Number: num, Lanes: [{ Number: 1, JanCode: null, Quantity: null, PositionX: 5 }], PositionZ: 50 + (num - 1) * 50, Size: { Height: 40 } });
    renderShelves();
    showAlert('row_added_success', 'success');
};

const removeRow = (cabNum, rowNum) => {
    const cab = shelfData.Cabinets.find(c => c.Number === cabNum);
    if (cab.Rows.length <= 1) {
        showAlert('minimum_row_required');
        return;
    }
    cab.Rows = cab.Rows.filter(r => r.Number !== rowNum).map((r, i) => ({ ...r, Number: i + 1, PositionZ: 50 + i * 50 }));
    renderShelves();
    showAlert('row_removed_success', 'success');
};

const addLane = (cabNum, rowNum) => {
    const cab = shelfData.Cabinets.find(c => c.Number === cabNum);
    const row = cab.Rows.find(r => r.Number === rowNum);
    const num = row.Lanes.length + 1;
    row.Lanes.push({ Number: num, JanCode: null, Quantity: null, PositionX: 5 + (num - 1) * 10 });
    renderShelves();
    showAlert('lane_added_success', 'success');
};

const removeLane = (cabNum, rowNum, laneNum) => {
    const cab = shelfData.Cabinets.find(c => c.Number === cabNum);
    const row = cab.Rows.find(r => r.Number === rowNum);
    if (row.Lanes.length <= 1) {
        showAlert('minimum_lane_required');
        return;
    }
    row.Lanes = row.Lanes.filter(l => l.Number !== laneNum).map((l, i) => ({ ...l, Number: i + 1, PositionX: 5 + i * 10 }));
    renderShelves();
    showAlert('lane_removed_success', 'success');
};

const setupEvents = () => {
    $('closeDetail').onclick = () => detail.classList.remove('active');
    $('closeModal').onclick = () => modal.classList.remove('active');
    $('closeModalBtn').onclick = () => modal.classList.remove('active');
    $('addSku').onclick = () => showModal();
    $('saveSku').onclick = saveSku;
    $('addCabinet').onclick = addCab;
    $('.search').oninput = (e) => {
        const term = e.target.value.toLowerCase();
        document.querySelectorAll('.sku-item').forEach(el => {
            el.style.display = el.querySelector('h4').textContent.toLowerCase().includes(term) ? 'flex' : 'none';
        });
    };
    document.querySelectorAll('.lang').forEach(btn => btn.onclick = () => setLang(btn.dataset.lang));
};

window.editSku = editSku;
window.addRow = addRow;
window.removeCab = removeCab;
window.removeRow = removeRow;
window.addLane = addLane;
window.removeLane = removeLane;

init();