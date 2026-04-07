import os

def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    modified_content = content.replace('src="/', 'src="./')
    
    if modified_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(modified_content)
        print(f"Fixed paths in {filepath}")
    else:
        print(f"No absolute src paths found in {filepath}")

fix_file(r'c:\Users\DELL\OneDrive\Desktop\jewellery\src\pages\Home.jsx')
fix_file(r'c:\Users\DELL\OneDrive\Desktop\jewellery\src\components\HeroSection.jsx')
