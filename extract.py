import os
import json
import re

base_path = r"C:\Users\DELL\.gemini\antigravity\brain\0bd6b15e-9377-4382-badf-0aeb2ecd14a5\.system_generated\steps"
# The exact step IDs.
steps = [231, 232, 233, 234, 235, 239, 240, 241, 242, 243]

result = []

for step in steps:
    file_path = os.path.join(base_path, str(step), "content.md")
    if os.path.exists(file_path):
        with open(file_path, "r", encoding="utf-8") as f:
            lines = f.readlines()
        
        # parse title and content
        title = ""
        content = []
        for line in lines:
            line = line.strip()
            if line.startswith("Title:"):
                title = line.replace("Title:", "").strip()
            elif "Group of Companies" in line or "[Chemmanur Global]" in line or "[Group of company]" in line:
                continue
            elif line.startswith("[") and line.endswith("]"):
                continue
            elif "Source:" in line or line == "---" or "Home |" in line or "Site Map" in line:
                continue
            elif line.startswith("- ["):
                continue
            elif line.startswith("[Home]"):
                continue
            elif line == "":
                continue
            elif "Online Shopping faqs" in line or "Click here forChemmanur Gold Saver App" in line or "Importent Notice" in line:
                continue
            elif line == "-":
                 continue
            else:
                # remove any markdown links
                line = re.sub(r'\[([^\]]+)\]\([^\)]+\)', r'\1', line)
                if line != title and not line.startswith("Chemmanur Jewellers, Copyright"):
                    content.append(line)
                    
        # Filter purely navigational items that might have slipped through
        nav_items = ["Home", "Company", "Careers", "Contact Us", "Our Stores", "Online Shop", "Online Shopping", "Terms of Use", "Privacy Policy", "Legal Disclaimer", "Vision, Mission and Core Values", "Social Responsibility Initiatives"]
        content = [c for c in content if c not in nav_items and len(c) > 2]
        
        # Assign slug
        slug = title.lower().replace(" ", "-").replace("&", "and").replace(",", "").replace("-pvt-limited", "").replace("-pvt-ltd", "")
        if slug == "":
            slug = "company-" + str(step)
            
        result.append({
            "id": slug,
            "title": title,
            "content": content
        })

os.makedirs(r"c:\Users\DELL\OneDrive\Desktop\jewellery\src\data", exist_ok=True)
js_file = "export const subsidiaries = " + json.dumps(result, indent=2) + ";"
with open(r"c:\Users\DELL\OneDrive\Desktop\jewellery\src\data\subsidiaries.js", "w", encoding="utf-8") as f:
    f.write(js_file)

print("Parsed and saved to src/data/subsidiaries.js")
