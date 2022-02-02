// master game loop
function game() {

	if (cow.currentTab == "main") {
		rerollWorldMapRNGifMasterGameTimerIsUp();

		selectAdventureTypeBasedOnCurrentArea();

		statGrowth();

		updateBackend();
		
		updateMainTextSpans();

		updateEXPProgressBars();
	}
	
	incrementGame();

}

game();