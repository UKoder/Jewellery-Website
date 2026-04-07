	var num_of_cats = 5; // This is the number of categories, including the first, blank, category.
	var open_in_newwindow=1; //Set 1 to open links in new window, 0 for no.
	var option_array = new Array(num_of_cats);

	option_array[0] = new Array("Select Place"); // This is the first (blank) category. Don't mess with it.
	option_array[1] = new Array("-- Please Select --", // Selecting the places in Karnataka
	"Bhatkal",
	"Chikkabalapur",
	"Chintamani",
	"Dasarhalli",
	"Hoskote",
	"Hubli",
	
	"J.C. Road",
	"Kammanahalli",
	"Malur",
	
	"Marathahalli",
	"Mysore",
	"New Thippasandra",
	"Rajajinagar",
        "Mandya",
        "Chamrajnagar",
        "Tumkur",
        "Doddaballapur"
	);
	option_array[2] = new Array("-- Please Select --",// Selecting the places in TamilNadu
	"Thrissur",
	"Trivandrum",
	"Vadakancherri"	
	);
	option_array[3] = new Array("-- Please Select --",// Selecting the places in Kerala
	
	
	"Sivakasi",
	"Vallioor"
	);
	var text_array = new Array(num_of_cats);

	text_array[0] = new Array(""); // These are general instructions. Change them if you want, or keep them if you don't.
	text_array[1] = new Array("",
	"No.1&2, Ground Floor, Fountain Plaza, <br>Municipal Main Road,<br> Bhatkal - 581320.<br> Ph: 08385-228438 / 228398", 
	"Bhavani Arcade,<br> BB Road,(Near Shanthisagar Hotel)<br> Chikkabalapur - 562101 <br>Ph: 08156-274848 / 321166",
	"No. 814 & 815, 3 rd Division,<br> M. G. Road,<br> Chintamani - 563125<br>Ph: 08154-255050 / 255030",
	"No.38, Ground Floor, Bafana Centre <br>S.M .Road - NH4, Jalahalli,<br>Bangalore- 560015.<br>Ph: 28391720 / 21",
	"# 1/A,Laxmi Complex, K.R Road,<br>J.C.Circle, Hoskote - 562114.<br>Ph: 080 - 27934747 / 27900283",
	"Ramanuj Centre, Plot CTS,<br>No. 612/A Station Road,<br>Hubli-580020<br>Ph: 0836 - 2363092/93",
	
	"J-Block, Unity Buildings,<br> J.C. Road,<br>Bangalore-2<br>Ph: 22273184,<br>Diamond Division Ph : 22227389 ",
	"No. 6/1, Metta Plaza,<br>Kammanahalli Main Road<br>Bangalore-560084.<br>Ph: 25436372 / 74",
	"Site No.2, Maruti Ext.,<br>Opp Junior College<br>Kolar District, Malur - 563130.<br>Ph: 08151 - 232300 ",
	
	"JJ Complex, No. 7, <br>Varthur Hobli, Ashwath Nagar<br>Basavanagar, Marathahalli,<br>Bangalore -37.<br>Ph: 25235810 / 25233454",
	"No 1 &2, Ramanashree Complex<br>Hardinge Circle, Nilgiri Road<br>Lashkar Mohalla,<br>Mysore - 570001.<br>Ph: 0821 - 2523140 / 2523130",
	"Rajeshwari Business Chambers<br>No. 806/1, BEML Main Road,<br>New Thippasandra,<br>Near Anjanaya Temple,<br>Bangalore-75<br>Ph: 25289730 / 25205459",
	"No.365A/76, Srinivasa Complex<br>19th Main Road,<br>1st Block Rajajinagar<br>Bangalore - 560010.<br>Ph: 23422322 / 33",
	"NO D5/1124/A/Ground floor<br>RCC Building,<br> M.C.Road,<br>Mandya city-571401.<br>Ph: 0832-222297/98",
        "NO.696-655,Apex complex<br>Pachappa circle,(Bhuvaneshwari circle)<br> Chamrajanagar-571313,<br>Ph: 0822-6225916",
        "Malnad mansion,Opp to R.T.O. office<br>Near Tumkur University,BH road<br> Tumkur-572102,<br>Ph: 0816-2251700, 0816-2251701",
        "Ward No.3,Bestara pete,<br>Doddaballapur town<br> Bangalore rural district -561203<br>Ph: 080-27622989, 080-27622990"
	);
	text_array[2] = new Array("",
	"P.B No. 111 M.O Road,<br>Thrissur - 680001,<br>Ph : 0487-2422986",
	"No. 37/870,<br> Rajdhani Building,East fort,<br> Trivandrum - 695023<br>Ph : 0471 -2463128",
	"Mannarkudi Building,<br>Vadakancherri,<br>Thrissur Road,<br>Kerala - 678683"
	);
	text_array[3] = new Array("",
	
	
	"Pandian Arcade,<br>Near Bus Stand,<br>Sivakasi - 626123<br>Ph : 04562-447036",
	"No. 63 C/1, Main Road,<br>Valliyoor,<br>Trinelveli District,Tamil Nadu<br>Ph : 04637 221694"
	);
		
	function switch_select() {
		document.getElementById('textarea_2').innerHTML = "";
		
		for (loop = window.document.form_1.select_2.options.length-1; loop > 0; loop--) {
			window.document.form_1.select_2.options[loop] = null;
		}

		for (loop = 0; loop < option_array[window.document.form_1.select_1.selectedIndex].length; loop++) {
			window.document.form_1.select_2.options[loop] = new Option(option_array[window.document.form_1.select_1.selectedIndex][loop]);
		}
		window.document.form_1.select_2.selectedIndex = 0;
	}
  
	function switch_text() {
		document.getElementById('textarea_2').innerHTML = text_array[window.document.form_1.select_1.selectedIndex][window.document.form_1.select_2.selectedIndex];
		//alert(document.getElementById('textarea_2').value);
		//window.document.form_1.textarea_2.value = text_array[window.document.form_1.select_1.selectedIndex][window.document.form_1.select_2.selectedIndex];
	}

	function set_orig() {
		window.document.form_1.select_1.selectedIndex = 0;
		window.document.form_1.select_2.selectedIndex = 0;
	}
	window.onload=set_orig