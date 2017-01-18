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
				B1_ML_2_3D_MR: 0,
				B1_LL_2_3D_LR : 0,
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

function player1Wins(){
	var obj = state.player1.gridTracker;
	for(var prop in obj){
		for(var prop2 in obj[prop]){
	    	if(obj[prop][prop2] === 3){
	    		var x = document.getElementsByClassName(prop2);
	    		$(x).css({"height": "120%", "width": "120%"})
	    		$('.endGame').removeClass('hidden');
	    		$('.player1Wins').removeClass('hidden');
	    		$('.startOver').removeClass('hidden');
	    		$('.cover').css({'z-index': '2'});
	    		return;
	    	}
	    }
	}
}

function player2Wins(){
	var obj = state.player2.gridTracker;
	for(var prop in obj){
		for(var prop2 in obj[prop]){
			if(obj[prop][prop2] === 3){
				var x = document.getElementsByClassName(prop2);
				$(x).css({"height": "120%", "width": "120%"});
				$('.endGame').removeClass('hidden');
				$('.player2Wins').removeClass('hidden');
				$('.startOver').removeClass('hidden');
				$('.cover').css({'z-index': '2'});
				return;
			}
		}
	}
}


function purge1(){
	var obj = state.player1.gridTracker;
	for(var prop in obj){
		for(var prop2 in obj[prop]){
			obj[prop][prop2] = 0;
		}
	}
}

function purge2(){
	var obj = state.player2.gridTracker;
	for(var prop in obj){
		for(var prop2 in obj[prop]){
			obj[prop][prop2] = 0;
		}
	}
}

$(document).ready(function(){

	$('.chooseX').click(function(){
		$('.chooseX').addClass('hidden');
		$('.chooseO').addClass('hidden');
		$('.cover').css({'z-index': '-2'});
		state.player1.image = "images/X.png";
		state.player2.image = "images/O.png";
	})

	$('.chooseO').click(function(){
		$('.chooseO').addClass('hidden');
		$('.chooseX').addClass('hidden');
		$('.cover').css({'z-index': '-2'});
		state.player1.image = "images/O.png";
		state.player2.image = "images/X.png";
	})

	$('.startOver').click(function(){
		$('.box img').remove();
		$('.chooseX').removeClass('hidden');
		$('.chooseO').removeClass('hidden');
		$('.startOver').addClass('hidden');
		$('.endGame').addClass('hidden');
		$('.endGame p').addClass('hidden');
		state.player1.image = "";
		state.player2.image = "";
		state.playerTracker = 1;
		purge1();
		purge2();

		$('.box').off("click");

		$('.B1 > .UL').click(B1UL);
		$('.B1 > .UM').click(B1UM);
		$('.B1 > .UR').click(B1UR);
		$('.B1 > .ML').click(B1ML);
		$('.B1 > .MM').click(B1MM);
		$('.B1 > .MR').click(B1MR);
		$('.B1 > .LL').click(B1LL);
		$('.B1 > .LM').click(B1LM);
		$('.B1 > .LR').click(B1LR);

		$('.B2 > .UL').click(B2UL);
		$('.B2 > .UM').click(B2UM);
		$('.B2 > .UR').click(B2UR);
		$('.B2 > .ML').click(B2ML);
		$('.B2 > .MM').click(B2MM);
		$('.B2 > .MR').click(B2MR);
		$('.B2 > .LL').click(B2LL);
		$('.B2 > .LM').click(B2LM);
		$('.B2 > .LR').click(B2LR);

		$('.B3 > .UL').click(B3UL);
		$('.B3 > .UM').click(B3UM);
		$('.B3 > .UR').click(B3UR);
		$('.B3 > .ML').click(B3ML);
		$('.B3 > .MM').click(B3MM);
		$('.B3 > .MR').click(B3MR);
		$('.B3 > .LL').click(B3LL);
		$('.B3 > .LM').click(B3LM);
		$('.B3 > .LR').click(B3LR);
	})


	function B1UL(){
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
			player1Wins();
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
			player2Wins();
		}
	}

	function B1UM(){
		$(this).off("click");
		if (state.playerTracker === 1){
			$(this).html('<img src="' + state.player1.image + '" class="B1_UL_2_UR B1_UM_2_LM B1_UM_2_3D_LM UMa">');
			state.playerTracker = 2;
			state.player1.gridTracker.row.B1_UL_2_UR += 1;
			state.player1.gridTracker.column.B1_UM_2_LM += 1;
			state.player1.gridTracker.column.B1_UM_2_3D_LM += 1;
			state.player1.gridTracker.same.UMa += 1;
			player1Wins();
		} else {
			$(this).html('<img src="' + state.player2.image + '" class="B1_UL_2_UR B1_UM_2_LM B1_UM_2_3D_LM UMa">');
			state.playerTracker = 1;
			state.player2.gridTracker.row.B1_UL_2_UR += 1;
			state.player2.gridTracker.column.B1_UM_2_LM += 1;
			state.player2.gridTracker.column.B1_UM_2_3D_LM += 1;
			state.player2.gridTracker.same.UMa += 1;
			player2Wins();
		}
	}

	function B1UR(){
		$(this).off("click");
		if (state.playerTracker === 1){
			$(this).html('<img src="' + state.player1.image + '" class="B1_UL_2_UR B3_UL_2_3D_UR B1_UR_2_LR B1_UR_2_3D_LR B1_LL_2_UR URa">');
			state.playerTracker = 2;
			state.player1.gridTracker.row.B1_UL_2_UR += 1;
			state.player1.gridTracker.row.B3_UL_2_3D_UR += 1;
			state.player1.gridTracker.column.B1_UR_2_LR += 1;
			state.player1.gridTracker.column.B1_UR_2_3D_LR += 1;
			state.player1.gridTracker.diagonal.B1_LL_2_UR += 1;
			state.player1.gridTracker.same.URa += 1;
			player1Wins();
		} else {
			$(this).html('<img src="' + state.player2.image + '" class="B1_UL_2_UR B3_UL_2_3D_UR B1_UR_2_LR B1_UR_2_3D_LR B1_LL_2_UR URa">');
			state.playerTracker = 1;
			state.player2.gridTracker.row.B1_UL_2_UR += 1;
			state.player2.gridTracker.row.B3_UL_2_3D_UR += 1;
			state.player2.gridTracker.column.B1_UR_2_LR += 1;
			state.player2.gridTracker.column.B1_UR_2_3D_LR += 1;
			state.player2.gridTracker.diagonal.B1_LL_2_UR += 1;
			state.player2.gridTracker.same.URa += 1;
			player2Wins();
		}
	}

	function B1ML(){
		$(this).off("click");
		if (state.playerTracker === 1){
			$(this).html('<img src="' + state.player1.image + '" class="B1_ML_2_MR B1_ML_2_3D_MR B1_UL_2_LL MLa">');
			state.playerTracker = 2;
			state.player1.gridTracker.row.B1_ML_2_MR += 1;
			state.player1.gridTracker.row.B1_ML_2_3D_MR += 1;
			state.player1.gridTracker.column.B1_UL_2_LL += 1;
			state.player1.gridTracker.same.MLa += 1;
			player1Wins();
		} else {
			$(this).html('<img src="' + state.player2.image + '" class="B1_ML_2_MR B1_ML_2_3D_MR B1_UL_2_LL MLa">');
			state.playerTracker = 1;
			state.player2.gridTracker.row.B1_ML_2_MR += 1;
			state.player2.gridTracker.row.B1_ML_2_3D_MR += 1;
			state.player2.gridTracker.column.B1_UL_2_LL += 1;
			state.player2.gridTracker.same.MLa += 1;
			player2Wins();
		}
	}

	function B1MM(){
		$(this).off("click");
		if (state.playerTracker === 1){
			$(this).html('<img src="' + state.player1.image + '" class="B1_ML_2_MR B1_UM_2_LM B1_UL_2_LR B1_LL_2_UR MMa">');
			state.playerTracker = 2;
			state.player1.gridTracker.row.B1_ML_2_MR += 1;
			state.player1.gridTracker.column.B1_UM_2_LM += 1;
			state.player1.gridTracker.diagonal.B1_UL_2_LR += 1;
			state.player1.gridTracker.diagonal.B1_LL_2_UR += 1;
			state.player1.gridTracker.same.MMa += 1;
			player1Wins();
		} else {
			$(this).html('<img src="' + state.player2.image + '" class="B1_ML_2_MR B1_UM_2_LM B1_UL_2_LR B1_LL_2_UR MMa">');
			state.playerTracker = 1;
			state.player2.gridTracker.row.B1_ML_2_MR += 1;
			state.player2.gridTracker.column.B1_UM_2_LM += 1;
			state.player2.gridTracker.diagonal.B1_UL_2_LR += 1;
			state.player2.gridTracker.diagonal.B1_LL_2_UR += 1;
			state.player2.gridTracker.same.MMa += 1;
			player2Wins();
		}
	}

	function B1MR(){
		$(this).off("click");
		if (state.playerTracker === 1){
			$(this).html('<img src="' + state.player1.image + '" class="B1_ML_2_MR B3_ML_2_3D_MR B1_UR_2_LR MRa">');
			state.playerTracker = 2;
			state.player1.gridTracker.row.B1_ML_2_MR += 1;
			state.player1.gridTracker.row.B3_ML_2_3D_MR += 1;
			state.player1.gridTracker.column.B1_UR_2_LR += 1;
			state.player1.gridTracker.same.MRa += 1;
			player1Wins();
		} else {
			$(this).html('<img src="' + state.player2.image + '" class="B1_ML_2_MR B3_ML_2_3D_MR B1_UR_2_LR MRa">');
			state.playerTracker = 1;
			state.player2.gridTracker.row.B1_ML_2_MR += 1;
			state.player2.gridTracker.row.B3_ML_2_3D_MR += 1;
			state.player2.gridTracker.column.B1_UR_2_LR += 1;
			state.player2.gridTracker.same.MRa += 1;
			player2Wins();
		}
	}

	function B1LL(){
		$(this).off("click");
		if (state.playerTracker === 1){
			$(this).html('<img src="' + state.player1.image + '" class="B1_LL_2_LR B1_LL_2_3D_LR B1_UL_2_LL B3_UL_2_3D_LL B1_LL_2_UR B1_LL_2_3D_UR LLa">');
			state.playerTracker = 2;
			state.player1.gridTracker.row.B1_LL_2_LR += 1;
			state.player1.gridTracker.row.B1_LL_2_3D_LR += 1;
			state.player1.gridTracker.column.B1_UL_2_LL += 1;
			state.player1.gridTracker.column.B3_UL_2_3D_LL += 1;
			state.player1.gridTracker.diagonal.B1_LL_2_UR += 1;
			state.player1.gridTracker.diagonal.B1_LL_2_3D_UR += 1;
			state.player1.gridTracker.same.LLa += 1;
			player1Wins();
		} else {
			$(this).html('<img src="' + state.player2.image + '" class="B1_LL_2_LR B1_LL_2_3D_LR B1_UL_2_LL B3_UL_2_3D_LL B1_LL_2_UR B1_LL_2_3D_UR LLa">');
			state.playerTracker = 1;
			state.player2.gridTracker.row.B1_LL_2_LR += 1;
			state.player2.gridTracker.row.B1_LL_2_3D_LR += 1;
			state.player2.gridTracker.column.B1_UL_2_LL += 1;
			state.player2.gridTracker.column.B3_UL_2_3D_LL += 1;
			state.player2.gridTracker.diagonal.B1_LL_2_UR += 1;
			state.player2.gridTracker.diagonal.B1_LL_2_3D_UR += 1;
			state.player2.gridTracker.same.LLa += 1;
			player2Wins();
		}
	}

	function B1LM(){
		$(this).off("click");
		if (state.playerTracker === 1){
			$(this).html('<img src="' + state.player1.image + '" class="B1_LL_2_LR B1_UM_2_LM B3_UM_2_3D_LM LMa">');
			state.playerTracker = 2;
			state.player1.gridTracker.row.B1_LL_2_LR += 1;
			state.player1.gridTracker.column.B1_UM_2_LM += 1;
			state.player1.gridTracker.column.B3_UM_2_3D_LM += 1;
			state.player1.gridTracker.same.LMa += 1;
			player1Wins();
		} else {
			$(this).html('<img src="' + state.player2.image + '" class="B1_LL_2_LR B1_UM_2_LM B3_UM_2_3D_LM LMa">');
			state.playerTracker = 1;
			state.player2.gridTracker.row.B1_LL_2_LR += 1;
			state.player2.gridTracker.column.B1_UM_2_LM += 1;
			state.player2.gridTracker.column.B3_UM_2_3D_LM += 1;
			state.player2.gridTracker.same.LMa += 1;
			player2Wins();
		}
	}

	function B1LR(){
		$(this).off("click");
		if (state.playerTracker === 1){
			$(this).html('<img src="' + state.player1.image + '" class="B1_LL_2_LR B3_LL_2_3D_LR B1_UR_2_LR B3_UR_2_3D_LR B1_UL_2_LR B3_UL_2_3D_LR LRa">');
			state.playerTracker = 2;
			state.player1.gridTracker.row.B1_LL_2_LR += 1;
			state.player1.gridTracker.row.B3_LL_2_3D_LR += 1;
			state.player1.gridTracker.column.B1_UR_2_LR += 1;
			state.player1.gridTracker.column.B3_UR_2_3D_LR += 1;
			state.player1.gridTracker.diagonal.B1_UL_2_LR += 1;
			state.player1.gridTracker.diagonal.B3_UL_2_3D_LR += 1;
			state.player1.gridTracker.same.LRa += 1;
			player1Wins();
		} else {
			$(this).html('<img src="' + state.player2.image + '" class="B1_LL_2_LR B3_LL_2_3D_LR B1_UR_2_LR B3_UR_2_3D_LR B1_UL_2_LR B3_UL_2_3D_LR LRa">');
			state.playerTracker = 1;
			state.player2.gridTracker.row.B1_LL_2_LR += 1;
			state.player2.gridTracker.row.B3_LL_2_3D_LR += 1;
			state.player2.gridTracker.column.B1_UR_2_LR += 1;
			state.player2.gridTracker.column.B3_UR_2_3D_LR += 1;
			state.player2.gridTracker.diagonal.B1_UL_2_LR += 1;
			state.player2.gridTracker.diagonal.B3_UL_2_3D_LR += 1;
			state.player2.gridTracker.same.LRa += 1;
			player2Wins();
		}
	}

	function B2UL(){
		$(this).off("click");
		if (state.playerTracker === 1){
			$(this).html('<img src="' + state.player1.image + '" class="B2_UL_2_UR B2_UL_2_LL B2_UL_2_LR ULa">');
			state.playerTracker = 2;
			state.player1.gridTracker.row.B2_UL_2_UR += 1;
			state.player1.gridTracker.column.B2_UL_2_LL += 1;
			state.player1.gridTracker.diagonal.B2_UL_2_LR += 1;
			state.player1.gridTracker.same.ULa += 1;
			player1Wins();
		} else {
			$(this).html('<img src="' + state.player2.image + '" class="B2_UL_2_UR B2_UL_2_LL B2_UL_2_LR ULa">');
			state.playerTracker = 1;
			state.player2.gridTracker.row.B2_UL_2_UR += 1;
			state.player2.gridTracker.column.B2_UL_2_LL += 1;
			state.player2.gridTracker.diagonal.B2_UL_2_LR += 1;
			state.player2.gridTracker.same.ULa += 1;
			player2Wins();
		}
	}

	function B2UM(){
		$(this).off("click");
		if (state.playerTracker === 1){
			$(this).html('<img src="' + state.player1.image + '" class="B2_UL_2_UR B1_UL_2_3D_UR B3_UL_2_3D_UR B2_UM_2_LM UMa">');
			state.playerTracker = 2;
			state.player1.gridTracker.row.B2_UL_2_UR += 1;
			state.player1.gridTracker.row.B1_UL_2_3D_UR += 1;
			state.player1.gridTracker.row.B3_UL_2_3D_UR += 1;
			state.player1.gridTracker.column.B2_UM_2_LM += 1;
			state.player1.gridTracker.same.UMa += 1;
			player1Wins();
		} else {
			$(this).html('<img src="' + state.player2.image + '" class="B2_UL_2_UR B1_UL_2_3D_UR B3_UL_2_3D_UR B2_UM_2_LM UMa">');
			state.playerTracker = 1;
			state.player2.gridTracker.row.B2_UL_2_UR += 1;
			state.player2.gridTracker.row.B1_UL_2_3D_UR += 1;
			state.player2.gridTracker.row.B3_UL_2_3D_UR += 1;
			state.player2.gridTracker.column.B2_UM_2_LM += 1;
			state.player2.gridTracker.same.UMa += 1;
			player2Wins();
		}
	}

	function B2UR(){
		$(this).off("click");
		if (state.playerTracker === 1){
			$(this).html('<img src="' + state.player1.image + '" class="B2_UL_2_UR B2_UR_2_LR B2_LL_2_UR URa">');
			state.playerTracker = 2;
			state.player1.gridTracker.row.B2_UL_2_UR += 1;
			state.player1.gridTracker.column.B2_UR_2_LR += 1;
			state.player1.gridTracker.diagonal.B2_LL_2_UR += 1;
			state.player1.gridTracker.same.URa += 1;
			player1Wins();
		} else {
			$(this).html('<img src="' + state.player2.image + '" class="B2_UL_2_UR B2_UR_2_LR B2_LL_2_UR URa">');
			state.playerTracker = 1;
			state.player2.gridTracker.row.B2_UL_2_UR += 1;
			state.player2.gridTracker.column.B2_UR_2_LR += 1;
			state.player2.gridTracker.diagonal.B2_LL_2_UR += 1;
			state.player2.gridTracker.same.URa += 1;
			player2Wins();
		}
	}

	function B2ML(){
		$(this).off("click");
		if (state.playerTracker === 1){
			$(this).html('<img src="' + state.player1.image + '" class="B2_ML_2_MR B2_UL_2_LL B1_UL_2_3D_LL B3_UL_2_3D_LL MLa">');
			state.playerTracker = 2;
			state.player1.gridTracker.row.B2_ML_2_MR += 1;
			state.player1.gridTracker.column.B2_UL_2_LL += 1;
			state.player1.gridTracker.column.B1_UL_2_3D_LL += 1;
			state.player1.gridTracker.column.B3_UL_2_3D_LL += 1;
			state.player1.gridTracker.same.MLa += 1;
			player1Wins();
		} else {
			$(this).html('<img src="' + state.player2.image + '" class="B2_ML_2_MR B2_UL_2_LL B1_UL_2_3D_LL B3_UL_2_3D_LL MLa">');
			state.playerTracker = 1;
			state.player2.gridTracker.row.B2_ML_2_MR += 1;
			state.player2.gridTracker.column.B2_UL_2_LL += 1;
			state.player2.gridTracker.column.B1_UL_2_3D_LL += 1;
			state.player2.gridTracker.column.B3_UL_2_3D_LL += 1;
			state.player2.gridTracker.same.MLa += 1;
			player2Wins();
		}
	}

	function B2MM(){
		$(this).off("click");
		if (state.playerTracker === 1){
			$(this).html('<img src="' + state.player1.image + '" class="B2_ML_2_MR B1_ML_2_3D_MR B3_ML_2_3D_MR B2_UM_2_LM B1_UM_2_3D_LM B3_UM_2_3D_LM B2_UL_2_LR B2_LL_2_UR B1_UL_2_3D_LR B1_LL_2_3D_UR B3_UL_2_3D_LR B3_LL_2_3D_UR MMa">');
			state.playerTracker = 2;
			state.player1.gridTracker.row.B2_ML_2_MR += 1;
			state.player1.gridTracker.row.B1_ML_2_3D_MR += 1;
			state.player1.gridTracker.row.B3_ML_2_3D_MR += 1;
			state.player1.gridTracker.column.B2_UM_2_LM += 1;
			state.player1.gridTracker.column.B1_UM_2_3D_LM += 1;
			state.player1.gridTracker.column.B3_UM_2_3D_LM += 1;
			state.player1.gridTracker.diagonal.B2_UL_2_LR += 1;
			state.player1.gridTracker.diagonal.B2_LL_2_UR += 1;
			state.player1.gridTracker.diagonal.B1_UL_2_3D_LR += 1;
			state.player1.gridTracker.diagonal.B1_LL_2_3D_UR += 1;
			state.player1.gridTracker.diagonal.B3_UL_2_3D_LR += 1;
			state.player1.gridTracker.diagonal.B3_LL_2_3D_UR += 1;
			state.player1.gridTracker.same.MMa += 1;
			player1Wins();
		} else {
			$(this).html('<img src="' + state.player2.image + '" class="B2_ML_2_MR B1_ML_2_3D_MR B3_ML_2_3D_MR B2_UM_2_LM B1_UM_2_3D_LM B3_UM_2_3D_LM B2_UL_2_LR B2_LL_2_UR B1_UL_2_3D_LR B1_LL_2_3D_UR B3_UL_2_3D_LR B3_LL_2_3D_UR MMa">');
			state.playerTracker = 1;
			state.player2.gridTracker.row.B2_ML_2_MR += 1;
			state.player2.gridTracker.row.B1_ML_2_3D_MR += 1;
			state.player2.gridTracker.row.B3_ML_2_3D_MR += 1;
			state.player2.gridTracker.column.B2_UM_2_LM += 1;
			state.player2.gridTracker.column.B1_UM_2_3D_LM += 1;
			state.player2.gridTracker.column.B3_UM_2_3D_LM += 1;
			state.player2.gridTracker.diagonal.B2_UL_2_LR += 1;
			state.player2.gridTracker.diagonal.B2_LL_2_UR += 1;
			state.player2.gridTracker.diagonal.B1_UL_2_3D_LR += 1;
			state.player2.gridTracker.diagonal.B1_LL_2_3D_UR += 1;
			state.player2.gridTracker.diagonal.B3_UL_2_3D_LR += 1;
			state.player2.gridTracker.diagonal.B3_LL_2_3D_UR += 1;
			state.player2.gridTracker.same.MMa += 1;
			player2Wins();
		}
	}

	function B2MR(){
		$(this).off("click");
		if (state.playerTracker === 1){
			$(this).html('<img src="' + state.player1.image + '" class="B2_ML_2_MR B2_UR_2_LR B1_UR_2_3D_LR B3_UR_2_3D_LR MRa">');
			state.playerTracker = 2;
			state.player1.gridTracker.row.B2_ML_2_MR += 1;
			state.player1.gridTracker.column.B2_UR_2_LR += 1;
			state.player1.gridTracker.column.B1_UR_2_3D_LR += 1;
			state.player1.gridTracker.column.B3_UR_2_3D_LR += 1;
			state.player1.gridTracker.same.MRa += 1;
			player1Wins();
		} else {
			$(this).html('<img src="' + state.player2.image + '" class="B2_ML_2_MR B2_UR_2_LR B1_UR_2_3D_LR B3_UR_2_3D_LR MRa">');
			state.playerTracker = 1;
			state.player2.gridTracker.row.B2_ML_2_MR += 1;
			state.player2.gridTracker.column.B2_UR_2_LR += 1;
			state.player2.gridTracker.column.B1_UR_2_3D_LR += 1;
			state.player2.gridTracker.column.B3_UR_2_3D_LR += 1;
			state.player2.gridTracker.same.MRa += 1;
			player2Wins();
		}
	}

	function B2LL(){
		$(this).off("click");
		if (state.playerTracker === 1){
			$(this).html('<img src="' + state.player1.image + '" class="B2_LL_2_LR B2_UL_2_LL B2_LL_2_UR LLa">');
			state.playerTracker = 2;
			state.player1.gridTracker.row.B2_LL_2_LR += 1;
			state.player1.gridTracker.column.B2_UL_2_LL += 1;
			state.player1.gridTracker.diagonal.B2_LL_2_UR += 1;
			state.player1.gridTracker.same.LLa += 1;
			player1Wins();
		} else {
			$(this).html('<img src="' + state.player2.image + '" class="B2_LL_2_LR B2_UL_2_LL B2_LL_2_UR LLa">');
			state.playerTracker = 1;
			state.player2.gridTracker.row.B2_LL_2_LR += 1;
			state.player2.gridTracker.column.B2_UL_2_LL += 1;
			state.player2.gridTracker.diagonal.B2_LL_2_UR += 1;
			state.player2.gridTracker.same.LLa += 1;
			player2Wins();
		}
	}

	function B2LM(){
		$(this).off("click");
		if (state.playerTracker === 1){
			$(this).html('<img src="' + state.player1.image + '" class="B2_LL_2_LR B1_LL_2_3D_LR B3_LL_2_3D_LR B2_UM_2_LM LMa">');
			state.playerTracker = 2;
			state.player1.gridTracker.row.B2_LL_2_LR += 1;
			state.player1.gridTracker.row.B1_LL_2_3D_LR += 1;
			state.player1.gridTracker.row.B3_LL_2_3D_LR += 1;
			state.player1.gridTracker.column.B2_UM_2_LM += 1;
			state.player1.gridTracker.same.LMa += 1;
			player1Wins();
		} else {
			$(this).html('<img src="' + state.player2.image + '" class="B2_LL_2_LR B1_LL_2_3D_LR B3_LL_2_3D_LR B2_UM_2_LM LMa">');
			state.playerTracker = 1;
			state.player2.gridTracker.row.B2_LL_2_LR += 1;
			state.player2.gridTracker.row.B1_LL_2_3D_LR += 1;
			state.player2.gridTracker.row.B3_LL_2_3D_LR += 1;
			state.player2.gridTracker.column.B2_UM_2_LM += 1;
			state.player2.gridTracker.same.LMa += 1;
			player2Wins();
		}
	}

	function B2LR(){
		$(this).off("click");
		if (state.playerTracker === 1){
			$(this).html('<img src="' + state.player1.image + '" class="B2_LL_2_LR B2_UR_2_LR B2_UL_2_LR LRa">');
			state.playerTracker = 2;
			state.player1.gridTracker.row.B2_LL_2_LR += 1;
			state.player1.gridTracker.column.B2_UR_2_LR += 1;
			state.player1.gridTracker.diagonal.B2_UL_2_LR += 1;
			state.player1.gridTracker.same.LRa += 1;
			player1Wins();
		} else {
			$(this).html('<img src="' + state.player2.image + '" class="B2_LL_2_LR B2_UR_2_LR B2_UL_2_LR LRa">');
			state.playerTracker = 1;
			state.player2.gridTracker.row.B2_LL_2_LR += 1;
			state.player2.gridTracker.column.B2_UR_2_LR += 1;
			state.player2.gridTracker.diagonal.B2_UL_2_LR += 1;
			state.player2.gridTracker.same.LRa += 1;
			player2Wins();
		}
	}

	function B3UL(){
		$(this).off("click");
		if (state.playerTracker === 1){
			$(this).html('<img src="' + state.player1.image + '" class="B3_UL_2_UR B3_UL_2_3D_UR B3_UL_2_LL B3_UL_2_3D_LL B3_UL_2_LR B3_UL_2_3D_LR ULa">');
			state.playerTracker = 2;
			state.player1.gridTracker.row.B3_UL_2_UR += 1;
			state.player1.gridTracker.row.B3_UL_2_3D_UR += 1;
			state.player1.gridTracker.column.B3_UL_2_LL += 1;
			state.player1.gridTracker.column.B3_UL_2_3D_LL += 1;
			state.player1.gridTracker.diagonal.B3_UL_2_LR += 1;
			state.player1.gridTracker.diagonal.B3_UL_2_3D_LR += 1;
			state.player1.gridTracker.same.ULa += 1;
			player1Wins();
		} else {
			$(this).html('<img src="' + state.player2.image + '" class="B3_UL_2_UR B3_UL_2_3D_UR B3_UL_2_LL B3_UL_2_3D_LL B3_UL_2_LR B3_UL_2_3D_LR ULa">');
			state.playerTracker = 1;
			state.player2.gridTracker.row.B3_UL_2_UR += 1;
			state.player2.gridTracker.row.B3_UL_2_3D_UR += 1;
			state.player2.gridTracker.column.B3_UL_2_LL += 1;
			state.player2.gridTracker.column.B3_UL_2_3D_LL += 1;
			state.player2.gridTracker.diagonal.B3_UL_2_LR += 1;
			state.player2.gridTracker.diagonal.B3_UL_2_3D_LR += 1;
			state.player2.gridTracker.same.ULa += 1;
			player2Wins();
		}
	}

	function B3UM(){
		$(this).off("click");
		if (state.playerTracker === 1){
			$(this).html('<img src="' + state.player1.image + '" class="B3_UL_2_UR B3_UM_2_LM B3_UM_2_3D_LM UMa">');
			state.playerTracker = 2;
			state.player1.gridTracker.row.B3_UL_2_UR += 1;
			state.player1.gridTracker.column.B3_UM_2_LM += 1;
			state.player1.gridTracker.column.B3_UM_2_3D_LM += 1;
			state.player1.gridTracker.same.UMa += 1;
			player1Wins();
		} else {
			$(this).html('<img src="' + state.player2.image + '" class="B3_UL_2_UR B3_UM_2_LM B3_UM_2_3D_LM UMa">');
			state.playerTracker = 1;
			state.player2.gridTracker.row.B3_UL_2_UR += 1;
			state.player2.gridTracker.column.B3_UM_2_LM += 1;
			state.player2.gridTracker.column.B3_UM_2_3D_LM += 1;
			state.player2.gridTracker.same.UMa += 1;
			player2Wins();
		}
	}

	function B3UR(){
		$(this).off("click");
		if (state.playerTracker === 1){
			$(this).html('<img src="' + state.player1.image + '" class="B3_UL_2_UR B1_UL_2_3D_UR B3_UR_2_LR B3_UR_2_3D_LR B3_LL_2_UR B1_LL_2_3D_UR URa">');
			state.playerTracker = 2;
			state.player1.gridTracker.row.B3_UL_2_UR += 1;
			state.player1.gridTracker.row.B1_UL_2_3D_UR += 1;
			state.player1.gridTracker.column.B3_UR_2_LR += 1;
			state.player1.gridTracker.column.B3_UR_2_3D_LR += 1;
			state.player1.gridTracker.diagonal.B3_LL_2_UR += 1;
			state.player1.gridTracker.diagonal.B1_LL_2_3D_UR += 1;
			state.player1.gridTracker.same.URa += 1;
			player1Wins();
		} else {
			$(this).html('<img src="' + state.player2.image + '" class="B3_UL_2_UR B1_UL_2_3D_UR B3_UR_2_LR B3_UR_2_3D_LR B3_LL_2_UR B1_LL_2_3D_UR URa">');
			state.playerTracker = 1;
			state.player2.gridTracker.row.B3_UL_2_UR += 1;
			state.player2.gridTracker.row.B1_UL_2_3D_UR += 1;
			state.player2.gridTracker.column.B3_UR_2_LR += 1;
			state.player2.gridTracker.column.B3_UR_2_3D_LR += 1;
			state.player2.gridTracker.diagonal.B3_LL_2_UR += 1;
			state.player2.gridTracker.diagonal.B1_LL_2_3D_UR += 1;
			state.player2.gridTracker.same.URa += 1;
			player2Wins();
		}
	}

	function B3ML(){
		$(this).off("click");
		if (state.playerTracker === 1){
			$(this).html('<img src="' + state.player1.image + '" class="B3_ML_2_MR B3_ML_2_3D_MR B3_UL_2_LL MLa">');
			state.playerTracker = 2;
			state.player1.gridTracker.row.B3_ML_2_MR += 1;
			state.player1.gridTracker.row.B3_ML_2_3D_MR += 1;
			state.player1.gridTracker.column.B3_UL_2_LL += 1;
			state.player1.gridTracker.same.MLa += 1;
			player1Wins();
		} else {
			$(this).html('<img src="' + state.player2.image + '" class="B3_ML_2_MR B3_ML_2_3D_MR B3_UL_2_LL MLa">');
			state.playerTracker = 1;
			state.player2.gridTracker.row.B3_ML_2_MR += 1;
			state.player2.gridTracker.row.B3_ML_2_3D_MR += 1;
			state.player2.gridTracker.column.B3_UL_2_LL += 1;
			state.player2.gridTracker.same.MLa += 1;
			player2Wins();
		}
	}

	function B3MM(){
		$(this).off("click");
		if (state.playerTracker === 1){
			$(this).html('<img src="' + state.player1.image + '" class="B3_ML_2_MR B3_UM_2_LM B3_UL_2_LR B3_LL_2_UR MMa">');
			state.playerTracker = 2;
			state.player1.gridTracker.row.B3_ML_2_MR += 1;
			state.player1.gridTracker.column.B3_UM_2_LM += 1;
			state.player1.gridTracker.diagonal.B3_UL_2_LR += 1;
			state.player1.gridTracker.diagonal.B3_LL_2_UR += 1;
			state.player1.gridTracker.same.MMa += 1;
			player1Wins();
		} else {
			$(this).html('<img src="' + state.player2.image + '" class="B3_ML_2_MR B3_UM_2_LM B3_UL_2_LR B3_LL_2_UR MMa">');
			state.playerTracker = 1;
			state.player2.gridTracker.row.B3_ML_2_MR += 1;
			state.player2.gridTracker.column.B3_UM_2_LM += 1;
			state.player2.gridTracker.diagonal.B3_UL_2_LR += 1;
			state.player2.gridTracker.diagonal.B3_LL_2_UR += 1;
			state.player2.gridTracker.same.MMa += 1;
			player2Wins();
		}
	}

	function B3MR(){
		$(this).off("click");
		if (state.playerTracker === 1){
			$(this).html('<img src="' + state.player1.image + '" class="B3_ML_2_MR B1_ML_2_3D_MR B3_UR_2_LR MRa">');
			state.playerTracker = 2;
			state.player1.gridTracker.row.B3_ML_2_MR += 1;
			state.player1.gridTracker.row.B1_ML_2_3D_MR += 1;
			state.player1.gridTracker.column.B3_UR_2_LR += 1;
			state.player1.gridTracker.same.MRa += 1;
			player1Wins();
		} else {
			$(this).html('<img src="' + state.player2.image + '" class="B3_ML_2_MR B1_ML_2_3D_MR B3_UR_2_LR MRa">');
			state.playerTracker = 1;
			state.player2.gridTracker.row.B3_ML_2_MR += 1;
			state.player2.gridTracker.row.B1_ML_2_3D_MR += 1;
			state.player2.gridTracker.column.B3_UR_2_LR += 1;
			state.player2.gridTracker.same.MRa += 1;
			player2Wins();
		}
	}

	function B3LL(){
		$(this).off("click");
		if (state.playerTracker === 1){
			$(this).html('<img src="' + state.player1.image + '" class="B3_LL_2_LR B3_LL_2_3D_LR B3_UL_2_LL B1_UL_2_3D_LL B3_LL_2_UR B3_LL_2_3D_UR LLa">');
			state.playerTracker = 2;
			state.player1.gridTracker.row.B3_LL_2_LR += 1;
			state.player1.gridTracker.row.B3_LL_2_3D_LR += 1;
			state.player1.gridTracker.column.B3_UL_2_LL += 1;
			state.player1.gridTracker.column.B1_UL_2_3D_LL += 1;
			state.player1.gridTracker.diagonal.B3_LL_2_UR += 1;
			state.player1.gridTracker.diagonal.B3_LL_2_3D_UR += 1;
			state.player1.gridTracker.same.LLa += 1;
			player1Wins();
		} else {
			$(this).html('<img src="' + state.player2.image + '" class="B3_LL_2_LR B3_LL_2_3D_LR B3_UL_2_LL B1_UL_2_3D_LL B3_LL_2_UR B3_LL_2_3D_UR LLa">');
			state.playerTracker = 1;
			state.player2.gridTracker.row.B3_LL_2_LR += 1;
			state.player2.gridTracker.row.B3_LL_2_3D_LR += 1;
			state.player2.gridTracker.column.B3_UL_2_LL += 1;
			state.player2.gridTracker.column.B1_UL_2_3D_LL += 1;
			state.player2.gridTracker.diagonal.B3_LL_2_UR += 1;
			state.player2.gridTracker.diagonal.B3_LL_2_3D_UR += 1;
			state.player2.gridTracker.same.LLa += 1;
			player2Wins();
		}
	}

	function B3LM(){
		$(this).off("click");
		if (state.playerTracker === 1){
			$(this).html('<img src="' + state.player1.image + '" class="B3_LL_2_LR B3_UM_2_LM B1_UM_2_3D_LM LMa">');
			state.playerTracker = 2;
			state.player1.gridTracker.row.B3_LL_2_LR += 1;
			state.player1.gridTracker.column.B3_UM_2_LM += 1;
			state.player1.gridTracker.column.B1_UM_2_3D_LM += 1;
			state.player1.gridTracker.same.LMa += 1;
			player1Wins();
		} else {
			$(this).html('<img src="' + state.player2.image + '" class="B3_LL_2_LR B3_UM_2_LM B1_UM_2_3D_LM LMa">');
			state.playerTracker = 1;
			state.player2.gridTracker.row.B3_LL_2_LR += 1;
			state.player2.gridTracker.column.B3_UM_2_LM += 1;
			state.player2.gridTracker.column.B1_UM_2_3D_LM += 1;
			state.player2.gridTracker.same.LMa += 1;
			player2Wins();
		}
	}

	function B3LR(){
		$(this).off("click");
		if (state.playerTracker === 1){
			$(this).html('<img src="' + state.player1.image + '" class="B3_LL_2_LR B1_LL_2_3D_LR B3_UR_2_LR B1_UR_2_3D_LR B3_UL_2_LR B1_UL_2_3D_LR LRa">');
			state.playerTracker = 2;
			state.player1.gridTracker.row.B3_LL_2_LR += 1;
			state.player1.gridTracker.row.B1_LL_2_3D_LR += 1;
			state.player1.gridTracker.column.B3_UR_2_LR += 1;
			state.player1.gridTracker.column.B1_UR_2_3D_LR += 1;
			state.player1.gridTracker.diagonal.B3_UL_2_LR += 1;
			state.player1.gridTracker.diagonal.B1_UL_2_3D_LR += 1;
			state.player1.gridTracker.same.LRa += 1;
			player1Wins();
		} else {
			$(this).html('<img src="' + state.player2.image + '" class="B3_LL_2_LR B1_LL_2_3D_LR B3_UR_2_LR B1_UR_2_3D_LR B3_UL_2_LR B1_UL_2_3D_LR LRa">');
			state.playerTracker = 1;
			state.player2.gridTracker.row.B3_LL_2_LR += 1;
			state.player2.gridTracker.row.B1_LL_2_3D_LR += 1;
			state.player2.gridTracker.column.B3_UR_2_LR += 1;
			state.player2.gridTracker.column.B1_UR_2_3D_LR += 1;
			state.player2.gridTracker.diagonal.B3_UL_2_LR += 1;
			state.player2.gridTracker.diagonal.B1_UL_2_3D_LR += 1;
			state.player2.gridTracker.same.LRa += 1;
			player2Wins();
		}
	}

	$('.B1 > .UL').click(B1UL);
	$('.B1 > .UM').click(B1UM);
	$('.B1 > .UR').click(B1UR);
	$('.B1 > .ML').click(B1ML);
	$('.B1 > .MM').click(B1MM);
	$('.B1 > .MR').click(B1MR);
	$('.B1 > .LL').click(B1LL);
	$('.B1 > .LM').click(B1LM);
	$('.B1 > .LR').click(B1LR);

	$('.B2 > .UL').click(B2UL);
	$('.B2 > .UM').click(B2UM);
	$('.B2 > .UR').click(B2UR);
	$('.B2 > .ML').click(B2ML);
	$('.B2 > .MM').click(B2MM);
	$('.B2 > .MR').click(B2MR);
	$('.B2 > .LL').click(B2LL);
	$('.B2 > .LM').click(B2LM);
	$('.B2 > .LR').click(B2LR);

	$('.B3 > .UL').click(B3UL);
	$('.B3 > .UM').click(B3UM);
	$('.B3 > .UR').click(B3UR);
	$('.B3 > .ML').click(B3ML);
	$('.B3 > .MM').click(B3MM);
	$('.B3 > .MR').click(B3MR);
	$('.B3 > .LL').click(B3LL);
	$('.B3 > .LM').click(B3LM);
	$('.B3 > .LR').click(B3LR);

});