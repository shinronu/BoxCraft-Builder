import os
from flask import Flask, request
from flask.ext.restless import APIManager
from flask.ext.sqlalchemy import SQLAlchemy

__author__ = 'darryl'


def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    if request.method == 'OPTIONS':
        response.headers['Access-Control-Allow-Methods'] = 'DELETE, GET, POST, PUT'
        headers = request.headers.get('Access-Control-Request-Headers')
        if headers:
            response.headers['Access-Control-Allow-Headers'] = headers
    return response


app = Flask(__name__)

try:
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['OPENSHIFT_POSTGRESQL_DB_URL']
except KeyError:
    basedir = os.path.abspath(os.path.dirname(__file__))
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'test.db')

app.after_request(add_cors_headers)


@app.route('/')
@app.route('/index.html')
def index():
    return app.send_static_file('index.html'), 200


@app.route('/bower_components/<path:path>')
def libs(path):
    return app.send_static_file(os.path.join('bower_components', path).replace('\\', '/')), 200


@app.route('/css/<path:path>')
def presentation(path):
    return app.send_static_file(os.path.join('css', path).replace('\\', '/')), 200


@app.route('/app/<path:path>')
def logic(path):
    return app.send_static_file(os.path.join('app', path).replace('\\', '/')), 200


@app.route('/partials/<path:path>')
def partials(path):
    return app.send_static_file(os.path.join('partials', path).replace('\\', '/')), 200


@app.route('/images/<path:path>')
def images(path):
    return app.send_static_file(os.path.join('images', path).replace('\\', '/')), 200

db = SQLAlchemy(app)
manager = APIManager(app, flask_sqlalchemy_db=db)

from app.models.models import Motherboard, Gpu, Cpu, Memory, Psu, Hdd, Case, Configs
from app.views.views import manager

db.create_all()