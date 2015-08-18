# -*- coding: utf-8 -*-

# Scrapy settings for miner project
#
# For simplicity, this file contains only the most important settings by
# default. All the other settings are documented here:
#
# http://doc.scrapy.org/en/latest/topics/settings.html
#
import os

BOT_NAME = 'miner'

SPIDER_MODULES = ['miner.spiders']
NEWSPIDER_MODULE = 'miner.spiders'
ITEM_PIPELINES = {'miner.pipelines.ValidationPipeline': 100, 'miner.pipelines.PostRequestPipeline': 200}
LOG_STDOUT = True

try:
    directory = os.environ['OPENSHIFT_DATA_DIR']
except KeyError:
    directory = 'data'
    if not os.path.exists(directory):
        os.makedirs(directory)

LOG_FILE = os.path.join(directory, 'scrapy_output.txt')

# Crawl responsibly by identifying yourself (and your website) on the user-agent
#USER_AGENT = 'miner (+http://www.yourdomain.com)'