#!/bin/bash
cd $OPENSHIFT_REPO_DIR/miner
scrapy crawl alternate
cd $OPENSHIFT_REPO_DIR
# python logmail.py
rm $OPENSHIFT_DATA_DIR/scrapy_output.txt