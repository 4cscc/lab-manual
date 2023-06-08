Search.setIndex({"docnames": ["intro", "lessons/atmospheric-sensing-1/lesson", "lessons/atmospheric-sensing-2/lesson", "lessons/builtin-dashboard-1/lesson", "lessons/hello-led-1/lesson", "lessons/kit-assembly-1/lesson", "lessons/led-with-pm-sensor/lesson", "lessons/morse-led-1/lesson", "lessons/multicolor-led-1/lesson", "lessons/pm-sensing-1/lesson", "lessons/voc-sensing-1/lesson"], "filenames": ["intro.md", "lessons/atmospheric-sensing-1/lesson.md", "lessons/atmospheric-sensing-2/lesson.md", "lessons/builtin-dashboard-1/lesson.md", "lessons/hello-led-1/lesson.md", "lessons/kit-assembly-1/lesson.md", "lessons/led-with-pm-sensor/lesson.md", "lessons/morse-led-1/lesson.md", "lessons/multicolor-led-1/lesson.md", "lessons/pm-sensing-1/lesson.md", "lessons/voc-sensing-1/lesson.md"], "titles": ["The Four Corners Science and Computing Club (4CSCC) Lab Notebook", "Atmospheric sensing", "Atmospheric sensing, posting data to an online dashboard", "Using the built-in sensor dashboard", "Blinking an LED from Scratch and Python 3", "Unpacking and assembling your supplies", "LED and PM Sensor Exercise", "LED Morse Code in Python 3", "Multi-color LED", "Particulate matter sensing to assess indoor air quality", "VOC sensing"], "terms": {"thi": [0, 1, 2, 3, 4, 5, 7, 8, 9, 10], "veri": [0, 7], "begin": [0, 1, 2, 10], "stage": 0, "book": [0, 3, 5], "introduc": [0, 3], "scientif": 0, "us": [0, 1, 2, 4, 6, 7, 8, 9, 10], "raspberri": [0, 1, 2, 3, 4, 6, 8, 9, 10], "pi": [0, 1, 2, 3, 4, 6, 8, 9, 10], "400": [0, 1, 2, 4, 6, 8, 9, 10], "physic": [0, 4, 5], "microbiom": 0, "qiim": 0, "2": [0, 1, 7, 10], "collabor": 0, "effort": 0, "between": [0, 5, 6, 7, 9], "member": 0, "team": 0, "content": 0, "earli": 0, "develop": [0, 4], "yet": [0, 3], "readi": [0, 3, 5], "self": 0, "learn": [0, 5, 9, 10], "At": [0, 7], "present": [0, 1], "exampl": [0, 3, 6, 7, 8], "onli": [0, 1, 4, 7], "work": [0, 2, 4, 5, 7, 9], "specif": [0, 6, 9], "disk": [0, 3], "imag": [0, 1, 3, 4, 5, 10], "creat": [0, 3, 4, 6, 7, 9], "befor": [0, 1, 2, 5, 6, 7, 9, 10], "run": [0, 1, 2, 4, 7, 9, 10], "ani": [0, 5], "python": 0, "3": 0, "code": [0, 1, 2, 4, 8], "you": [0, 1, 2, 3, 4, 5, 7, 8, 9, 10], "ll": [0, 1, 2, 3, 4, 5, 9, 10], "need": [0, 1, 2, 4, 7, 8, 9, 10], "follow": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "command": [0, 1, 2, 7, 9, 10], "sourc": [0, 1, 2, 9, 10], "ln": [0, 1, 2, 9, 10], "venv": [0, 1, 2, 9, 10], "bin": [0, 1, 2, 5, 9, 10], "activ": [0, 1, 2, 9, 10], "we": [0, 1, 2, 4, 5, 6, 7, 8, 9, 10], "have": [0, 3, 4, 5, 6, 7, 8, 9], "more": [0, 3, 4, 5, 6, 7, 9, 10], "portabl": 0, "instal": [0, 8], "usag": 0, "instruct": [0, 3, 5, 8, 9], "futur": 0, "In": [1, 2, 3, 4, 5, 6, 7, 9, 10], "lesson": [1, 2, 4, 6, 7, 8, 9, 10], "collect": [1, 2, 3, 4, 6, 8, 9, 10], "temperatur": [1, 2, 3, 5], "humid": [1, 2, 3, 5], "air": [1, 2, 3, 5, 10], "pressur": [1, 2, 3, 5], "data": [1, 3, 9], "from": [1, 2, 3, 6, 7, 8, 9, 10], "termin": [1, 2, 9, 10], "For": [1, 2, 3, 4, 7, 8, 9, 10], "exercis": [1, 2, 4, 7, 8, 9, 10], "comput": [1, 2, 3, 4, 6, 8, 9, 10], "sparkfun": [1, 2, 4, 6, 8, 9, 10], "qwiic": [1, 2, 4, 6, 8, 9, 10], "extens": [1, 2, 4, 6, 7, 8, 9, 10], "bme280": [1, 2, 10], "cabl": [1, 2, 5, 6, 8, 10], "500mm": [1, 2], "your": [1, 2, 3, 4, 6, 7, 8, 9, 10], "set": [1, 4, 6, 8, 9, 10], "up": [1, 2, 3, 4, 5, 8, 9, 10], "might": [1, 3, 10], "look": [1, 4, 5, 7, 10], "slightli": [1, 5, 10], "differ": [1, 3, 4, 5, 6, 7, 10], "than": [1, 4, 5, 10], "show": [1, 3, 5, 10], "atomospher": [1, 10], "attach": [1, 3, 4, 6, 8, 9, 10], "To": [1, 2, 3, 4, 9, 10], "open": [1, 2, 3, 4, 5, 6, 8, 9, 10], "Then": [1, 2, 4, 6, 9, 10], "enter": [1, 2, 7, 9, 10], "4cscc": [1, 2, 9, 10], "start": [1, 2, 5, 7, 9, 10], "an": [1, 5, 6, 7, 9, 10], "ipython": [1, 2, 9, 10], "final": [1, 2, 7, 10], "copi": [1, 2, 4, 8, 9, 10], "past": [1, 2, 4, 6, 8, 9, 10], "rel": 1, "read": [1, 2, 3, 4, 6, 7, 8, 9, 10], "everi": [1, 2, 4, 9, 10], "second": [1, 2, 4, 6, 9, 10], "displai": [1, 2, 3, 6, 9, 10], "them": [1, 4, 5, 10], "screen": [1, 3, 4, 5, 9, 10], "It": [1, 2, 3, 4, 5, 7, 9, 10], "until": [1, 2, 7, 9, 10], "press": [1, 2, 7, 9, 10], "control": [1, 2, 4, 9, 10], "c": [1, 2, 4, 5, 7, 8, 9, 10], "i": [1, 2, 4, 7, 8, 9, 10], "e": [1, 2, 4, 6, 7, 9, 10], "kei": [1, 2, 7, 9, 10], "same": [1, 2, 5, 6, 7, 9, 10], "time": [1, 2, 4, 5, 6, 7, 8, 9, 10], "import": [1, 2, 4, 6, 7, 8, 9, 10], "sleep": [1, 2, 4, 6, 7, 8, 9, 10], "qwiic_bme280": [1, 2], "tph_sensor": 1, "qwiicbme280": [1, 2], "print": [1, 2, 6, 7, 9, 10], "bme": 1, "280": 1, "doesn": [1, 5, 7, 10], "t": [1, 2, 3, 5, 6, 7, 9, 10], "seem": [1, 10], "connect": [1, 2, 3, 4, 5, 10], "system": [1, 10], "exit": [1, 10], "1": [1, 2, 4, 7, 8, 10], "els": [1, 2, 5, 6, 7], "discard": 1, "first": [1, 2, 4, 6, 7], "thei": [1, 7], "tend": 1, "unreli": 1, "_": [1, 2], "temperature_fahrenheit": [1, 2], "while": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "true": [1, 2, 4, 6, 7, 8, 9, 10], "p_pascal": 1, "p_atm": 1, "101325": 1, "convers": 1, "pascal": 1, "h": [1, 2, 7, 8], "f": [1, 3, 4, 6, 7, 8], "2f": [1, 2], "atm": 1, "paus": [1, 10], "next": [1, 4, 5, 6, 7, 10], "can": [2, 3, 4, 5, 6, 7, 10], "also": [2, 5, 6, 7, 8], "voc": [2, 3, 5], "pm": [2, 5], "challeng": 2, "after": [2, 3, 5, 7], "get": [2, 7, 9], "try": [2, 3, 6, 7], "send": [2, 7], "other": [2, 4, 6, 8, 9], "initi": 2, "state": 2, "access": [2, 4, 5, 6, 7, 9], "bucket": 2, "internet": [2, 3], "If": [2, 3, 4, 5, 7, 9], "haven": [2, 3], "document": [2, 10], "should": [2, 3, 4, 5, 7, 9], "see": [2, 3, 4, 5, 6, 7, 8, 9], "far": [2, 4, 9], "left": [2, 3, 4, 9], "text": [2, 6, 9], "10": [2, 6, 9], "sy": 2, "urllib": 2, "request": 2, "pars": 2, "socket": 2, "math": 2, "hostnam": 2, "gethostnam": 2, "The": [2, 3, 4, 5, 6, 7, 8, 9], "valu": [2, 3, 4, 6], "ad": [2, 7, 8], "account": 2, "http": 2, "www": 2, "initialst": 2, "com": 2, "access_kei": 2, "edit": [2, 6], "add": [2, 4, 6, 7], "api": 2, "endpoint": 2, "bucket_kei": 2, "inst_api_endpoint": 2, "groker": 2, "init": 2, "st": 2, "event": [2, 4], "accesskei": 2, "s": [2, 3, 4, 5, 6, 7], "bucketkei": 2, "def": [2, 7, 8], "report_string_inst": 2, "name": [2, 4, 7], "quot": 2, "urlopen": 2, "report_statu": 2, "quiet": 2, "fals": [2, 7, 8], "statu": 2, "report_tph_inst": 2, "p": [2, 7], "tempf": 2, "warmup_sensor": 2, "reporting_frequ": 2, "warmup_tim": 2, "return": [2, 6, 7, 9], "start_tim": 2, "current_tim": 2, "runtim": 2, "remaining_warmup_time_": 2, "remaining_warmup_time_m": 2, "ceil": 2, "60": 2, "unit": 2, "minut": [2, 3], "warm": [2, 3], "about": [2, 3, 5, 7, 9, 10], "d": [2, 3, 4, 6, 7, 8, 9, 10], "natomospher": 2, "n": [2, 7], "is_connect": 2, "devic": [2, 4], "detect": 2, "Is": 2, "file": [2, 4, 6, 7, 9], "stderr": 2, "nois": 2, "so": [2, 5, 6, 7, 8, 9], "ignor": 2, "report": 2, "except": 2, "keyboardinterrupt": 2, "systemexit": 2, "offlin": 2, "ha": [3, 4, 5, 7, 9], "through": [3, 4], "web": 3, "brower": 3, "alreadi": [3, 8, 9], "assembl": 3, "kit": 3, "illustr": 3, "unpack": 3, "suppli": [3, 7], "power": [3, 5], "click": [3, 4, 6], "globe": 3, "icon": [3, 4], "toward": 3, "top": [3, 4, 7], "right": 3, "That": [3, 5], "browser": 3, "bookmark": 3, "bar": 3, "link": [3, 6, 7], "ve": 3, "when": [3, 4, 5, 7], "current": [3, 4, 6, 7, 8], "all": [3, 4, 5, 6, 7], "ar": [3, 4, 5, 6, 7, 8, 9], "correctli": 3, "note": [3, 6, 7], "tph": [3, 5], "being": [3, 4, 5], "off": [3, 4, 6, 7], "review": 3, "made": 3, "mistak": 3, "move": 3, "ahead": 3, "particul": [3, 5, 6], "matter": [3, 5, 6], "ok": 3, "now": [3, 4, 5, 9], "re": [3, 4, 5, 7, 10], "step": [3, 8], "sens": [3, 5], "assess": 3, "indoor": 3, "qualiti": [3, 10], "take": [3, 4, 6, 7, 9], "graph": 3, "manipul": [3, 6], "machin": [3, 7], "how": [3, 4, 5, 7, 9], "chang": [3, 6], "place": [3, 5], "chip": 3, "hand": 3, "gentli": 3, "close": [3, 5, 6], "around": [3, 10], "what": [3, 4, 5, 7], "do": [3, 7], "some": [3, 5, 7], "thing": [3, 7], "experi": [3, 4, 5, 7, 10], "home": [3, 4], "classroom": 3, "test": 3, "idea": [3, 7], "abl": [3, 4], "environ": [3, 4], "rememb": 3, "handl": [3, 5], "hardwar": [3, 4, 9], "delic": 3, "equip": 3, "don": [3, 6, 7, 9], "anyth": [3, 7], "wet": 3, "too": [3, 4, 6, 9], "abov": [3, 4, 5, 7, 8], "95": 3, "mai": [3, 5, 7], "condit": 3, "could": [3, 4, 5, 7], "damag": [3, 4, 5], "like": [3, 4, 5, 7], "gener": [3, 4, 5], "build": [3, 4, 5], "requir": [3, 7], "program": [3, 6, 7, 9], "skill": 3, "hard": [3, 5], "find": [3, 4, 5], "atmospher": [3, 5], "feel": [3, 7], "free": [3, 7], "part": [3, 4, 5], "basic": [3, 9], "skip": [3, 7, 9], "advanc": 3, "section": [3, 7, 9], "particular": [3, 6, 9], "chapter": 3, "4": [3, 4, 6, 7], "5": [3, 4, 7, 9], "6": [3, 7], "good": [3, 7], "along": [3, 9], "These": [3, 4, 5, 7], "digit": [3, 5], "circuit": [3, 4, 5], "complet": [4, 5, 9], "our": [4, 7, 8, 9], "make": [4, 5, 6, 7], "One": [4, 5, 6, 7, 8], "singl": [4, 6, 7], "color": [4, 5, 6], "two": [4, 5, 9], "male": [4, 5, 6, 8, 9], "femal": [4, 5, 6, 8, 9], "m": [4, 6, 7, 8], "jumper": [4, 5, 6, 8, 9], "one": [4, 5, 6, 7, 9], "end": [4, 6, 7, 8, 9], "metal": [4, 5], "pin": [4, 5, 6, 7, 8, 9], "both": [4, 5], "turn": [4, 5, 7], "gpio": [4, 5, 6, 8], "purpos": [4, 5], "input": [4, 5, 7], "output": [4, 5, 8], "directli": 4, "conveni": 4, "label": [4, 9], "There": [4, 5], "40": [4, 5, 10], "avail": [4, 5], "commun": [4, 7], "provid": [4, 6, 8, 9, 10], "board": [4, 5, 6, 9], "plug": [4, 5, 6], "01": 4, "png": 4, "A": [4, 5, 6, 7, 9], "let": 4, "insert": [4, 6, 8, 9], "compon": [4, 6], "track": [4, 5], "hidden": 4, "beneath": 4, "surfac": 4, "much": 4, "easier": [4, 7, 8], "gnd": [4, 6, 9], "ground": 4, "anoth": [4, 6], "yellow": [4, 6, 8], "21": [4, 6, 7, 8], "column": [4, 8, 9], "row": [4, 6, 8, 9], "30": [4, 6], "j": [4, 6, 7], "flow": 4, "electr": 4, "each": [4, 5, 7, 8], "measur": [4, 6, 10], "higher": 4, "number": [4, 7], "resist": [4, 6], "protect": [4, 5], "light": [4, 7, 8], "emit": 4, "diod": 4, "draw": 4, "which": [4, 5, 7, 10], "result": 4, "even": [4, 6, 7], "pick": 4, "combin": 4, "orang": 4, "red": [4, 6, 8], "brown": 4, "gold": 4, "watch": 4, "video": 4, "leg": [4, 6], "longer": [4, 6], "anod": [4, 6, 8], "posit": [4, 6], "charg": 4, "g": [4, 6, 7], "shorter": [4, 6], "electron": 4, "languag": [4, 7], "go": [4, 6, 9], "select": [4, 6, 8], "pop": 4, "new": 4, "window": [4, 6], "messag": 4, "desktop": 4, "load": 4, "project": [4, 5], "panel": 4, "call": [4, 5, 7], "block": [4, 7], "palett": 4, "b": [4, 7], "pre": 4, "written": 4, "chunk": 4, "allow": [4, 5, 8], "center": 4, "area": 4, "space": [4, 7], "where": [4, 7], "drag": 4, "drop": 4, "form": 4, "script": [4, 6], "green": [4, 8, 9], "flag": 4, "stop": [4, 7], "sign": 4, "button": 4, "featur": [4, 7], "associ": 4, "blue": [4, 6, 8], "lower": 4, "corner": 4, "scroll": 4, "down": 4, "yield": 4, "line": [4, 6, 7, 8], "done": [4, 5, 7], "successfulli": 4, "appear": 4, "approach": 4, "shape": 4, "built": 4, "modular": 4, "circl": 4, "over": [4, 5, 7], "0": [4, 6, 7, 9, 10], "high": [4, 8], "choos": [4, 6], "small": [4, 5, 9], "arrow": 4, "low": [4, 8], "list": [4, 5], "flash": 4, "forev": 4, "wait": [4, 6, 7, 9], "below": [4, 6, 7, 9], "congrat": 4, "thonni": [4, 8], "id": [4, 8], "stand": [4, 7], "integr": 4, "intend": 4, "everyth": [4, 5], "softwar": 4, "untitl": 4, "editor": [4, 6], "bottom": [4, 7], "shell": 4, "execut": [4, 7], "gpiozero": [4, 6, 7], "librari": [4, 8, 9], "object": [4, 6, 7, 9], "help": [4, 5, 7], "within": 4, "variabl": [4, 6], "know": [4, 7], "save": [4, 6, 7], "switch": 4, "py": 4, "adjust": [4, 6], "x": [4, 7], "speed": 4, "slow": 4, "smallest": 4, "amount": 4, "still": [4, 7], "ship": [5, 7], "box": [5, 6], "plastic": 5, "tote": 5, "art": 5, "larger": 5, "item": 5, "7": [5, 7], "monitor": 5, "insid": 5, "mount": 5, "pleas": [5, 7], "heavi": 5, "keep": [5, 7], "tip": 5, "backward": 5, "teach": 5, "keyboard": 5, "notic": [5, 7], "typic": [5, 7], "becaus": [5, 7], "port": 5, "back": 5, "mous": 5, "usb": 5, "adapt": [5, 9], "bundl": 5, "togeth": 5, "wire": [5, 7, 9], "foam": 5, "cover": 5, "stai": 5, "perfectli": 5, "pack": 5, "scratch": 5, "kid": 5, "sticker": 5, "front": 5, "carboard": 5, "contain": [5, 7, 9], "silver": 5, "bag": 5, "circut": 5, "regtangular": 5, "later": 5, "put": 5, "cardboard": 5, "safe": 5, "breadboard": [5, 6, 8], "without": 5, "solder": 5, "330": [5, 6, 8], "ohm": [5, 6, 8], "resistor": [5, 8], "easi": 5, "lose": 5, "care": 5, "led": 5, "vari": 5, "pictur": 5, "here": [5, 6, 7, 9], "five": 5, "fifteen": 5, "three": [5, 6, 7, 9], "volatil": [5, 10], "organ": [5, 10], "compound": [5, 10], "On": [5, 9], "long": [5, 6, 7, 9], "dangl": 5, "side": [5, 9], "humditi": 5, "big": 5, "excit": 5, "own": 5, "interact": 5, "world": [5, 7], "outsid": 5, "confirm": 5, "come": [5, 7], "those": 5, "soon": 5, "And": [5, 7], "onc": [5, 6], "must": 5, "otherwis": [5, 7, 9], "won": 5, "accident": 5, "just": [5, 7], "unplug": 5, "tv": 5, "hdmi": 5, "disconnect": 5, "alwai": [5, 7], "possibl": 5, "sever": 5, "seri": [5, 7], "remov": [5, 7], "match": 5, "hole": 5, "shown": [5, 9], "Being": 5, "bend": 5, "firmli": 5, "push": 5, "onto": 5, "fairli": 5, "knowledg": 6, "phat": [6, 8], "By": 6, "hit": 6, "react": 6, "micron": 6, "threshold": 6, "black": [6, 8], "opposit": [6, 8], "neg": 6, "rail": 6, "throughout": 6, "sure": [6, 7], "secur": 6, "either": [6, 7, 8], "direct": 6, "grab": 6, "cathod": [6, 8], "align": 6, "ensur": [6, 7], "properli": 6, "desir": 6, "blink": [6, 7, 8], "5003": 6, "ribbon": 6, "rear": 6, "vertic": [6, 8], "23": [6, 8], "multipl": 6, "24": 6, "correspond": [6, 7], "vcc": [6, 9], "5v": [6, 9], "were": [6, 7], "26": 6, "rxd": [6, 9], "14": [6, 9], "txo": [6, 9], "27": [6, 8], "15": [6, 7, 9], "rxi": [6, 9], "tool": 6, "manag": 6, "ins": 6, "packag": 6, "search": 6, "field": 6, "pypi": 6, "updat": 6, "spam": [6, 9], "mani": [6, 7, 9], "repres": [6, 7, 8, 9], "repeat": [6, 9], "pms_read": [6, 9], "current_valu": 6, "pm_ug_per_m3": [6, 9], "piec": [6, 9], "attempt": [6, 9], "again": [6, 9], "19": [6, 8], "As": [6, 7], "reach": 6, "previou": [6, 7, 8], "size": 6, "its": 6, "smaller": 6, "particl": 6, "17": [6, 8], "string": [6, 7], "python3": 7, "exclus": 7, "seek": 7, "achiev": 7, "someth": 7, "complic": 7, "accept": 7, "user": 7, "out": [7, 8], "unfamiliar": 7, "wikipedia": 7, "articl": 7, "doe": [7, 8], "job": 7, "explain": 7, "method": 7, "charact": 7, "letter": 7, "etc": 7, "encod": 7, "short": 7, "durat": 7, "tap": 7, "beep": 7, "case": 7, "dot": 7, "dash": 7, "sequenc": 7, "entir": 7, "sentenc": 7, "wai": 7, "inde": 7, "peopl": 7, "telegraph": 7, "distanc": 7, "hundr": 7, "year": 7, "ago": 7, "phone": 7, "invent": 7, "commonplac": 7, "especi": 7, "fist": 7, "exposur": 7, "encourag": 7, "bad": 7, "struggl": 7, "welcom": 7, "plai": 7, "finish": 7, "ident": 7, "hello": 7, "guid": 7, "continu": [7, 8], "prompt": 7, "complain": 7, "support": 7, "taken": 7, "previous": 7, "comment": 7, "understand": 7, "exactli": 7, "led_pin": 7, "standard": 7, "25": [7, 8], "dictionari": 7, "map": 7, "represent": 7, "k": 7, "l": 7, "fun": 7, "fact": 7, "familiar": 7, "sai": 7, "soul": 7, "realiti": 7, "wa": [7, 9], "chosen": 7, "would": 7, "pattern": 7, "immedi": 7, "didn": 7, "o": 7, "q": 7, "r": 7, "u": 7, "v": 7, "w": 7, "y": 7, "z": 7, "specifi": 7, "rest": 7, "element": 7, "sanitize_input": 7, "user_input": 7, "uppercas": 7, "differenti": 7, "tell": 7, "sanitized_input": 7, "upper": 7, "iter": 7, "valid": 7, "empti": 7, "sanit": 7, "process_input": 7, "found": [7, 9], "__name__": 7, "__main__": 7, "loop": 7, "infinit": 7, "oper": 7, "mean": 7, "halt": 7, "type": 7, "expect": 7, "actual": 7, "fix": 7, "extenst": 7, "page": [7, 9, 10], "refer": 7, "compar": 7, "solut": 7, "mine": 7, "addit": 7, "punctuat": 7, "trail": 7, "isn": 7, "realli": 7, "problem": 7, "technic": 7, "incorrect": 7, "behavior": 7, "gap": [7, 8], "word": 7, "miss": 7, "want": 7, "mind": 7, "oppos": 7, "propos": 7, "noth": 7, "necessarili": 7, "best": 7, "great": 7, "almost": 7, "given": 7, "probem": 7, "often": 7, "outright": 7, "decid": 7, "enough": 7, "8": [7, 9], "9": 7, "origin": 7, "period": 7, "indic": 7, "last": 7, "function": 7, "determin": 7, "spaces_around": 7, "char_index": 7, "check": 7, "isspac": 7, "prior": 7, "index": [7, 10], "sinc": 7, "most": 7, "subtract": 7, "length": 7, "last_char_index": 7, "len": 7, "last_elem_index": 7, "enumer": 7, "last_char": 7, "elem_index": 7, "last_elem": 7, "non": 7, "unless": 7, "four": 8, "With": 8, "view": 8, "longest": 8, "ON": 8, "rgb": 8, "respect": 8, "complement": 8, "coordin": 8, "gather": 8, "steadi": 8, "20": 8, "bridg": 8, "22": 8, "3v": 8, "wear": 8, "3v3": 8, "rpi": 8, "disabl": 8, "warn": 8, "option": 8, "setwarn": 8, "mode": 8, "setmod": 8, "bcm": 8, "redpin": 8, "greenpin": 8, "bluepin": 8, "setup": 8, "turnoff": 8, "white": [8, 9], "purpl": 8, "lightblu": 8, "1second": 8, "pms5003": 9, "interest": 9, "inlet": 9, "fan": 9, "outlet": 9, "via": 9, "connector": 9, "identifi": 9, "txd": 9, "product": 9, "repo": 9, "modul": 9, "concentr": 10, "sit": 10, "sgp40": 10, "50mm": 10, "qwiic_sgp40": 10, "voc_sensor": 10, "qwiicsgp40": 10, "sgp": 10, "voc_index": 10, "get_voc_index": 10}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"The": 0, "four": 0, "corner": 0, "scienc": 0, "comput": [0, 5], "club": 0, "4cscc": 0, "lab": 0, "notebook": 0, "atmospher": [1, 2], "sens": [1, 2, 9, 10], "part": [1, 2, 7, 9, 10], "list": [1, 2, 7, 9, 10], "wire": [1, 2, 4, 6, 8, 10], "phat": [1, 2, 4, 5, 9, 10], "sensor": [1, 2, 3, 5, 6, 9, 10], "write": [1, 2, 4, 8], "python": [1, 2, 4, 6, 7, 8, 9, 10], "3": [1, 2, 4, 6, 7, 8, 9, 10], "program": [1, 2, 4, 8], "post": [2, 3], "data": [2, 5, 6], "an": [2, 3, 4], "onlin": [2, 3], "dashboard": [2, 3, 5], "output": 2, "us": [3, 5], "built": [3, 5], "access": 3, "get": [3, 4, 6, 8], "start": [3, 4, 6, 8], "blink": 4, "led": [4, 6, 7, 8], "from": [4, 5], "scratch": 4, "assembl": [4, 5, 9], "breadboard": [4, 9], "ad": [4, 6], "330": 4, "ohm": 4, "resistor": [4, 6], "power": [4, 6], "system": 4, "reflect": 4, "unpack": 5, "your": 5, "suppli": 5, "kit": 5, "raspberri": 5, "pi": 5, "400": 5, "instal": [5, 6], "read": 5, "pm": [6, 9], "exercis": 6, "introduct": [6, 9], "For": 6, "thi": 6, "you": 6, "ll": 6, "need": 6, "setup": [6, 7], "1": [6, 9], "connect": [6, 8, 9], "hardwar": 6, "2": [6, 9], "test": 6, "thonni": 6, "id": 6, "5": 6, "ground": 6, "transmit": 6, "receiv": 6, "pre": 6, "6": 6, "pms5003": 6, "librari": 6, "activ": 6, "7": 6, "build": 6, "run": 6, "our": 6, "code": [6, 7, 9, 10], "8": 6, "expand": 6, "learn": 6, "final": [6, 8, 9], "diagram": [6, 8, 9], "mors": 7, "basic": 7, "implement": 7, "challeng": 7, "extend": 7, "easi": 7, "intermedi": 7, "difficult": 7, "complet": 7, "multi": 8, "color": 8, "particul": 9, "matter": 9, "assess": 9, "indoor": 9, "air": 9, "qualiti": 9, "1a": 9, "cabl": 9, "1b": 9, "4": 9, "voc": 10}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})