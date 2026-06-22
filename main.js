const container = document.getElementById("container");

const maxImagesPerFolder = 10;
const imageExtension = ".png";

let expansionContainer;
let allFactionContainers = [];
let allCardtypeContainers = [];
let expansionCount = 0;

function init() {
  cUI();
  cAllExpansions();
  hideAll();
  initialSetup();
}
init();

function cUI() {
  expansionContainer = document.createElement("div");
  expansionContainer.classList.add("expansionContainer");
  container.append(expansionContainer);
}

function cAllExpansions() {
  expansions.forEach((exp) => {
    cExpansion(
      exp.expansionName,
      exp.expansionColor,
      exp.factionNames,
      exp.factionFolders,
      exp.factionColor
    );
    expansionCount++;
  });
}

function cExpansion(
  expansionName,
  expansionColor,
  factionNames,
  factionFolders,
  factionColor
) {
  const tabExpansion = document.createElement("button");
  tabExpansion.classList.add("tabExpansion");
  tabExpansion.style.setProperty("--expansionColor", expansionColor);
  tabExpansion.addEventListener("mouseup", clickedTabExpansion);

  const tabExpansionText = document.createElement("h2");
  tabExpansionText.classList.add("tabExpansionText");
  tabExpansionText.innerText = expansionName;

  const factionsContainer = document.createElement("div");
  factionsContainer.classList.add("factionsContainer");

  tabExpansion.append(tabExpansionText);

  for (i = 0; i < factionNames.length; i++) {
    const tabFaction = document.createElement("button");
    tabFaction.classList.add("tabFaction");
    tabFaction.style.setProperty("--factionColor", factionColor[i]);

    const tabFactionText = document.createElement("h2");
    tabFactionText.classList.add("tabFactionText");
    tabFactionText.innerText = factionNames[i];

    const cardtypeContainer = document.createElement("div");
    cardtypeContainer.classList.add("cardtypeContainer");

    const tabCardTypeCombat = document.createElement("button");
    tabCardTypeCombat.classList.add("tabCardType");

    const tabCardTypeCombatText = document.createElement("h2");
    tabCardTypeCombatText.classList.add("tabCardTypeText");
    tabCardTypeCombatText.innerText = "Combat";

    const tabCardTypeOrder = document.createElement("button");
    tabCardTypeOrder.classList.add("tabCardType");

    const tabCardTypeOrderText = document.createElement("h2");
    tabCardTypeOrderText.classList.add("tabCardTypeText");
    tabCardTypeOrderText.innerText = "Order";

    const tabCardTypeEvent = document.createElement("button");
    tabCardTypeEvent.classList.add("tabCardType");

    const tabCardTypeEventText = document.createElement("h2");
    tabCardTypeEventText.classList.add("tabCardTypeText");
    tabCardTypeEventText.innerText = "Event";

    const tabCardTypeSheetFront = document.createElement("button");
    tabCardTypeSheetFront.classList.add("tabCardType");

    const tabCardTypeSheetFrontText = document.createElement("h2");
    tabCardTypeSheetFrontText.classList.add("tabCardTypeText");
    tabCardTypeSheetFrontText.innerText = "Sheet Front";

    const tabCardTypeSheetBack = document.createElement("button");
    tabCardTypeSheetBack.classList.add("tabCardType");

    const tabCardTypeSheetBackText = document.createElement("h2");
    tabCardTypeSheetBackText.classList.add("tabCardTypeText");
    tabCardTypeSheetBackText.innerText = "Sheet Back";

    const tabCardTypeSystemTile1 = document.createElement("button");
    tabCardTypeSystemTile1.classList.add("tabCardType");

    const tabCardTypeSystemTile1Text = document.createElement("h2");
    tabCardTypeSystemTile1Text.classList.add("tabCardTypeText");
    tabCardTypeSystemTile1Text.innerText = "System Tile 1";

    const tabCardTypeSystemTile2 = document.createElement("button");
    tabCardTypeSystemTile2.classList.add("tabCardType");

    const tabCardTypeSystemTile2Text = document.createElement("h2");
    tabCardTypeSystemTile2Text.classList.add("tabCardTypeText");
    tabCardTypeSystemTile2Text.innerText = "System Tile 2";

    const tabCardBacks = document.createElement("button");
    tabCardBacks.classList.add("tabCardType");

    const tabCardBacksText = document.createElement("h2");
    tabCardBacksText.classList.add("tabCardTypeText");
    tabCardBacksText.innerText = "Card backs";

    const clMainContainer = document.createElement("div");
    clMainContainer.classList.add("clMainContainer", "allCardTypesConfig");

    const orderContainerMain = document.createElement("div");
    orderContainerMain.classList.add("orderContainerMain");

    const eventContainerMain = document.createElement("div");
    eventContainerMain.classList.add("eventContainerMain");

    const sheetFrontContainerMain = document.createElement("div");
    sheetFrontContainerMain.classList.add("sheetContainers");

    const sheetBackContainerMain = document.createElement("div");
    sheetBackContainerMain.classList.add("sheetContainers");

    const systemTile1ContainerMain = document.createElement("div");
    systemTile1ContainerMain.classList.add("systemTileContainers");

    const systemTile2ContainerMain = document.createElement("div");
    systemTile2ContainerMain.classList.add("systemTileContainers");

    const cardBackContainerMain = document.createElement("div");
    cardBackContainerMain.classList.add("cardBackContainerMain");

    const clStarterCards = document.createElement("div");
    clStarterCards.classList.add("clStarterCards");

    const cl0Cards = document.createElement("div");
    cl0Cards.classList.add("cl0Cards");

    const cl2Cards = document.createElement("div");
    cl2Cards.classList.add("cl2Cards");

    const cl3Cards = document.createElement("div");
    cl3Cards.classList.add("cl3Cards");

    const orderCards = document.createElement("div");
    orderCards.classList.add("orderCards", "allCardTypesConfig");

    const eventCards = document.createElement("div");
    eventCards.classList.add("eventCards", "allCardTypesConfig");

    const sheetFrontCards = document.createElement("div");
    sheetFrontCards.classList.add("sheetCards", "allCardTypesConfig");

    const sheetBackCards = document.createElement("div");
    sheetBackCards.classList.add("sheetCards", "allCardTypesConfig");

    const systemTile1Cards = document.createElement("div");
    systemTile1Cards.classList.add("systemTileCards", "allCardTypesConfig");

    const systemTile2Cards = document.createElement("div");
    systemTile2Cards.classList.add("systemTileCards", "allCardTypesConfig");

    const cardBackCards = document.createElement("div");
    cardBackCards.classList.add("cardBackCards", "allCardTypesConfig");

    tabFaction.addEventListener("mouseup", clickedTabFaction);
    tabCardTypeCombat.addEventListener("mouseup", clickedTabCardType);
    tabCardTypeOrder.addEventListener("mouseup", clickedTabCardType);
    tabCardTypeEvent.addEventListener("mouseup", clickedTabCardType);
    tabCardTypeSheetFront.addEventListener("mouseup", clickedTabCardType);
    tabCardTypeSheetBack.addEventListener("mouseup", clickedTabCardType);
    tabCardTypeSystemTile1.addEventListener("mouseup", clickedTabCardType);
    tabCardTypeSystemTile2.addEventListener("mouseup", clickedTabCardType);
    tabCardBacks.addEventListener("mouseup", clickedTabCardType);

    tabFaction.append(tabFactionText);
    tabCardTypeCombat.append(tabCardTypeCombatText);
    tabCardTypeOrder.append(tabCardTypeOrderText);
    tabCardTypeEvent.append(tabCardTypeEventText);
    tabCardTypeSheetFront.append(tabCardTypeSheetFrontText);
    tabCardTypeSheetBack.append(tabCardTypeSheetBackText);
    tabCardTypeSystemTile1.append(tabCardTypeSystemTile1Text);
    tabCardTypeSystemTile2.append(tabCardTypeSystemTile2Text);
    tabCardBacks.append(tabCardBacksText);

    clMainContainer.append(clStarterCards, cl0Cards, cl2Cards, cl3Cards);
    orderContainerMain.append(orderCards);
    eventContainerMain.append(eventCards);
    sheetFrontContainerMain.append(sheetFrontCards);
    sheetBackContainerMain.append(sheetBackCards);
    systemTile1ContainerMain.append(systemTile1Cards);
    systemTile2ContainerMain.append(systemTile2Cards);
    cardBackContainerMain.append(cardBackCards);

    tabCardTypeCombat.append(clMainContainer);
    tabCardTypeOrder.append(orderContainerMain);
    tabCardTypeEvent.append(eventContainerMain);
    tabCardTypeSheetFront.append(sheetFrontContainerMain);
    tabCardTypeSheetBack.append(sheetBackContainerMain);
    tabCardTypeSystemTile1.append(systemTile1ContainerMain);
    tabCardTypeSystemTile2.append(systemTile2ContainerMain);
    tabCardBacks.append(cardBackContainerMain);

    cardtypeContainer.append(
      tabCardTypeCombat,
      tabCardTypeOrder,
      tabCardTypeEvent,
      tabCardTypeSheetFront,
      tabCardTypeSheetBack,
      tabCardTypeSystemTile1,
      tabCardTypeSystemTile2,
      tabCardBacks
    );

    tabFaction.append(cardtypeContainer);
    factionsContainer.append(tabFaction);
    tabExpansion.append(factionsContainer);

    expansionContainer.append(tabExpansion);

    allFactionContainers.push(factionsContainer);
    allCardtypeContainers.push(cardtypeContainer);

    // Main async loader to only add existing images
    async function loadImages(
      faction,
      folder,
      subfolder,
      cardType,
      appendingContainer,
      extension,
      maxImages = maxImagesPerFolder
    ) {
      const basePath = `FactionImages/${faction}/${folder}/${subfolder}/`;

      for (let i = 1; i <= maxImages; i++) {
        const name = `${cardType}_${i}`;
        const imgPath = `${basePath}${name}${extension}`;

        const exists = await fetch(imgPath, { method: "HEAD" })
          .then((res) => res.ok)
          .catch(() => false);

        if (!exists) {
          // Stop when first image is not found
          console.log(
            `Pointless warning. Max images is ${maxImages}. Stopped at missing: ${imgPath}`
          );
          break;
        }

        // Create card only if image exists
        const card = document.createElement("div");
        card.classList.add("card");

        const cardImg = document.createElement("img");
        cardImg.classList.add("cardImg");
        cardImg.src = imgPath;

        card.append(cardImg);
        appendingContainer.append(card);
      }
    }

    //Create c-cards

    //Starter
    loadImages(
      factionFolders[i],
      "Combat",
      "Starter",
      "s",
      clStarterCards,
      imageExtension
    );

    //CL0
    loadImages(
      factionFolders[i],
      "Combat",
      "CL0",
      "t0",
      cl0Cards,
      imageExtension
    );

    //CL2
    loadImages(
      factionFolders[i],
      "Combat",
      "CL2",
      "t2",
      cl2Cards,
      imageExtension
    );

    //CL3
    loadImages(
      factionFolders[i],
      "Combat",
      "CL3",
      "t3",
      cl3Cards,
      imageExtension
    );

    //Create order cards
    loadImages(factionFolders[i], "Order", "", "o", orderCards, imageExtension);

    //Create event cards
    loadImages(factionFolders[i], "Event", "", "e", eventCards, imageExtension);

    //Create sheetFront
    loadImages(
      factionFolders[i],
      "SheetFront",
      "",
      "sheet_front",
      sheetFrontCards,
      imageExtension
    );

    //Create sheetBack
    loadImages(
      factionFolders[i],
      "SheetBack",
      "",
      "sheet_back",
      sheetBackCards,
      imageExtension
    );

    //Create systemTile1
    loadImages(
      factionFolders[i],
      "SystemTileFront",
      "",
      "system_tile_front",
      systemTile1Cards,
      imageExtension
    );

    //Create systemTileBack
    loadImages(
      factionFolders[i],
      "SystemTileBack",
      "",
      "system_tile_back",
      systemTile2Cards,
      imageExtension
    );

    //Create cardBacks
    loadImages(
      factionFolders[i],
      "CardBack",
      "",
      "back",
      cardBackCards,
      imageExtension
    );
  }
}

function cExpansion1Configs() {
  expansionName = "Emperor's Will";
  expansionColor = "gold";
  factionNames = ["Adeptus Custodes", "Votann"];
  factionFolders = ["AdeptusCustodes", "Votann"];
  factionColor = ["gold", "red"];
  cExpansion(
    expansionName,
    expansionColor,
    factionNames,
    factionFolders,
    factionColor
  );
  expansionCount++;
}

function initialSetup() {
  //Make first expansion have class .active
  const firstExpansionTab = expansionContainer.querySelector(".tabExpansion");
  firstExpansionTab.classList.add("active");
  const allExpansions = expansionContainer.querySelectorAll(".tabExpansion");

  //Make all first factionTab in each expansion have class .active
  allFactionContainers.forEach((container) => {
    const firstTabFaction = container.querySelector(".tabFaction");
    firstTabFaction.classList.add("active");

    //Make all first cardType in each faction have class .active
    const allTabFactions = container.querySelectorAll(".tabFaction");
    allTabFactions.forEach((f) => {
      const firstCardTypeForFaction = f.querySelector(".tabCardType");
      firstCardTypeForFaction.classList.add("active");
    });
  });

  const firstFactionContainer =
    firstExpansionTab.querySelector(".factionsContainer");
  const firstCardtypeContainer =
    firstFactionContainer.querySelector(".cardtypeContainer");

  firstFactionContainer.classList.remove("hidden");
  firstCardtypeContainer.classList.remove("hidden");
  firstFactionContainer.classList.add("visible");
  firstCardtypeContainer.classList.add("visible");
}

function hideAll() {
  allFactionContainers.forEach((container) => {
    container.classList.remove("visible");
    container.classList.add("hidden");
  });

  allCardtypeContainers.forEach((container) => {
    container.classList.remove("visible");
    container.classList.add("hidden");
  });
}

function clickedTabExpansion(event) {
  hideAll();
  event.stopPropagation();
  console.log("tabExpansionClicked");

  const tab = this;

  // Remove active from all tabExpansion except this one
  const allTabExpansions = expansionContainer.querySelectorAll(".tabExpansion");
  allTabExpansions.forEach((t) => t.classList.remove("active"));
  tab.classList.add("active");

  //Get active tabFaction and show it's cards
  const factionContainer = tab.querySelector(".factionsContainer");
  const cardtypeContainer = tab.querySelector(
    ".factionsContainer .tabFaction.active .cardtypeContainer"
  );

  factionContainer.classList.remove("hidden");
  cardtypeContainer.classList.remove("hidden");
  factionContainer.classList.add("visible");
  cardtypeContainer.classList.add("visible");
}

function clickedTabFaction(event) {
  hideAll();
  event.stopPropagation();
  console.log("tabFaction clicked");
  const tab = this;

  // Remove active from all tabFaction in this expansion
  const expansion = tab.closest(".tabExpansion");
  const allTabs = expansion.querySelectorAll(".tabFaction");
  allTabs.forEach((t) => t.classList.remove("active"));

  // Add active to clicked tab
  tab.classList.add("active");

  const factionsContainer = tab.closest(".factionsContainer");
  const cardtypeContainer = tab.querySelector(
    ".factionsContainer .tabFaction .cardtypeContainer"
  );

  factionsContainer.classList.remove("hidden");
  cardtypeContainer.classList.remove("hidden");
  factionsContainer.classList.add("visible");
  cardtypeContainer.classList.add("visible");

  // Show all tabFactions inside this expansion
  const expansionAllFactions = expansion.querySelectorAll(".tabFaction");
  for (let i = 0; i < expansionAllFactions.length; i++) {
    expansionAllFactions[i].classList.remove("hidden");
    expansionAllFactions[i].classList.add("visible");
  }
}

function clickedTabCardType(event) {
  hideAll();
  event.stopPropagation();
  console.log("tabCardType clicked");
  const tab = this;

  // Remove active from all tabFaction in this expansion
  const faction = tab.closest(".tabFaction");
  const allTabs = faction.querySelectorAll(".tabCardType");
  allTabs.forEach((t) => t.classList.remove("active"));

  // Add active to clicked tab
  tab.classList.add("active");

  const factionsContainer = tab.closest(".factionsContainer");
  const cardtypeContainer = tab.closest(".cardtypeContainer");

  factionsContainer.classList.remove("hidden");
  cardtypeContainer.classList.remove("hidden");
  factionsContainer.classList.add("visible");
  cardtypeContainer.classList.add("visible");

  // Show all tabCardType inside this expansion
  const expansion = tab.closest(".tabExpansion");
  const expansionAllFactions = expansion.querySelectorAll(".tabFaction");
  for (i = 0; i < expansionAllFactions.length; i++) {
    expansionAllFactions[i].classList.remove("hidden");
    expansionAllFactions[i].classList.add("visible");
  }

  //Additional logic below//

  const currentFaction = tab.closest(".tabFaction");
  factionAllCardsContainers = currentFaction.querySelectorAll(
    ".clMainContainer, .orderContainerMain, .eventContainerMain , .sheetContainers, .systemTileContainers,  .cardBackContainerMain"
  );

  for (i = 0; i < factionAllCardsContainers.length; i++) {
    factionAllCardsContainers[i].classList.remove("visible");
    factionAllCardsContainers[i].classList.add("hidden");
  }

  tab.children[1].classList.remove("hidden");
  tab.children[1].classList.add("visible");
}
