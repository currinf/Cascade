nav = new SceneNavigator([
 "startup",
 "animal",
 "variables",
 "gosub",
 "ending",
 "death"
]);
stats = {
 "choice_title": "Cascade",
 "leadership": "50",
 "strength": "50",
 "wetlands": "0",
 "streams": "0",
 "groundwater": "0",
 "soil": "0",
 "vegetation": "0",
 "mammals": "0",
 "fish": "0",
 "amphibians": "0",
 "community": "5",
 "funds": "5"
};
purchases = {};
achievements = [];
nav.setStartingStatsClone(stats);if (achievements.length) {
  nav.loadAchievements(achievements);
}
if (nav.loadProducts) nav.loadProducts([], purchases);

isCogPublished = true;

