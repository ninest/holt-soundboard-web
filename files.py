import os
import glob
from pathlib import Path
from pprint import pprint

# path seems to be relative to main directory
# when run in VScode
p = Path("static/sounds/")
sounds = {"Captain Holt": [], "Terry Jeffords": [], "Charles Boyle": [], "Jake Peralta": [], "Gina Linetti": [], "Rosa Diaz": [], "Amy Santiago": [], "Hitchcock": [], "Scully": [], "Captain CJ": []}
characters = list(sounds.keys())

for i in p.glob('**/*.mp3'):
  sound_path = str(i).split("sounds/")[1]

  # make sure not system file
  if not (sound_path[0] == "."):
    
    character, filename = sound_path.split('/')[0], sound_path.split('/')[1]

    try: sounds[character].append(filename)
    except: sounds[character] = [filename]

for char, list in sounds.items():
  sounds[char].sort()

# pprint(sounds)

# write to ../contents/sounds.js
file = open('contents/sounds.js', 'w')
file.write(f"export let sounds = {str(sounds)};\n" )
file.write(f"export let characters = {str(characters)};")
file.close()

print("Done.")