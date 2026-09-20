/* =====================================================
   CARD POSITIONS
===================================================== */

const POSITIONS = {

  text: {

    name:
      { x: 15.0, y: 19.3, size: 2.0 },

    id:
      { x: 15.0, y: 27.2, size: 1.8 },

    time:
      { x: 15.0, y: 56.6, size: 1.75 },

    weapon:
      { x: 16.5, y: 64.5, size: 1.75 },

    playstyle:
      { x: 54.7, y: 88.2, size: 1.45 },

    comment:
      { x: 54.7, y: 92.5, size: 1.45 }

  },


  gender: {

    male:
      { x: 15.1, y: 34.1, size: 2.4 },

    female:
      { x: 27.5, y: 34.1, size: 2.4 },

    other:
      { x: 38.5, y: 34.1, size: 2.4 }

  },


  rank: {

    rookie:
      { x: 14.9, y: 50.2, size: 2.2 },

    bronze:
      { x: 19.6, y: 50.2, size: 2.2 },

    silver:
      { x: 24.3, y: 50.2, size: 2.2 },

    gold:
      { x: 29.0, y: 50.2, size: 2.2 },

    platinum:
      { x: 33.8, y: 50.2, size: 2.2 },

    diamond:
      { x: 38.5, y: 50.2, size: 2.2 },

    master:
      { x: 43.2, y: 50.2, size: 2.2 },

    predator:
      { x: 47.9, y: 50.2, size: 2.2 }

  },


  platform: {

    switch2:
      { x: 20.2, y: 82.0, size: 2.5 },

    ps:
      { x: 29.1, y: 82.0, size: 2.5 },

    xbox:
      { x: 37.8, y: 82.0, size: 2.5 },

    pc:
      { x: 46.5, y: 82.0, size: 2.5 }

  },


  vc: {

    none:
      { x: 16.4, y: 96.2, size: 2.5 },

    game:
      { x: 22.8, y: 96.2, size: 2.5 },

    switch2:
      { x: 29.0, y: 96.2, size: 2.5 },

    ps:
      { x: 35.2, y: 96.2, size: 2.5 },

    line:
      { x: 41.4, y: 96.2, size: 2.5 },

    discord:
      { x: 47.7, y: 96.2, size: 2.5 }

  },


  legend: {

    bloodhound:
      { x: 56.7, y: 22.3, size: 7.0 },

    gibraltar:
      { x: 64.0, y: 22.3, size: 7.0 },

    lifeline:
      { x: 71.2, y: 22.3, size: 7.0 },

    pathfinder:
      { x: 78.6, y: 22.3, size: 7.0 },

    wraith:
      { x: 85.9, y: 22.3, size: 7.0 },

    bangalore:
      { x: 93.0, y: 22.3, size: 7.0 },


    caustic:
      { x: 56.7, y: 34.6, size: 7.0 },

    mirage:
      { x: 64.0, y: 34.6, size: 7.0 },

    octane:
      { x: 71.2, y: 34.6, size: 7.0 },

    wattson:
      { x: 78.6, y: 34.6, size: 7.0 },

    crypto:
      { x: 85.9, y: 34.6, size: 7.0 },

    revenant:
      { x: 93.0, y: 34.6, size: 7.0 },


    loba:
      { x: 56.7, y: 46.9, size: 7.0 },

    rampart:
      { x: 64.0, y: 46.9, size: 7.0 },

    horizon:
      { x: 71.2, y: 46.9, size: 7.0 },

    fuse:
      { x: 78.6, y: 46.9, size: 7.0 },

    valkyrie:
      { x: 85.9, y: 46.9, size: 7.0 },

    seer:
      { x: 93.0, y: 46.9, size: 7.0 },


    ash:
      { x: 56.7, y: 59.2, size: 7.0 },

    madmaggie:
      { x: 64.0, y: 59.2, size: 7.0 },

    newcastle:
      { x: 71.2, y: 59.2, size: 7.0 },

    vantage:
      { x: 78.6, y: 59.2, size: 7.0 },

    catalyst:
      { x: 85.9, y: 59.2, size: 7.0 },

    ballistic:
      { x: 93.0, y: 59.2, size: 7.0 },


    conduit:
      { x: 56.7, y: 71.5, size: 7.0 },

    alter:
      { x: 64.0, y: 71.5, size: 7.0 },

    sparrow:
      { x: 71.2, y: 71.5, size: 7.0 },

    accel:
      { x: 78.6, y: 71.5, size: 7.0 }

  }

};


/* =====================================================
   CHECK POSITION OFFSET
   チェックを少し右にずらす
===================================================== */

const CHECK_X_OFFSET = 0.45;


/* =====================================================
   COLOR
===================================================== */

const COLORS = {

  text:
    "#111111",

  check:
    "#FF3B30",

  ring:
    "#C8FF2E",

  ringShadow:
    "rgba(0,0,0,0.95)",

  ringFill:
    "rgba(200,255,46,0.10)"

};


/* =====================================================
   OPTIONS
===================================================== */

const genders = [
  ["male", "男性"],
  ["female", "女性"],
  ["other", "その他"]
];


const ranks = [
  ["rookie", "ルーキー"],
  ["bronze", "ブロンズ"],
  ["silver", "シルバー"],
  ["gold", "ゴールド"],
  ["platinum", "プラチナ"],
  ["diamond", "ダイヤ"],
  ["master", "マスター"],
  ["predator", "プレデター"]
];


const platforms = [
  ["switch2", "Switch2"],
  ["ps", "PlayStation"],
  ["xbox", "Xbox"],
  ["pc", "PC"]
];


const vcs = [
  ["none", "なし"],
  ["game", "ゲーム内"],
  ["switch2", "Switch2"],
  ["ps", "PlayStation"],
  ["line", "LINE"],
  ["discord", "Discord"]
];


const legends = [
  ["bloodhound", "ブラッドハウンド"],
  ["gibraltar", "ジブラルタル"],
  ["lifeline", "ライフライン"],
  ["pathfinder", "パスファインダー"],
  ["wraith", "レイス"],
  ["bangalore", "バンガロール"],

  ["caustic", "コースティック"],
  ["mirage", "ミラージュ"],
  ["octane", "オクタン"],
  ["wattson", "ワットソン"],
  ["crypto", "クリプト"],
  ["revenant", "レヴナント"],

  ["loba", "ローバ"],
  ["rampart", "ランパート"],
  ["horizon", "ホライゾン"],
  ["fuse", "ヒューズ"],
  ["valkyrie", "ヴァルキリー"],
  ["seer", "シア"],

  ["ash", "アッシュ"],
  ["madmaggie", "マッドマギー"],
  ["newcastle", "ニューキャッスル"],
  ["vantage", "ヴァンテージ"],
  ["catalyst", "カタリスト"],
  ["ballistic", "バリスティック"],

  ["conduit", "コンジット"],
  ["alter", "オルター"],
  ["sparrow", "スパロー"],
  ["accel", "アクセル"]
];


/* =====================================================
   STATE
===================================================== */

const state = {
  gender: null,
  rank: null,
  platform: null,
  vc: new Set(),
  legends: new Set()
};


/* =====================================================
   DOM
===================================================== */

const overlay =
  document.getElementById("overlayLayer");

const legendCounter =
  document.getElementById("legendCounter");

const openImageButton =
  document.getElementById("openImageButton");

const saveMessage =
  document.getElementById("saveMessage");

const imageModal =
  document.getElementById("imageModal");

const imageModalBackdrop =
  document.getElementById("imageModalBackdrop");

const closeImageModal =
  document.getElementById("closeImageModal");

const resultImage =
  document.getElementById("resultImage");

const cardBackground =
  document.getElementById("cardBackground");


/* =====================================================
   SAFE CHECK
===================================================== */

if (
  !overlay ||
  !legendCounter ||
  !openImageButton ||
  !saveMessage ||
  !imageModal ||
  !imageModalBackdrop ||
  !closeImageModal ||
  !resultImage ||
  !cardBackground
) {
  throw new Error(
    "HTMLとJavaScriptの構成が一致していません。"
  );
}


/* =====================================================
   BUTTON CREATE
===================================================== */

function makeButtons(
  containerId,
  items,
  type
) {

  const container =
    document.getElementById(containerId);

  if (!container) {
    console.error(
      `要素が見つかりません: ${containerId}`
    );
    return;
  }

  container.innerHTML = "";

  items.forEach(([key, label]) => {

    const button =
      document.createElement("button");

    button.type = "button";
    button.className = "choice-button";
    button.textContent = label;
    button.dataset.key = key;

    button.addEventListener(
      "click",
      () => {
        handleChoice(type, key);
      }
    );

    container.appendChild(button);

  });

}


makeButtons(
  "genderButtons",
  genders,
  "gender"
);

makeButtons(
  "rankButtons",
  ranks,
  "rank"
);

makeButtons(
  "platformButtons",
  platforms,
  "platform"
);

makeButtons(
  "vcButtons",
  vcs,
  "vc"
);

makeButtons(
  "legendButtons",
  legends,
  "legend"
);


/* =====================================================
   CHOICE
===================================================== */

function handleChoice(
  type,
  key
) {

  if (type === "gender") {

    state.gender =
      state.gender === key
        ? null
        : key;

  }

  else if (type === "rank") {

    state.rank =
      state.rank === key
        ? null
        : key;

  }

  else if (type === "platform") {

    state.platform =
      state.platform === key
        ? null
        : key;

  }

  else if (type === "vc") {

    if (key === "none") {

      if (state.vc.has("none")) {

        state.vc.delete("none");

      }

      else {

        state.vc.clear();
        state.vc.add("none");

      }

    }

    else {

      state.vc.delete("none");

      if (state.vc.has(key)) {

        state.vc.delete(key);

      }

      else {

        state.vc.add(key);

      }

    }

  }

  else if (type === "legend") {

    if (state.legends.has(key)) {

      state.legends.delete(key);

    }

    else {

      if (state.legends.size >= 5) {

        alert(
          "レジェンドは最大5体まで選択できます！"
        );

        return;

      }

      state.legends.add(key);

    }

  }


  refreshButtons();
  renderCard();

}


/* =====================================================
   BUTTON REFRESH
===================================================== */

function refreshButtons() {

  document
    .querySelectorAll(".choice-button")
    .forEach(button => {
      button.classList.remove("selected");
    });


  markButton(
    "genderButtons",
    state.gender
  );


  markButton(
    "rankButtons",
    state.rank
  );


  markButton(
    "platformButtons",
    state.platform
  );


  state.vc.forEach(key => {

    markButton(
      "vcButtons",
      key
    );

  });


  state.legends.forEach(key => {

    markButton(
      "legendButtons",
      key
    );

  });


  legendCounter.textContent =
    `レジェンド ${state.legends.size} / 5`;

}


function markButton(
  parentId,
  key
) {

  if (!key) {
    return;
  }


  const parent =
    document.getElementById(parentId);


  if (!parent) {
    return;
  }


  const button =
    parent.querySelector(
      `[data-key="${key}"]`
    );


  if (button) {

    button.classList.add("selected");

  }

}


/* =====================================================
   INPUT
===================================================== */

const inputIds = [
  "nameInput",
  "idInput",
  "timeInput",
  "weaponInput",
  "styleInput",
  "commentInput"
];


inputIds.forEach(id => {

  const element =
    document.getElementById(id);

  if (element) {

    element.addEventListener(
      "input",
      renderCard
    );

  }

});


/* =====================================================
   PREVIEW
===================================================== */

function renderCard() {

  overlay.innerHTML = "";


  addTextPreview(
    "text.name",
    getInputValue("nameInput")
  );


  addTextPreview(
    "text.id",
    getInputValue("idInput")
  );


  addTextPreview(
    "text.time",
    getInputValue("timeInput")
  );


  addTextPreview(
    "text.weapon",
    getInputValue("weaponInput")
  );


  const playstyle =
    getInputValue("styleInput");


  if (playstyle) {

    addTextPreview(
      "text.playstyle",
      "プレイスタイル：" +
      playstyle,
      true
    );

  }


  addTextPreview(
    "text.comment",
    getInputValue("commentInput"),
    true
  );


  if (state.gender) {

    addCheckPreview(
      `gender.${state.gender}`
    );

  }


  if (state.rank) {

    addCheckPreview(
      `rank.${state.rank}`
    );

  }


  if (state.platform) {

    addCheckPreview(
      `platform.${state.platform}`
    );

  }


  state.vc.forEach(key => {

    addCheckPreview(
      `vc.${key}`
    );

  });


  state.legends.forEach(key => {

    addLegendRingPreview(
      `legend.${key}`
    );

  });

}


/* =====================================================
   GET INPUT
===================================================== */

function getInputValue(id) {

  const element =
    document.getElementById(id);

  return element
    ? element.value
    : "";

}


/* =====================================================
   PREVIEW TEXT
===================================================== */

function addTextPreview(
  path,
  value,
  multiline = false
) {

  if (!value) {
    return;
  }


  const pos =
    getPosition(path);


  const element =
    document.createElement("div");


  element.className =
    "card-text";


  if (multiline) {

    element.classList.add(
      "multiline"
    );

  }


  element.textContent =
    value;


  element.style.left =
    pos.x + "%";


  element.style.top =
    pos.y + "%";


  element.style.fontSize =
    pos.size + "cqw";


  overlay.appendChild(element);

}


/* =====================================================
   PREVIEW CHECK
   +0.45% 右へ移動
===================================================== */

function addCheckPreview(path) {

  const pos =
    getPosition(path);


  const marker =
    document.createElement("div");


  marker.className =
    "check-marker";


  marker.textContent =
    "✓";


  marker.style.left =
    (pos.x + CHECK_X_OFFSET) + "%";


  marker.style.top =
    pos.y + "%";


  marker.style.fontSize =
    pos.size + "cqw";


  overlay.appendChild(marker);

}


/* =====================================================
   PREVIEW LEGEND
===================================================== */

function addLegendRingPreview(path) {

  const pos =
    getPosition(path);


  const marker =
    document.createElement("div");


  marker.className =
    "legend-marker";


  marker.style.left =
    pos.x + "%";


  marker.style.top =
    pos.y + "%";


  marker.style.width =
    pos.size + "%";


  marker.style.aspectRatio =
    "1 / 1";


  overlay.appendChild(marker);

}


/* =====================================================
   POSITION
===================================================== */

function getPosition(path) {

  const [group, key] =
    path.split(".");


  return POSITIONS[group][key];

}


/* =====================================================
   IMAGE LOAD
===================================================== */

function loadImage(src) {

  return new Promise(
    (resolve, reject) => {

      const image =
        new Image();


      image.crossOrigin =
        "anonymous";


      image.referrerPolicy =
        "no-referrer";


      image.onload =
        () => {

          resolve(image);

        };


      image.onerror =
        error => {

          reject(error);

        };


      image.src =
        src;

    }
  );

}


/* =====================================================
   EXPORT HELPERS
===================================================== */

function percentX(
  percent,
  width
) {

  return width *
    percent /
    100;

}


function percentY(
  percent,
  height
) {

  return height *
    percent /
    100;

}


function sizeToPx(
  percent,
  width
) {

  return width *
    percent /
    100;

}


function setCanvasFont(
  context,
  size
) {

  context.font =
    `900 ${size}px -apple-system, BlinkMacSystemFont, "Segoe UI", "Hiragino Sans", "Yu Gothic", sans-serif`;


  context.fillStyle =
    COLORS.text;


  context.textAlign =
    "left";


  context.textBaseline =
    "middle";

}


/* =====================================================
   DRAW TEXT
===================================================== */

function drawText(
  context,
  path,
  value,
  width,
  height
) {

  if (!value) {
    return;
  }


  const pos =
    getPosition(path);


  const x =
    percentX(
      pos.x,
      width
    );


  const y =
    percentY(
      pos.y,
      height
    );


  const fontSize =
    sizeToPx(
      pos.size,
      width
    );


  setCanvasFont(
    context,
    fontSize
  );


  context.fillText(
    value,
    x,
    y
  );

}


/* =====================================================
   WRAPPED TEXT
===================================================== */

function splitText(
  context,
  text,
  maxWidth
) {

  const result = [];


  const paragraphs =
    String(text)
      .split("\n");


  paragraphs.forEach(
    paragraph => {

      if (paragraph === "") {

        result.push("");

        return;

      }


      let current = "";


      for (
        const character
        of paragraph
      ) {

        const test =
          current +
          character;


        if (
          context
            .measureText(test)
            .width
          <= maxWidth
          ||
          current === ""
        ) {

          current =
            test;

        }

        else {

          result.push(current);

          current =
            character;

        }

      }


      if (current) {

        result.push(current);

      }

    }
  );


  return result;

}


/* =====================================================
   DRAW WRAPPED TEXT
===================================================== */

function drawWrappedText(
  context,
  path,
  value,
  width,
  height,
  maxWidthRatio,
  maxLines
) {

  if (!value) {
    return;
  }


  const pos =
    getPosition(path);


  const x =
    percentX(
      pos.x,
      width
    );


  const y =
    percentY(
      pos.y,
      height
    );


  const fontSize =
    sizeToPx(
      pos.size,
      width
    );


  setCanvasFont(
    context,
    fontSize
  );


  const maxWidth =
    width *
    maxWidthRatio;


  const lines =
    splitText(
      context,
      value,
      maxWidth
    )
    .slice(
      0,
      maxLines
    );


  const lineHeight =
    fontSize *
    1.35;


  lines.forEach(
    (line, index) => {

      context.fillText(
        line,
        x,
        y +
        (
          lineHeight *
          index
        )
      );

    }
  );

}


/* =====================================================
   DRAW CHECK
   保存画像でも +0.45% 右へ移動
===================================================== */

function drawCheck(
  context,
  path,
  width,
  height
) {

  const pos =
    getPosition(path);


  const size =
    sizeToPx(
      pos.size,
      width
    );


  const x =
    percentX(
      pos.x + CHECK_X_OFFSET,
      width
    );


  const y =
    percentY(
      pos.y,
      height
    );


  context.save();


  context.fillStyle =
    COLORS.check;


  context.textAlign =
    "center";


  context.textBaseline =
    "middle";


  context.font =
    `900 ${size}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;


  context.fillText(
    "✓",
    x,
    y -
    size *
    0.08
  );


  context.restore();

}


/* =====================================================
   DRAW RING
===================================================== */

function drawRing(
  context,
  path,
  width,
  height
) {

  const pos =
    getPosition(path);


  const x =
    percentX(
      pos.x,
      width
    );


  const y =
    percentY(
      pos.y,
      height
    );


  const diameter =
    sizeToPx(
      pos.size,
      width
    );


  const radius =
    diameter /
    2;


  const outerWidth =
    Math.max(
      3,
      width *
      0.0018
    );


  const ringWidth =
    Math.max(
      3,
      width *
      0.0025
    );


  context.save();


  context.beginPath();


  context.arc(
    x,
    y,
    radius,
    0,
    Math.PI *
    2
  );


  context.fillStyle =
    COLORS.ringFill;


  context.fill();


  context.lineWidth =
    ringWidth +
    outerWidth;


  context.strokeStyle =
    COLORS.ringShadow;


  context.stroke();


  context.beginPath();


  context.arc(
    x,
    y,
    radius,
    0,
    Math.PI *
    2
  );


  context.lineWidth =
    ringWidth;


  context.strokeStyle =
    COLORS.ring;


  context.stroke();


  context.restore();

}


/* =====================================================
   HIGH QUALITY EXPORT
===================================================== */

async function generateCardImage() {

  const src =
    cardBackground.currentSrc
    ||
    cardBackground.src;


  const background =
    await loadImage(src);


  const width =
    background.naturalWidth;


  const height =
    background.naturalHeight;


  const canvas =
    document.createElement("canvas");


  canvas.width =
    width;


  canvas.height =
    height;


  const context =
    canvas.getContext(
      "2d",
      {
        alpha: false
      }
    );


  context.imageSmoothingEnabled =
    false;


  context.drawImage(
    background,
    0,
    0
  );


  const name =
    getInputValue("nameInput");


  const id =
    getInputValue("idInput");


  const time =
    getInputValue("timeInput");


  const weapon =
    getInputValue("weaponInput");


  const style =
    getInputValue("styleInput");


  const comment =
    getInputValue("commentInput");


  drawText(
    context,
    "text.name",
    name,
    width,
    height
  );


  drawText(
    context,
    "text.id",
    id,
    width,
    height
  );


  drawText(
    context,
    "text.time",
    time,
    width,
    height
  );


  drawText(
    context,
    "text.weapon",
    weapon,
    width,
    height
  );


  if (style) {

    drawWrappedText(
      context,
      "text.playstyle",
      "プレイスタイル：" +
      style,
      width,
      height,
      0.40,
      2
    );

  }


  if (comment) {

    drawWrappedText(
      context,
      "text.comment",
      comment,
      width,
      height,
      0.40,
      4
    );

  }


  if (state.gender) {

    drawCheck(
      context,
      `gender.${state.gender}`,
      width,
      height
    );

  }


  if (state.rank) {

    drawCheck(
      context,
      `rank.${state.rank}`,
      width,
      height
    );

  }


  if (state.platform) {

    drawCheck(
      context,
      `platform.${state.platform}`,
      width,
      height
    );

  }


  state.vc.forEach(key => {

    drawCheck(
      context,
      `vc.${key}`,
      width,
      height
    );

  });


  state.legends.forEach(key => {

    drawRing(
      context,
      `legend.${key}`,
      width,
      height
    );

  });


  return canvas.toDataURL(
    "image/png",
    1
  );

}


/* =====================================================
   CLEAR
===================================================== */

const clearButton =
  document.getElementById(
    "clearAll"
  );


if (clearButton) {

  clearButton.addEventListener(
    "click",
    () => {

      const answer =
        confirm(
          "入力内容を全部クリアしますか？"
        );


      if (!answer) {
        return;
      }


      inputIds.forEach(id => {

        const element =
          document.getElementById(id);


        if (element) {

          element.value = "";

        }

      });


      state.gender = null;
      state.rank = null;
      state.platform = null;

      state.vc.clear();
      state.legends.clear();


      refreshButtons();
      renderCard();

    }
  );

}


/* =====================================================
   CREATE IMAGE
===================================================== */

openImageButton
  .addEventListener(
    "click",
    async () => {

      openImageButton.disabled =
        true;


      openImageButton.textContent =
        "画像を作成中…";


      saveMessage.textContent =
        "";


      try {

        const imageData =
          await generateCardImage();


        resultImage.src =
          imageData;


        showModal();


        saveMessage.textContent =
          "完成画像を表示しました！";

      }

      catch (error) {

        console.error(error);


        saveMessage.textContent =
          "画像生成に失敗しました。もう一度お試しください。";

      }

      finally {

        openImageButton.disabled =
          false;


        openImageButton.textContent =
          "🖼️ 完成カードを表示";

      }

    }
  );


/* =====================================================
   MODAL
===================================================== */

function showModal() {

  imageModal
    .classList
    .remove("hidden");


  imageModal
    .setAttribute(
      "aria-hidden",
      "false"
    );


  document.body.style.overflow =
    "hidden";

}


function hideModal() {

  imageModal
    .classList
    .add("hidden");


  imageModal
    .setAttribute(
      "aria-hidden",
      "true"
    );


  document.body.style.overflow =
    "";

}


closeImageModal
  .addEventListener(
    "click",
    hideModal
  );


imageModalBackdrop
  .addEventListener(
    "click",
    hideModal
  );


document
  .addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape"
      ) {

        hideModal();

      }

    }
  );


/* =====================================================
   START
===================================================== */

refreshButtons();

renderCard();