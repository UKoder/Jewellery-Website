import urllib.request
from bs4 import BeautifulSoup
import re
import json

url = "https://www.chemmanur.com/ourstores.php"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    with open('stores_raw.txt', 'w', encoding='utf-8') as f:
        f.write(html)
    print("Downloaded HTML")
except Exception as e:
    print("Error:", e)
