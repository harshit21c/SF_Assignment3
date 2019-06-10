var turn=0;										//Decides whose turn it is
var roll_number=0;								//To store the value of dice
var roll_flag = true;
var input_flag = true;							//To enable/disable the roll button
var locker_a_flag = false;
var locker_b_flag = false;
var token_a = 2;
var token_b = 2;
var position_1a = -1;
var position_1b = -1;
var position_2a = -1;
var position_2b = -1;
var win_counter_a = 0;
var win_counter_b = 0;
var cell_a = [document.getElementById("cell1"),
				   document.getElementById("cell2"),
				   document.getElementById("cell3"),
				   document.getElementById("cell4"),
				   document.getElementById("cell5"),
				   document.getElementById("cell6"),
				   document.getElementById("cell7"),
				   document.getElementById("cell8"),
				   document.getElementById("cell9"),
				   document.getElementById("cell10"),
				   document.getElementById("cell11"),
				   document.getElementById("cell12"),
				   document.getElementById("cell13"),
				   document.getElementById("cell14"),
				   document.getElementById("cell15"),
				   document.getElementById("cell16"),
				   document.getElementById("cell17"),
				   document.getElementById("cell18"),
				   document.getElementById("cell19"),
				   document.getElementById("cell20"),
				   document.getElementById("cell21"),
				   document.getElementById("cell22"),
				   document.getElementById("cell23"),
				   document.getElementById("cell24"),
				   document.getElementById("cell25"),
				   document.getElementById("cell26"),
				   document.getElementById("cell27"),
				   document.getElementById("cell28"),
				   0,0,0,0,0,0
				  ];
var cell_b = [document.getElementById("cell15"),
				   document.getElementById("cell16"),
				   document.getElementById("cell17"),
				   document.getElementById("cell18"),
				   document.getElementById("cell19"),
				   document.getElementById("cell20"),
				   document.getElementById("cell21"),
				   document.getElementById("cell22"),
				   document.getElementById("cell23"),
				   document.getElementById("cell24"),
				   document.getElementById("cell25"),
				   document.getElementById("cell26"),
				   document.getElementById("cell27"),
				   document.getElementById("cell28"),
				   document.getElementById("cell1"),
				   document.getElementById("cell2"),
				   document.getElementById("cell3"),
				   document.getElementById("cell4"),
				   document.getElementById("cell5"),
				   document.getElementById("cell6"),
				   document.getElementById("cell7"),
				   document.getElementById("cell8"),
				   document.getElementById("cell9"),
				   document.getElementById("cell10"),
				   document.getElementById("cell11"),
				   document.getElementById("cell12"),
				   document.getElementById("cell13"),
				   document.getElementById("cell14"),
				   0,0,0,0,0,0
				  ];

function clear_display2_para(){
	document.getElementById("display2_para").innerHTML = "";
}

function clear_input_para(){
	document.getElementById("input_form_para").innerHTML = "";
}

function roll_dice(){
	if(true){
		roll_number = Math.ceil(Math.random()*6);
		document.getElementById("display2_para").innerHTML = roll_number;
	}
}

function find_id_a(position){
	if(position>-1){
		return(cell_a[position].id);
	}
}

function find_id_b(position){
	if(position>-1){
		return(cell_b[position].id);
	}	
}

function find_token(button_id){
	if(turn%2==0){
		if(document.getElementById(button_id).innerHTML=="1A"){
			for(var i1=0;i1<28;i1++){
				if(cell_a[i1].id==button_id){				
					if(i1==position_1a){
						return("1a");
					}
					if(i1==position_2a){
						return("2a");
					}
				}
			}
		}
	}
	if(turn%2==1){
		if(document.getElementById(button_id).innerHTML=="1B"){
			for(var i2=0;i2<28;i2++){
				if(cell_b[i2].id==button_id){
					if(i2==position_1b){
						return("1b");
					}
					if(i2==position_2b){
						return("2b");
					}
				}
			}
		}
	}
}

function move(button_id){
	if(roll_number<7&&roll_number>0){	
		if(find_token(button_id)=="1a"||find_token(button_id)=="2a"||find_token(button_id)=="1b"||find_token(button_id)=="2b"){	
			if(turn%2==0){
				if(token_a==1){
					if(win_counter_a==0){
						if(roll_number==6){
							if(find_token(button_id)=="1a"){
								cell_a[position_1a].innerHTML = "";
								for (var i = 0; i < roll_number ; i++) {
									position_1a++;
								}		
								if(position_1a<27){
									cell_a[position_1a].innerHTML = "1A";
									if(find_id_a(position_1a)==find_id_b(position_1b)){
										position_1b=-1;
										token_b++;
									}
									if((find_id_a(position_1a)==find_id_b(position_2b))){
										position_2b=-1;
										token_b++;
									}
									if(position_1a==position_2a){
										cell_a[position_1a].innerHTML = "1A 1A";
									}
								}
								else{
									win_counter_a++;
								}
							}
							if(find_token(button_id)=="2a"){
								cell_a[position_2a].innerHTML = "";
								for (var i = 0; i < roll_number ; i++) {
									position_2a++;
								}		
								if(position_2a<27){
									cell_a[position_2a].innerHTML = "1A";
									if(find_id_a(position_2a)==find_id_b(position_1b)){
										position_1b=-1;
										token_b++;
									}
									if((find_id_a(position_2a)==find_id_b(position_2b))){
										position_2b=-1;
										token_b++;
									}
									if(position_1a==position_2a){
										cell_a[position_2a].innerHTML = "1A 1A";
									}
								}
								else{
									win_counter_a++;
								}
							}
						}
					}
				}
				if(token_a==0){			
					if(win_counter_a==0){	
						if(find_token(button_id)=="1a"){
							cell_a[position_1a].innerHTML = "";
							for (var i = 0; i < roll_number ; i++) {
								position_1a++;
							}		
							if(position_1a<27){
								cell_a[position_1a].innerHTML = "1A";
								if(find_id_a(position_1a)==find_id_b(position_1b)){
									position_1b=-1;
									token_b++;
								}
								if((find_id_a(position_1a)==find_id_b(position_2b))){
									position_2b=-1;
									token_b++;
								}
								if(position_1a==position_2a){
									cell_a[position_1a].innerHTML = "1A 1A";
								}
							}
							else{
								win_counter_a++;
							}
							if(roll_number<6&&roll_number>0){
								document.getElementById("display1_para").innerHTML = "TURN : Player B";
							}
							
						}
						if(find_token(button_id)=="2a"){
							cell_a[position_2a].innerHTML = "";
							for (var i = 0; i < roll_number ; i++) {
								position_2a++;
							}		
							if(position_2a<27){
								cell_a[position_2a].innerHTML = "1A";
								if(find_id_a(position_2a)==find_id_b(position_1b)){
									position_1b=-1;
									token_b++;
								}
								if((find_id_a(position_2a)==find_id_b(position_2b))){
									position_2b=-1;
									token_b++;
								}
								if(position_1a==position_2a){
									cell_a[position_2a].innerHTML = "1A 1A";
								}
							}
							else{
								win_counter_a++;
							}
							if(roll_number<6&&roll_number>0){
								document.getElementById("display1_para").innerHTML = "TURN : Player B";
							}
						}
					}	
				}	
			}
			if(turn%2==1){
				if(token_b==1){
					if(win_counter_b==0){
						if(roll_number==6){
							if(find_token(button_id)=="1b"){
								cell_b[position_1b].innerHTML = "";
								for (var i = 0; i < roll_number ; i++) {
									position_1b++;
								}		
								if(position_1b<27){
									cell_b[position_1b].innerHTML = "1B";
									if((find_id_b(position_1b)==find_id_a(position_1a))){
										position_1a=-1;
										token_a++;
									}
									if((find_id_b(position_1b)==find_id_a(position_2a))){
										position_2a=-1;
										token_a++;
									}
									if(position_1b==position_2b){
										cell_b[position_1b].innerHTML = "1B 1B";
									}						
								}
								else{
									win_counter_b++;
								}
							}
							if(find_token(button_id)=="2b"){
								cell_b[position_2b].innerHTML = "";
								for (var i = 0; i < roll_number ; i++) {
									position_2b++;
								}		
								if(position_2b<27){
									cell_b[position_2b].innerHTML = "1B";
									if(find_id_b(position_2b)==find_id_a(position_1a)){
										position_1a=-1;
										token_a++;
									}
									if((find_id_b(position_2b)==find_id_a(position_2a))){
										position_2a=-1;
										token_a++;
									}
									if(position_1b==position_2b){
										cell_b[position_2b].innerHTML = "1B 1B";
									}							
								}
								else{
									win_counter_b++;
								}	
							}
						}
					}
				}
				if(token_b==0){
					if(win_counter_b==0){	
						if(find_token(button_id)=="1b"){
							cell_b[position_1b].innerHTML = "";
							for (var i = 0; i < roll_number ; i++) {
								position_1b++;
							}		
							if(position_1b<27){
								cell_b[position_1b].innerHTML = "1B";
								if((find_id_b(position_1b)==find_id_a(position_1a))){
									position_1a=-1;
									token_a++;
								}
								if((find_id_b(position_1b)==find_id_a(position_2a))){
									position_2a=-1;
									token_a++;
								}
								if(position_1b==position_2b){
									cell_b[position_1b].innerHTML = "1B 1B";
								}						
							}
							else{
								win_counter_b++;
							}
							if(roll_number<6&&roll_number>0){
								document.getElementById("display1_para").innerHTML = "TURN : Player A";
							}
						}
						if(find_token(button_id)=="2b"){
							cell_b[position_2b].innerHTML = "";
							for (var i = 0; i < roll_number ; i++) {
								position_2b++;
							}		
							if(position_2b<27){
								cell_b[position_2b].innerHTML = "1B";
								if(find_id_b(position_2b)==find_id_a(position_1a)){
									position_1a=-1;
									token_a++;
								}
								if((find_id_b(position_2b)==find_id_a(position_2a))){
									position_2a=-1;
									token_a++;
								}
								if(position_1b==position_2b){
									cell_b[position_2b].innerHTML = "1B 1B";
								}							
							}
							else{
								win_counter_b++;
							}
							if(roll_number<6&&roll_number>0){
								document.getElementById("display1_para").innerHTML = "TURN : Player A";
							}	
						}
					}	
				}	
			}
			document.getElementById("locker1_para").innerHTML = token_a + "A";
			document.getElementById("locker2_para").innerHTML = token_b + "B";
			if(roll_number<6&&roll_number>0){
				turn++;
			}
			roll_number = 0;
			input_flag = true;
			roll_flag = true;
			clear_display2_para();
		}	
	}	
}

function locker_a(){
	if(turn%2==0){	
		if(token_a==1){
			if(roll_number==6){
				token_a--;
				if(position_2a==-1){
					position_2a = 0;
					if(position_1a==0){
						cell_a[0].innerHTML = "1A 1A";
					}
					else{
						cell_a[0].innerHTML = "1A";
					}
				}
				if(position_1a==-1){
					position_1a = 0;
					if(position_2a==0){
						cell_a[0].innerHTML = "1A 1A";
					}
					else{
						cell_a[0].innerHTML = "1A";
					}
				}
				roll_number = 0;
				input_flag = true;
				roll_flag = true;
				clear_display2_para();
			}
		}
		document.getElementById("locker1_para").innerHTML = token_a + "A";
	}
}

function locker_b(){
	if(turn%2==1){	
		if(token_b==1){
			if(roll_number==6){
				token_b--;
				if(position_2b==-1){
					position_2b = 0;
					if(position_1b==0){
						cell_b[0].innerHTML = "1B 1B"; //replace the opponent token
					}
					else{
						cell_b[0].innerHTML = "1B";
					}
				}
				if(position_1b==-1){
					position_1b = 0;
					if(position_2b==0){
						cell_b[0].innerHTML = "1B 1B";
					}
					else{
						cell_b[0].innerHTML = "1B";
					}
				}
				roll_number = 0;
				input_flag = true;
				roll_flag = true;
				clear_display2_para();
			}
		}
		document.getElementById("locker2_para").innerHTML = token_b + "B";
	}
}

function Gameplay_A(){
	if(token_a==0){
		if(win_counter_a==1){
			if(position_1a>26){
				cell_a[position_2a].innerHTML = "";
				for (var i = 0; i < roll_number ; i++) {
					position_2a++;
				}		
				if(position_2a<27){ 
					cell_a[position_2a].innerHTML = "1A";
					if(find_id_a(position_2a)==find_id_b(position_1b)){
						position_1b=-1;
						token_b++;
					}
					if((find_id_a(position_2a)==find_id_b(position_2b))){
						position_2b=-1;
						token_b++;
					}
				}
				else{
					win_counter_a++;
				}
				if(win_counter_a==2){
					document.getElementById("display2_para").innerHTML = "Player A Won";
				}
			}
			else{
				cell_a[position_1a].innerHTML = "";
				for (var i = 0; i < roll_number ; i++) {
					position_1a++;
				}		
				if(position_1a<27){
					cell_a[position_1a].innerHTML = "1A";
					if(find_id_a(position_1a)==find_id_b(position_1b)){
						position_1b=-1;
						token_b++;
					}
					if((find_id_a(position_1a)==find_id_b(position_2b))){
						position_2b=-1;
						token_b++;
					}
				}
				else{
					win_counter_a++;
				}
				if(win_counter_a==2){
					document.getElementById("display2_para").innerHTML = "Player A Won";
				}
				
			}
			if(roll_number<6&&roll_number>0){
				document.getElementById("display1_para").innerHTML = "TURN : Player B";
				turn++;
			}
			roll_number = 0;
			input_flag = true;
			roll_flag = true;
			setTimeout(clear_display2_para,1000);;
		}
		if(win_counter_a==0){
			if(position_1a==position_2a){
				cell_a[position_1a].innerHTML = "1A";
				for (var i = 0; i < roll_number ; i++) {
					position_1a++;
				}		
				if(position_1a<27){							
					cell_a[position_1a].innerHTML = "1A";
				}
				else{
					win_counter_a++;
				}
				if(roll_number<6&&roll_number>0){	
					document.getElementById("display1_para").innerHTML = "TURN : Player B";
					turn++;
				}
				roll_number = 0;
				input_flag = true;
				roll_flag = true;
				setTimeout(clear_display2_para,1000);
			}
		}
	}

	if(token_a==1){
		if(win_counter_a==1){
			if(roll_number==6){
				locker_a();
			}
			else{
				if(roll_number<6&&roll_number>0){	
					document.getElementById("display1_para").innerHTML = "TURN : Player B";
					turn++;
				}
				roll_number = 0;
				input_flag = true;
				roll_flag = true;
				setTimeout(clear_display2_para,1000);
			}
		}
		if(win_counter_a==0){	
			//move();
			if(roll_number<6&&roll_number>0){
				if(position_2a==-1){
					cell_a[position_1a].innerHTML = "";
					for (var i = 0; i < roll_number ; i++) {
							position_1a++;
					}	
					if(position_1a<27){
						cell_a[position_1a].innerHTML = "1A";
						if(find_id_a(position_1a)==find_id_b(position_1b)){
							position_1b=-1;
							token_b++;
						}
						if((find_id_a(position_1a)==find_id_b(position_2b))){
							position_2b=-1;
							token_b++;
						}
					}	
					else{
						win_counter_a++;
					}
					if(roll_number<6&&roll_number>0){	
						document.getElementById("display1_para").innerHTML = "TURN : Player B";
						turn++;
					}
					roll_number = 0;
					input_flag = true;
					roll_flag = true;
					setTimeout(clear_display2_para,1000);
				}
				if(position_1a==-1){
					cell_a[position_2a].innerHTML = "";
					for (var i = 0; i < roll_number ; i++) {
							position_2a++;
					}	
					if(position_2a<27){
						cell_a[position_2a].innerHTML = "1A";
						if(find_id_a(position_2a)==find_id_b(position_1b)){
							position_1b=-1;
							token_b++;
						}
						if((find_id_a(position_2a)==find_id_b(position_2b))){
							position_2b=-1;
							token_b++;
						}
					}	
					else{
						win_counter_a++;
					}
					if(roll_number<6&&roll_number>0){	
						document.getElementById("display1_para").innerHTML = "TURN : Player B";
						turn++;
					}
					roll_number = 0;
					input_flag = true;
					roll_flag = true;
					setTimeout(clear_display2_para,1000);
				}
			}
		}	
	}

	if(token_a==2){
		if(roll_number==6){
			token_a--;
			position_1a = 0;
			cell_a[position_1a].innerHTML = "1A";
			if(find_id_a(position_1a)==find_id_b(position_1b)){
				position_1b=-1;
				token_b++;
			}
			if((find_id_a(position_1a)==find_id_b(position_2b))){
				position_2b=-1;
				token_b++;
			}
		}
		if(roll_number<6&&roll_number>0){	
			document.getElementById("display1_para").innerHTML = "TURN : Player B";
			turn++;
		}
		roll_number = 0;
		input_flag = true;
		roll_flag = true;
		setTimeout(clear_display2_para,1000);
	}
	document.getElementById("locker2_para").innerHTML = token_b + "B";
	document.getElementById("locker1_para").innerHTML = token_a + "A";
}

function Gameplay_B(){
	if(token_b==0){
		if(win_counter_b==1){
			if(position_1b>26){
				cell_b[position_2b].innerHTML = "";
				for (var i = 0; i < roll_number ; i++) {
					position_2b++;
				}		
				if(position_2b<27){
					cell_b[position_2b].innerHTML = "1B";
					if(find_id_b(position_2b)==find_id_a(position_1a)){
						position_1a=-1;
						token_a++;
					}
					if((find_id_b(position_2b)==find_id_a(position_2a))){
						position_2a=-1;
						token_a++;
					}
				}
				else{
					win_counter_b++;
				}
				if(win_counter_b==2){
					document.getElementById("display2_para").innerHTML = "Player B Won";
				}
			}
			else{
				cell_b[position_1b].innerHTML = "";
				for (var i = 0; i < roll_number ; i++) {
					position_1b++;
				}		
				if(position_1b<27){
					cell_b[position_1b].innerHTML = "1B";
					if(find_id_b(position_1b)==find_id_a(position_1a)){
						position_1a=-1;
						token_a++;
					}
					if((find_id_b(position_1b)==find_id_a(position_2a))){
						position_2a=-1;
						token_a++;
					}
				}
				else{
					win_counter_b++;
				}
				if(win_counter_b==2){
					document.getElementById("display2_para").innerHTML = "Player B Won";
				}
			}
			if(roll_number<6&&roll_number>0){	
				document.getElementById("display1_para").innerHTML = "TURN : Player A";
				turn++;
			}
			roll_number = 0;
			input_flag = true;
			roll_flag = true;
			setTimeout(clear_display2_para,1000);
		}
		if(win_counter_b==0){
			if(position_1b==position_2b){
				cell_b[position_1b].innerHTML = "1B";
				for (var i = 0; i < roll_number ; i++) {
					position_1b++;
				}		
				if(position_1b<27){							
					cell_b[position_1b].innerHTML = "1B";
				}
				else{
					win_counter_b++;
				}
				if(roll_number<6&&roll_number>0){	
					document.getElementById("display1_para").innerHTML = "TURN : Player A";
					turn++;
				}
				roll_number = 0;
				input_flag = true;
				roll_flag = true;
				setTimeout(clear_display2_para,1000);
			}
		}
	}

	if(token_b==1){
		if(win_counter_b==1){
			if(roll_number==6){
				locker_b();
			}
			else{
				if(roll_number<6&&roll_number>0){	
					document.getElementById("display1_para").innerHTML = "TURN : Player A";
					turn++;
				}
				roll_number = 0;
				input_flag = true;
				roll_flag = true;
				setTimeout(clear_display2_para,1000);
			}
		}
		if(win_counter_b==0){	
			//move();
			if(roll_number<6&&roll_number>0){
				if(position_2b==-1){
					cell_b[position_1b].innerHTML = "";
					for (var i = 0; i < roll_number ; i++) {
							position_1b++;
					}		
					if(position_1b<27){
						cell_b[position_1b].innerHTML = "1B";
						if(find_id_b(position_1b)==find_id_a(position_1a)){
							position_1a=-1;
							token_a++;
						}
						if((find_id_b(position_1b)==find_id_a(position_2a))){
							position_2a=-1;
							token_a++;
						}
					}
					else{
						win_counter_b++;
					}
					if(roll_number<6&&roll_number>0){	
						document.getElementById("display1_para").innerHTML = "TURN : Player A";
						turn++;
					}
					roll_number = 0;
					input_flag = true;
					roll_flag = true;
					setTimeout(clear_display2_para,1000);
				}
				if(position_1b==-1){
					cell_b[position_2b].innerHTML = "";
					for (var i = 0; i < roll_number ; i++) {
							position_2b++;
					}		
					if(position_2b<27){
						cell_b[position_2b].innerHTML = "1B";
						if(find_id_b(position_2b)==find_id_a(position_1a)){
							position_1a=-1;
							token_a++;
						}
						if((find_id_b(position_2b)==find_id_a(position_2a))){
							position_2a=-1;
							token_a++;
						}
					}
					else{
						win_counter_b++;
					}
					if(roll_number<6&&roll_number>0){	
						document.getElementById("display1_para").innerHTML = "TURN : Player A";
						turn++;
					}
					roll_number = 0;
					input_flag = true;
					roll_flag = true;
					setTimeout(clear_display2_para,1000);
				}
			}		
		}
	}

	if(token_b==2){
		console.log('yes');
		if(roll_number==6){
			token_b--;
			position_1b = 0;
			cell_b[position_1b].innerHTML = "1B";
			if(find_id_b(position_1b)==find_id_a(position_1a)){
				position_1a=-1;
				token_a++;
			}
			if((find_id_b(position_1b)==find_id_a(position_2a))){
				position_2a=-1;
				token_a++;
			}
		}
		if(roll_number<6&&roll_number>0){	
			document.getElementById("display1_para").innerHTML = "TURN : Player A";
			turn++;
		}
		roll_number =0;
		input_flag = true;
		roll_flag = true;
		setTimeout(clear_display2_para,1000);
	}
	document.getElementById("locker1_para").innerHTML = token_a + "A";
	document.getElementById("locker2_para").innerHTML = token_b + "B";
}

function start_the_turn_by_roll(){
	if(roll_flag&&input_flag){
		roll_flag = false;	
		turn_flag = true;
		roll_dice();
		if(turn%2==0){
			Gameplay_A();			
			turn_flag = false;
		}	

		if(turn_flag){	
			if(turn%2==1){
				Gameplay_B();				
			}
		}
	}
	else{
		document.getElementById("input_form_para").innerHTML = "COMPLETE THIS TURN FIRST";
		setTimeout(clear_input_para,2000);
	}
}

function start_the_turn_by_input(){	
		turn_flag = true;
		if(turn%2==0){
			Gameplay_A();
			turn_flag = false;
		}

		if(turn_flag){	
			if(turn%2==1){
				console.log('yes');
				Gameplay_B();
			}
		}
}

function validate_input(){
	var input = document.getElementById("dice_input").value;
	document.getElementById("dice_input").value = null;
	if(input<7&&input>0){
		if(input_flag&&roll_flag){	
			console.log('yes');
			input_flag = false;
			roll_number = input;
			start_the_turn_by_input();
		}
		else{
			document.getElementById("input_form_para").innerHTML = "COMPLETE THIS TURN FIRST!";
			setTimeout(clear_input_para, 2000);
		}	
	}
	else{
		document.getElementById("input_form_para").innerHTML = "NOT VALID!";
		setTimeout(clear_input_para, 2000);
	}
}

/*if(token_b==1){
	if(find_token(button_id)=="1b"){	
		cell_b[position_1b].innerHTML = "";
		for (var i = 0; i < roll_number ; i++) {
				position_1b++;
		}		
		if(position_1b<27){
			cell_b[position_1b].innerHTML = "1B";
			if(find_id_b(position_1b)==find_id_a(position_1a)){
				position_1a=0;
				token_a++;
			}
			if((find_id_b(position_1b)==find_id_a(position_2a))&&(token_a==0)){
				position_2a=0;
				token_a++;
			}
		}
		else{
			win_counter_b++;
		}
		document.getElementById("display1_para").innerHTML = "TURN : Player A";
	}
	if(find_token(button_id)=="2b"){	
		cell_b[position_2b].innerHTML = "";
		for (var i = 0; i < roll_number ; i++) {
				position_2b++;
		}		
		if(position_2b<27){
			cell_b[position_2b].innerHTML = "1B";
			if(find_id_b(position_2b)==find_id_a(position_1a)){
				position_1a=0;
				token_a++;
			}
			if((find_id_b(position_2b)==find_id_a(position_2a))&&(token_a==0)){
				position_2a=0;
				token_a++;
			}
		}
		else{
			win_counter_b++;
		}
		document.getElementById("display1_para").innerHTML = "TURN : Player A";
	}
}*/

/*if(token_a==1){
	if(find_token(button_id)=="1a"){	
		cell_a[position_1a].innerHTML = "";
		for (var i = 0; i < roll_number ; i++) {
				position_1a++;
		}	
		if(position_1a<27){
			cell_a[position_1a].innerHTML = "1A";
			if(find_id_a(position_1a)==find_id_b(position_1b)){
				position_1b=0;
				token_b++;
			}
			if((find_id_a(position_1a)==find_id_b(position_2b))&&(token_b==0)){
				position_2b=0;
				token_b++;
			}
		}	
		else{
			win_counter_a++;
		}
		document.getElementById("display1_para").innerHTML = "TURN : Player B";
	}
	if(find_token(button_id)=="2a"){	
		cell_a[position_2a].innerHTML = "";
		for (var i = 0; i < roll_number ; i++) {
				position_2a++;
		}	
		if(position_2a<27){
			cell_a[position_2a].innerHTML = "1A";
			if(find_id_a(position_2a)==find_id_b(position_1b)){
				position_1b=0;
				token_b++;
			}
			if((find_id_a(position_2a)==find_id_b(position_2b))&&(token_b==0)){
				position_2b=0;
				token_b++;
			}
		}	
		else{
			win_counter_a++;
		}
		document.getElementById("display1_para").innerHTML = "TURN : Player B";
	}
}*/