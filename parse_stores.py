import json

states = ["Karnataka", "Kerala", "TamilNadu"]

options = [
    [
        "Bhatkal", "Chikkabalapur", "Chintamani", "Dasarhalli", "Hoskote", "Hubli",
        "J.C. Road", "Kammanahalli", "Malur", "Marathahalli", "Mysore", "New Thippasandra",
        "Rajajinagar", "Mandya", "Chamrajnagar", "Tumkur", "Doddaballapur"
    ],
    [
        "Thrissur", "Trivandrum", "Vadakancherri"
    ],
    [
        "Sivakasi", "Vallioor"
    ]
]

texts = [
    [
        "No.1&2, Ground Floor, Fountain Plaza, <br>Municipal Main Road,<br> Bhatkal - 581320.<br> Ph: 08385-228438 / 228398",
        "Bhavani Arcade,<br> BB Road,(Near Shanthisagar Hotel)<br> Chikkabalapur - 562101 <br>Ph: 08156-274848 / 321166",
        "No. 814 & 815, 3 rd Division,<br> M. G. Road,<br> Chintamani - 563125<br>Ph: 08154-255050 / 255030",
        "No.38, Ground Floor, Bafana Centre <br>S.M .Road - NH4, Jalahalli,<br>Bangalore- 560015.<br>Ph: 28391720 / 21",
        "# 1/A,Laxmi Complex, K.R Road,<br>J.C.Circle, Hoskote - 562114.<br>Ph: 080 - 27934747 / 27900283",
        "Ramanuj Centre, Plot CTS,<br>No. 612/A Station Road,<br>Hubli-580020<br>Ph: 0836 - 2363092/93",
        "J-Block, Unity Buildings,<br> J.C. Road,<br>Bangalore-2<br>Ph: 22273184,<br>Diamond Division Ph : 22227389",
        "No. 6/1, Metta Plaza,<br>Kammanahalli Main Road<br>Bangalore-560084.<br>Ph: 25436372 / 74",
        "Site No.2, Maruti Ext.,<br>Opp Junior College<br>Kolar District, Malur - 563130.<br>Ph: 08151 - 232300",
        "JJ Complex, No. 7, <br>Varthur Hobli, Ashwath Nagar<br>Basavanagar, Marathahalli,<br>Bangalore -37.<br>Ph: 25235810 / 25233454",
        "No 1 &2, Ramanashree Complex<br>Hardinge Circle, Nilgiri Road<br>Lashkar Mohalla,<br>Mysore - 570001.<br>Ph: 0821 - 2523140 / 2523130",
        "Rajeshwari Business Chambers<br>No. 806/1, BEML Main Road,<br>New Thippasandra,<br>Near Anjanaya Temple,<br>Bangalore-75<br>Ph: 25289730 / 25205459",
        "No.365A/76, Srinivasa Complex<br>19th Main Road,<br>1st Block Rajajinagar<br>Bangalore - 560010.<br>Ph: 23422322 / 33",
        "NO D5/1124/A/Ground floor<br>RCC Building,<br> M.C.Road,<br>Mandya city-571401.<br>Ph: 0832-222297/98",
        "NO.696-655,Apex complex<br>Pachappa circle,(Bhuvaneshwari circle)<br> Chamrajanagar-571313,<br>Ph: 0822-6225916",
        "Malnad mansion,Opp to R.T.O. office<br>Near Tumkur University,BH road<br> Tumkur-572102,<br>Ph: 0816-2251700, 0816-2251701",
        "Ward No.3,Bestara pete,<br>Doddaballapur town<br> Bangalore rural district -561203<br>Ph: 080-27622989, 080-27622990"
    ],
    [
        "P.B No. 111 M.O Road,<br>Thrissur - 680001,<br>Ph : 0487-2422986",
        "No. 37/870,<br> Rajdhani Building,East fort,<br> Trivandrum - 695023<br>Ph : 0471 -2463128",
        "Mannarkudi Building,<br>Vadakancherri,<br>Thrissur Road,<br>Kerala - 678683"
    ],
    [
        "Pandian Arcade,<br>Near Bus Stand,<br>Sivakasi - 626123<br>Ph : 04562-447036",
        "No. 63 C/1, Main Road,<br>Valliyoor,<br>Trinelveli District,Tamil Nadu<br>Ph : 04637 221694"
    ]
]

store_data = {}
for i, state in enumerate(states):
    store_data[state] = []
    for j, branch in enumerate(options[i]):
        store_data[state].append({
            "branch": branch,
            "address": texts[i][j].replace("<br>", "\n")
        })

js_out = "export const storeData = " + json.dumps(store_data, indent=2) + ";"
with open("c:/Users/DELL/OneDrive/Desktop/jewellery/src/data/storeData.js", "w") as f:
    f.write(js_out)

print("Parsed stores!")
