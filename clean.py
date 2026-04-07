import json
import os

filepath = r"c:\Users\DELL\OneDrive\Desktop\jewellery\src\data\subsidiaries.js"
with open(filepath, "r", encoding="utf-8") as f:
    data = f.read()

data_json = data.replace("export const subsidiaries = ", "").rstrip(";")
subsidiaries = json.loads(data_json)

bad_lines = [
    "Click here forGPP GOLD RATES",
    "Chemm Finance Ltd",
    "Impex Pvt Ltd",
    "Academy & Systems Pvt Ltd",
    "Plantations Pvt Ltd",
    "Chemmanur Opticals  Pvt Ltd",
    "Chemmanur Opticals Pvt Ltd",
    "Little Angels (baby care)",
    "ACD Juel Pvt Ltd",
    "CGR Metalloys Pvt Ltd",
    "Chemm Ads Pvt Ltd"
]

for sub in subsidiaries:
    # also rename 'id' to something cleaner for URLs
    if sub['title'] == "Chemmanur Global": sub['id'] = "chemmanur-global"
    elif sub['title'] == "Juels": sub['id'] = "acd-juel"
    elif sub['title'] == "CGR METAL ALLOYS": sub['id'] = "cgr-metalloys"
    elif sub['title'] == "Chemmanur ads pvt limited": sub['id'] = "chemm-ads"
    elif sub['title'] == "Chemmanur finance": sub['id'] = "chemm-finance"
    elif sub['title'] == "Impex Private Limited": sub['id'] = "impex"
    elif sub['title'] == "Academy and Systems": sub['id'] = "academy-systems"
    elif sub['title'] == "Plantations": sub['id'] = "plantations"
    elif sub['title'] == "Opticals": sub['id'] = "opticals"
    elif sub['title'] == "Little angels": sub['id'] = "little-angels"

    new_content = []
    for line in sub["content"]:
        if line.strip() not in bad_lines:
            new_content.append(line)
    sub["content"] = new_content

out = "export const subsidiaries = " + json.dumps(subsidiaries, indent=2) + ";"
with open(filepath, "w", encoding="utf-8") as f:
    f.write(out)

print("Cleaned!")
