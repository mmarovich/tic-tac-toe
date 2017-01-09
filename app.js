var state = {
	player1: {
		image: "",
		gridTracker: {
			row: {
				B1_UL_2_UR: 0,				
				B1_ML_2_MR: 0,				
				B1_LL_2_LR: 0,
				B1_UL_2_3D_UR: 0,
				B1_ML_2_3D_MR: 0,
				B1_LL_2_3D_LR: 0,
				B2_UL_2_UR: 0,
				B2_ML_2_MR: 0,
				B2_LL_2_LR: 0,
				B3_UL_2_UR: 0,
				B3_ML_2_MR: 0,
				B3_LL_2_LR: 0,
				B3_UL_2_3D_UR: 0,
				B3_ML_2_3D_MR: 0,
				B3_LL_2_3D_LR: 0
			},
			column: {
				B1_UL_2_LL: 0,
				B1_UM_2_LM: 0,
				B1_UR_2_LR: 0,
				B1_UL_2_3D_LL: 0,
				B1_UM_2_3D_LM: 0,
				B1_UR_2_3D_LR: 0,
				B2_UL_2_LL: 0,
				B2_UM_2_LM: 0,
				B2_UR_2_LR: 0,
				B3_UL_2_LL: 0,
				B3_UM_2_LM: 0,
				B3_UR_2_LR: 0,
				B3_UL_2_3D_LL: 0,
				B3_UM_2_3D_LM: 0,
				B3_UR_2_3D_LR: 0
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
				ULa: 0,
				UMa: 0,
				URa: 0,
				MLa: 0,
				MMa: 0,
				MRa: 0,
				LLa: 0,
				LMa: 0,
				LRa: 0
			}
		}
	},
	player2: {
		image: "",
		gridTracker: {
			row: {
				B1_UL_2_UR: 0,				
				B1_ML_2_MR: 0,				
				B1_LL_2_LR: 0,
				B1_UL_2_3D_UR: 0,
				B1_ML_2_3D_UR: 0,
				B1_LL_2_3D_UR: 0,
				B2_UL_2_UR: 0,
				B2_ML_2_MR: 0,
				B2_LL_2_LR: 0,
				B3_UL_2_UR: 0,
				B3_ML_2_MR: 0,
				B3_LL_2_LR: 0,
				B3_UL_2_3D_UR: 0,
				B3_ML_2_3D_MR: 0,
				B3_LL_2_3D_LR: 0
			},
			column: {
				B1_UL_2_LL: 0,
				B1_UM_2_LM: 0,
				B1_UR_2_LR: 0,
				B1_UL_2_3D_LL: 0,
				B1_UM_2_3D_LM: 0,
				B1_UR_2_3D_LR: 0,
				B2_UL_2_LL: 0,
				B2_UM_2_LM: 0,
				B2_UR_2_LR: 0,
				B3_UL_2_LL: 0,
				B3_UM_2_LM: 0,
				B3_UR_2_LR: 0,
				B3_UL_2_3D_LL: 0,
				B3_UM_2_3D_LM: 0,
				B3_UR_2_3D_LR: 0
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
				ULa: 0,
				UMa: 0,
				URa: 0,
				MLa: 0,
				MMa: 0,
				MRa: 0,
				LLa: 0,
				LMa: 0,
				LRa: 0
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
		$(this).html('<img src="' + state.player1.image + '" class="B1_UL_2_UR B1_UL_2_3D_UR B1_UL_2_LL B1_UL_2_3D_LL B1_UL_2_LR B1_UL_2_3D_LR ULa">');
		state.playerTracker = 2;
		state.player1.gridTracker.row.B1_UL_2_UR += 1;
		state.player1.gridTracker.row.B1_UL_2_3D_UR += 1;
		state.player1.gridTracker.column.B1_UL_2_LL += 1;
		state.player1.gridTracker.column.B1_UL_2_3D_LL += 1;
		state.player1.gridTracker.diagonal.B1_UL_2_LR += 1;
		state.player1.gridTracker.diagonal.B1_UL_2_3D_LR += 1;
		state.player1.gridTracker.same.ULa += 1;
	} else {
		$(this).html('<img src="' + state.player2.image + '" class="B1_UL_2_UR B1_UL_2_3D_UR B1_UL_2_LL B1_UL_2_3D_LL B1_UL_2_LR B1_UL_2_3D_LR ULa">');
		state.playerTracker = 1;
		state.player2.gridTracker.row.B1_UL_2_UR += 1;
		state.player2.gridTracker.row.B1_UL_2_3D_UR += 1;
		state.player2.gridTracker.column.B1_UL_2_LL += 1;
		state.player2.gridTracker.column.B1_UL_2_3D_LL += 1;
		state.player2.gridTracker.diagonal.B1_UL_2_LR += 1;
		state.player2.gridTracker.diagonal.B1_UL_2_3D_LR += 1;
		state.player2.gridTracker.same.ULa += 1;
	}
})

$('.B1 > .UM').click(function(){
	$(this).off("click");
	if (state.playerTracker === 1){
		$(this).html('<img src="' + state.player1.image + '" class="B1_UM_2_LM B1_UM_2_3D_LM UMa">');
		state.playerTracker = 2;
		state.player1.gridTracker.column.B1_UM_2_LM += 1;
		state.player1.gridTracker.column.B1_UM_2_3D_LM += 1;
		state.player1.gridTracker.same.UMa += 1;
	} else {
		$(this).html('<img src="' + state.player2.image + '" class="B1_UM_2_LM B1_UM_2_3D_LM UMa">');
		state.playerTracker = 1;
		state.player2.gridTracker.column.B1_UM_2_LM += 1;
		state.player2.gridTracker.column.B1_UM_2_3D_LM += 1;
		state.player2.gridTracker.same.UMa += 1;
	}
})

$('.B1 > .UR').click(function(){
	$(this).off("click");
	if (state.playerTracker === 1){
		$(this).html('<img src="' + state.player1.image + '" class="B1_UL_2_UR B1_UL_2_3D_UR B1_UR_2_LR B1_UR_2_3D_LR B1_LL_2_UR B1_LL_2_3D_UR URa">');
		state.playerTracker = 2;
		state.player1.gridTracker.row.B1_UL_2_UR += 1;
		state.player1.gridTracker.row.B1_UL_2_3D_UR += 1;
		state.player1.gridTracker.column.B1_UR_2_LR += 1;
		state.player1.gridTracker.column.B1_UR_2_3D_LR += 1;
		state.player1.gridTracker.diagonal.B1_LL_2_UR += 1;
		state.player1.gridTracker.diagonal.B1_LL_2_3D_UR += 1;
		state.player1.gridTracker.same.URa += 1;
	} else {
		$(this).html('<img src="' + state.player2.image + '" class="B1_UL_2_UR B1_UL_2_3D_UR B1_UR_2_LR B1_UR_2_3D_LR B1_LL_2_UR B1_LL_2_3D_UR URa">');
		state.playerTracker = 1;
		state.player2.gridTracker.row.B1_UL_2_UR += 1;
		state.player2.gridTracker.row.B1_UL_2_3D_UR += 1;
		state.player2.gridTracker.column.B1_UR_2_LR += 1;
		state.player2.gridTracker.column.B1_UR_2_3D_LR += 1;
		state.player2.gridTracker.diagonal.B1_LL_2_UR += 1;
		state.player2.gridTracker.diagonal.B1_LL_2_3D_UR += 1;
		state.player2.gridTracker.same.URa += 1;
	}
})