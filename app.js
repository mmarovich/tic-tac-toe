var state = {
	player1: {
		image: "",
		gridTracker: {
			row: {
				B1_UL_2_R: 0,				
				B1_ML_2_R: 0,				
				B1_LL_2_R: 0,
				B1_UL_2_3D_R: 0,
				B1_ML_2_3D_R: 0,
				B1_LL_2_3D_R: 0,
				B2_UL_2_R: 0,
				B2_ML_2_R: 0,
				B2_LL_2_R: 0,
				B3_UL_2_R: 0,
				B3_ML_2_R: 0,
				B3_LL_2_R: 0,
				B3_UL_2_3D_R: 0,
				B3_ML_2_3D_R: 0,
				B3_LL_2_3D_R: 0
			},
			column: {
				B1_UL_2_L: 0,
				B1_UM_2_L: 0,
				B1_UR_2_L: 0,
				B1_UL_2_3D_L: 0,
				B1_UM_2_3D_L: 0,
				B1_UR_2_3D_L: 0,
				B2_UL_2_L: 0,
				B2_UM_2_L: 0,
				B2_UR_2_L: 0,
				B3_UL_2_L: 0,
				B3_UM_2_L: 0,
				B3_UR_2_L: 0,
				B3_UL_2_3D_L: 0,
				B3_UM_2_3D_L: 0,
				B3_UR_2_3D_L: 0
			},
			diagonal: {
				B1_UL_2_LR: 0,
				B1_LL_2_UR: 0,
				B1_UL_2_3D_LR: 0,
				B1_LL_2_3D_UR: 0,
				B2_UL_2_LR: 0,
				B2_LL_2_UR: 0,
				B3_UL_2_LR: 0,
				B3_LL_2_UR: 0,
				B3_UL_2_3D_LR: 0,
				B3_LL_2_3D_UR: 0
			},
			same: {
				UL: 0,
				UM: 0,
				UR: 0,
				ML: 0,
				MM: 0,
				MR: 0,
				LL: 0,
				LM: 0,
				LR: 0
			}
		}
	},
	player2: {
		image: "",
		gridTracker: {
			row:{
				upper: 0,
				middle: 0,
				lower: 0
			},
			column:{
				left: 0,
				middle: 0,
				right: 0
			},
			diagonal: {
				backSlash: 0,
				forwardSlash: 0
			}
		}
	},
	playerTracker: 1
}

$('.chooseX').click(function(){
	$('.chooseX').addClass('hidden');
	$('.chooseO').addClass('hidden');
	state.player1.image = "images/X.png";
	state.player2.image = "images/O.png";
})

$('.chooseO').click(function(){
	$('.chooseO').addClass('hidden');
	$('.chooseX').addClass('hidden');
	state.player1.image = "images/O.png";
	state.player2.image = "images/X.png";
})

$('.B1 > .UL').click(function(){
	$(this).off("click");
	if (state.playerTracker === 1){
		$(this).html('<img src="' + state.player1.image + '">');
		state.playerTracker = 2;
		state.player1.gridTracker.row.upper += 1;
		state.player1.gridTracker.column.left += 1;
		state.player1.gridTracker.diagonal.backSlash += 1;
		console.log($(this).html('<img src="' + state.player1.image + '">'));
	} else {
		$(this).html('<img src="' + state.player2.image + '">');
		state.playerTracker = 1;
		state.player2.gridTracker.row.upper += 1;
		state.player2.gridTracker.column.left += 1;
		state.player2.gridTracker.diagonal.backSlash += 1;
	}
})

$('.UM').click(function(){
	$(this).off("click");
	if (state.playerTracker === 1){
		$(this).html('<img src="' + state.player1.image + '">');
		state.playerTracker = 2;
		state.player1.gridTracker.row.upper += 1;
		state.player1.gridTracker.column.middle += 1;
	} else {
		$(this).html('<img src="' + state.player2.image + '">');
		state.playerTracker = 1;
		state.player2.gridTracker.row.upper += 1;
		state.player2.gridTracker.column.middle += 1;
	}
})

$('.UR').click(function(){
	$(this).off("click");
	if (state.playerTracker === 1){
		$(this).html('<img src="' + state.player1.image + '">');
		state.playerTracker = 2;
		state.player1.gridTracker.row.upper += 1;
		state.player1.gridTracker.column.right += 1;
		state.player1.gridTracker.diagonal.forwardSlash += 1;
	} else {
		$(this).html('<img src="' + state.player2.image + '">');
		state.playerTracker = 1;
		state.player2.gridTracker.row.upper += 1;
		state.player2.gridTracker.column.right += 1;
		state.player2.gridTracker.diagonal.forwardSlash += 1;
	}
})