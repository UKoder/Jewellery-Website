import shutil, os

src_dir = r"C:\Users\DELL\.gemini\antigravity\brain\0bd6b15e-9377-4382-badf-0aeb2ecd14a5"
dst_dir = r"c:\Users\DELL\OneDrive\Desktop\jewellery\public"

files = {
    "gold_necklace_1775664689919.png": "product_necklace.png",
    "diamond_ring_1775664707001.png": "product_ring.png",
    "kundan_bridal_1775664728563.png": "product_bridal.png",
    "gold_bangles_1775664745835.png": "product_bangles.png",
    "platinum_bands_1775664760952.png": "product_bands.png",
    "ruby_earrings_1775664780162.png": "product_earrings.png",
}

for src_name, dst_name in files.items():
    src = os.path.join(src_dir, src_name)
    dst = os.path.join(dst_dir, dst_name)
    if os.path.exists(src):
        shutil.copy2(src, dst)
        print(f"Copied {dst_name} ({os.path.getsize(dst)} bytes)")
    else:
        print(f"NOT FOUND: {src}")

print("\nDone! Files in public/:")
for f in os.listdir(dst_dir):
    print(f"  {f}")
