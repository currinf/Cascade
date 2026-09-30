nav = new SceneNavigator([
 "startup",
 "flood",
 "ending"
]);
stats = {
 "choice_title": "Cascade",
 "wetlands": "0",
 "streams": "0",
 "groundwater": "0",
 "soil": "0",
 "vegetation": "0",
 "mammals": "0",
 "fish": "0",
 "amphibians": "0",
 "invertebrates": "0",
 "community": "50",
 "funds": "50",
 "dams": "true"
};
purchases = {};
achievements = [];
nav.setStartingStatsClone(stats);if (achievements.length) {
  nav.loadAchievements(achievements);
}
if (nav.loadProducts) nav.loadProducts([], purchases);

isCogPublished = true;

