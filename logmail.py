#!/usr/bin/env python
from datetime import datetime
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import os
import smtplib

__author__ = 'darryl'

from_addr = "d.amatsetam@gmail.com"
to_addr = "d.amatsetam@gmail.com"
msg = MIMEMultipart()
msg['Subject'] = 'Scrapy log at %s' % datetime.now()
msg['From'] = "BoxCraft on OpenShift"
msg['To'] = "Darryl Amatsetam"

try:
    directory = os.environ['OPENSHIFT_DATA_DIR']
except KeyError:
    directory = os.path.join('miner', 'data')

fopen = 'scrapy_output.txt'
full_path = os.path.join(directory, fopen)

with open(full_path) as f:
    attachment = MIMEText(f.read())
    msg.attach(attachment)
    attachment.add_header("Content-Disposition", "attachment", filename=fopen)

username = os.environ['GMAILADDR']
password = os.environ['GMAILPASS']

server = smtplib.SMTP('smtp.gmail.com:587')
server.starttls()
server.login(username, password)
server.sendmail(from_addr, to_addr, msg.as_string())
server.quit()