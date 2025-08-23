const body = document.body;

const list = document.createElement("ul");

const fish = document.createElement("li");
fish.textContent = "Fish";

const fishlist = document.createElement("ul");

const trout = document.createElement("li");
trout.textContent = "Trout";

const salmon = document.createElement("li");
salmon.textContent = "Salmon";
fishlist.append(trout);
fishlist.append(salmon);
fish.append(fishlist);

const tree = document.createElement("li");
tree.textContent = "Tree";

const treelist = document.createElement("ul");

const huge = document.createElement("li");
huge.textContent = "Huge";
tree.append(treelist);
treelist.append(huge);

const hugelist = document.createElement("ul");

const sequoia = document.createElement("li");
sequoia.textContent = "Sequoia";

const oak = document.createElement("li");
oak.textContent = "Oak";

huge.append(hugelist);
hugelist.append(sequoia);
hugelist.append(oak);

list.append(fish);
list.append(tree);
body.append(list);