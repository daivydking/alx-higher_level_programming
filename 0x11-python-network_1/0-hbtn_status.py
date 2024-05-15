#!/usr/bin/python3
import urlib.request
with urlib.request.urlopen('https://alx-intranet.hbtn.io/status') as response:
    html = response.read()
